import * as T from "three";

export const woods = ["赤松", "白樺", "", "橡樹", "", "櫻樹", "金合歡", ""];

const grove = [
  [0x416d4a, 0x9a5735, "spire"],
  [0x94ab5b, 0xf1e6c7, "round"],
  [0xb95536, 0x994731, "round"],
  [0x597f43, 0x72523d, "broad"],
  [0x3e7771, 0xa07952, "spire"],
  [0xce8299, 0x854756, "broad"],
  [0xc9a852, 0xae8050, "broad"],
  [0xa36b47, 0x985643, "spire"],
];
export const workshops = [
  ["赤松林場", "赤松柴", "根"],
  ["白樺木工坊", "白樺柴", "根"],
  ["黑岩煤礦", "煤塊", "塊"],
  ["橡樹農場", "秸稈捆", "捆"],
  ["陸地油田", "燃油", "桶"],
  ["櫻樹園", "修枝柴", "根"],
  ["金合歡壓製場", "木質燃料磚", "塊"],
  ["海上鑽油平台", "原油", "桶"],
];
const layouts = [
  [4.66, 1.46, 1.3, 9],
  [4.98, 1.72, 1.1, 11],
  [5.08, 1.9, 1.4, 5],
  [5.2, 1.49, 1.59, 4],
  [4.96, 1.7, 1.32, 6],
  [4.47, 1.17, 1.05, 12],
  [4.91, 1.42, 1.46, 7],
  [4.65, 1.34, 1.18, 4],
];
const tau = Math.PI * 2;
const vec = (x, y, z) => new T.Vector3(x, y, z);
const polar = (r, a, y = 0) => vec(r * Math.cos(a), y, r * Math.sin(a));
const box = new T.BoxGeometry();
const rock = new T.DodecahedronGeometry(1, 0);
const sphere = new T.SphereGeometry(1, 10, 8);
const cone = new T.ConeGeometry(1, 1, 7);
const cylinder = new T.CylinderGeometry(1, 1, 1, 8);
const palette = new Map();
const resources = new Set([box, rock, sphere, cone, cylinder]);
function paint(color, lit = false) {
  const key = color + (lit ? ":lit" : "");
  if (!palette.has(key)) {
    const material = lit
      ? new T.MeshBasicMaterial({ color, toneMapped: false })
      : new T.MeshStandardMaterial({
          color,
          roughness: 0.87,
          flatShading: true,
        });
    palette.set(key, material);
    resources.add(material);
  }
  return palette.get(key);
}
export const islandResources = resources;

function mesh(parent, geometry, color, point, scale, shadow = false) {
  const item = new T.Mesh(
    geometry,
    typeof color === "number" ? paint(color) : color,
  );
  item.position.copy(point);
  item.scale.set(...scale);
  item.castShadow = shadow;
  item.receiveShadow = true;
  parent.add(item);
  return item;
}

function log(parent, point, color, size = 1) {
  const piece = new T.Group();
  piece.position.copy(point);
  parent.add(piece);
  const body = mesh(
    piece,
    cylinder,
    color,
    vec(0, 0, 0),
    [0.085, 0.46, 0.085].map((n) => n * size),
  );
  body.rotation.z = Math.PI / 2;
  for (const side of [-1, 1]) {
    const cut = mesh(
      piece,
      cylinder,
      0xe3b982,
      vec(side * size * 0.232, 0, 0),
      [0.07 * size, 0.013, 0.07 * size],
    );
    cut.rotation.z = Math.PI / 2;
  }
  return piece;
}

function tree(parent, point, kind, scale) {
  const [leaf, bark, form] = grove[kind];
  const group = new T.Group();
  group.position.copy(point);
  group.scale.setScalar(scale);
  parent.add(group);
  mesh(group, cylinder, bark, vec(0, 0.37, 0), [0.085, 0.74, 0.085], true);
  if (form === "spire") {
    for (let i = 0; i < 3; i++) {
      const width = 0.39 - i * 0.085;
      mesh(
        group,
        cone,
        leaf,
        vec(0, 0.65 + i * 0.24, 0),
        [width, 0.6, width],
        true,
      );
    }
  } else {
    mesh(group, rock, leaf, vec(0, 0.89, 0), [0.36, 0.41, 0.35], true);
    const spread = form === "broad" ? 0.29 : 0.17;
    for (const side of [-1, 1]) {
      mesh(
        group,
        rock,
        leaf,
        vec(side * spread, 0.75, 0.09),
        [0.27, 0.26, 0.25],
      );
    }
  }
}

function island(parent, depth, color, width = depth, sides = 9) {
  const coast = new T.CylinderGeometry(1, 0.89, 1, sides);
  if (sides === 4) coast.rotateY(Math.PI / 4).scale(Math.SQRT2, 1, Math.SQRT2);
  mesh(parent, coast, 0x544f50, vec(0, -0.18, 0), [depth, 0.3, width], true);
  mesh(parent, rock, 0x3c414d, vec(0, -0.64, 0), [
    depth * 0.88,
    0.46,
    width * 0.88,
  ]);
  mesh(parent, coast, color, vec(0, -0.048, 0), [depth, 0.096, width], true);
}

function courier(color, bark) {
  const root = new T.Group();
  const upper = new T.Group();
  root.add(upper);
  mesh(upper, sphere, color, vec(0, 0.27, 0), [0.143, 0.19, 0.11], true);
  mesh(
    upper,
    sphere,
    0xf1c39a,
    vec(0, 0.53, 0.028),
    [0.153, 0.15, 0.135],
    true,
  );
  mesh(upper, sphere, 0x4b3731, vec(0, 0.632, 0.005), [0.159, 0.078, 0.14]);
  mesh(upper, sphere, color, vec(0, 0.682, -0.005), [0.126, 0.06, 0.115]);
  const arms = [],
    legs = [];
  for (const side of [-1, 1]) {
    mesh(
      upper,
      sphere,
      0x382d36,
      vec(side * 0.054, 0.535, 0.151),
      [0.016, 0.021, 0.01],
    );
    const arm = new T.Group();
    arm.position.set(side * 0.143, 0.38, 0.015);
    upper.add(arm);
    mesh(arm, sphere, color, vec(0, -0.075, 0), [0.046, 0.1, 0.046]);
    mesh(arm, sphere, 0xf1c39a, vec(0, -0.16, 0), [0.042, 0.044, 0.041]);
    arms.push(arm);
    const leg = new T.Group();
    leg.position.set(side * 0.067, 0.145, 0);
    root.add(leg);
    mesh(leg, box, 0x38374a, vec(0, -0.075, 0.027), [0.084, 0.15, 0.127]);
    legs.push(leg);
  }
  const bundle = log(upper, vec(0, 0.25, 0.19), bark, 1.08);
  bundle.visible = false;
  const axe = new T.Group();
  axe.position.set(0, -0.16, 0.05);
  mesh(axe, cylinder, 0x8c5636, vec(0, -0.12, 0), [0.018, 0.28, 0.018]);
  mesh(axe, box, 0xb9c8cc, vec(0.044, -0.25, 0), [0.12, 0.085, 0.046]);
  arms[1].add(axe);
  axe.visible = false;
  return { root, upper, arms, legs, bundle, axe };
}

function bridge(parent, from, to) {
  const mid = from.clone().lerp(to, 0.5);
  const width = from.distanceTo(to);
  const group = new T.Group();
  group.position.copy(mid);
  group.rotation.y = -Math.atan2(to.z - from.z, to.x - from.x);
  parent.add(group);
  mesh(group, box, 0x785845, vec(0, -0.087, 0), [width, 0.12, 0.48]);
  const count = Math.ceil(width / 0.14);
  for (let i = 0; i < count; i++) {
    mesh(
      group,
      box,
      i % 3 ? 0xb58b66 : 0xc19b75,
      vec(((i + 0.5) * width) / count - width / 2, -0.014, 0),
      [width / count - 0.012, 0.044, 0.47],
    );
  }
  for (const side of [-1, 1]) {
    mesh(group, box, 0x996c50, vec(0, 0.22, side * 0.24), [
      width,
      0.028,
      0.035,
    ]);
    for (const x of [-width / 2, 0, width / 2]) {
      mesh(
        group,
        box,
        0x88634d,
        vec(x, 0.1, side * 0.24),
        [0.055, 0.26, 0.052],
      );
    }
  }
}

function fuel(parent, point, index) {
  if (index === 4 || index === 7) {
    const barrel = new T.Group();
    barrel.position.copy(point);
    parent.add(barrel);
    mesh(
      barrel,
      cylinder,
      index === 4 ? 0x26756b : 0x426581,
      vec(0, 0, 0),
      [0.09, 0.24, 0.09],
    );
    for (const y of [-0.083, 0.083])
      mesh(barrel, cylinder, 0xd5b478, vec(0, y, 0), [0.094, 0.024, 0.094]);
    return barrel;
  }
  if (index === 2)
    return mesh(parent, rock, 0x302e3b, point, [0.107, 0.09, 0.104]);
  if (index === 3 || index === 6) {
    const color = { 2: 0x39333b, 3: 0xd2a050, 6: 0xb67752 }[index];
    return mesh(parent, box, color, point, [0.18, 0.14, 0.23]);
  }
  const piece = log(parent, point, grove[index][1], 0.53);
  piece.rotation.y = Math.PI / 2;
  return piece;
}

function cart(parent, index) {
  const wagon = new T.Group();
  parent.add(wagon);
  mesh(wagon, box, 0x9f754f, vec(0, 0.15, 0), [0.37, 0.09, 0.66]);
  for (const x of [-0.19, 0.19]) {
    mesh(wagon, box, 0x775748, vec(x, 0.23, 0), [0.038, 0.11, 0.67]);
    for (const z of [-0.23, 0.23]) {
      mesh(
        wagon,
        cylinder,
        0x423b43,
        vec(x, 0.095, z),
        [0.099, 0.047, 0.099],
      ).rotation.z = Math.PI / 2;
    }
  }
  mesh(wagon, box, 0xc09568, vec(0, 0.23, 0.43), [0.048, 0.048, 0.3]);
  const cargo = Array.from({ length: 8 }, (_, j) =>
    fuel(
      wagon,
      vec(
        ((j % 2) - 0.5) * 0.176,
        0.29 + Math.floor(j / 6) * 0.17,
        ((Math.floor(j / 2) % 3) - 1) * 0.192,
      ),
      index,
    ),
  );
  return { wagon, cargo };
}

function workshop(parent, point, index) {
  const site = new T.Group();
  parent.add(site);
  site.position.copy(point);
  if (index === 7) {
    const metal = 0x56869a;
    for (const x of [-0.36, 0.36])
      for (const z of [-0.27, 0.27]) {
        mesh(
          site,
          box,
          metal,
          vec(x * 0.27, 0.79, z * 0.27),
          [0.066, 1.56, 0.066],
        ).rotation.set(-z * 0.85, 0, x * 0.67);
      }
    for (const y of [0.35, 0.76, 1.17, 1.48]) {
      const w = 0.73 - y * 0.34;
      mesh(site, box, metal, vec(0, y, 0), [w, 0.06, w]);
    }
    const drill = mesh(
      site,
      cylinder,
      0xc4c6ba,
      vec(0, 0.61, 0),
      [0.085, 0.87, 0.085],
    );
    mesh(site, box, paint(0xffbc55, true), vec(0, 1.55, 0), [0.13, 0.09, 0.13]);
    mesh(site, box, 0xb77b47, vec(-0.4, 0.22, -0.21), [0.32, 0.44, 0.4]);
    return (time) => {
      drill.position.y = 0.61 + Math.sin(time * 2.7) * 0.22;
      drill.rotation.y = time * 4;
    };
  }
  if (index === 4) {
    const teal = 0x359d86;
    site.scale.setScalar(1.22);
    mesh(site, box, 0x677879, vec(0, 0.055, 0), [0.65, 0.11, 0.58]);
    for (const z of [-0.16, 0.16]) {
      for (const angle of [-0.27, 0.27]) {
        mesh(
          site,
          box,
          teal,
          vec(0, 0.39, z),
          [0.071, 0.69, 0.069],
        ).rotation.z = angle;
      }
    }
    const beam = new T.Group();
    beam.position.y = 0.73;
    site.add(beam);
    mesh(beam, box, teal, vec(0, 0, 0), [0.9, 0.08, 0.1]);
    mesh(beam, sphere, 0x236e64, vec(0.47, -0.03, 0), [0.12, 0.18, 0.13]);
    mesh(beam, box, 0x9c7654, vec(-0.36, -0.09, 0), [0.19, 0.15, 0.22]);
    const rod = mesh(
      site,
      cylinder,
      0xc8be9c,
      vec(0.47, 0.35, 0),
      [0.018, 0.66, 0.018],
    );
    return (time) => {
      beam.rotation.z = Math.sin(time * 2.1) * 0.28;
      rod.position.y = 0.35 + Math.sin(time * 2.1) * 0.12;
    };
  }
  if (index === 2) {
    mesh(site, rock, 0x595260, vec(0, 0.39, -0.23), [0.74, 0.71, 0.5], true);
    mesh(site, box, 0x222130, vec(0, 0.25, 0.26), [0.49, 0.43, 0.13]);
    for (const x of [-0.27, 0.27]) {
      mesh(site, box, 0xad8159, vec(x, 0.25, 0.35), [0.088, 0.49, 0.11]);
      mesh(
        site,
        box,
        0xa1a1ac,
        vec(x * 0.48, 0.024, 0.54),
        [0.025, 0.048, 0.59],
      );
    }
    mesh(site, box, 0xad8159, vec(0, 0.49, 0.36), [0.66, 0.105, 0.12]);
    mesh(
      site,
      sphere,
      paint(0xffc375, true),
      vec(0, 0.51, 0.45),
      [0.05, 0.05, 0.035],
    );
    return;
  }
  if (index === 3) {
    for (let j = 0; j < 4; j++) {
      mesh(
        site,
        box,
        0x866749,
        vec(0, 0.046, j * 0.12 - 0.18),
        [0.66, 0.09, 0.075],
      );
      for (let k = 0; k < 5; k++)
        mesh(
          site,
          cone,
          0xd9ae62,
          vec(k * 0.13 - 0.26, 0.15, j * 0.12 - 0.18),
          [0.033, 0.23, 0.033],
        );
    }
    return;
  }
  const roof = [0x9a6347, 0x657b85, 0, 0, 0, 0xa86375, 0xc49252, 0x466e77][
    index
  ];
  mesh(
    site,
    box,
    index === 1 ? 0xc8b392 : 0xa58d6f,
    vec(0, 0.23, 0),
    [0.55, 0.45, 0.48],
    true,
  );
  const canopy = mesh(
    site,
    new T.ConeGeometry(1, 1, 4),
    roof,
    vec(0, 0.54, 0),
    [0.47, 0.28, 0.43],
  );
  canopy.rotation.y = Math.PI / 4;
  mesh(
    site,
    box,
    paint(0xf3bf74, true),
    vec(0.11, 0.27, 0.244),
    [0.13, 0.115, 0.022],
  );
}

function hearth(root, mist) {
  const flame = new T.Group();
  flame.position.y = 0.59;
  root.add(flame);
  mesh(root, cylinder, 0x6f7989, vec(0, 0.11, 0), [0.72, 0.22, 0.72], true);
  mesh(root, cylinder, 0x505566, vec(0, 0.35, 0), [0.32, 0.44, 0.32], true);
  mesh(root, cylinder, 0x42333d, vec(0, 0.59, 0), [0.53, 0.12, 0.53]);
  for (let i = 0; i < 10; i++) {
    const a = (i * tau) / 10;
    mesh(root, rock, 0x938883, polar(0.5, a, 0.65), [0.144, 0.12, 0.137]);
  }
  for (let i = 0; i < 3; i++) {
    log(root, vec(0, 0.662, 0), 0x5c3d32, 1.35).rotation.y = i * 1.05;
  }
  const flameShape = new T.LatheGeometry(
    [
      [0.24, -0.46],
      [0.77, -0.36],
      [0.91, -0.2],
      [0.74, -0.03],
      [0.48, 0.17],
      [0.22, 0.35],
      [0, 0.56],
    ].map(([radius, height]) => new T.Vector2(radius, height)),
    8,
  );
  const tongues = [0xf46e31, 0xffaf49, 0xffd568, 0xffedb1].map((color, i) =>
    mesh(
      flame,
      flameShape,
      paint(color, true),
      polar(i * 0.059, i * 2.4, 0.31),
      [0.22 - i * 0.032, 0.8 - i * 0.09, 0.22 - i * 0.032],
    ),
  );
  const sparks = Array.from({ length: 15 }, () =>
    mesh(
      root,
      rock,
      paint(0xffb758, true),
      vec(0, 0, 0),
      [0.026, 0.026, 0.026],
    ),
  );
  const halo = mist(0xff8e3e, 0.16, 3.8, 3.8);
  halo.position.y = 0.83;
  root.add(halo);
  const lamp = new T.PointLight(0xff8942, 4, 6, 2);
  lamp.position.y = 1.05;
  root.add(lamp);
  let delivered = 0;
  let burst = 0;
  let fuelColor = 0xffb758;
  return {
    arrive(amount, index) {
      fuelColor = [
        0xffb758, 0xffebbe, 0xff784c, 0xffca60, 0x8bc9ff, 0xff91aa, 0xffcb7e,
        0xa4ddff,
      ][index];
      burst = Math.max(burst, 0.42 + amount * 0.073);
    },
    reset(amount) {
      delivered = amount;
    },
    tick(time, delta, night, motion) {
      burst = Math.max(0, burst - delta * 1.55);
      const power = Math.min(1, Math.max(0, delivered / 64));
      const flicker = motion
        ? Math.sin(time * 9) * 0.07 + Math.cos(time * 14) * 0.04
        : 0;
      const rise = 0.54 + 3.55 * power + 0.48 * burst + flicker;
      const spread = 0.75 + 1.2 * power;
      flame.scale.set(spread, rise, spread);
      tongues.forEach((part, i) => {
        part.rotation.z = Math.sin(time * 6 + i * 1.7) * 0.18;
        part.position.y = 0.34 + Math.cos(time * 8 + i * 2) * 0.058;
      });
      halo.material.opacity =
        (0.095 + power * 0.22 + burst * 0.1) * (0.62 + night * 0.8);
      halo.scale.setScalar(3.2 + 3.6 * power);
      halo.position.y = 0.83 + power * 1.05;
      lamp.position.y = 1.05 + power * 0.62;
      lamp.intensity = (3.4 + 19 * power + 4 * burst) * (0.32 + night * 1.06);
      sparks.forEach((spark, i) => {
        const age = (time * (0.55 + (i % 3) * 0.19) + i * 0.37) % 1;
        spark.material = paint(fuelColor, true);
        spark.visible = motion && i < 3 + power * 10 + burst * 7;
        spark.position.copy(
          polar(
            age * (0.29 + (i % 4) * 0.09),
            i * 2.4 + age,
            0.73 + age * (0.65 + power * 3.1),
          ),
        );
        spark.scale.setScalar(0.029 * (1 - age));
      });
    },
  };
}

function landscape(root) {
  const water = new T.Mesh(
    new T.PlaneGeometry(95, 95),
    new T.MeshBasicMaterial({ color: 0x375b76 }),
  );
  water.rotation.x = -Math.PI / 2;
  water.position.y = -1.25;
  root.add(water);
  const ripples = new T.InstancedMesh(box, paint(0xffffff, true), 130);
  const transform = new T.Object3D();
  for (let i = 0; i < ripples.count; i++) {
    transform.position.copy(
      polar(2.2 + ((i * 47) % 139) * 0.17, i * 2.39996, -1.237),
    );
    transform.rotation.y = i * 0.41;
    transform.scale.set(0.15 + (i % 7) * 0.13, 0.012, 0.023 + (i % 3) * 0.013);
    transform.updateMatrix();
    ripples.setMatrixAt(i, transform.matrix);
  }
  root.add(ripples);
  const distant = new T.Group();
  root.add(distant);
  for (let i = 0; i < 13; i++) {
    const angle = (i * tau) / 13 + 0.18;
    const p = polar(12.6 + (i % 4) * 2.35, angle, -1.14);
    const radius = 1.7 + (i % 5) * 0.44;
    mesh(distant, rock, i % 2 ? 0x657864 : 0x596f6b, p, [
      radius,
      0.42,
      radius * 0.77,
    ]);
    const hill = p.clone().addScaledVector(polar(1, angle), radius * 0.37);
    const height = 0.74 + ((i * 7) % 11) * 0.21;
    hill.y += height * 0.25;
    mesh(distant, rock, i % 3 ? 0x667d70 : 0x86928a, hill, [
      radius * 0.76,
      height,
      radius * 0.66,
    ]);
    for (let j = 0; j < 5; j++) {
      const point = p
        .clone()
        .add(polar(radius * (0.28 + j * 0.1), j * 2.4 + i, 0.22));
      tree(distant, point, i % 3 === 0 ? 1 : 0, 0.45 + ((j + i) % 3) * 0.14);
    }
  }
  const waterColors = {
    dawn: 0x527f88,
    day: 0x659daa,
    dusk: 0x556989,
    night: 0x294662,
  };
  return (time) => {
    water.material.color.setHex(waterColors[time]);
    const ripple = new T.Color(waterColors[time]).lerp(
      new T.Color(0xc1e2d9),
      0.16,
    );
    for (let i = 0; i < ripples.count; i++) ripples.setColorAt(i, ripple);
    ripples.instanceColor.needsUpdate = true;
  };
}

export function makeTimberIslands(pillars, mist, onDelivery) {
  const root = new T.Group();
  const setTime = landscape(root);
  const hub = new T.Group();
  root.add(hub);
  island(hub, 1.85, 0x8a936b);
  const fire = hearth(hub, mist);
  const lanterns = [];
  for (let i = 0; i < 8; i++) {
    const a = (i * tau) / 8 + Math.PI / 8;
    const post = polar(1.23, a, 0.28);
    mesh(hub, cylinder, 0x695344, post, [0.033, 0.56, 0.033]);
    const lamp = new T.MeshStandardMaterial({
      color: 0xf5c277,
      emissive: 0xffa34f,
      roughness: 0.65,
    });
    lanterns.push(lamp);
    mesh(hub, box, lamp, polar(1.23, a, 0.57), [0.14, 0.18, 0.14]);
    mesh(hub, cone, 0x654e4a, polar(1.23, a, 0.69), [0.13, 0.12, 0.13]);
  }

  const dots = [];
  const routes = [];
  const centers = [];
  const pickables = [hub];
  hub.userData.pillar = 8;
  pillars.forEach((pillar, i) => {
    const a = (i * tau) / 8;
    const outward = polar(1, a);
    const lateral = vec(-outward.z, 0, outward.x);
    const [distance, depth, width, sides] = layouts[i];
    const center = polar(distance, a);
    centers.push(center);
    const land = new T.Group();
    land.position.copy(center);
    land.userData.pillar = i;
    root.add(land);
    pickables.push(land);
    const industrial = !woods[i];
    const foundation = new T.Group();
    foundation.rotation.y = -a;
    land.add(foundation);
    const terrain = [
      0x6e8b69, 0x96a76e, 0x716576, 0xb0a072, 0xb89c73, 0x8a946f, 0xa39461,
    ][i];
    if (i === 7) {
      mesh(
        foundation,
        box,
        0x657f8d,
        vec(0, -0.13, 0),
        [depth * 2, 0.26, width * 2],
        true,
      );
      for (const x of [-0.78, 0.78])
        for (const z of [-0.7, 0.7]) {
          mesh(
            foundation,
            cylinder,
            0x496678,
            vec(x, -0.68, z),
            [0.1, 1.18, 0.1],
          );
          mesh(foundation, box, 0xf4bb68, vec(x, 0.04, z), [0.14, 0.08, 0.14]);
        }
      for (const z of [-0.94, 0.94]) {
        mesh(foundation, box, 0xe6ab58, vec(0, 0.23, z), [1.97, 0.04, 0.047]);
        for (const x of [-0.92, 0, 0.92])
          mesh(foundation, box, 0xe6ab58, vec(x, 0.12, z), [0.045, 0.24, 0.05]);
      }
    } else island(foundation, depth, terrain, width, sides);
    const machinery = workshop(
      land,
      outward
        .clone()
        .multiplyScalar(industrial ? 0.57 : depth * 0.44)
        .addScaledVector(lateral, industrial ? 0 : width * 0.38),
      i,
    );
    const stump = outward
      .clone()
      .multiplyScalar(0.36)
      .addScaledVector(lateral, -0.32);
    const [leaf, bark] = grove[i];
    if (!industrial) {
      mesh(
        land,
        cylinder,
        bark,
        stump.clone().setY(0.103),
        [0.151, 0.2, 0.151],
        true,
      );
      mesh(
        land,
        cylinder,
        0xe3b989,
        stump.clone().setY(0.21),
        [0.125, 0.018, 0.125],
      );
      for (let j = 0; j < 3; j++) {
        tree(
          land,
          outward
            .clone()
            .multiplyScalar(depth * (0.35 + j * 0.18))
            .addScaledVector(lateral, width * [0.39, -0.48, 0.15][j]),
          i,
          [0.95, 0.77, 0.62][j],
        );
      }
      for (let j = 0; j < 3; j++) {
        const p = stump
          .clone()
          .addScaledVector(lateral, -0.27)
          .addScaledVector(outward, j * 0.115)
          .setY(0.087 + (j % 2) * 0.13);
        fuel(land, p, i).rotation.y = a;
      }
    } else {
      for (let j = 0; j < 3; j++) {
        fuel(
          land,
          lateral
            .clone()
            .multiplyScalar(-0.51)
            .addScaledVector(outward, -0.28 + j * 0.22)
            .setY(0.12),
          i,
        );
      }
    }
    const home = center
      .clone()
      .addScaledVector(outward, 0.18)
      .addScaledVector(lateral, 0.39);
    const work = center
      .clone()
      .addScaledVector(outward, 0.14)
      .addScaledVector(lateral, -0.27);
    const ramp = center.clone().addScaledVector(outward, -depth * 0.86);
    const entrance = polar(1.66, a);
    const hearthside = polar(0.83, a);
    bridge(root, ramp, entrance);
    const actor = courier(industrial ? 0xe0a34e : leaf, bark);
    actor.root.scale.setScalar(1.22);
    root.add(actor.root);
    actor.root.position.copy(home);
    actor.root.rotation.y = Math.atan2(-outward.x, -outward.z);
    const team = [actor, courier(0xd6a374, bark), courier(0x879ac2, bark)];
    team.slice(1).forEach((worker, j) => {
      worker.root.position
        .copy(home)
        .addScaledVector(outward, 0.38 - j * 0.36)
        .addScaledVector(lateral, j === 0 ? -0.73 : 0.38);
      worker.root.rotation.y = Math.atan2(-outward.x, -outward.z);
      worker.root.scale.setScalar(0.94);
      root.add(worker.root);
    });
    const { wagon, cargo } = cart(root, i);
    wagon.visible = false;
    routes.push({
      actor,
      team,
      machinery,
      wagon,
      cargo,
      home,
      work,
      ramp,
      entrance,
      hearthside,
      amount: pillar.checked.filter(Boolean).length,
      elapsed: -i * 0.58,
      delivered: false,
      launch: false,
    });
    dots.push(
      pillar.checked.map((checked, j) =>
        mesh(
          land,
          rock,
          paint(checked ? 0xffcb77 : 0x758fa5, true),
          polar(1.035, ((j + 0.5) * tau) / 8 + a, 0.088),
          [0.071, 0.059, 0.071],
        ),
      ),
    );
  });

  let selected = 0;
  const count = () =>
    pillars.reduce((sum, p) => sum + p.checked.filter(Boolean).length, 0);
  fire.reset(count());

  function highlight(index) {
    selected = index;
    dots.forEach((group, i) =>
      group.forEach((marker, j) => {
        const checked = pillars[i].checked[j];
        marker.material = paint(
          checked ? 0xffcb77 : i === selected ? 0xb1dcff : 0x758fa5,
          true,
        );
        marker.scale.setScalar(checked ? 0.091 : 0.064);
      }),
    );
  }

  function walk(route, from, to, progress, stride) {
    const { actor } = route;
    actor.root.position.copy(from).lerp(to, progress);
    actor.root.rotation.y = Math.atan2(to.x - from.x, to.z - from.z);
    actor.upper.position.y = Math.abs(stride) * 0.041;
    actor.legs[0].rotation.x = stride * 0.52;
    actor.legs[1].rotation.x = -stride * 0.52;
  }

  function rest(route) {
    const { actor } = route;
    actor.root.position.copy(route.home);
    actor.root.rotation.y = Math.atan2(-route.home.x, -route.home.z);
    actor.legs.forEach((leg) => {
      leg.rotation.x = 0;
    });
    actor.arms.forEach((arm) => {
      arm.rotation.x = 0;
    });
    actor.upper.position.y = 0;
    actor.axe.visible = actor.bundle.visible = false;
    route.wagon.visible = false;
  }

  function advance(route, index, time, delta, motion) {
    if (!motion) {
      rest(route);
      return;
    }
    route.machinery?.(time + index * 0.47);
    route.team.slice(1).forEach((worker, i) => {
      const activity = Math.sin(time * 2.4 + index + i * 1.8);
      worker.upper.position.y = Math.abs(activity) * 0.04;
      worker.arms[i].rotation.x = -0.27 - activity * 0.55;
      worker.root.rotation.y += Math.sin(time + i) * delta * 0.19;
    });
    if (!route.amount) {
      rest(route);
      return;
    }
    const previous = route.elapsed;
    route.elapsed += delta;
    const t = route.elapsed;
    const { actor, home, work, ramp, entrance, hearthside, wagon, cargo } =
      route;
    if (t < 0) return;
    const [, label, unit] = workshops[index];
    if (previous < 0 && (index === selected || route.launch)) {
      onDelivery?.("出發 · " + route.amount + unit + label);
      route.launch = false;
    }
    const stride = Math.sin(t * 12);
    actor.axe.visible = !!woods[index] && t > 0.42 && t < 1;
    actor.arms[1].rotation.x = actor.axe.visible
      ? -1.1 + Math.sin(t * 22) * 0.8
      : 0;
    if (t < 1) walk(route, home, work, Math.min(1, t / 0.55), stride);
    else if (t < 1.75) walk(route, work, ramp, (t - 1) / 0.75, stride);
    else if (t < 3.6) walk(route, ramp, entrance, (t - 1.75) / 1.85, stride);
    else if (t < 4.2)
      walk(route, entrance, hearthside, (t - 3.6) / 0.6, stride);
    else if (t < 4.85)
      walk(route, hearthside, entrance, (t - 4.2) / 0.65, stride);
    else if (t < 6.4) walk(route, entrance, ramp, (t - 4.85) / 1.55, stride);
    else if (t < 7.1) walk(route, ramp, home, (t - 6.4) / 0.7, stride);
    else {
      rest(route);
      route.elapsed = -0.74 - index * 0.17;
      route.delivered = false;
      return;
    }
    wagon.visible = t >= 1;
    wagon.position.copy(actor.root.position);
    wagon.position.x -= Math.sin(actor.root.rotation.y) * 0.54;
    wagon.position.z -= Math.cos(actor.root.rotation.y) * 0.54;
    wagon.rotation.y = actor.root.rotation.y;
    cargo.forEach((piece, i) => {
      piece.visible = i < route.amount && t < 4.2;
    });
    if (!route.delivered && t >= 4.2) {
      route.delivered = true;
      fire.arrive(route.amount, index);
      if (index === selected)
        onDelivery?.(
          "送達 · " +
            route.amount +
            unit +
            label +
            (route.amount === 8
              ? "｜這座島的 8 項行動全數完成！"
              : "｜又為目標添了一把火"),
        );
    }
  }

  return {
    root,
    pieces: [],
    centers,
    pickables,
    labelPoints: [
      ...centers.map((point) => point.clone().setY(1.15)),
      vec(0, 1.3, 0),
    ],
    setTime,
    highlight,
    refresh(change, motion) {
      highlight(selected);
      fire.reset(count());
      if (!change) return;
      const route = routes[change.pillar];
      const amount = pillars[change.pillar].checked.filter(Boolean).length;
      if (motion && !route.amount && amount) {
        route.elapsed = -0.01;
        route.delivered = false;
        route.launch = true;
      }
      route.amount = amount;
      if (!amount) {
        rest(route);
        route.elapsed = -0.01;
        route.delivered = false;
      }
    },
    tick(time, delta, light, motion) {
      routes.forEach((route, index) =>
        advance(route, index, time, delta, motion),
      );
      fire.tick(time, delta, light, motion);
      lanterns.forEach((lamp) => {
        lamp.emissiveIntensity = light * 1.9;
      });
    },
  };
}
