import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { gold, makeHero, makeWorld, sharedResources } from "./models.js";
import { islandResources, makeTimberIslands } from "./timber-islands.js";

const views = [
  { eye: [8.2, 7.2, 10.9], target: 1.03 },
  { eye: [8.9, 6.6, 11.4], target: 1.63 },
  { eye: [11.5, 12.5, 15.2], target: -0.38 },
  { eye: [8.8, 9.8, 10.7], target: 0.52 },
];
const heroView = { eye: [7.9, 6.6, 11.3], target: 0.75 };
const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)");
const times = {
  dawn: [0xffd4b0, 0x7e93c2, 2.25, 1.65, 0.48],
  day: [0xffeed1, 0x99c9e2, 3.3, 2.2, 0.08],
  dusk: [0xffaa6c, 0x8c9bd5, 2.55, 1.36, 0.65],
  night: [0xa4b6ff, 0xa5b8eb, 1.14, 1.22, 1],
};

function haloTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = 96;
  const context = canvas.getContext("2d");
  const gradient = context.createRadialGradient(48, 48, 0, 48, 48, 48);
  gradient.addColorStop(0, "rgba(255,255,255,1)");
  gradient.addColorStop(0.35, "rgba(255,255,255,.5)");
  gradient.addColorStop(1, "rgba(255,255,255,0)");
  context.fillStyle = gradient;
  context.fillRect(0, 0, 96, 96);
  return new THREE.CanvasTexture(canvas);
}

function atmosphere(scene) {
  const geometry = new THREE.BufferGeometry();
  const points = [];
  for (let i = 0; i < 270; i++) {
    const angle = i * 2.39996;
    const radius = 5 + ((i * 17) % 111) / 7;
    points.push(
      Math.cos(angle) * radius,
      ((i * 43) % 101) / 10 - 4,
      Math.sin(angle) * radius,
    );
  }
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(points, 3),
  );
  scene.add(
    new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        color: 0xffdfac,
        size: 0.031,
        transparent: true,
        opacity: 0.58,
      }),
    ),
  );
}

function disposeObjects(group) {
  const resources = new Set();
  group.traverse((object) => {
    if (object.geometry) resources.add(object.geometry);
    if (object.material) resources.add(object.material);
  });
  resources.forEach((resource) => {
    if (!sharedResources.has(resource) && !islandResources.has(resource))
      resource.dispose();
  });
}

export function mountStage(
  canvas,
  { pillars, onPillar, onUnavailable, onDelivery, onLabels, onHover } = {},
) {
  const hero = !pillars;
  const gl = canvas.getContext("webgl2", {
    alpha: true,
    antialias: true,
    premultipliedAlpha: true,
  });
  if (!gl) return null;

  const renderer = new THREE.WebGLRenderer({
    canvas,
    context: gl,
    alpha: true,
    antialias: true,
  });
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
  renderer.setClearColor(0x000000, 0);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.42;
  renderer.transmissionResolutionScale = 0.7;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFShadowMap;

  const environmentRoom = new RoomEnvironment();
  const reflections = new THREE.PMREMGenerator(renderer);
  const environment = reflections.fromScene(environmentRoom, 0.015, 0.1, 70, {
    size: 128,
  });
  reflections.dispose();
  environmentRoom.dispose();

  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x171f3a, 0.034);
  const ambient = new THREE.HemisphereLight(0xc8d8ff, 0x2c2542, 1.85);
  scene.add(ambient);
  const key = new THREE.DirectionalLight(0xffd5a0, 3.25);
  key.position.set(-6, 9, 4);
  key.castShadow = true;
  key.shadow.mapSize.set(1024, 1024);
  Object.assign(key.shadow.camera, {
    left: -7,
    right: 7,
    top: 7,
    bottom: -7,
    far: 30,
  });
  key.shadow.normalBias = 0.025;
  scene.add(key);
  const rim = new THREE.DirectionalLight(0x789cff, 2.8);
  rim.position.set(3, 5, -7);
  scene.add(rim);
  atmosphere(scene);

  const halo = haloTexture();
  function mist(color, opacity, width, height) {
    const material = new THREE.SpriteMaterial({
      color,
      map: halo,
      opacity,
      transparent: true,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
    });
    const sprite = new THREE.Sprite(material);
    sprite.scale.set(width, height, 1);
    return sprite;
  }
  const horizon = mist(gold, 0.22, 10.5, 5.1);
  horizon.position.set(-6, 2.9, -4);
  scene.add(horizon);

  const camera = new THREE.PerspectiveCamera(hero ? 42 : 40, 1, 0.1, 75);
  const controls = hero ? null : new OrbitControls(camera, canvas);
  if (controls) {
    controls.enablePan = false;
    controls.minDistance = 8;
    controls.maxDistance = 29;
    controls.minPolarAngle = 0.04;
    controls.maxPolarAngle = Math.PI * 0.49;
    controls.autoRotateSpeed = 0.62;
  }

  let model;
  let selected = 0;
  let auto = !reducedMotion.matches;
  let mode = 0;
  let flat = false;
  let frame = 0;
  let shown = false;
  let disposed = false;
  let start = performance.now();
  let last = start;
  const readProgress = () =>
    hero
      ? 0.44
      : pillars.reduce(
          (sum, pillar) => sum + pillar.checked.filter(Boolean).length,
          0,
        ) / 64;
  let targetProgress = readProgress();
  let shownProgress = targetProgress;
  let crystal;
  let aura;
  let timeOfDay = "night";
  let night = 1;
  let focus;

  function applyLighting() {
    if (mode === 2) {
      const [sun, sky, direct, diffuse, lamps] = times[timeOfDay];
      key.color.setHex(sun);
      ambient.color.setHex(sky);
      key.intensity = direct;
      ambient.intensity = diffuse;
      rim.intensity = 0.95;
      night = lamps;
      model.setTime?.(timeOfDay);
      key.position.set(
        timeOfDay === "dusk" ? 8 : -6,
        timeOfDay === "day" ? 10 : 5,
        4,
      );
    } else {
      key.color.setHex(0xffd5a0);
      ambient.color.setHex(0xc8d8ff);
      key.intensity = 3.25;
      ambient.intensity = 1.85;
      rim.intensity = 2.8;
      key.position.set(-6, 9, 4);
    }
  }

  function setView() {
    const view = hero ? heroView : views[mode];
    camera.position.set(...view.eye);
    if (flat) camera.position.set(0.01, 15, 0.01);
    if (controls) {
      controls.target.set(0, flat ? 0 : view.target, 0);
      controls.update();
    } else camera.lookAt(0, view.target, 0);
  }

  function replay() {
    start = performance.now();
    requestRender();
  }

  function buildModel() {
    if (model) {
      scene.remove(model.root);
      disposeObjects(model.root);
    }
    model = hero
      ? makeHero()
      : mode === 2
        ? makeTimberIslands(pillars, mist, onDelivery)
        : makeWorld(mode, pillars, flat);
    const mount = model.pieces.find((part) => part.userData.crystal);
    crystal = mount?.userData.crystal;
    if (crystal && mount) {
      crystal.setEnvironment(environment.texture);
      aura = mist(0x679dff, 0, 1, 1);
      aura.position.y = crystal.group.position.y + 0.05;
      aura.material.depthTest = false;
      mount.add(aura);
    }
    model.highlight?.(selected);
    scene.add(model.root);
    horizon.visible = hero || mode === 0;
  }

  function setMode(nextMode, nextFlat = false) {
    mode = nextMode;
    flat = nextFlat;
    focus = undefined;
    onHover?.(-1);
    onDelivery?.("");
    buildModel();
    applyLighting();
    setView();
    replay();
  }

  function requestRender() {
    if (shown && !disposed && !frame) frame = requestAnimationFrame(render);
  }

  function render(now) {
    frame = 0;
    if (!shown || disposed) return;
    const elapsed = (now - start) / 1000;
    const motion = !reducedMotion.matches;
    const delta = Math.min(0.06, (now - last) / 1000);
    last = now;
    shownProgress = motion
      ? THREE.MathUtils.damp(shownProgress, targetProgress, 8, delta)
      : targetProgress;
    if (Math.abs(shownProgress - targetProgress) < 0.0001)
      shownProgress = targetProgress;
    if (crystal) {
      crystal.setProgress(shownProgress);
      aura.material.opacity = 0.05 + shownProgress * 0.46;
      const width = (1.35 + shownProgress * 1.7) * (flat ? 0.48 : 1);
      aura.scale.set(width, width * 1.35, 1);
    }
    for (const object of model.pieces) {
      const { delay, height } = object.userData;
      const t = motion
        ? THREE.MathUtils.clamp((elapsed - delay) / (hero ? 1.6 : 0.86), 0, 1)
        : 1;
      const rise = 1 - Math.pow(1 - t, 3);
      object.visible = rise > 0.01;
      object.scale.y = Math.max(0.005, rise);
      object.position.y = height - (1 - rise) * 0.58;
    }
    if (hero && motion) model.root.rotation.y += delta * 0.14;
    model.tick?.(now / 1000, delta, night, motion);
    if (controls) {
      if (focus) {
        const blend = motion ? 1 - Math.exp(-delta * 8) : 1;
        camera.position.lerp(focus.eye, blend);
        controls.target.lerp(focus.target, blend);
        if (
          camera.position.distanceToSquared(focus.eye) < 0.0001 &&
          controls.target.distanceToSquared(focus.target) < 0.0001
        )
          focus = undefined;
      }
      controls.autoRotate = auto && motion && !flat && !focus;
      controls.update(delta);
    }
    renderer.render(scene, camera);
    if (model.labelPoints && onLabels) {
      onLabels(
        model.labelPoints.map((anchor) => {
          const p = anchor.clone().project(camera);
          return [(p.x + 1) * 50, (1 - p.y) * 50, p.z >= -1 && p.z <= 1];
        }),
      );
    }
    if (
      motion &&
      (hero ||
        controls?.autoRotate ||
        mode === 2 ||
        focus ||
        elapsed < 2.6 ||
        shownProgress !== targetProgress)
    )
      requestRender();
  }

  function resize() {
    const { clientWidth: width, clientHeight: height } = canvas;
    if (!width || !height) return;
    camera.aspect = width / height;
    camera.zoom = Math.min(1, camera.aspect / (hero ? 0.96 : 1.1));
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    requestRender();
  }

  const resizeObserver = new ResizeObserver(resize);
  const intersection = new IntersectionObserver(([entry]) => {
    shown = entry.isIntersecting;
    requestRender();
  });
  resizeObserver.observe(canvas);
  intersection.observe(canvas);
  controls?.addEventListener("change", requestRender);
  controls?.addEventListener("start", () => {
    focus = undefined;
  });
  reducedMotion.addEventListener("change", requestRender);

  let pointer;
  const raycaster = new THREE.Raycaster();
  raycaster.params.Line.threshold = 0.1;
  function down(event) {
    pointer =
      event.isPrimary && event.button === 0
        ? [event.clientX, event.clientY]
        : null;
  }
  function hitPillar(event) {
    const rect = canvas.getBoundingClientRect();
    raycaster.setFromCamera(
      new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        1 - ((event.clientY - rect.top) / rect.height) * 2,
      ),
      camera,
    );
    const hits = model.pickables
      ? raycaster.intersectObjects(model.pickables)
      : raycaster.intersectObject(model.root);
    for (const hit of hits) {
      for (let object = hit.object; object; object = object.parent) {
        if (object.visible && Number.isInteger(object.userData.pillar)) {
          return object.userData.pillar;
        }
      }
    }
    return -1;
  }
  function up(event) {
    if (
      !pointer ||
      Math.hypot(event.clientX - pointer[0], event.clientY - pointer[1]) > 6
    )
      return;
    const index = hitPillar(event);
    if (index >= 0) onPillar(index);
  }
  function hover(event) {
    if (mode === 2 && !event.buttons && event.pointerType !== "touch") {
      onHover?.(hitPillar(event));
    }
  }
  function leave() {
    onHover?.(-1);
  }
  function lost(event) {
    event.preventDefault();
    dispose();
    onUnavailable?.();
  }
  if (onPillar) {
    canvas.addEventListener("pointerdown", down);
    canvas.addEventListener("pointerup", up);
    canvas.addEventListener("pointermove", hover);
    canvas.addEventListener("pointerleave", leave);
  }
  canvas.addEventListener("webglcontextlost", lost);

  function dispose() {
    if (disposed) return;
    disposed = true;
    cancelAnimationFrame(frame);
    resizeObserver.disconnect();
    intersection.disconnect();
    reducedMotion.removeEventListener("change", requestRender);
    canvas.removeEventListener("pointerdown", down);
    canvas.removeEventListener("pointerup", up);
    canvas.removeEventListener("pointermove", hover);
    canvas.removeEventListener("pointerleave", leave);
    canvas.removeEventListener("webglcontextlost", lost);
    controls?.dispose();
    disposeObjects(scene);
    halo.dispose();
    environment.dispose();
    key.shadow.dispose();
    renderer.dispose();
    renderer.forceContextLoss();
  }

  setMode(hero ? 0 : 2);
  resize();
  return {
    setMode,
    replay,
    dispose,
    refreshProgress(change) {
      targetProgress = readProgress();
      if (model.refresh) model.refresh(change, !reducedMotion.matches);
      else buildModel();
      requestRender();
    },
    setTime(value) {
      if (!Object.hasOwn(times, value)) return;
      timeOfDay = value;
      applyLighting();
      requestRender();
    },
    focusIsland(index) {
      if (mode !== 2 || !controls) return;
      const view = views[2];
      const point = model.centers[index];
      const target = point
        ? point.clone().multiplyScalar(0.53).setY(0.18)
        : new THREE.Vector3(0, view.target, 0);
      const eye = point
        ? target.clone().add(new THREE.Vector3(6.8, 7.8, 8.5))
        : new THREE.Vector3(...view.eye);
      focus = { eye, target };
      requestRender();
    },
    setAuto(value) {
      auto = value;
      requestRender();
    },
    select(index) {
      selected = index;
      model.highlight?.(index);
      requestRender();
    },
  };
}
