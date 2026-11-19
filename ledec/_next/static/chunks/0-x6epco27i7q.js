(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,97856,e=>{"use strict";var t=e.i(71645);let{OD:a,ODB:r}=Function(`/* ================= SUBJECT GEOMETRY - fenced =========================
   Swap only this block to swap the subject. One model in metres: x runs
   along the car from the front wheel centre (front to the left, the left
   side seen square on), z up from the ground. The drawing is a crop of a
   generic car side between the wheels: the rear of the front wing, both
   doors, the rear wing over the rear wheel arch, the side glass cut off
   above the belt line. No make: no lamp, grille, badge or roof outline.
   The light is a board of vertical light lines (a reflector board or a
   row of tube lamps) standing in front of the side. A viewer far in front
   sees board line s where  s = x + G(x) - 2D dh/dx  (law of reflection,
   small slopes): G is the gentle plan curve of the side (lines close up
   toward the ends), h the dent, depth toward the viewer negative.
   A low spot widens a line, its raised shoulder narrows the next ones
   (Dingking PDR training, module B). Vertical lines cross the swage line
   unbent, because a swage line changes only dh/dz. The dent is cut off at
   its own panel's edges: a dent in one door does not bend the line on the
   next panel. Each variant gives its dent (centre, spread along and
   across, angle, strength k = 1 - narrowest stretch, which stays under 1 so
   no line folds), the panel it lies in, the marker
   ring and the four labels (label centre lx, leader end tx, tz). On a tall
   phone the drawing shows a window WW long on the side, from win, centred on
   the repair as far as the drawing allows, with its own places for the first
   three labels (labP, same format; „Sp\xe1ra dveř\xed“ is hidden there).
   The board is wide enough (N lines) to run on across the panel gaps onto
   the neighbouring panels: after a good repair its lines continue there
   unbroken, which is what „matched to the paint around it“ means (bo would
   shift the band along the side; it stays 0, so the middle line keeps
   running through the dent's centre). The drawing is cut by crisp break
   lines (left through the front wheel, right through the rear wing, top
   through the side glass), never faded.
   Palette, motion, timing, caption and layout live outside. */
var OD = (function () {
  var L = 2.66,                 /* rozvor */
      ZW = 0.31,                /* střed kola nad zem\xed */
      RT = 0.305, RR = 0.2,     /* pneumatika, disk */
      RL = 0.39,                /* lem podběhu */
      RG = 0.44,                /* v\xfdřez zadn\xedch dveř\xed kolem podběhu */
      ZSB = 0.19,               /* spodn\xed hrana prahu */
      ZD = 0.31,                /* spodn\xed hrana dveř\xed (sp\xe1ra nad prahem) */
      ZC = 1.24,                /* ořez kresby nahoře, přes bočn\xed okna */
      XC0 = 0, XC1 = 3.0,       /* ořez vlevo a vpravo */
      XF = 0.52,                /* předn\xed hrana předn\xedch dveř\xed */
      XB = 1.57,                /* sp\xe1ra mezi dveřmi pod sloupkem B */
      XR = 2.38,                /* zadn\xed hrana zadn\xedch dveř\xed */
      XA = 0.47,                /* pata sloupku A na linii oken */
      AS = 1.25,                /* sklon sloupku A, dx na dz */
      ZT = 1.44, VX = -0.04, VW = 3.08, VH = 1.51,
      P = 0.088, WL = 0.034, N = 19, /* rozteč, š\xedřka a počet světeln\xfdch čar desky (deska přesahuje přes sp\xe1ry na sousedn\xed d\xedly) */
      GC = 0.037, XM = 1.5,     /* půdorysn\xe9 prohnut\xed boku: ds/dx = 1 + 3 GC (x - XM)^2 */
      WW = 1.79;                /* okno kresby na vysok\xe9m telefonu, d\xe9lka boku v metrech */
  function zb(x) { return 0.972 + 0.012 * x; }   /* linie oken (spodn\xed hrana skel) */
  function zs(x) { return 0.775 + 0.012 * x; }   /* prolis */
  function xa(z) { return XA + (z - zb(XA)) * AS; }
  function zl(x, xc) { var d = x - xc; return ZW + Math.sqrt(Math.max(0, RL * RL - d * d)); }
  var BODY = { L: L, ZW: ZW, RT: RT, RR: RR, RL: RL, RG: RG, ZSB: ZSB, ZD: ZD, ZC: ZC, XC0: XC0, XC1: XC1,
    XF: XF, XB: XB, XR: XR, XA: XA, AS: AS, ZT: ZT, VX: VX, VW: VW, VH: VH, P: P, WL: WL, N: N, GC: GC, XM: XM, WW: WW,
    zb: zb, zs: zs, xa: xa, zl: zl,
    /* rear door: vertical rear edge down to the cut around the arch */
    zr: ZW + Math.sqrt(RG * RG - (XR - L) * (XR - L)),
    hF: [1.385, 0.905], hR: [2.185, 0.915] };   /* středy klik */

  /* variant 1: round dent on the swage line of the front door */
  var V1 = { x0: 1.0, z0: zs(1.0), su: 0.062, sv: 0.062, th: 0, k: 0.74, pan: [XF, XB], bo: 0,
    ring: [1.0, zs(1.0), 0.178, 0.178, 0],
    lab: [[0.4, 0, 0.93], [1.32, 0, 0], [2.3, 2.0, zs(2.0)], [1.85, XB, 0.55]],
    win: 0.105, labP: [[0.47, 0, 0.93], [1.20, 0, 0], [1.64, 1.6, zs(1.6)]],
    label: "Bok osobn\xedho auta mezi koly v pohledu ze strany: zadn\xed č\xe1st předn\xedho blatn\xedku, předn\xed a zadn\xed dveře s klikami, zadn\xed blatn\xedk nad podběhem kola, nad nimi bočn\xed okna a zpětn\xe9 zrc\xe1tko. Přes boky vede prolis. Na předn\xedch dveř\xedch se odr\xe1ž\xed p\xe1s svisl\xfdch světeln\xfdch čar a pokračuje přes sp\xe1ry na předn\xed blatn\xedk i na zadn\xed dveře. Kulat\xe1 prom\xe1čklina př\xedmo na prolisu č\xe1ry v sobě rozšiřovala a okolo zužovala, po vyrovn\xe1n\xed plechu běž\xed rovně a přes sp\xe1ru navazuj\xed bez zlomu. M\xedsto opravy je zakroužkovan\xe9. Kresba je v\xfdřez ohraničen\xfd čarami přerušen\xed, schematick\xe1, bez měř\xedtka." };
  /* variant 2: long crease on the rear wing above the wheel arch, running through the swage line */
  var V2 = { x0: 2.71, z0: zs(2.71), su: 0.11, sv: 0.03, th: 18, k: 0.72, pan: [XR, 4], bo: 0,
    ring: [2.71, zs(2.71), 0.27, 0.105, 18],
    lab: [[1.72, 0, 0.93], [2.63, 0, 0], [0.62, 1.1, zs(1.1)], [1.15, XB, 0.55]],
    win: 1.25, labP: [[1.95, 0, 0.93], [2.63, 0, 0], [1.46, 1.50, zs(1.50)]],
    label: "Bok osobn\xedho auta mezi koly v pohledu ze strany: zadn\xed č\xe1st předn\xedho blatn\xedku, předn\xed a zadn\xed dveře s klikami, zadn\xed blatn\xedk nad podběhem kola, nad nimi bočn\xed okna a zpětn\xe9 zrc\xe1tko. Přes boky vede prolis. Na zadn\xedm blatn\xedku se odr\xe1ž\xed p\xe1s svisl\xfdch světeln\xfdch čar a pokračuje přes sp\xe1ru na zadn\xed dveře. Dlouh\xe1 r\xfdha šikmo přes prolis nad podběhem kola č\xe1ry l\xe1mala, po vyrovn\xe1n\xed plechu běž\xed rovně a přes sp\xe1ru navazuj\xed bez zlomu. M\xedsto opravy je zakroužkovan\xe9. Kresba je v\xfdřez ohraničen\xfd čarami přerušen\xed, schematick\xe1, bez měř\xedtka." };
  /* variant 3: dent in the front door close to its rear edge */
  var V3 = { x0: 1.43, z0: 0.56, su: 0.05, sv: 0.05, th: 0, k: 0.74, pan: [XF, XB], bo: 0,
    ring: [1.43, 0.56, 0.115, 0.15, 0],
    lab: [[0.56, 0, 0.93], [1.47, 0, 0], [2.6, 2.1, zs(2.1)], [2.03, XB, 0.38]],
    win: 0.535, labP: [[0.90, 0, 0.93], [1.55, 0, 0], [2.0, 1.95, zs(1.95)]],
    label: "Bok osobn\xedho auta mezi koly v pohledu ze strany: zadn\xed č\xe1st předn\xedho blatn\xedku, předn\xed a zadn\xed dveře s klikami, zadn\xed blatn\xedk nad podběhem kola, nad nimi bočn\xed okna a zpětn\xe9 zrc\xe1tko. Přes boky vede prolis. Přes sp\xe1ru mezi dveřmi se odr\xe1ž\xed p\xe1s svisl\xfdch světeln\xfdch čar. Prom\xe1čklina na předn\xedch dveř\xedch těsně u jejich zadn\xed hrany č\xe1ry na těchto dveř\xedch oh\xfdbala, na zadn\xedch dveř\xedch zůstaly rovn\xe9. Po vyrovn\xe1n\xed plechu běž\xed rovně a přes sp\xe1ru navazuj\xed bez zlomu. M\xedsto opravy je zakroužkovan\xe9. Kresba je v\xfdřez ohraničen\xfd čarami přerušen\xed, schematick\xe1, bez měř\xedtka." };

  /* dent depth (times 2D): Gaussian, rotated, faded out within FE of its panel's edges */
  var FE = 0.04;
  function ss(t) { t = Math.max(0, Math.min(1, t)); return t * t * (3 - 2 * t); }
  function prep(v) {
    var t = v.th * Math.PI / 180, c = Math.cos(t), s = Math.sin(t);
    v.ct = c; v.st = s;
    v.c = v.x0 + G(v.x0) + v.bo;   /* lamp band: a line is seen through the dent's centre (Dingking: line in the center of the dent); the band reaches over the panel gap bo away */
    v.q = v.k / (c * c / (v.su * v.su) + s * s / (v.sv * v.sv));   /* 2DA */
    var r = v.ring;
    [v.lab, v.labP].forEach(function (lab) {
      if (!lab[1][1]) {                                               /* ring top point = leader end */
        var b = -1e9, i, a, x, z;
        for (i = 0; i < 360; i++) { a = i * Math.PI / 180;
          x = r[0] + r[2] * Math.cos(a) * Math.cos(r[4] * Math.PI / 180) - r[3] * Math.sin(a) * Math.sin(r[4] * Math.PI / 180);
          z = r[1] + r[2] * Math.cos(a) * Math.sin(r[4] * Math.PI / 180) + r[3] * Math.sin(a) * Math.cos(r[4] * Math.PI / 180);
          if (z > b) { b = z; lab[1][1] = x; lab[1][2] = z; } } }
      if (!lab[0][1]) { var s0 = v.c - (N - 1) / 2 * P; lab[0][1] = ginv(s0); }   /* outermost line, left */
    });
    return v;
  }
  function H(v, x, z) {   /* 2D h, negative into the panel */
    var dx = x - v.x0, dz = z - v.z0, u = dx * v.ct + dz * v.st, w = -dx * v.st + dz * v.ct;
    var g = Math.exp(-(u * u / (2 * v.su * v.su) + w * w / (2 * v.sv * v.sv)));
    return -v.q * g * ss((x - v.pan[0]) / FE) * ss((v.pan[1] - x) / FE);
  }
  function G(x) { var d = x - XM; return GC * d * d * d; }
  function ginv(s) { var lo = s - 0.5, hi = s + 0.5, i, m; for (i = 0; i < 40; i++) { m = (lo + hi) / 2; if (m + G(m) < s) lo = m; else hi = m; } return (lo + hi) / 2; }
  /* board line seen at panel point (x, z), dent at strength a (1 = before repair, 0 = straight) */
  function S(v, x, z, a) { var e = 1e-4; return x + G(x) - a * (H(v, x + e, z) - H(v, x - e, z)) / (2 * e); }
  function X(v, s, z, a) {   /* panel x where board line s is seen at height z (S is monotone in x: k < 1) */
    var lo = s - 0.4, hi = s + 0.4, i, m;
    for (i = 0; i < 26; i++) { m = (lo + hi) / 2; if (S(v, m, z, a) < s) lo = m; else hi = m; }
    return (lo + hi) / 2;
  }
  return { BODY: BODY, VAR: [prep(V1), prep(V2), prep(V3)], S: S, X: X, H: H, G: G, ginv: ginv };
})();
/* ================= end subject geometry ============================ */

/* builder: draws only what the block above defines. Returns the SVG markup as a string,
   so the very same code writes the static still into the page and redraws it in the browser. */
var ODB = (function () {
  var B = OD.BODY, NS = "http://www.w3.org/2000/svg";
  function q(v) { return Math.round(v * 1000) / 1000; }
  function Y(z) { return q(B.ZT - z); }
  function p(x, z) { return q(x) + " " + Y(z); }
  function arc(r, x, z, la, sw) { return "A" + r + " " + r + " 0 " + la + " " + sw + " " + p(x, z); }
  var zbx = B.zb, zsx = B.zs, rl = B.RL, L = B.L;
  var sbF = Math.sqrt(rl * rl - (B.ZW - B.ZSB) * (B.ZW - B.ZSB));   /* lip at sill bottom */
  var zl1 = B.zl(B.XC1, L), xaT = B.xa(B.ZC);
  /* painted side: shoulder, A-pillar, crop, rear arch, sill, front arch */
  var XCT = 2.7;   /* the rear pillar's edge meets the crop line */
  var SIL = "M" + p(0, zbx(0)) + "L" + p(B.XA, zbx(B.XA)) + "L" + p(xaT, B.ZC) + "H" + q(XCT) + "L" + p(B.XC1, zbx(B.XC1)) + "V" + Y(zl1) +
    arc(rl, L - sbF, B.ZSB, 0, 0) + "H" + q(sbF) + arc(rl, 0, B.ZW + rl, 0, 0) + "Z";
  /* the crop: crisp break lines in drawing convention (a straight cut with one Z jog), left through the front
     wheel, right through the rear wing, top through the side glass; the same path clips the side and is inked */
  var BA = 0.07, BB = 0.036, ZML = 0.87, ZMR = 0.65, XMT = 2.0, ZG = -0.08;
  function brkV(x, z0, z1, zm) { return [[x, z0], [x, zm - BA], [x + BB, zm - BA / 3], [x - BB, zm + BA / 3], [x, zm + BA], [x, z1]]; }
  function brkH(z, x0, x1, xm) { return [[x0, z], [xm - BA, z], [xm - BA / 3, z - BB], [xm + BA / 3, z + BB], [xm + BA, z], [x1, z]]; }
  function pts(a) { return a.map(function (t) { return p(t[0], t[1]); }).join("L"); }
  var CROP = "M" + pts(brkV(B.XC0, ZG, B.ZC, ZML)) + "L" + pts(brkH(B.ZC, B.XC0, B.XC1, XMT)) + "L" + pts(brkV(B.XC1, ZG, B.ZC, ZMR).reverse()) + "Z";
  var BRK = "M" + pts(brkV(B.XC0, 0, zbx(B.XC0), ZML)) + "M" + pts(brkH(B.ZC, xaT, XCT, XMT)) + "M" + pts(brkV(B.XC1, zl1, zbx(B.XC1), ZMR));
  /* where the board lines can be seen: painted metal from the belt line down to the door bottom */
  /* its right edge follows the right break line, so the board's lines are cut exactly where the side is */
  var STR = "M" + p(0, zbx(0)) + "L" + pts(brkV(B.XC1, zl1, zbx(B.XC1), ZMR).reverse()) + arc(rl, L - rl, B.ZD, 0, 0) +
    "H" + q(rl) + arc(rl, 0, B.ZW + rl, 0, 0) + "Z";
  var xRw = L - B.RG;
  /* the board's lines end at the crop: x is held within the cut (beyond it they are clipped anyway), so no drawn part
     reaches past the drawing's frame */
  function cx(x) { return Math.min(Math.max(x, B.XC0 - 0.01), B.XC1 + 0.01); }
  function stripeD(v, sc, a, w) {   /* one light line of the board: [sc - w/2, sc + w/2] */
    var p = function (x, z) { return q(cx(x)) + " " + Y(z); }, q2 = function (x) { return q(cx(x)); };
    var s1 = sc - w / 2, s2 = sc + w / 2, zt = 1.02, zbo = 0.27, near = a > 0 && Math.min(Math.abs(s1 - v.x0), Math.abs(s2 - v.x0)) < 0.42;
    if (!near) { var x1 = OD.ginv(s1), x2 = OD.ginv(s2);
      return "M" + p(x1, zt) + "V" + Y(zbo) + "H" + q2(x2) + "V" + Y(zt) + "Z"; }
    var lo = Math.max(zbo, v.z0 - 0.34), hi = Math.min(zt, v.z0 + 0.34), n = Math.ceil((hi - lo) / 0.0085), i, z, l = [], r = [];
    for (i = 0; i <= n; i++) { z = hi - (hi - lo) * i / n; l.push(p(OD.X(v, s1, z, a), z)); r.push(p(OD.X(v, s2, z, a), z)); }
    var d = "M" + p(OD.X(v, s1, zt, a), zt) + "L" + l.join("L") + "L" + p(OD.X(v, s1, zbo, a), zbo) +
      "L" + p(OD.X(v, s2, zbo, a), zbo) + "L" + r.reverse().join("L") + "L" + p(OD.X(v, s2, zt, a), zt) + "Z";
    return d;
  }
  /* the board's face first (a faint field: its dark lines are not black), then its light lines */
  function stripes(v, dlt, a) { var o = [stripeD(v, v.c + dlt, a, B.N * B.P + 0.02)], i, sc;
    for (i = 0; i < B.N; i++) { sc = v.c + (i - (B.N - 1) / 2) * B.P + dlt;
      if (OD.ginv(sc - B.WL / 2) > B.XC1 || OD.ginv(sc + B.WL / 2) < B.XC0) continue;   /* wholly beyond the cut */
      o.push(stripeD(v, sc, a, B.WL)); }
    return o; }
  function rr(cx, cz, w, h) { var r = h / 2; return "M" + p(cx - w / 2 + r, cz + r) + "H" + q(cx + w / 2 - r) + arc(r, cx + w / 2 - r, cz - r, 0, 1) +
    "H" + q(cx - w / 2 + r) + arc(r, cx - w / 2 + r, cz + r, 0, 1) + "Z"; }
  function ring(v) {   /* a marker ring drawn by hand: a little over one turn, the end overrunning the start */
    var r = v.ring, t = r[4] * Math.PI / 180, c = Math.cos(t), s = Math.sin(t), i, a, f, x, z, o = [], n = 96;
    for (i = 0; i <= n; i++) { a = -2.3 + (i / n) * 2 * Math.PI * 1.07; f = 1 + 0.035 * Math.sin(a * 2 + 0.7) + 0.02 * (i / n);
      x = r[2] * f * Math.cos(a); z = r[3] * f * Math.sin(a); o.push(p(r[0] + x * c - z * s, r[1] + x * s + z * c)); }
    return "M" + o.join("L");
  }
  /* the opening without rewriting any geometry. The straight still B (a = 0) is the markup; the script adds the
     knot sets once, before the opening: KS lists them from the outside in (strength a, how long its ellipse takes
     to shrink, s). Each set shows inside its ellipse (RK sigma along and across, turned with the dent) and outside
     the next, stronger set's ellipse; B shows outside the weakest. Before the pull every ellipse is the full size,
     so the strongest set (the full knot) covers it all. In the pull every ellipse shrinks to the dent's centre, the
     stronger ones sooner, so the knot relaxes from its edge inward in steps of a quarter. The board's faint field
     is the same in every set (its edges lie outside every ellipse) and sits on its own layer, unclipped.
     Beyond RK sigma a knot set and B differ by under half a pixel at 1440 (kontrola). */
  var RK = 3.5, KS = [{ a: 0.25, t: 1.25 }, { a: 0.5, t: 1.05 }, { a: 0.75, t: 0.85 }, { a: 1, t: 0.65 }], NP = 24, OV = 0.985;
  function pq(v) { return Math.round(v * 100) / 100; }
  function pc(x, z) { return pq((x - B.VX) / B.VW * 100) + "% " + pq((B.ZT - z) / B.VH * 100) + "%"; }
  function ell(v, f) { var o = [], j, a, eu = RK * v.su * f, ev = RK * v.sv * f, x, z;
    for (j = 0; j < NP; j++) { a = j / NP * 2 * Math.PI; x = eu * Math.cos(a); z = ev * Math.sin(a);
      o.push(pc(v.x0 + x * v.ct - z * v.st, v.z0 + x * v.st + z * v.ct)); }
    return o; }
  function poly(pt) { return "polygon(" + pt.join(",") + ")"; }
  /* a hole a little smaller than the next set's ellipse, so the two clip edges overlap instead of leaving a seam */
  function hole(pt) { return "polygon(evenodd,0% 0%,100% 0%,100% 100%,0% 100%,0% 0%," + pt.join(",") + "," + pt[0] + ",0% 0%)"; }
  function clip(v, sh, d, f) { return "--c0:" + sh(ell(v, f)) + ";--c1:" + sh(ell(v, 0)) + ";--pd:" + d + "s"; }
  /* the band's extent in % of the drawing's width, for the lamp's pass: the board's field, whose edges lie
     outside every knot ellipse, so the pass reveals something in every frame */
  function band(v) { var w = B.N * B.P + 0.02, l = OD.ginv(v.c - w / 2 - 0.005), r = OD.ginv(v.c + w / 2 + 0.005);
    return [pq(100 - Math.max(0, (l - B.VX) / B.VW * 100)), pq(Math.max(0, 100 - (r - B.VX) / B.VW * 100))]; }
  function open(c, a) { return '<svg class="d-odlesk-svg ' + c + '" xmlns="' + NS + '" viewBox="' + [B.VX, 0, B.VW, B.VH].join(" ") + '" preserveAspectRatio="xMidYMid meet" ' + a + ' focusable="false">'; }
  function lines(c, sty, d, from) { var o = open(c, 'aria-hidden="true"' + (sty ? ' style="' + sty + '"' : '')) + '<g class="od-str" clip-path="url(#od-cs)">', i;
    for (i = from; i < d.length; i++) o += '<path class="od-ln' + (i ? '' : ' od-bd') + '" d="' + d[i] + '"/>';
    return o + '</g></svg>'; }
  /* the knot sets for the opening, built once by the script: each in a wrapper clipped to its own ellipse, the
     lines inside clipped by a hole the size of the next set's ellipse (the strongest has none) */
  function knots(vi) { var v = OD.VAR[vi], o = "", k, n = KS.length;
    for (k = 0; k < n; k++) o += '<div class="od-kw" style="' + clip(v, poly, KS[k].t, 1) + '">' +
      lines("od-sk", k < n - 1 ? clip(v, hole, KS[k + 1].t, OV) : "", stripes(v, 0, KS[k].a), 1) + '</div>';
    return o; }
  /* when each label and its leader come in (s): the parts with the drawing, the place of the repair with its ring */
  var LD = [0.55, 2.2, 0.63, 0.71];
  /* wheel detail: tread blocks as short radial hatching on the tyre's shoulder, five windows between the spokes
     of a plain steel-look wheel and five wheel nuts (no maker's pattern) */
  function tread(c) { var o = "", i, a, r1 = B.RT - 0.03, r2 = B.RT - 0.004;
    for (i = 0; i < 52; i++) { a = i / 52 * 2 * Math.PI;
      o += "M" + p(c + r1 * Math.cos(a), B.ZW + r1 * Math.sin(a)) + "L" + p(c + r2 * Math.cos(a), B.ZW + r2 * Math.sin(a)); }
    return o; }
  function rimWin(c) { var o = "", k, a, d = 0.36, r1 = 0.088, r2 = 0.162, f = function (r, t) { return p(c + r * Math.cos(t), B.ZW + r * Math.sin(t)); };
    for (k = 0; k < 5; k++) { a = (k * 72 + 54) * Math.PI / 180;
      o += "M" + f(r1, a - d * 0.8) + "L" + f(r2, a - d) + "A" + r2 + " " + r2 + " 0 0 0 " + f(r2, a + d) + "L" + f(r1, a + d * 0.8) + "A" + r1 + " " + r1 + " 0 0 1 " + f(r1, a - d * 0.8) + "Z"; }
    return o; }
  function lugs(c) { var o = "", k, a, r = 0.011, x, z;
    for (k = 0; k < 5; k++) { a = (k * 72 + 90) * Math.PI / 180; x = c + 0.034 * Math.cos(a); z = B.ZW + 0.034 * Math.sin(a);
      o += "M" + p(x - r, z) + "A" + r + " " + r + " 0 1 0 " + p(x + r, z) + "A" + r + " " + r + " 0 1 0 " + p(x - r, z) + "Z"; }
    return o; }
  /* wheel-arch lips: a highlight just outside the arch edge and the lip's return flange just inside it */
  function lip(c, r) { return "M" + p(c - r, B.ZW) + "A" + r + " " + r + " 0 0 1 " + p(c + r, B.ZW); }
  /* door mirror at the front door's window corner, side view: housing, its parting line, the base on the door */
  var MIR = "M" + p(0.6, 0.99) + "L" + p(0.632, 1.0) + "H" + q(0.83) + "Q" + p(0.868, 1.004) + " " + p(0.862, 1.045) + "L" + p(0.846, 1.088) +
    "Q" + p(0.836, 1.108) + " " + p(0.806, 1.108) + "H" + q(0.668) + "Q" + p(0.628, 1.104) + " " + p(0.622, 1.064) + "L" + p(0.6, 1.0) + "Z";
  function leader(l) { return "M" + p(l[0], 1.39) + "V" + Y(1.3) + "L" + p(l[1], l[2]); }
  function svg(vi) {
    var v = OD.VAR[vi], o = [], i, st = stripes(v, 0, 0), zr = B.zr;
    /* stacked layers with one viewBox: the body; the band (the board's field and its light lines, where the
       script adds the knot sets for the opening); on top the lines, labels' leaders and ring */
    o.push(open("od-sa", 'aria-hidden="true"'));
    o.push('<defs><clipPath id="od-cc"><path d="' + CROP + '"/></clipPath>' +
      '<clipPath id="od-cs"><path d="' + STR + '"/></clipPath>' +
      '<clipPath id="od-ci"><path d="' + SIL + '"/></clipPath>' +
      '<clipPath id="od-co"><path clip-rule="evenodd" d="M' + p(B.VX, B.ZT) + 'h' + B.VW + 'v' + B.VH + 'h-' + B.VW + 'Z' + SIL + '"/></clipPath>' +
      '<linearGradient id="od-gp" gradientUnits="userSpaceOnUse" x1="0" y1="' + Y(1.0) + '" x2="0" y2="' + Y(B.ZD) + '">' +
      '<stop offset="0" stop-color="#3D5062"/><stop offset=".13" stop-color="#2D3D4C"/><stop offset=".29" stop-color="#273543"/>' +
      '<stop offset=".31" stop-color="#1A2430"/><stop offset=".7" stop-color="#17202A"/><stop offset="1" stop-color="#121A22"/></linearGradient>' +
      '<linearGradient id="od-gg" gradientUnits="userSpaceOnUse" x1="0" y1="' + Y(B.ZC) + '" x2="0" y2="' + Y(1.0) + '">' +
      '<stop offset="0" stop-color="#1E2933"/><stop offset="1" stop-color="#0C1116"/></linearGradient>' +
      '<linearGradient id="od-gs" gradientUnits="userSpaceOnUse" x1="0" y1="' + Y(1.0) + '" x2="0" y2="' + Y(B.ZD) + '">' +
      '<stop offset="0" stop-color="#F6F9FA"/><stop offset=".29" stop-color="#E8EEF1"/><stop offset=".31" stop-color="#CBD5DC"/><stop offset="1" stop-color="#A9B6C0"/></linearGradient>' +
      '</defs>');
    o.push('<g class="od-body" clip-path="url(#od-cc)">');
    [0, L].forEach(function (c) {
      o.push('<path class="od-well" d="M' + p(c - sbF, B.ZSB) + "A" + rl + " " + rl + " 0 1 1 " + p(c + sbF, B.ZSB) + 'Z"/>');
      o.push('<circle class="od-tyre" cx="' + q(c) + '" cy="' + Y(B.ZW) + '" r="' + B.RT + '"/>');
      o.push('<path class="od-tr" d="' + tread(c) + '"/>');
      o.push('<circle class="od-sw2" cx="' + q(c) + '" cy="' + Y(B.ZW) + '" r="' + q(B.RT - 0.042) + '"/>');
      o.push('<circle class="od-rim" cx="' + q(c) + '" cy="' + Y(B.ZW) + '" r="' + B.RR + '"/>');
      o.push('<path class="od-rw" d="' + rimWin(c) + '"/>');
      o.push('<circle class="od-rim2" cx="' + q(c) + '" cy="' + Y(B.ZW) + '" r="' + q(B.RR * 0.72) + '"/>');
      o.push('<circle class="od-hub" cx="' + q(c) + '" cy="' + Y(B.ZW) + '" r="0.052"/>');
      o.push('<path class="od-lug" d="' + lugs(c) + '"/>');
    });
    o.push('<path class="od-paint" d="' + SIL + '"/>');
    o.push('<path class="od-sill" d="M' + p(sbF, B.ZSB) + "H" + q(L - sbF) + arc(rl, L - rl, B.ZD, 0, 1) + "H" + q(rl) + arc(rl, sbF, B.ZSB, 0, 1) + 'Z"/>');
    o.push('<path class="od-glass" d="M' + p(0.575, zbx(0.575) + 0.012) + "L" + p(1.525, zbx(1.525) + 0.012) + "V" + Y(B.ZC + 0.01) + "H" + q(xaT + 0.085) + 'Z' +
      "M" + p(1.615, zbx(1.615) + 0.012) + "L" + p(2.335, zbx(2.335) + 0.012) + "L" + p(2.215, B.ZC + 0.01) + "H" + q(1.615) + 'Z"/>');
    o.push('<path class="od-trim" d="M' + p(1.525, zbx(1.525)) + "H" + q(1.615) + "V" + Y(B.ZC + 0.01) + "H" + q(1.525) + 'Z"/>');
    /* glass: two faint reflection streaks per window (line detail, not a flat fill) */
    o.push('<path class="od-gl" d="M' + p(0.96, zbx(0.96) + 0.03) + "L" + p(1.14, B.ZC - 0.01) + "M" + p(1.06, zbx(1.06) + 0.03) + "L" + p(1.2, B.ZC - 0.04) +
      "M" + p(1.86, zbx(1.86) + 0.03) + "L" + p(2.04, B.ZC - 0.01) + "M" + p(1.96, zbx(1.96) + 0.03) + "L" + p(2.1, B.ZC - 0.04) + '"/>');
    o.push('</g></svg>');
    /* the board, seen in the paint: its faint field, and its light lines straight (the still); the lines' layer
       carries the hole the weakest knot set needs during the opening */
    var bd = band(v);
    o.push('<div class="od-band" style="--r0:' + bd[0] + '%;--r1:' + bd[1] + '%">');
    o.push(open("od-sf", 'aria-hidden="true"') + '<g class="od-str" clip-path="url(#od-cs)"><path class="od-ln od-bd" d="' + st[0] + '"/></g></svg>');
    o.push(lines("od-sb", clip(v, hole, KS[0].t, OV), st, 1));
    o.push('</div>');
    /* on top: panel gaps, swage line, handles, outline */
    o.push(open("od-sc", 'role="img" aria-label="' + v.label + '"'));
    o.push('<g class="od-top" clip-path="url(#od-cc)">');
    o.push('<path class="od-hi" d="M' + p(0, zsx(0) + 0.008) + "L" + p(B.XC1, zsx(B.XC1) + 0.008) + 'M' + p(B.XF + 0.007, B.ZD + 0.01) + "V" + Y(zbx(B.XF) - 0.01) +
      "M" + p(B.XB + 0.007, B.ZD + 0.01) + "V" + Y(zbx(B.XB) - 0.01) + "M" + p(B.XR + 0.007, zr + 0.01) + "V" + Y(zbx(B.XR) - 0.01) + '"/>');
    o.push('<path class="od-sw" d="M' + p(0, zsx(0)) + "L" + p(B.XC1, zsx(B.XC1)) + '"/>');
    var sx = Math.sqrt(rl * rl - (B.ZW - 0.248) * (B.ZW - 0.248));
    o.push('<path class="od-hi" d="' + lip(0, q(rl + 0.016)) + lip(L, q(rl + 0.016)) + "M" + p(sx + 0.01, 0.248) + "H" + q(L - sx - 0.01) + '"/>');
    o.push('<path class="od-lip" d="' + lip(0, q(rl - 0.02)) + lip(L, q(rl - 0.02)) + '"/>');
    o.push('<path class="od-gap" d="M' + p(B.XF, B.ZD) + "V" + Y(zbx(B.XF)) + "L" + p(xaT + 0.045, B.ZC) +
      "M" + p(B.XB, B.ZD) + "V" + Y(zbx(B.XB)) +
      "M" + p(xRw, B.ZD) + arc(B.RG, B.XR, zr, 0, 1) + "V" + Y(zbx(B.XR)) + "L" + p(2.26, B.ZC) +
      "M" + p(B.XF, B.ZD) + "H" + q(xRw) + "M" + p(rl, B.ZD) + "H" + q(B.XF) + "M" + p(xRw, B.ZD) + "H" + q(L - rl) + '"/>');
    o.push('<path class="od-seal" d="M' + p(B.XF, zbx(B.XF)) + "L" + p(B.XR, zbx(B.XR)) + '"/>');
    [B.hF, B.hR].forEach(function (h) {
      o.push('<path class="od-pk" d="' + rr(h[0], h[1], 0.2, 0.062) + '"/>');
      o.push('<path class="od-hd" d="' + rr(h[0], h[1] + 0.004, 0.165, 0.032) + '"/>');
      o.push('<path class="od-hh" d="M' + p(h[0] - 0.066, h[1] + 0.017) + "H" + q(h[0] + 0.066) + '"/>');
    });
    o.push('<path class="od-mir" d="' + MIR + '"/><path class="od-hh" d="M' + p(0.64, 1.05) + "H" + q(0.85) + '"/>');
    o.push('<path class="od-ol" d="M' + p(0, zbx(0)) + "L" + p(B.XA, zbx(B.XA)) + "L" + p(xaT, B.ZC) + "M" + p(XCT, B.ZC) + "L" + p(B.XC1, zbx(B.XC1)) +
      "M" + p(B.XC1, zl1) + arc(rl, L - sbF, B.ZSB, 0, 0) + "H" + q(sbF) + arc(rl, 0, B.ZW + rl, 0, 0) + '"/>');
    o.push('</g>');
    /* the crop: inked break lines along the cut (unclipped, so the whole stroke shows) */
    o.push('<path class="od-brk" d="' + BRK + '"/>');
    o.push('<path class="od-gr" d="M' + p(B.VX, 0) + "H" + q(B.VX + B.VW) + '"/>');
    /* the marker ring round the place of the repair */
    o.push('<path class="od-ring" pathLength="1" d="' + ring(v) + '"/>');
    /* leaders: ink on the ground, light with a dark edge on the paint */
    /* the whole side's leaders, and the tall phone's window with its own (three labels) */
    [["od-lds", v.lab], ["od-lds-p", v.labP]].forEach(function (g) {
      o.push('<g class="' + g[0] + '">');
      for (i = 0; i < g[1].length; i++) { var l = g[1][i], dd = leader(l), cl = i === 3 ? " od-l4" : "";
        o.push('<g class="od-ld' + cl + '" style="--d:' + LD[i] + 's"><path class="od-lo" clip-path="url(#od-co)" d="' + dd + '"/>' +
          '<path class="od-lu" clip-path="url(#od-ci)" d="' + dd + '"/><path class="od-lv" clip-path="url(#od-ci)" d="' + dd + '"/>' +
          '<circle class="od-ldt" cx="' + q(l[1]) + '" cy="' + Y(l[2]) + '" r="0.012"/></g>'); }
      o.push('</g>'); });
    o.push('</svg>');
    return o.join("");
  }
  function left(vi, i) { return q((OD.VAR[vi].lab[i][0] - B.VX) / B.VW * 100); }
  function leftP(vi, i) { var l = OD.VAR[vi].labP[i]; return l ? q((l[0] - B.VX) / B.VW * 100) : left(vi, i); }
  /* the window's offset: the drawing is VW / WW times the box's width and starts win metres along */
  function mx(vi) { return q(-(OD.VAR[vi].win - B.VX) / B.WW * 100); }
  return { svg: svg, stripes: stripes, left: left, leftP: leftP, mx: mx, knots: knots, q: q, LD: LD, KS: KS, RK: RK, band: band };
})();

return { OD: OD, ODB: ODB };`)();e.s(["Zivy",0,function({varianta:e}){return(0,t.useEffect)(()=>{let t=document.querySelector(".d-odlesk[data-hero]");if(!t||t._odlesk)return;t._odlesk=1,t.classList.add("is-js");let a=t.querySelector(".d-odlesk-fold");function n(){if(!a)return;let e=null;Array.prototype.forEach.call(a.children,function(t){t.offsetWidth&&(e&&t.classList.toggle("is-zl",t.offsetTop>e.offsetTop+4),e=t)})}n();let o=window.ResizeObserver&&a?new ResizeObserver(n):null;o&&a&&o.observe(a);let s=window.matchMedia("(prefers-reduced-motion: reduce)").matches,i=t.querySelector(".d-odlesk-fig .od-band"),l=0,d=!1;return s||!i||i.querySelector(".od-kw")||(i.insertAdjacentHTML("beforeend",r.knots(e-1)),t.classList.add("is-anim"),d=!0,l=window.setTimeout(function(){t.classList.add("is-done")},3950)),()=>{o&&o.disconnect(),l&&window.clearTimeout(l),d&&(t.classList.remove("is-anim","is-done"),i?.querySelectorAll(".od-kw").forEach(e=>e.remove())),t._odlesk=0}},[e]),null}],97856)},70155,e=>{"use strict";var t=e.i(43476),a=e.i(71645);e.s(["Odhal",0,function({className:e,children:r,...n}){let o=(0,a.useRef)(null);return(0,a.useEffect)(()=>{let e=o.current;if(!e||!window.IntersectionObserver||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;e.getBoundingClientRect().top>=window.innerHeight&&e.classList.add("is-ceka");let t=new IntersectionObserver(a=>{a.some(e=>e.isIntersecting)&&(e.classList.add("is-vidi"),t.disconnect())},{rootMargin:"0px 0px -18% 0px"});return t.observe(e),()=>t.disconnect()},[]),(0,t.jsx)("ol",{ref:o,className:e,...n,children:r})}])},44151,(e,t,a)=>{t.exports={hlas:"ja",typ:"karoserie",nenalezeno:{nadpis:{my:"Stránka s touto adresou tu není.",ja:"Stránka s touto adresou tu není."},text:{my:"Odkaz mohl zastarat, nebo je v adrese překlep (chyba 404). Služby, průběh opravy i telefon najdete na úvodní stránce.",ja:"Odkaz mohl zastarat, nebo je v adrese překlep (chyba 404). Služby, průběh opravy i telefon najdete na úvodní stránce."}},stranky:{sluzby:{my:"Služby",ja:"Služby"},postup:{my:"Jak to probíhá",ja:"Jak to probíhá"},onas:{my:"O nás",ja:"O mně"},kontakt:{my:"Kontakt",ja:"Kontakt"},dilna:{my:"Z dílny",ja:"Z dílny"}},kontakt:{napiste:{my:"Napište nám",ja:"Napište mi"},oblast:{my:"Kde pracujeme",ja:"Kde pracuji"},oteviraciDoba:{my:"Otevírací doba",ja:"Otevírací doba"}},typy:{obecny:{nazev:{my:"Autoservis",ja:"Autoservis"},nadpis:{zacatek:{my:"Opravíme",ja:"Opravím"},konec:{my:"vaše auto.",ja:"vaše auto."}},zprava:{my:"S čím vaše auto potřebuje pomoct",ja:"S čím vaše auto potřebuje pomoct"}},pneu:{nazev:{my:"Pneuservis",ja:"Pneuservis"},nadpis:{zacatek:{my:"Přezujeme",ja:"Přezuji"},konec:{my:"vaše auto.",ja:"vaše auto."}},zprava:{my:"Jaké pneumatiky nebo kola řešíte",ja:"Jaké pneumatiky nebo kola řešíte"}},karoserie:{nazev:{my:"Karosárna a lakovna",ja:"Karosárna a lakovna"},nadpis:{zacatek:{my:"Sladíme opravený díl",ja:"Sladím opravený díl"},konec:{my:"s okolním lakem.",ja:"s okolním lakem."}},zprava:{my:"Co je na karoserii poškozené",ja:"Co je na karoserii poškozené"}},diagnostika:{nazev:{my:"Autodiagnostika a autoelektrika",ja:"Autodiagnostika a autoelektrika"},nadpis:{zacatek:{my:"Najdeme",ja:"Najdu"},konec:{my:"závadu.",ja:"závadu."}},zprava:{my:"Co auto dělá a která kontrolka svítí",ja:"Co auto dělá a která kontrolka svítí"}},znacka:{nazev:{my:"Specializovaný servis",ja:"Specializovaný servis"},nadpis:{zacatek:{my:"Opravíme",ja:"Opravím"},konec:{my:"vaše auto.",ja:"vaše auto."}},zprava:{my:"S čím vaše auto potřebuje pomoct",ja:"S čím vaše auto potřebuje pomoct"}},stk:{nazev:{my:"Příprava na STK",ja:"Příprava na STK"},nadpis:{zacatek:{my:"Chystáme",ja:"Chystám"},konec:{my:"auta na STK.",ja:"auta na STK."}},zprava:{my:"Kdy vašemu autu končí STK",ja:"Kdy vašemu autu končí STK"}},motocykly:{nazev:{my:"Motoservis",ja:"Motoservis"},nadpis:{zacatek:{my:"Opravíme",ja:"Opravím"},konec:{my:"motorky.",ja:"motorky."}},zprava:{my:"S čím vaše motorka potřebuje pomoct",ja:"S čím vaše motorka potřebuje pomoct"}},detailing:{nazev:{my:"Autodetailing",ja:"Autodetailing"},nadpis:{zacatek:{my:"Vyčistíme",ja:"Vyčistím"},konec:{my:"vaše auto.",ja:"vaše auto."}},zprava:{my:"Co chcete na autě vyčistit nebo ošetřit",ja:"Co chcete na autě vyčistit nebo ošetřit"}}}}},73824,e=>{"use strict";var t=e.i(43476),a=e.i(22016),r=e.i(18566),n=e.i(71645),o=e.i(95007);let s=e.i(44151).default,i=e=>(0,o.dleHlasu)(s.hlas,e),l=["obecny","pneu","karoserie","diagnostika","znacka","stk","motocykly","detailing"].find(e=>e===s.typ)??"obecny";i((s.nadpis?{...s.typy[l],nadpis:{zacatek:s.nadpis.zacatek,konec:s.nadpis.konec}}:s.typy[l]).nazev);let d=[{href:"/sluzby/",text:i(s.stranky.sluzby)},{href:"/jak-to-probiha/",text:i(s.stranky.postup)},{href:"/o-nas/",text:i(s.stranky.onas)},{href:"/kontakt/",text:i(s.stranky.kontakt)}];e.s(["Hlavicka",0,function({nazev:e,jmeno:s,telefon:i,email:l}){let c=(0,r.usePathname)(),[u,h]=(0,n.useState)(!1),p=(0,n.useRef)(null),f=(0,n.useRef)(null);(0,n.useLayoutEffect)(()=>{p.current?.closest(".d-odlesk")?.classList.add("is-js")},[]),(0,n.useEffect)(()=>h(!1),[c]),(0,n.useEffect)(()=>{if(!u)return;let e=e=>{"Escape"===e.key&&(h(!1),f.current?.focus())};return document.addEventListener("keydown",e),()=>document.removeEventListener("keydown",e)},[u]);let v=e.trim().length>20,x=(0,o.hlavniAkce)(i,l);return(0,t.jsxs)("header",{className:`d-odlesk-hd${v?" is-long":""}${u?" is-open":""}`,ref:p,children:[(0,t.jsxs)(a.default,{className:"d-odlesk-brand",href:"/",children:[(0,t.jsx)("b",{children:(0,o.vlna)(e)}),(0,o.je)(s)?(0,t.jsx)("span",{children:(0,o.vlna)(s)}):null]}),(0,t.jsx)("nav",{className:"d-odlesk-nav",id:"d-odlesk-nav","aria-label":"Hlavní navigace",onClick:e=>{e.target.closest?.("a")&&h(!1)},children:d.map(e=>(0,t.jsx)(a.default,{href:e.href,"aria-current":c?.startsWith(e.href)?"page":void 0,children:(0,o.vlna)(e.text)},e.href))}),x?(0,t.jsxs)("div",{className:"d-odlesk-hr",children:["tel"===x.druh?(0,t.jsx)("a",{className:"d-odlesk-tel",href:(0,o.telHref)(i),children:(0,o.telText)(i)}):null,(0,t.jsx)("a",{className:"d-odlesk-btn",href:x.href,..."tel"===x.druh?{"data-volat":!0}:{},children:x.popisek})]}):null,(0,t.jsxs)("button",{className:"d-odlesk-menu",type:"button","aria-label":"Menu","aria-expanded":u,"aria-controls":"d-odlesk-nav",ref:f,onClick:()=>h(e=>!e),children:[(0,t.jsx)("i",{"aria-hidden":"true"}),(0,t.jsx)("i",{"aria-hidden":"true"}),(0,t.jsx)("i",{"aria-hidden":"true"})]})]})}],73824)},22016,(e,t,a)=>{"use strict";e.i(47167),Object.defineProperty(a,"__esModule",{value:!0});var r={default:function(){return b},useLinkStatus:function(){return k}};for(var n in r)Object.defineProperty(a,n,{enumerable:!0,get:r[n]});let o=e.r(90809),s=e.r(43476),i=o._(e.r(71645)),l=e.r(95057),d=e.r(8372),c=e.r(18581),u=e.r(18967),h=e.r(5550),p=e.r(88540),f=e.r(91949),v=e.r(73668),x=e.r(9396);function b(t){var a;let r,n,o,[b,k]=(0,i.useOptimistic)(f.IDLE_LINK_STATUS),g=(0,i.useRef)(null),{href:z,as:y,children:B,prefetch:w=null,passHref:M,replace:j,shallow:L,scroll:X,onClick:R,onMouseEnter:C,onTouchStart:Z,legacyBehavior:S=!1,onNavigate:P,transitionTypes:O,ref:T,unstable_dynamicOnHover:A,...D}=t;r=B,S&&("string"==typeof r||"number"==typeof r)&&(r=(0,s.jsx)("a",{children:r}));let V=i.default.useContext(d.AppRouterContext),q=!1!==w,E=!1===w?"none":!0===w?"full":"auto",W="none"!==E?"auto"===E?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,N="string"==typeof(a=y||z)?a:(0,l.formatUrl)(a);if(S){if(r?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=i.default.Children.only(r)}let F=S?n&&"object"==typeof n&&n.ref:T,K,H=i.default.useCallback(e=>(null!==V&&(g.current=(0,f.mountLinkInstance)(e,N,V,W,q,k,K)),()=>{g.current&&((0,f.unmountLinkForCurrentNavigation)(g.current),g.current=null),(0,f.unmountPrefetchableInstance)(e)}),[q,N,V,W,k,K]),_={ref:(0,c.useMergedRef)(H,F),onClick(t){S||"function"!=typeof R||R(t),S&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!V||t.defaultPrevented||function(t,a,r,n,o,s,l,d="none"){if("u">typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,v.isLocalURL)(a)){n&&(t.preventDefault(),location.replace(a));return}if(t.preventDefault(),s){let e=!1;if(s({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:h}=e.r(99781);i.default.startTransition(()=>{h(a,n?"replace":"push",!1===o?p.ScrollBehavior.NoScroll:p.ScrollBehavior.Default,r.current,l,d)})}}(t,N,g,j,X,P,O,E)},onMouseEnter(e){S||"function"!=typeof C||C(e),S&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),V&&q&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){S||"function"!=typeof Z||Z(e),S&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),V&&q&&(0,f.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,u.isAbsoluteUrl)(N)?_.href=N:S&&!M&&("a"!==n.type||"href"in n.props)||(_.href=(0,h.addBasePath)(N)),o=S?i.default.cloneElement(n,_):(0,s.jsx)("a",{...D,..._,children:r}),(0,s.jsx)(m.Provider,{value:b,children:o})}let m=(0,i.createContext)(f.IDLE_LINK_STATUS),k=()=>(0,i.useContext)(m);("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},18581,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"useMergedRef",{enumerable:!0,get:function(){return n}});let r=e.r(71645);function n(e,t){let a=(0,r.useRef)(null),n=(0,r.useRef)(null);return(0,r.useCallback)(r=>{if(null===r){let e=a.current;e&&(a.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(a.current=o(e,r)),t&&(n.current=o(t,r))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let a=e(t);return"function"==typeof a?a:()=>e(null)}}("function"==typeof a.default||"object"==typeof a.default&&null!==a.default)&&void 0===a.default.__esModule&&(Object.defineProperty(a.default,"__esModule",{value:!0}),Object.assign(a.default,a),t.exports=a.default)},18967,(e,t,a)=>{"use strict";e.i(47167),Object.defineProperty(a,"__esModule",{value:!0});var r={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return z},MissingStaticPage:function(){return g},NormalizeError:function(){return m},PageNotFoundError:function(){return k},SP:function(){return v},ST:function(){return x},WEB_VITALS:function(){return o},execOnce:function(){return s},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return h},loadGetInitialProps:function(){return f},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return y}};for(var n in r)Object.defineProperty(a,n,{enumerable:!0,get:r[n]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function s(e){let t,a=!1;return(...r)=>(a||(a=!0,t=e(...r)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>{let t=e.charCodeAt(0);return!!(t>=65&&t<=90||t>=97&&t<=122)&&i.test(e)};function d(){let{protocol:e,hostname:t,port:a}=window.location;return`${e}//${t}${a?":"+a:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function h(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function f(e,t){let a=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await f(t.Component,t.ctx)}:{};let r=await e.getInitialProps(t);if(a&&h(a))return r;if(!r)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${r}" instead.`),"__NEXT_ERROR_CODE",{value:"E1025",enumerable:!1,configurable:!0});return r}let v="u">typeof performance,x=v&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class m extends Error{}class k extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class g extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class z extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function y(e){return JSON.stringify({message:e.message,stack:e.stack})}},73668,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0}),Object.defineProperty(a,"isLocalURL",{enumerable:!0,get:function(){return o}});let r=e.r(18967),n=e.r(52817);function o(e){if(!(0,r.isAbsoluteUrl)(e))return!0;try{let t=(0,r.getLocationOrigin)(),a=new URL(e,t);return a.origin===t&&(0,n.hasBasePath)(a.pathname)}catch(e){return!1}}},98183,(e,t,a)=>{"use strict";Object.defineProperty(a,"__esModule",{value:!0});var r={assign:function(){return l},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return i}};for(var n in r)Object.defineProperty(a,n,{enumerable:!0,get:r[n]});function o(e){let t={};for(let[a,r]of e.entries()){let e=t[a];void 0===e?t[a]=r:Array.isArray(e)?e.push(r):t[a]=[e,r]}return t}function s(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;for(let[a,r]of Object.entries(e))if(Array.isArray(r))for(let e of r)t.append(a,s(e));else t.set(a,s(r));return t}function l(e,...t){for(let a of t){for(let t of a.keys())e.delete(t);for(let[t,r]of a.entries())e.append(t,r)}return e}},95057,(e,t,a)=>{"use strict";e.i(47167),Object.defineProperty(a,"__esModule",{value:!0});var r={formatUrl:function(){return i},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var n in r)Object.defineProperty(a,n,{enumerable:!0,get:r[n]});let o=e.r(90809)._(e.r(98183)),s=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:a}=e,r=e.protocol||"",n=e.pathname||"",i=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:a&&(d=t+(~a.indexOf(":")?`[${a}]`:a),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return r&&!r.endsWith(":")&&(r+=":"),e.slashes||(!r||s.test(r))&&!1!==d?(d="//"+(d||""),n&&"/"!==n[0]&&(n="/"+n)):d||(d=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${r}${d}${n}${c}${i}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return i(e)}}]);