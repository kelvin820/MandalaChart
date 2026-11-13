import * as T from "three";

export const woods = ["", "赤松", "", "橡樹", "", "櫻樹", "", ""];

const grove = [
  [0x416d4a, 0x9a5735, "spire"],
  [0x416d4a, 0x9a5735, "spire"],
  [0xb95536, 0x994731, "round"],
  [0x597f43, 0x72523d, "broad"],
  [0x3e7771, 0xa07952, "spire"],
  [0xce8299, 0x854756, "broad"],
  [0xc9a852, 0xae8050, "broad"],
  [0xa36b47, 0x985643, "spire"],
];
export const workshops = [
  ["天然瓦斯站", "天然瓦斯", "罐"],
  ["赤松林場", "赤松柴", "根"],
  ["黑岩煤礦", "煤塊", "塊"],
  ["橡樹農場", "秸稈捆", "捆"],
  ["陸地油田", "燃油", "桶"],
  ["櫻樹園", "修枝柴", "根"],
  ["陸地油田・直立井", "原油", "桶"],
  ["海上鑽油平台", "原油", "桶"],
];
const coreEdge = 1.67;
const bridgeSpan = 0.92;
const innerEdge = coreEdge + bridgeSpan;
const islandDepths = [2.85, 3.12, 3.42, 3.05, 3.25, 2.68, 2.95, 3.08];
const bridgeStyles = [
  [0xa87348, 0x674532, 0.62, "wood"],
  [0xd9c09d, 0x766956, 0.65, "rope"],
  [0x737787, 0xc08c54, 0.69, "rail"],
  [0xc3af80, 0x8b795f, 0.72, "stone"],
  [0x647b78, 0xe0ad55, 0.7, "truss"],
  [0xb46b6a, 0xf0baa9, 0.64, "arch"],
  [0xb88c54, 0x84663d, 0.67, "covered"],
  [0x526b87, 0xe7b55d, 0.74, "pier"],
];
const uniforms = [
  0xd88a58, 0x819fc2, 0x8c9d68, 0xc98eaa, 0xd9b66a, 0x69a29f, 0xa58dc0,
  0xce786d,
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

function outerIsland(parent, depth, color, index) {
  const inside = innerEdge * Math.tan(Math.PI / 8) - 0.13;
  const outside = (innerEdge + depth) * Math.tan(Math.PI / 8) - 0.16;
  const bevel = index === 7 ? 0.08 : 0.24 + (index % 3) * 0.12;
  const outline = new T.Shape();
  outline.moveTo(-depth / 2, -inside);
  outline.lineTo(depth / 2 - bevel, -outside + 0.17);
  outline.lineTo(depth / 2, -outside + bevel);
  outline.lineTo(depth / 2 + (index === 2 ? 0.27 : 0), outside - bevel);
  outline.lineTo(depth / 2 - bevel, outside - 0.17);
  outline.lineTo(-depth / 2, inside);
  outline.closePath();
  const geometry = new T.ExtrudeGeometry(outline, {
    depth: 0.31,
    bevelEnabled: false,
  });
  geometry.rotateX(-Math.PI / 2).translate(0, -0.31, 0);
  mesh(parent, geometry, color, vec(0, 0, 0), [1, 1, 1], true);
  if (index !== 7)
    mesh(parent, rock, 0x424554, vec(0.38, -0.48, 0), [
      depth * 0.43,
      0.39,
      outside * 0.76,
    ]);
}

function makeSleeper() {
  const canvas = document.createElement("canvas");
  canvas.width = 128;
  canvas.height = 64;
  const ctx = canvas.getContext("2d");
  ctx.font = "bold 40px sans-serif";
  ctx.textAlign = "center";
  ctx.lineWidth = 5;
  ctx.strokeStyle = "#192844";
  ctx.fillStyle = "#e6f4ff";
  ctx.strokeText("zzz", 64, 48);
  ctx.fillText("zzz", 64, 48);
  const texture = new T.CanvasTexture(canvas);
  texture.colorSpace = T.SRGBColorSpace;
  return new T.SpriteMaterial({
    map: texture,
    depthWrite: false,
    toneMapped: false,
  });
}

function courier(color, index) {
  const root = new T.Group();
  const pose = new T.Group();
  root.add(pose);
  const upper = new T.Group();
  pose.add(upper);
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
  const mining = index === 2;
  const oil = [0, 4, 6, 7].includes(index);
  const helmet = mining ? 0xeeb32e : oil ? 0xf4f0dc : 0x9b4b3f;
  mesh(upper, sphere, helmet, vec(0, 0.657, 0), [0.168, 0.104, 0.154]);
  mesh(upper, box, helmet, vec(0, 0.633, 0.115), [0.27, 0.025, 0.16]);
  if (mining)
    mesh(
      upper,
      sphere,
      paint(0xfff1a4, true),
      vec(0, 0.663, 0.155),
      [0.043, 0.035, 0.026],
    );
  if (oil) {
    for (const y of [0.25, 0.32])
      mesh(upper, box, 0xf3ce66, vec(0, y, 0.097), [0.22, 0.024, 0.035]);
  } else if (!mining) {
    for (const x of [-0.064, 0.064])
      mesh(upper, box, 0x574334, vec(x, 0.31, 0.099), [0.031, 0.18, 0.033]);
  }
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
    pose.add(leg);
    mesh(leg, box, 0x38374a, vec(0, -0.075, 0.027), [0.084, 0.15, 0.127]);
    legs.push(leg);
  }
  return { root, pose, upper, arms, legs };
}

function bridge(parent, from, to, index) {
  const [deck, trim, breadth, style] = bridgeStyles[index];
  const length = from.distanceTo(to);
  const group = new T.Group();
  group.position.copy(from).lerp(to, 0.5);
  group.rotation.y = -Math.atan2(to.z - from.z, to.x - from.x);
  parent.add(group);
  mesh(group, box, deck, vec(0, -0.06, 0), [length, 0.11, breadth], true);
  const count = Math.ceil(length / 0.12);
  for (let i = 0; i < count; i++) {
    mesh(
      group,
      box,
      i % 2 ? deck : new T.Color(deck).multiplyScalar(0.91).getHex(),
      vec(((i + 0.5) * length) / count - length / 2, -0.009, 0),
      [length / count - 0.011, 0.032, breadth * 0.97],
    );
  }
  for (const side of [-1, 1]) {
    const z = side * breadth * 0.47;
    const railY = style === "rail" ? 0.022 : style === "stone" ? 0.13 : 0.24;
    mesh(group, box, trim, vec(0, railY, z), [
      length,
      style === "stone" ? 0.19 : 0.035,
      0.048,
    ]);
    if (style === "rail") continue;
    for (const x of [-length * 0.44, 0, length * 0.44]) {
      const height =
        style === "pier" ? 0.36 : style === "covered" ? 0.65 : 0.31;
      mesh(group, box, trim, vec(x, height / 2, z), [0.05, height, 0.05]);
      if (style === "pier")
        mesh(
          group,
          sphere,
          paint(0xffd487, true),
          vec(x, height, z),
          [0.052, 0.052, 0.052],
        );
      if (style === "truss")
        mesh(
          group,
          box,
          trim,
          vec(x, 0.13, z),
          [0.036, 0.32, 0.036],
        ).rotation.z = 0.63;
    }
    if (style === "rope" || style === "arch") {
      const height = style === "arch" ? 0.29 : -0.14;
      const points = Array.from({ length: 9 }, (_, j) =>
        vec(
          (j / 8 - 0.5) * length,
          0.29 + Math.sin((j * Math.PI) / 8) * height,
          z,
        ),
      );
      group.add(
        new T.Line(
          new T.BufferGeometry().setFromPoints(points),
          new T.LineBasicMaterial({ color: trim }),
        ),
      );
    }
  }
  if (style === "covered")
    mesh(group, box, trim, vec(0, 0.65, 0), [length, 0.08, breadth + 0.13]);
}

function fuel(parent, point, index) {
  if ([0, 4, 6, 7].includes(index)) {
    const barrel = new T.Group();
    barrel.position.copy(point);
    parent.add(barrel);
    mesh(
      barrel,
      cylinder,
      { 0: 0x79bdc4, 4: 0x26756b, 6: 0xa45a3d, 7: 0x426581 }[index],
      vec(0, 0, 0),
      [0.09, 0.24, 0.09],
    );
    if (index === 0) {
      mesh(barrel, sphere, 0x79bdc4, vec(0, 0.11, 0), [0.09, 0.06, 0.09]);
      mesh(barrel, cylinder, 0x536473, vec(0, 0.17, 0), [0.029, 0.045, 0.029]);
      return barrel;
    }
    for (const y of [-0.083, 0.083])
      mesh(barrel, cylinder, 0xd5b478, vec(0, y, 0), [0.094, 0.024, 0.094]);
    return barrel;
  }
  if (index === 2)
    return mesh(parent, rock, 0x302e3b, point, [0.107, 0.09, 0.104]);
  if (index === 3) {
    return mesh(parent, box, 0xd2a050, point, [0.18, 0.14, 0.23]);
  }
  const piece = log(parent, point, grove[index][1], 0.53);
  piece.rotation.y = Math.PI / 2;
  return piece;
}

function workshop(parent, point, index) {
  const site = new T.Group();
  parent.add(site);
  site.position.copy(point);
  if (index === 0) {
    for (const z of [-0.27, 0.27]) {
      mesh(
        site,
        cylinder,
        0x78afb5,
        vec(0, 0.3, z),
        [0.21, 0.75, 0.21],
      ).rotation.z = Math.PI / 2;
      for (const x of [-0.35, 0.35])
        mesh(site, sphere, 0x78afb5, vec(x, 0.3, z), [0.14, 0.21, 0.21]);
      mesh(site, box, 0x5f7885, vec(0, 0.075, z), [0.49, 0.15, 0.28]);
    }
    mesh(site, cylinder, 0xead4a2, vec(0.49, 0.48, 0), [0.05, 0.96, 0.05]);
    mesh(site, box, 0xead4a2, vec(0.37, 0.87, 0), [0.24, 0.09, 0.1]);
    mesh(
      site,
      sphere,
      paint(0xffbd65, true),
      vec(0.49, 0.98, 0),
      [0.07, 0.07, 0.07],
    );
    return;
  }
  if (index === 6) {
    const steel = 0xb8774f;
    const head = new T.Group();
    site.add(head);
    for (const x of [-0.27, 0.27]) {
      mesh(site, box, steel, vec(x, 0.67, 0), [0.09, 1.34, 0.12]);
      mesh(site, box, steel, vec(x, 0.05, 0), [0.13, 0.1, 0.59]);
    }
    mesh(site, box, 0x614a46, vec(0, 1.33, 0), [0.7, 0.15, 0.24]);
    mesh(head, box, 0xe9b476, vec(0, 0.85, 0.07), [0.56, 0.16, 0.25]);
    mesh(head, cylinder, 0xcfd2c7, vec(0, 0.43, 0.07), [0.045, 0.86, 0.045]);
    mesh(site, box, 0x644c48, vec(0, 0.07, 0), [0.48, 0.14, 0.5]);
    return (time) => {
      head.position.y = Math.sin(time * 2.4) * 0.19;
    };
  }
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
  for (let i = 0; i < 18; i++) {
    const angle = (i * tau) / 18 + 0.18;
    const p = polar(14.4 + (i % 3) * 1.3, angle, -1.14);
    const radius = 3.4 + (i % 5) * 0.44;
    mesh(distant, rock, i % 2 ? 0x657864 : 0x596f6b, p, [
      radius,
      0.82,
      radius * 0.93,
    ]);
    const hill = p.clone().addScaledVector(polar(1, angle), radius * 0.37);
    const height = 1.45 + ((i * 7) % 11) * 0.35;
    hill.y += height * 0.25;
    mesh(distant, rock, i % 3 ? 0x667d70 : 0x86928a, hill, [
      radius * 0.76,
      height,
      radius * 0.66,
    ]);
    for (let j = 0; j < 7; j++) {
      const point = p
        .clone()
        .add(polar(radius * (0.3 + j * 0.065), j * 2.4 + i, 0.58));
      tree(distant, point, i % 3 === 0 ? 1 : 0, 0.45 + ((j + i) % 3) * 0.14);
    }
  }
  const clouds = [];
  const cloudMaterial = new T.MeshStandardMaterial({
    color: 0xf6e7d7,
    roughness: 1,
    fog: false,
  });
  for (let i = 0; i < 8; i++) {
    const cloud = new T.Group();
    const anchor = polar(
      13.2 + (i % 3) * 1.4,
      (i * tau) / 8,
      3.0 + (i % 3) * 0.65,
    );
    cloud.position.copy(anchor);
    root.add(cloud);
    for (let j = 0; j < 5; j++) {
      mesh(
        cloud,
        sphere,
        cloudMaterial,
        vec((j - 2) * 0.52, Math.sin(j * 1.7) * 0.19, Math.cos(j) * 0.23),
        [0.63, 0.34 + (j % 3) * 0.11, 0.49],
      );
    }
    clouds.push({ cloud, anchor });
  }
  const waterColors = {
    dawn: 0x527f88,
    day: 0x659daa,
    dusk: 0x556989,
    night: 0x294662,
  };
  return {
    setTime(time) {
      water.material.color.setHex(waterColors[time]);
      const ripple = new T.Color(waterColors[time]).lerp(
        new T.Color(0xc1e2d9),
        0.16,
      );
      for (let i = 0; i < ripples.count; i++) ripples.setColorAt(i, ripple);
      ripples.instanceColor.needsUpdate = true;
    },
    drift(time) {
      clouds.forEach(({ cloud, anchor }, i) => {
        cloud.position.x = anchor.x + Math.sin(time * 0.18 + i) * 0.95;
        cloud.position.z = anchor.z + Math.cos(time * 0.12 + i) * 0.5;
      });
    },
  };
}

export function makeTimberIslands(pillars, mist, onDelivery) {
  const root = new T.Group();
  const scenery = landscape(root);
  const hub = new T.Group();
  root.add(hub);
  const base = new T.CylinderGeometry(
    coreEdge / Math.cos(Math.PI / 8),
    1.59,
    0.35,
    8,
  );
  mesh(hub, base, 0x8a936b, vec(0, -0.175, 0), [1, 1, 1], true);
  const sleepMaterial = makeSleeper();
  const fire = hearth(hub, mist);
  const lanterns = [];
  for (let i = 0; i < 8; i++) {
    const a = (i * tau) / 8;
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
    const a = ((i + 0.5) * tau) / 8;
    const depth = islandDepths[i];
    const width = 1.7;
    const center = polar(innerEdge + depth / 2, a);
    const outward = polar(1, a);
    const lateral = vec(-outward.z, 0, outward.x);
    centers.push(center);
    const land = new T.Group();
    land.position.copy(center);
    land.userData.pillar = i;
    root.add(land);
    pickables.push(land);
    const industrial = !woods[i];
    const terrain = [
      0x6e8b69, 0x96a76e, 0x716576, 0xb0a072, 0xb89c73, 0x8a946f, 0xa39461,
      0x657f8d,
    ][i];
    const shore = new T.Group();
    shore.rotation.y = -a;
    land.add(shore);
    outerIsland(shore, depth, terrain, i);
    if (i === 7) {
      for (let j = 0; j < 6; j++) {
        mesh(
          land,
          cylinder,
          0x496678,
          polar(1.36, (j * tau) / 6, -0.66),
          [0.11, 1.18, 0.11],
        );
      }
    }
    for (let j = 0; j < 6; j++) {
      const angle = (j * tau) / 6;
      mesh(
        land,
        box,
        0xc7bca2,
        polar(1.48, angle, 0.02),
        [0.2, 0.035, 0.13],
      ).rotation.y = -angle;
      mesh(
        land,
        rock,
        industrial ? 0x87828a : 0x76926d,
        polar(1.37, angle + 0.19, 0.075),
        [0.13, 0.13, 0.11],
      );
    }
    for (let j = 0; j < 5; j++) {
      const tile = outward
        .clone()
        .multiplyScalar(0.24 - j * 0.23)
        .setY(0.025);
      mesh(
        land,
        box,
        j % 2 ? 0xb3a18b : 0xc8b69e,
        tile,
        [0.19, 0.036, 0.43],
      ).rotation.y = -a;
    }
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
    const heading = outward.clone().negate();
    const ramp = polar(innerEdge + 0.06, a);
    const entrance = polar(coreEdge - 0.06, a);
    bridge(root, ramp, entrance, i);
    const workers = pillar.checked.map((checked, j) => {
      const actor = courier(
        i === 2
          ? 0x555c69
          : i === 4 || i === 7
            ? 0x267a83
            : uniforms[(i + (j % 2)) % uniforms.length],
        i,
      );
      actor.root.scale.setScalar(0.72);
      const sleep = new T.Sprite(sleepMaterial);
      sleep.position.set(0, 0.48, -0.37);
      sleep.scale.set(0.56, 0.28, 1);
      actor.root.add(sleep);
      const cargo = fuel(actor.upper, vec(0, 0.26, 0.23), i);
      cargo.visible = false;
      root.add(actor.root);
      const home = center
        .clone()
        .addScaledVector(outward, -0.25 + (j % 4) * 0.29)
        .addScaledVector(lateral, j < 4 ? -0.75 : 0.77);
      actor.root.position.copy(home);
      const lane = ((j % 2) - 0.5) * 0.15;
      const offset = vec(-heading.z * lane, 0, heading.x * lane);
      const path = [
        home,
        ramp.clone().add(offset),
        entrance.clone().add(offset),
      ];
      path.push(polar(0.87, a + lane));
      return {
        actor,
        sleep,
        cargo,
        home,
        path,
        elapsed: checked ? -0.2 - j * 0.64 : 0,
        checked,
        delivered: false,
      };
    });
    routes.push({ workers, machinery });
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

  function rest(worker) {
    worker.actor.root.position.copy(worker.home);
    worker.actor.pose.rotation.x = worker.checked ? 0 : -Math.PI / 2;
    worker.actor.pose.position.y = worker.checked ? 0 : 0.13;
    worker.sleep.visible = !worker.checked;
    worker.actor.upper.position.y = 0;
    worker.actor.legs.forEach((leg) => {
      leg.rotation.x = 0;
    });
    worker.actor.arms.forEach((arm) => {
      arm.rotation.x = 0;
    });
    worker.cargo.visible = false;
  }

  function advance(worker, index, delta, motion) {
    if (!worker.checked || !motion) {
      rest(worker);
      return;
    }
    worker.actor.pose.rotation.x = 0;
    worker.actor.pose.position.y = 0;
    worker.sleep.visible = false;
    worker.elapsed += delta;
    if (worker.elapsed < 0) return;
    const { actor, path } = worker;
    const outbound = 3.9;
    const cycle = 8.4;
    const t = worker.elapsed;
    if (t >= cycle) {
      worker.elapsed = -0.7;
      worker.delivered = false;
      rest(worker);
      return;
    }
    const carrying = t < outbound;
    const progress = carrying
      ? t / outbound
      : Math.max(0, 1 - (t - outbound) / (cycle - outbound - 0.6));
    const segment = progress * (path.length - 1);
    const step = Math.min(path.length - 2, Math.floor(segment));
    const fraction = segment - step;
    const from = path[step];
    const to = path[step + 1];
    if (carrying) walk(worker, from, to, fraction, Math.sin(t * 14));
    else walk(worker, to, from, 1 - fraction, Math.sin(t * 14));
    worker.cargo.visible = carrying;
    actor.arms.forEach((arm) => {
      arm.rotation.x = carrying ? -1.05 : 0;
    });
    if (!worker.delivered && !carrying) {
      worker.delivered = true;
      fire.arrive(1, index);
      if (index === selected) {
        const [, label, unit] = workshops[index];
        onDelivery?.("送達 · 1" + unit + label);
      }
    }
  }

  return {
    root,
    pieces: [],
    centers,
    pickables,
    labelPoints: centers.map((point) => point.clone().setY(1.15)),
    dispose() {
      sleepMaterial.map.dispose();
    },
    setTime: scenery.setTime,
    highlight,
    refresh(change, motion) {
      highlight(selected);
      fire.reset(count());
      if (!change) return;
      const worker = routes[change.pillar].workers[change.action];
      if (!worker) return;
      worker.checked = pillars[change.pillar].checked[change.action];
      worker.elapsed = -0.1;
      worker.delivered = false;
      if (!worker.checked || !motion) rest(worker);
    },
    tick(time, delta, light, motion) {
      if (motion) scenery.drift(time);
      routes.forEach((route, index) => {
        if (motion) route.machinery?.(time + index * 0.47);
        route.workers.forEach((worker) =>
          advance(worker, index, delta, motion),
        );
      });
      fire.tick(time, delta, light, motion);
      lanterns.forEach((lamp) => {
        lamp.emissiveIntensity = light * 1.9;
      });
    },
  };
}
