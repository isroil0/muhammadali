/* ------------------------------------------------------------------
   Illustrated cover art for each project card. Hand-drawn SVG so the
   covers match the site palette exactly, cost nothing to load and need
   no external image requests.
   ------------------------------------------------------------------ */

const VIEW = '0 0 400 225'

/** Shared gradient + glow definitions, namespaced per scene. */
function Defs({ id }) {
  return (
    <defs>
      <linearGradient id={`${id}-stroke`} x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#4f9bff" />
        <stop offset="55%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <linearGradient id={`${id}-fill`} x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#4f9bff" stopOpacity="0.28" />
        <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.06" />
      </linearGradient>
      {/* straight lines need a userSpaceOnUse gradient: a horizontal or
          vertical path has a zero-area bbox, so an objectBoundingBox
          gradient would paint nothing at all */}
      <linearGradient id={`${id}-line`} gradientUnits="userSpaceOnUse"
                      x1="0" y1="0" x2="400" y2="225">
        <stop offset="0%" stopColor="#4f9bff" />
        <stop offset="55%" stopColor="#22d3ee" />
        <stop offset="100%" stopColor="#8b5cf6" />
      </linearGradient>
      <radialGradient id={`${id}-glow`} cx="50%" cy="45%" r="60%">
        <stop offset="0%" stopColor="#2f7bff" stopOpacity="0.30" />
        <stop offset="100%" stopColor="#2f7bff" stopOpacity="0" />
      </radialGradient>
    </defs>
  )
}

/* ===================== Oceanic York — aquarium ===================== */
function Fish({ x, y, scale = 1, opacity = 1, stroke, fill, className }) {
  return (
    <g transform={`translate(${x} ${y}) scale(${scale})`} opacity={opacity} className={className}>
      <path d="M0 0C8-9 26-9 34 0 26 9 8 9 0 0Z" fill={fill} stroke={stroke} strokeWidth="1.6" />
      <path d="M0 0-11-8-11 8Z" fill={fill} stroke={stroke} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M14-6 18-12 23-6" fill="none" stroke={stroke} strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="26" cy="-2" r="1.7" fill={stroke} />
    </g>
  )
}

function AquaScene() {
  const id = 'aqua'
  const s = `url(#${id}-stroke)`
  const f = `url(#${id}-fill)`

  return (
    <svg viewBox={VIEW} className="cover-art" role="img" aria-label="Aquarium illustration">
      <Defs id={id} />
      <rect width="400" height="225" fill={`url(#${id}-glow)`} />

      {/* water surface ripples */}
      <path d="M0 34q25-9 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0" fill="none"
            stroke={s} strokeOpacity="0.30" strokeWidth="1.6" />
      <path d="M0 46q25-7 50 0t50 0 50 0 50 0 50 0 50 0 50 0 50 0" fill="none"
            stroke={s} strokeOpacity="0.16" strokeWidth="1.2" />

      {/* seaweed */}
      <g stroke={s} strokeOpacity="0.5" strokeWidth="2.4" fill="none" strokeLinecap="round">
        <path d="M44 205c-9-20 7-32-2-52" className="sway" />
        <path d="M58 205c7-16-6-26 3-42" className="sway sway--b" />
        <path d="M352 205c9-24-8-36 1-56" className="sway sway--b" />
        <path d="M366 205c-6-18 5-28-3-44" className="sway" />
      </g>

      {/* sand bed */}
      <path d="M0 206q40-12 80-4t80 6 80-8 80 2 80-4v27H0Z" fill={f} />

      {/* fish */}
      <Fish x={96} y={104} scale={1.5} stroke={s} fill={f} className="swim swim--a" />
      <Fish x={236} y={76} scale={1} opacity={0.85} stroke={s} fill={f} className="swim swim--b" />
      <Fish x={268} y={148} scale={1.2} opacity={0.9} stroke={s} fill={f} className="swim swim--c" />
      <Fish x={166} y={168} scale={0.7} opacity={0.6} stroke={s} fill={f} className="swim swim--b" />

      {/* bubbles */}
      <g fill="none" stroke={s} strokeWidth="1.5" strokeOpacity="0.65">
        <circle cx="138" cy="150" r="3.5" className="bubble" />
        <circle cx="148" cy="170" r="2.4" className="bubble bubble--b" />
        <circle cx="131" cy="182" r="2" className="bubble bubble--c" />
        <circle cx="308" cy="160" r="3" className="bubble bubble--b" />
        <circle cx="316" cy="182" r="2" className="bubble bubble--c" />
      </g>
    </svg>
  )
}

/* ========================= Troya — gym ============================ */
function GymScene() {
  const id = 'gym'
  const s = `url(#${id}-stroke)`
  const f = `url(#${id}-fill)`
  const l = `url(#${id}-line)`

  return (
    <svg viewBox={VIEW} className="cover-art" role="img" aria-label="Gym illustration">
      <Defs id={id} />
      <rect width="400" height="225" fill={`url(#${id}-glow)`} />

      {/* attendance bars, bottom-left and clear of the dumbbell */}
      <g fill={f} stroke={s} strokeWidth="1.4" strokeOpacity="0.5" opacity="0.75">
        <rect x="26" y="158" width="15" height="34" rx="4" />
        <rect x="47" y="140" width="15" height="52" rx="4" />
        <rect x="68" y="122" width="15" height="70" rx="4" />
        <rect x="89" y="148" width="15" height="44" rx="4" />
      </g>

      {/* dumbbell, centred */}
      <g className="lift">
        <rect x="158" y="94" width="84" height="12" rx="6" fill={f} stroke={s} strokeWidth="2" />
        <rect x="144" y="78" width="13" height="44" rx="5" fill={f} stroke={s} strokeWidth="2" />
        <rect x="129" y="68" width="13" height="64" rx="5" fill={f} stroke={s} strokeWidth="2" />
        <rect x="243" y="78" width="13" height="44" rx="5" fill={f} stroke={s} strokeWidth="2" />
        <rect x="258" y="68" width="13" height="64" rx="5" fill={f} stroke={s} strokeWidth="2" />
        <g stroke={s} strokeWidth="1.5" strokeOpacity="0.6" strokeLinecap="round">
          <path d="M176 96v8M184 96v8M192 96v8M208 96v8M216 96v8M224 96v8" />
        </g>
      </g>

      {/* QR check-in card, bottom-right */}
      <g transform="translate(306 134)">
        <rect width="60" height="60" rx="10" fill={f} stroke={s} strokeWidth="1.8" />
        <g fill={s} fillOpacity="0.85">
          <rect x="10" y="10" width="14" height="14" rx="3" />
          <rect x="36" y="10" width="14" height="14" rx="3" />
          <rect x="10" y="36" width="14" height="14" rx="3" />
          <rect x="36" y="36" width="6" height="6" rx="1.5" />
          <rect x="44" y="44" width="6" height="6" rx="1.5" />
        </g>
      </g>

      {/* floor line */}
      <path d="M20 200h360" stroke={l} strokeWidth="1.4" strokeOpacity="0.3" strokeLinecap="round" />
    </svg>
  )
}

/* ====================== Ismoil — warehouse ======================== */
function Rack({ x, s, f, boxes }) {
  return (
    <g transform={`translate(${x} 0)`}>
      {/* uprights */}
      <rect x="0" y="52" width="6" height="136" rx="3" fill={f} stroke={s} strokeWidth="1.6" />
      <rect x="104" y="52" width="6" height="136" rx="3" fill={f} stroke={s} strokeWidth="1.6" />
      {/* shelves */}
      {[52, 100, 148, 188].map((y) => (
        <rect key={y} x="0" y={y} width="110" height="6" rx="3" fill={f} stroke={s} strokeWidth="1.6" />
      ))}
      {/* boxes */}
      {boxes.map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={b.y} width={b.w} height={b.h} rx="3"
                fill={f} stroke={s} strokeWidth="1.5" />
          <path d={`M${b.x} ${b.y + 7}h${b.w}`} stroke={s} strokeWidth="1.2" strokeOpacity="0.55" />
        </g>
      ))}
    </g>
  )
}

function WarehouseScene() {
  const id = 'wh'
  const s = `url(#${id}-stroke)`
  const f = `url(#${id}-fill)`
  const l = `url(#${id}-line)`

  return (
    <svg viewBox={VIEW} className="cover-art" role="img" aria-label="Warehouse illustration">
      <Defs id={id} />
      <rect width="400" height="225" fill={`url(#${id}-glow)`} />

      <Rack x={42} s={s} f={f} boxes={[
        { x: 10, y: 74, w: 36, h: 26 },
        { x: 54, y: 66, w: 40, h: 34 },
        { x: 16, y: 120, w: 44, h: 28 },
        { x: 68, y: 128, w: 28, h: 20 },
        { x: 12, y: 164, w: 38, h: 24 },
      ]} />

      <Rack x={248} s={s} f={f} boxes={[
        { x: 14, y: 70, w: 42, h: 30 },
        { x: 62, y: 80, w: 32, h: 20 },
        { x: 10, y: 126, w: 30, h: 22 },
        { x: 48, y: 118, w: 46, h: 30 },
        { x: 30, y: 158, w: 48, h: 30 },
      ]} />

      {/* transfer arrow between locations */}
      <g className="transfer">
        <path d="M172 120h56" fill="none" stroke={l} strokeWidth="2.4" strokeLinecap="round" />
        <path d="M220 112l10 8-10 8" fill="none" stroke={s} strokeWidth="2.4"
              strokeLinecap="round" strokeLinejoin="round" />
      </g>

      {/* pallet with a box in transit */}
      <g>
        <rect x="178" y="146" width="44" height="30" rx="4" fill={f} stroke={s} strokeWidth="1.6" />
        <path d="M178 154h44" stroke={l} strokeWidth="1.2" strokeOpacity="0.55" />
        <g stroke={s} strokeWidth="2" strokeLinecap="round" strokeOpacity="0.8">
          <path d="M172 182h56" stroke={l} />
          <path d="M180 176v6M200 176v6M220 176v6" />
        </g>
      </g>

      {/* floor line */}
      <path d="M12 196h376" stroke={l} strokeWidth="1.4" strokeOpacity="0.3" strokeLinecap="round" />
    </svg>
  )
}

const scenes = { aqua: AquaScene, gym: GymScene, warehouse: WarehouseScene }

export default function ProjectCover({ kind, glyph }) {
  const Scene = scenes[kind]
  return (
    <div className="project-cover">
      {Scene && <Scene />}
      <span className="cover-badge">{glyph}</span>
    </div>
  )
}
