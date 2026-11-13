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

export function makeHero() {
  const root = new THREE.Group();
  const pieces = [];
  const floor = piece(root, pieces, new THREE.Vector3(), 0);
  cylinder(floor, 4.7, 4.76, 0.29, 8, new THREE.Vector3(0, -0.23, 0), base);
  ring(floor, 4.65, -0.07, gold, 0.72, 8);
  ring(floor, 5.2, -0.14, 0x99a8da, 0.48);
  ring(floor, 5.55, -0.14, gold, 0.28);
  const center = piece(root, pieces, new THREE.Vector3(), 0.64);
  cylinder(center, 0.73, 0.92, 1.55, 8, new THREE.Vector3(0, 0.69, 0), glass);
  cylinder(center, 0.82, 0.85, 0.08, 8, new THREE.Vector3(0, 1.5, 0), brass);
  goal(center, 2.58, 0.61);
  for (let i = 0; i < 8; i++) {
    const a = (tau * i) / 8;
    const h = 0.65 + 1.23 * (0.5 + 0.5 * Math.sin(a - 0.65));
    const tower = piece(root, pieces, polar(3.11, a), 0.12 + i * 0.085);
    tower.rotation.y = -a;
    mesh(tower, cube, base, new THREE.Vector3(0, 0.06, 0), [1.18, 0.2, 1.18]);
    mesh(tower, cube, i % 3 ? glass : base, new THREE.Vector3(0, h / 2, 0), [
      0.77,
      h,
      0.77,
    ]);
    mesh(
      tower,
      cube,
      brass,
      new THREE.Vector3(0, h + 0.02, 0),
      [0.82, 0.055, 0.82],
    );
    mesh(
      tower,
      cube,
      goldLight,
      new THREE.Vector3(0, h + 0.055, 0),
      [0.4, 0.023, 0.4],
      false,
    );
    line(floor, [polar(0.92, a, 0.03), polar(4.48, a, 0.03)], gold, 0.42);
    for (let j = 0; j < 3; j++) {
      action(floor, polar(1.34 + 0.41 * j, a, 0.038), false, goldLight, 0.045);
    }
  }
  return { root, pieces };
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
