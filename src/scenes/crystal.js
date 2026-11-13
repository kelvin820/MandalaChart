import * as THREE from "three";

const turn = Math.PI * 2;
const facets = 10;
const sections = [
  [-1.56, 0.012],
  [-0.99, 0.39],
  [-0.43, 0.63],
  [0.17, 0.69],
  [0.71, 0.52],
  [1.36, 0.34],
  [1.79, 0.17],
  [2.13, 0.008],
];

function cutGeometry() {
  const positions = [];
  const index = [];
  sections.forEach(([height, radius], row) => {
    for (let i = 0; i < facets; i++) {
      const angle = (i * turn) / facets + row * 0.16;
      const radiusVariation =
        radius * (1 + 0.17 * Math.sin(i * 5.7 + row * 2.8));
      positions.push(
        Math.cos(angle) * radiusVariation + 0.062 * height,
        height + radius * 0.16 * Math.sin(i * 2.7 + row),
        Math.sin(angle) * radiusVariation,
      );
      if (row > 0) {
        const next = (i + 1) % facets;
        const a = (row - 1) * facets + i;
        const b = (row - 1) * facets + next;
        const c = row * facets + i;
        const d = row * facets + next;
        index.push(a, c, b, b, c, d);
      }
    }
  });
  for (let i = 1; i < facets - 1; i++) {
    const top = (sections.length - 1) * facets;
    index.push(0, i, i + 1, top, top + i + 1, top + i);
  }
  const indexed = new THREE.BufferGeometry();
  indexed.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(positions, 3),
  );
  indexed.setIndex(index);
  const cut = indexed.toNonIndexed();
  indexed.dispose();
  cut.computeVertexNormals();
  return cut;
}

function crystalSurface(energy) {
  const material = new THREE.MeshPhysicalMaterial({
    color: 0x82bcff,
    roughness: 0.13,
    ior: 1.52,
    transmission: 0.68,
    thickness: 0.66,
    attenuationColor: 0x7eaef2,
    attenuationDistance: 1.4,
    dispersion: 0.045,
    clearcoat: 0.44,
    clearcoatRoughness: 0.1,
    envMapIntensity: 0.88,
  });
  material.onBeforeCompile = (shader) => {
    shader.uniforms.crystalEnergy = energy;
    shader.vertexShader =
      "varying vec3 crystalPosition;\n" +
      shader.vertexShader.replace(
        "#include <begin_vertex>",
        "#include <begin_vertex>\ncrystalPosition = position;",
      );
    shader.fragmentShader =
      `
      varying vec3 crystalPosition;
      uniform float crystalEnergy;

      float crystalHash(vec3 p) {
        p = fract(p * 0.3183099 + vec3(0.23, 0.17, 0.59)) * 17.0;
        return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
      }

      float crystalNoise(vec3 p) {
        vec3 cell = floor(p);
        vec3 t = fract(p);
        t = t*t*(3.0-2.0*t);
        return mix(
          mix(mix(crystalHash(cell), crystalHash(cell+vec3(1,0,0)), t.x),
              mix(crystalHash(cell+vec3(0,1,0)), crystalHash(cell+vec3(1,1,0)), t.x), t.y),
          mix(mix(crystalHash(cell+vec3(0,0,1)), crystalHash(cell+vec3(1,0,1)), t.x),
              mix(crystalHash(cell+vec3(0,1,1)), crystalHash(cell+vec3(1,1,1)), t.x), t.y), t.z);
      }
    ` +
      shader.fragmentShader.replace(
        "#include <emissivemap_fragment>",
        `#include <emissivemap_fragment>
        vec3 p = crystalPosition;
        float turbulence = crystalNoise(p * 3.1) * .58 + crystalNoise(p * 9.6) * .30 + crystalNoise(p * 26.0) * .12;
        float fissure = abs(sin(16.5 * p.y + 4.8 * p.x - 3.6 * p.z + turbulence * 12.0));
        float crossVein = abs(sin(15.0 * p.x + 11.0 * p.z - 6.0 * p.y + crystalNoise(p * 4.0) * 9.0));
        float veins = (1.0 - smoothstep(.035, .27, fissure)) * smoothstep(.28, .58, turbulence)
                    + (1.0 - smoothstep(.02, .12, crossVein)) * .55 * smoothstep(.41, .62, turbulence);
        float mist = smoothstep(.32, .74, turbulence);
        float core = exp(-1.8 * abs(p.y - .03)) * (.18 + mist * .82);
        diffuseColor.rgb *= mix(vec3(.36,.53,.82), vec3(.92,1.0,1.0), mist);
        totalEmissiveRadiance += vec3(.12,.32,.79) * (.08 + .57 * crystalEnergy) * core;
        totalEmissiveRadiance += vec3(.42,.72,1.0) * (.43 + .72 * crystalEnergy) * veins;`,
      );
  };
  return material;
}

function inclusions() {
  const points = [];
  const colors = [];
  const deep = new THREE.Color(0x2a6aba);
  const flash = new THREE.Color(0xbfefff);
  for (let fracture = 0; fracture < 12; fracture++) {
    const angle = fracture * 2.39996;
    const center = -0.93 + fracture * 0.21;
    let previous;
    for (let i = 0; i < 11; i++) {
      const t = i / 10;
      const y = center + t * 0.36 + Math.sin(i * 3.7 + fracture) * 0.052;
      const radius = (0.28 - 0.11 * Math.abs(y)) * (0.22 + t * 0.78);
      const a = angle + t * 1.55 + 0.26 * Math.sin(i * 2.5 + fracture);
      const point = [radius * Math.cos(a), y, radius * Math.sin(a)];
      if (previous) {
        points.push(...previous, ...point);
        const shade = deep
          .clone()
          .lerp(flash, Math.pow(Math.sin(i * 1.33 + fracture * 0.91), 2));
        colors.push(...shade, ...shade);
      }
      previous = point;
    }
  }
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(points, 3),
  );
  geometry.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  return new THREE.LineSegments(
    geometry,
    new THREE.LineBasicMaterial({ vertexColors: true }),
  );
}

function addCollar(group, bronze, trim) {
  for (const height of [-0.34, 0.18]) {
    const band = new THREE.Mesh(
      new THREE.TorusGeometry(0.78, 0.061, 8, 64),
      bronze,
    );
    band.rotation.x = Math.PI / 2;
    band.position.y = height;
    group.add(band);
    for (const edge of [-0.051, 0.051]) {
      const bezel = new THREE.Mesh(
        new THREE.TorusGeometry(0.783, 0.013, 6, 64),
        trim,
      );
      bezel.rotation.x = Math.PI / 2;
      bezel.position.y = height + edge;
      group.add(bezel);
    }
  }
  const prongGeometry = new THREE.CylinderGeometry(0.028, 0.086, 0.68, 5);
  for (let i = 0; i < 4; i++) {
    const angle = (i * turn) / 4 + Math.PI / 6;
    const prong = new THREE.Mesh(prongGeometry, bronze);
    prong.position.set(Math.cos(angle) * 0.77, -0.08, Math.sin(angle) * 0.77);
    prong.rotation.z = 0.17 * Math.cos(angle);
    prong.rotation.x = -0.17 * Math.sin(angle);
    group.add(prong);
    const rivet = new THREE.Mesh(new THREE.SphereGeometry(0.057, 8, 6), trim);
    rivet.position.copy(prong.position);
    rivet.position.y = 0.19;
    group.add(rivet);
  }
}

export function createCrystal(size, compact) {
  const group = new THREE.Group();
  group.scale.setScalar(size);
  const energy = { value: 0 };
  const ice = crystalSurface(energy);
  const shell = new THREE.Mesh(cutGeometry(), ice);
  group.add(inclusions(), shell);

  const bronze = new THREE.MeshStandardMaterial({
    color: 0x987650,
    roughness: 0.32,
    metalness: 0.82,
  });
  const trim = new THREE.MeshStandardMaterial({
    color: 0xe1c18f,
    roughness: 0.24,
    metalness: 0.71,
  });
  if (!compact) addCollar(group, bronze, trim);
  else group.scale.y *= 0.58;
  return {
    group,
    setEnvironment(texture) {
      ice.envMap = texture;
      if (!compact) {
        bronze.envMap = texture;
        trim.envMap = texture;
      }
    },
    setProgress(value) {
      energy.value = value;
    },
  };
}
