import * as THREE from "three";
import { createCrystal } from "./crystal.js";

export const gold = 0xffce86;
const tau = Math.PI * 2;
const polar = (r, a, y = 0) =>
  new THREE.Vector3(r * Math.cos(a), y, r * Math.sin(a));
const stone = (color, options = {}) =>
  new THREE.MeshStandardMaterial({ color, roughness: 0.66, ...options });
const glow = (color) =>
  new THREE.MeshBasicMaterial({ color, toneMapped: false });
const base = stone(0x243454);
const brass = stone(0xd6a361, { metalness: 0.54, roughness: 0.28 });
const glass = new THREE.MeshPhysicalMaterial({
  color: 0x829fe5,
  roughness: 0.17,
  metalness: 0.32,
  clearcoat: 1,
});
const goldLight = glow(gold);
const cube = new THREE.BoxGeometry();
const beacon = new THREE.IcosahedronGeometry(1, 0);

function mesh(parent, geometry, material, position, size, shadow = true) {
  const object = new THREE.Mesh(geometry, material);
  object.position.copy(position);
  object.scale.set(...size);
  object.castShadow = shadow;
  object.receiveShadow = shadow;
  parent.add(object);
  return object;
}

function cylinder(parent, top, bottom, height, sides, position, material) {
  return mesh(
    parent,
    new THREE.CylinderGeometry(top, bottom, height, sides),
    material,
    position,
    [1, 1, 1],
  );
}

function line(parent, points, color, opacity = 1, loop = false) {
  const Shape = loop ? THREE.LineLoop : THREE.Line;
  const material = new THREE.LineBasicMaterial({
    color,
    transparent: opacity < 1,
    opacity,
  });
  parent.add(
    new Shape(new THREE.BufferGeometry().setFromPoints(points), material),
  );
}

function ring(
  parent,
  radius,
  height,
  color = gold,
  opacity = 0.38,
  steps = 96,
) {
  line(
    parent,
    Array.from({ length: steps }, (_, i) =>
      polar(radius, (tau * i) / steps, height),
    ),
    color,
    opacity,
    true,
  );
}

function goal(parent, y, size, compact = false) {
  const crystal = createCrystal(size, compact);
  crystal.group.position.y = y;
  parent.add(crystal.group);
  parent.userData.crystal = crystal;
}

function piece(parent, pieces, position, delay, pillar) {
  const group = new THREE.Group();
  group.position.copy(position);
  group.userData.pillar = pillar;
  group.userData.delay = delay;
  group.userData.height = position.y;
  parent.add(group);
  pieces.push(group);
  return group;
}

function action(parent, p, checked, material, size = 0.09) {
  const lightSize = checked ? size * 1.15 : size;
  mesh(
    parent,
    beacon,
    checked ? goldLight : material,
    p,
    [lightSize, lightSize, lightSize],
    false,
  );
  if (checked) ringAt(parent, p, size * 1.85);
}

function ringAt(parent, point, radius) {
  line(
    parent,
    Array.from({ length: 18 }, (_, i) =>
      polar(radius, (tau * i) / 18).add(point),
    ),
    gold,
    0.7,
    true,
  );
}

function mountain(root, pieces, pillars, lights) {
  const radius = 5.45;
  const surface = (r, a) => {
    const t = 1 - r / radius;
    const ridge = Math.pow(0.5 + 0.5 * Math.cos(a * 8), 2);
    return (
      -0.2 +
      3.45 * Math.pow(t, 1.65) +
      t *
        (1 - t) *
        (1.65 * ridge +
          0.46 * Math.sin(r * 8 + a * 9) +
          0.24 * Math.cos(a * 17 - r * 4))
    );
  };
  const sectors = 112;
  const steps = 28;
  const geometry = new THREE.BufferGeometry();
  const vertices = [],
    colors = [],
    indices = [];
  const rock = new THREE.Color(0x152742);
  const snow = new THREE.Color(0xb9b3c4);
  for (let row = 0; row <= steps; row++) {
    const r = (radius * row) / steps;
    for (let i = 0; i <= sectors; i++) {
      const a = (i * tau) / sectors;
      const y = surface(r, a);
      const p = polar(r, a, y);
      vertices.push(...p);
      const tint = rock.clone().lerp(snow, Math.pow(Math.max(0, y) / 3.3, 1.9));
      tint.multiplyScalar(0.85 + 0.15 * Math.sin(row * 2.3 + i * 1.7));
      colors.push(tint.r, tint.g, tint.b);
      if (row && i) {
        const end = row * (sectors + 1) + i;
        indices.push(
          end - sectors - 2,
          end - sectors - 1,
          end,
          end - sectors - 2,
          end,
          end - 1,
        );
      }
    }
  }
  geometry.setIndex(indices);
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3),
  );
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  geometry.computeVertexNormals();
  const land = piece(root, pieces, new THREE.Vector3(), 0);
  mesh(
    land,
    geometry,
    stone(0xffffff, {
      vertexColors: true,
      flatShading: true,
      side: THREE.DoubleSide,
    }),
    new THREE.Vector3(),
    [1, 1, 1],
  );
  cylinder(
    land,
    radius,
    radius * 0.95,
    0.2,
    96,
    new THREE.Vector3(0, -0.31, 0),
    base,
  );
  for (let level = 1; level <= 13; level++) {
    const r = (level * radius) / 14;
    line(
      land,
      Array.from({ length: sectors }, (_, i) => {
        const a = (i * tau) / sectors;
        return polar(r, a, surface(r, a) + 0.035);
      }),
      0x9eafcd,
      level % 3 === 0 ? 0.27 : 0.13,
      true,
    );
  }
  pillars.forEach((pillar, i) => {
    const a = (i * tau) / 8;
    const ridge = piece(root, pieces, new THREE.Vector3(), 0.2 + i * 0.055, i);
    const route = Array.from({ length: 44 }, (_, j) => {
      const r = 0.22 + (j * 4.94) / 43;
      return polar(r, a, surface(r, a) + 0.085);
    });
    const routeLine = new THREE.Line(
      new THREE.BufferGeometry().setFromPoints(route),
      lights[i].line,
    );
    ridge.add(routeLine);
    pillar.checked.forEach((checked, j) => {
      const r = 5.15 - j * 0.6;
      action(
        ridge,
        polar(r, a, surface(r, a) + 0.13),
        checked,
        lights[i].dot,
        0.094,
      );
    });
  });
  goal(piece(root, pieces, new THREE.Vector3(), 0.72), 4.04, 0.49);
}

function colonnade(root, pieces, pillars, lights) {
  const platform = piece(root, pieces, new THREE.Vector3(), 0);
  cylinder(platform, 4.9, 5.05, 0.28, 48, new THREE.Vector3(0, -0.29, 0), base);
  cylinder(
    platform,
    4.88,
    4.88,
    0.035,
    48,
    new THREE.Vector3(0, -0.13, 0),
    brass,
  );
  ring(platform, 4.66, -0.1);
  ring(platform, 2.02, -0.1, 0x819acc);
  pillars.forEach((pillar, i) => {
    const a = (i * tau) / 8;
    const p = polar(3.26, a);
    const plinth = piece(root, pieces, p, 0.12 + i * 0.06, i);
    plinth.rotation.y = -a;
    mesh(plinth, cube, base, new THREE.Vector3(0, 0.09, 0), [1.26, 0.28, 1.14]);
    pillar.checked.forEach((checked, j) => {
      const block = piece(
        plinth,
        pieces,
        new THREE.Vector3(0, 0.31 + j * 0.325, 0),
        j * 0.052,
        i,
      );
      mesh(
        block,
        cube,
        j % 3 === 2 ? glass : base,
        new THREE.Vector3(),
        [0.79, 0.295, 0.77],
      );
      mesh(
        block,
        cube,
        checked ? goldLight : brass,
        new THREE.Vector3(0, 0.129, 0),
        [0.81, 0.021, 0.79],
        false,
      );
      action(
        block,
        new THREE.Vector3(0.425, 0, 0),
        checked,
        lights[i].dot,
        0.064,
      );
    });
    mesh(
      plinth,
      cube,
      brass,
      new THREE.Vector3(0, 2.95, 0),
      [1.03, 0.16, 1.03],
    );
  });
  const roof = piece(root, pieces, new THREE.Vector3(), 0.86);
  cylinder(roof, 3.94, 4.13, 0.27, 8, new THREE.Vector3(0, 3.15, 0), glass);
  ring(roof, 3.98, 3.28, gold, 0.8, 8);
  cylinder(roof, 1.25, 1.48, 0.24, 8, new THREE.Vector3(0, 3.39, 0), base);
  goal(roof, 4.36, 0.53);
}

const offsets = [
  [-1, -1],
  [0, -1],
  [1, -1],
  [-1, 0],
  [1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
];

function mandala(root, pieces, pillars, lights, flat) {
  const frame = piece(root, pieces, new THREE.Vector3(), 0);
  mesh(frame, cube, base, new THREE.Vector3(0, -0.28, 0), [8.85, 0.43, 8.85]);
  const corners = [
    [-4.42, -4.42],
    [4.42, -4.42],
    [4.42, 4.42],
    [-4.42, 4.42],
  ];
  line(
    frame,
    corners.map(([x, z]) => new THREE.Vector3(x, -0.038, z)),
    gold,
    0.55,
    true,
  );
  const cell = (parent, x, z, height, material) => {
    mesh(parent, cube, material, new THREE.Vector3(x, height / 2, z), [
      0.84,
      height,
      0.84,
    ]);
  };
  offsets.forEach(([x, z], i) => {
    const branch = piece(
      root,
      pieces,
      new THREE.Vector3(x * 2.95, 0, z * 2.95),
      0.2 + i * 0.055,
      i,
    );
    const height = flat ? 0.13 : 0.74 + (i % 3) * 0.28;
    cell(branch, 0, 0, height, glass);
    mesh(
      branch,
      cube,
      lights[i].dot,
      new THREE.Vector3(0, height + 0.012, 0),
      [0.47, 0.023, 0.47],
      false,
    );
    offsets.forEach(([u, v], j) => {
      const checked = pillars[i].checked[j];
      const h = flat ? 0.12 : 0.16 + (j % 3) * 0.13;
      cell(branch, u * 0.91, v * 0.91, h, checked ? brass : base);
      action(
        branch,
        new THREE.Vector3(u * 0.91, h + 0.11, v * 0.91),
        checked,
        lights[i].dot,
        0.073,
      );
    });
    // The middle 3×3 is the same goal-and-pillars overview as the table.
    cell(frame, x * 0.91, z * 0.91, flat ? 0.13 : 0.68, glass);
  });
  const center = piece(root, pieces, new THREE.Vector3(), 0.74);
  cell(center, 0, 0, flat ? 0.15 : 1.86, brass);
  if (flat) goal(center, 0.31, 0.15, true);
  else goal(center, 2.52, 0.39);
}

export function makeWorld(mode, pillars, flat) {
  const root = new THREE.Group();
  const pieces = [];
  const lights = pillars.map(() => ({
    dot: glow(gold),
    line:
      mode === 0
        ? new THREE.LineBasicMaterial({
            color: gold,
            transparent: true,
            opacity: 0.64,
          })
        : null,
  }));
  const builders = [mountain, colonnade];
  if (mode === 3) mandala(root, pieces, pillars, lights, flat);
  else builders[mode](root, pieces, pillars, lights);
  return {
    root,
    pieces,
    highlight(index) {
      lights.forEach(({ dot, line }, i) => {
        dot.color.setHex(i === index ? 0xc7e8ff : 0x6684b4);
        if (line) {
          const hasProgress = pillars[i].checked.some(Boolean);
          line.color.setHex(
            i === index ? 0xaad7ff : hasProgress ? 0xc8a46d : 0x5b79af,
          );
          line.opacity = i === index ? 0.96 : hasProgress ? 0.64 : 0.45;
        }
      });
    },
  };
}

function hopeTorch(parent, mist) {
  const torch = new THREE.Group();
  torch.position.y = 0.22;
  parent.add(torch);
  const bronze = stone(0x8b502f, { metalness: 0.25, roughness: 0.41 });
  const goldRim = stone(0xe0a96d, { metalness: 0.33, roughness: 0.34 });
  const charcoal = stone(0x392821);
  const ash = stone(0x20181a);
  const vessel = (top, bottom, height, y, material, sides = 12) =>
    cylinder(
      torch,
      top,
      bottom,
      height,
      sides,
      new THREE.Vector3(0, y, 0),
      material,
    );

  vessel(0.94, 1.09, 0.18, 0.08, base, 8);
  vessel(0.69, 0.85, 0.16, 0.25, bronze, 8);
  vessel(0.5, 0.65, 0.59, 0.62, brass, 8);
  vessel(0.69, 0.49, 0.19, 1.01, bronze, 8);
  vessel(1.0, 0.63, 0.42, 1.28, bronze);
  vessel(1.01, 0.97, 0.078, 1.5, goldRim);
  vessel(0.85, 0.78, 0.048, 1.545, ash);
  for (let i = 0; i < 5; i++) {
    const a = (i * tau) / 5;
    const stick = vessel(0.1, 0.135, 0.85, 1.59, charcoal, 6);
    stick.rotation.set(Math.PI / 2, 0, a, "ZYX");
    stick.position.add(polar(0.22, a));
  }

  const glowMaterial = new THREE.ShaderMaterial({
    uniforms: {
      time: { value: 0 },
      inner: { value: new THREE.Color(0xfff5b0) },
      middle: { value: new THREE.Color(0xffac49) },
      edge: { value: new THREE.Color(0xee5f29) },
    },
    vertexShader: `
      uniform float time;
      varying vec3 flamePosition;
      varying vec3 flameNormal;
      varying vec3 viewDirection;
      void main() {
        flamePosition = position;
        float height = position.y;
        vec3 bent = position;
        bent.x += height * height * (0.12 + 0.12 * sin(time * 3.1 + height * 6.0));
        bent.z += height * height * 0.1 * cos(time * 2.4 + height * 5.0);
        vec4 view = modelViewMatrix * vec4(bent, 1.0);
        flameNormal = normalize(normalMatrix * normal);
        viewDirection = -view.xyz;
        gl_Position = projectionMatrix * view;
      }
    `,
    fragmentShader: `
      uniform vec3 inner;
      uniform vec3 middle;
      uniform vec3 edge;
      varying vec3 flamePosition;
      varying vec3 flameNormal;
      varying vec3 viewDirection;
      void main() {
        float height = clamp(flamePosition.y, 0.0, 1.0);
        float facing = clamp(dot(normalize(flameNormal), normalize(viewDirection)), 0.0, 1.0);
        vec3 warm = mix(middle, edge, smoothstep(0.36, 1.0, height));
        vec3 heat = mix(warm, inner, facing * (1.0 - smoothstep(0.15, 0.78, height)));
        gl_FragColor = vec4(heat, 1.0);
        #include <colorspace_fragment>
      }
    `,
  });
  const profile = new THREE.LatheGeometry(
    [
      [0.08, 0],
      [0.33, 0.095],
      [0.42, 0.23],
      [0.36, 0.43],
      [0.24, 0.62],
      [0.11, 0.84],
      [0, 1],
    ].map(([radius, y]) => new THREE.Vector2(radius, y)),
    20,
  );
  const main = mesh(
    torch,
    profile,
    glowMaterial,
    new THREE.Vector3(0, 1.6, 0),
    [1.44, 1.86, 1.44],
    false,
  );
  const tongues = [
    [-0.28, -0.13, -0.31, 1.2],
    [0.33, 0.11, 0.38, 1.13],
    [-0.1, 0.33, 0.17, 0.86],
  ].map(([x, z, lean, height]) => {
    const tongue = mesh(
      torch,
      profile,
      glowMaterial,
      new THREE.Vector3(x, 1.57, z),
      [0.82, height, 0.82],
      false,
    );
    tongue.rotation.z = lean;
    return tongue;
  });
  const halo = mist(0xff8238, 0.34, 5.8, 5.1);
  halo.position.y = 2.3;
  torch.add(halo);
  const light = new THREE.PointLight(0xff8a3c, 24, 8);
  light.position.y = 2.35;
  torch.add(light);
  const embers = Array.from({ length: 15 }, () =>
    mesh(
      torch,
      beacon,
      goldLight,
      new THREE.Vector3(),
      [0.034, 0.034, 0.034],
      false,
    ),
  );
  return (elapsed, motion) => {
    const time = motion ? elapsed : 0;
    glowMaterial.uniforms.time.value = time;
    main.scale.y = 1.86 + Math.sin(time * 6) * 0.09;
    tongues.forEach((tongue, i) => {
      tongue.rotation.y = time * 0.46 + i * 1.9;
    });
    light.intensity = 24 + Math.sin(time * 7.2) * 2;
    embers.forEach((ember, i) => {
      const age = (time * (0.34 + (i % 3) * 0.08) + i * 0.39) % 1;
      ember.position.copy(
        polar(0.16 + age * 0.73, i * 2.39 + age * 0.7, 2.08 + age * 2.18),
      );
      ember.scale.setScalar(0.044 * (1 - age));
    });
  };
}

export function makeHero(mist) {
  const root = new THREE.Group();
  const pieces = [];
  const floor = piece(root, pieces, new THREE.Vector3(), 0);
  const cliff = stone(0x263549);
  const land = stone(0x527071);
  const grass = stone(0x637c72);
  const edge = stone(0x8d846f);
  ring(floor, 4.92, -0.87, 0x9dafd1, 0.38);
  ring(floor, 5.29, -0.88, gold, 0.24);
  const center = piece(root, pieces, new THREE.Vector3(), 0.64);
  cylinder(center, 1.88, 0.95, 0.85, 8, new THREE.Vector3(0, -0.49, 0), cliff);
  cylinder(center, 1.92, 1.88, 0.13, 8, new THREE.Vector3(0, 0, 0), edge);
  cylinder(center, 1.82, 1.92, 0.16, 8, new THREE.Vector3(0, 0.12, 0), land);
  const torchTick = hopeTorch(center, mist);
  const foliage = stone(0x4b6766);
  const wood = stone(0x6d5246);
  const treeTop = new THREE.ConeGeometry(1, 1, 6);
  for (let i = 0; i < 8; i++) {
    const a = (tau * (i + 0.5)) / 8;
    const radius = [0.88, 1.06, 0.96, 1.04][i % 4];
    const island = piece(root, pieces, polar(3.55, a), 0.12 + i * 0.085);
    island.rotation.y = -a;
    cylinder(
      island,
      radius,
      radius * 0.55,
      0.67,
      6,
      new THREE.Vector3(0, -0.39, 0),
      cliff,
    );
    cylinder(
      island,
      radius + 0.045,
      radius,
      0.12,
      6,
      new THREE.Vector3(),
      edge,
    );
    cylinder(
      island,
      radius,
      radius + 0.045,
      0.12,
      6,
      new THREE.Vector3(0, 0.1, 0),
      i % 3 === 0 ? grass : land,
    );
    for (let j = 0; j < 2 + (i % 2); j++) {
      const x = 0.19 + (j % 2) * 0.35;
      const z = (j - 0.65) * 0.39;
      const height = 0.47 + ((i * 13 + j * 7) % 6) * 0.09;
      cylinder(
        island,
        0.05,
        0.067,
        0.31,
        6,
        new THREE.Vector3(x, 0.31, z),
        wood,
      );
      mesh(
        island,
        treeTop,
        j === 1 ? grass : foliage,
        new THREE.Vector3(x, 0.34 + height * 0.38, z),
        [height * 0.39, height, height * 0.39],
      );
    }
    const path = [polar(1.79, a, 0.115), polar(2.8, a, 0.115)];
    line(floor, path, gold, 0.48);
    for (let j = 0; j < 3; j++)
      action(floor, polar(1.98 + 0.25 * j, a, 0.115), false, goldLight, 0.048);
  }
  return {
    root,
    pieces,
    tick(time, _delta, _night, motion) {
      torchTick(time, motion);
    },
  };
}

// Scene instances reuse these resources when switching models.
export const sharedResources = new Set([
  base,
  brass,
  glass,
  goldLight,
  cube,
  beacon,
]);
