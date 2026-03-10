import type { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Products — Brass Valves, Cocks, Fittings & Unions | Zest Industries',
  description:
    'Explore our complete range of brass valves, gun metal check valves, brass cocks, fittings, and unions. Premium quality, manufactured in Jalandhar, India since 1998.',
  alternates: { canonical: 'https://zestvalves.com/products' },
}

/* ── Product Data (Real Zest Industries catalogue) ─── */

const categories = [
  'All',
  'Gun Metal Valves',
  'Gun Metal Cocks',
  'Brass Valves',
  'Brass Cocks',
  'Brass Fittings',
]

const products = [
  {
    name: 'Gun Metal Check Valve (Screwed)',
    category: 'Gun Metal Valves',
    desc: 'Compact screwed-end gun metal check valve for service connections and branch lines. Swing-type disc for low pressure drop. ZEST branded with threaded BSP ends.',
    specs: ['Sizes: 15 mm – 80 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-check-valve.jpg',
  },
  {
    name: 'Gun Metal Horizontal Check Valve',
    category: 'Gun Metal Valves',
    desc: 'Heavy-duty horizontal check valve manufactured to IS:778 standard. Designed for high-pressure water supply, fire-fighting, and industrial applications.',
    specs: ['Sizes: 25 mm – 150 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-horizontal-check-valve.jpg',
  },
  {
    name: 'Gun Metal Vertical Check Valve',
    category: 'Gun Metal Valves',
    desc: 'Vertical lift check valve in gun metal LTB2 for riser pipe installations. Gravity-assisted disc closure prevents backflow in vertical pipelines.',
    specs: ['Sizes: 25 mm – 100 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-vertical-check-valve.jpg',
  },
  {
    name: 'Gun Metal Horizontal O-Ring Check Valve',
    category: 'Gun Metal Valves',
    desc: 'Horizontal check valve with O-ring seal technology for enhanced leak-tightness. Ideal for waterworks and fire protection systems.',
    specs: ['Sizes: 25 mm – 100 mm', 'Seal: O-Ring', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/horizontal-oring-valve.jpg',
  },
  {
    name: 'Gun Metal Vertical O-Ring Check Valve',
    category: 'Gun Metal Valves',
    desc: 'Vertical check valve with O-ring sealing for enhanced leak prevention in riser installations. Suitable for water supply and fire protection systems.',
    specs: ['Sizes: 25 mm – 80 mm', 'Seal: O-Ring', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-vertical-oring.jpg',
  },
  {
    name: 'Gun Metal Angle Valve',
    category: 'Gun Metal Valves',
    desc: 'Gun metal angle valve for 90-degree flow direction change. Ideal for fire hydrant connections, boiler installations, and high-pressure industrial piping.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Connection: Screwed BSP'],
    image: '/images/products/gun-metal-angle-valve.jpg',
  },
  {
    name: 'Gun Metal Gate Valve',
    category: 'Gun Metal Valves',
    desc: 'Rugged gun metal gate valve for municipal water supply and distribution networks. Non-rising stem with hand wheel operation. Flanged or screwed ends.',
    specs: ['Sizes: 25 mm – 150 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Ends: Flanged / Screwed'],
    image: '/images/products/gun-metal-gate-valve.jpg',
  },
  {
    name: 'Gun Metal Ball Valve',
    category: 'Gun Metal Valves',
    desc: 'Full bore gun metal ball valve for high-pressure industrial and marine applications. Quarter-turn operation with blow-out proof stem and PTFE seats.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Seat: PTFE'],
    image: '/images/products/gun-metal-ball-valve.jpg',
  },
  {
    name: 'Gun Metal Wheel Valve',
    category: 'Gun Metal Valves',
    desc: 'Heavy-duty gun metal wheel valve for industrial and marine applications. Hand wheel operated globe-type design for precise flow throttling.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Thread: BSP'],
    image: '/images/products/gun-metal-wheel-valve.jpg',
  },
  {
    name: 'Gun Metal Regulating Valve',
    category: 'Gun Metal Valves',
    desc: 'Precision gun metal regulating valve for accurate flow control and throttling. Globe-type design with fine adjustment capability for stable downstream flow.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Thread: BSP'],
    image: '/images/products/gunmetal-regulating-valve.jpg',
  },
  {
    name: 'Gun Metal Pressure Reducing Valve',
    category: 'Gun Metal Valves',
    desc: 'Adjustable pressure reducing valve in gun metal for downstream pressure regulation. Diaphragm-operated with adjustable spring setting.',
    specs: ['Sizes: 15 mm – 50 mm', 'Inlet: Up to 25 bar', 'Material: Gun Metal LTB2', 'Outlet: 1–6 bar adjustable'],
    image: '/images/products/gun-metal-pressure-reducing-valve.jpg',
  },
  {
    name: 'Gun Metal Tanker Valve',
    category: 'Gun Metal Valves',
    desc: 'Heavy-duty gun metal tanker valve for water tanker and storage tank applications. Quick-opening lever operation with large flow capacity.',
    specs: ['Sizes: 50 mm – 100 mm', 'Pressure: PN10 / PN16', 'Material: Gun Metal LTB2', 'Operation: Lever'],
    image: '/images/products/gun-metal-tanker-valve.jpg',
  },
  {
    name: 'Gun Metal Foot Valve',
    category: 'Gun Metal Valves',
    desc: 'Gun metal foot valve with strainer for pump suction lines. Prevents loss of prime in centrifugal pump installations. Heavy-duty construction for bore well and sump use.',
    specs: ['Sizes: 25 mm – 100 mm', 'Pressure: PN10 / PN16', 'Material: Gun Metal LTB2', 'Type: Flanged / Screwed'],
    image: '/images/products/gun-metal-foot-valve.jpg',
  },
  {
    name: 'Gun Metal Union Cap',
    category: 'Gun Metal Valves',
    desc: 'Precision-machined gun metal union cap for pipeline end closure and maintenance access. Three-piece design for easy disassembly.',
    specs: ['Sizes: 15 mm – 100 mm', 'Material: Gun Metal LTB2', 'Thread: BSP', 'Seal: Metal-to-Metal'],
    image: '/images/products/gun-metal-union-cap.jpg',
  },
  {
    name: 'Gun Metal Bib Ferrule Valve',
    category: 'Gun Metal Valves',
    desc: 'Combined bib and ferrule valve in gun metal for compact service connections. Integrates shut-off and metering functions in a single unit.',
    specs: ['Sizes: 15 mm & 20 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Thread: BSP'],
    image: '/images/products/gun-metal-bib-ferrule-valve.jpg',
  },
  {
    name: 'Gun Metal Ferrule Cock',
    category: 'Gun Metal Cocks',
    desc: 'Precision gun metal ferrule cock for water meter connections and service line shut-off. Tamper-proof design with lock-shield option for utility installations.',
    specs: ['Sizes: 15 mm – 25 mm', 'Operation: Quarter Turn', 'Material: Gun Metal LTB2', 'Standard: IS:2692'],
    image: '/images/products/gun-metal-ferrule-cock.jpg',
  },
  {
    name: 'Gun Metal Flush Cock',
    category: 'Gun Metal Cocks',
    desc: 'Self-closing gun metal flush cock for urinal and WC flushing systems. Adjustable flow rate with time-delay shut-off for water conservation.',
    specs: ['Sizes: 25 mm & 32 mm', 'Type: Self-Closing', 'Material: Gun Metal LTB2', 'Flow: Adjustable'],
    image: '/images/products/gun-metal-flush-cock.jpg',
  },
  {
    name: 'Gun Metal Main Cock',
    category: 'Gun Metal Cocks',
    desc: 'Robust gun metal main cock for mains water supply isolation. For underground and above-ground service connections with corrosion-resistant construction.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Thread: BSP'],
    image: '/images/products/gun-metal-main-cock.jpg',
  },
  {
    name: 'Brass Wheel Valve',
    category: 'Brass Valves',
    desc: 'Precision brass wheel valve for flow regulation in plumbing and industrial pipelines. Hand wheel operated with rising stem for visual position indication.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16 / PN25', 'Material: IS:319 Brass', 'Thread: BSP / NPT'],
    image: '/images/products/brass-wheel-valve.jpg',
  },
  {
    name: 'Brass Bib Cock',
    category: 'Brass Cocks',
    desc: 'Durable brass bib cock for outdoor and utility plumbing connections. Hose union type with wall-mount flange. Chrome or natural brass finish.',
    specs: ['Sizes: 15 mm & 20 mm', 'Finish: Chrome / Natural', 'Material: IS:319 Brass', 'Type: Hose Union'],
    image: '/images/products/brass-bib-cock.jpg',
  },
  {
    name: 'Brass Gate Valve',
    category: 'Brass Valves',
    desc: 'Heavy-duty brass gate valve for full-bore isolation in plumbing, water supply, and industrial piping systems. Rising stem with hand wheel operation.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16 / PN25', 'Material: IS:319 Brass', 'Thread: BSP / NPT'],
    image: '/images/products/brass-gate-valve.jpg',
  },
  {
    name: 'Brass Ball Valve',
    category: 'Brass Valves',
    desc: 'Full-bore brass ball valve with quarter-turn lever operation. Chrome-plated ball with PTFE seats ensures leak-free shut-off in water and gas systems.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25 / PN40', 'Material: IS:319 Brass', 'Seat: PTFE'],
    image: '/images/products/brass-ball-valve.jpg',
  },
  {
    name: 'Brass Angle Valve',
    category: 'Brass Valves',
    desc: 'Precision brass angle valve for 90-degree flow direction change in plumbing and heating installations. Wall-mount or in-line configuration.',
    specs: ['Sizes: 15 mm – 25 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Thread: BSP'],
    image: '/images/products/brass-angle-valve.jpg',
  },
  {
    name: 'Brass Check Valve',
    category: 'Brass Valves',
    desc: 'Compact brass spring-loaded check valve for backflow prevention. Low cracking pressure with silent closing action for residential and commercial plumbing.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Type: Spring-Loaded'],
    image: '/images/products/brass-check-valve.jpg',
  },
  {
    name: 'Brass Stop Cock',
    category: 'Brass Cocks',
    desc: 'Premium brass stop cock for mains water isolation. Compression or screwed ends with chrome or natural brass finish. Suitable for underground and above-ground installations.',
    specs: ['Sizes: 15 mm – 25 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Finish: Chrome / Natural'],
    image: '/images/products/brass-stopcock.jpg',
  },
  {
    name: 'Brass Union',
    category: 'Brass Valves',
    desc: 'Three-piece brass union for easy pipeline disassembly and maintenance. Precision machined threads with metal-to-metal or fibre washer seal.',
    specs: ['Sizes: 15 mm – 50 mm', 'Material: IS:319 Brass', 'Thread: BSP / NPT', 'Seal: Metal / Fibre'],
    image: '/images/products/brass-union.jpg',
  },
  {
    name: 'Brass Fittings Assortment',
    category: 'Brass Valves',
    desc: 'Complete range of brass pipe fittings including elbows, tees, reducers, nipples, and bushings. Precision threaded to BSP and NPT standards.',
    specs: ['Sizes: 6 mm – 50 mm', 'Material: IS:319 Brass', 'Thread: BSP / NPT', 'Types: Elbows, Tees, Reducers'],
    image: '/images/products/brass-fittings.jpg',
  },
  {
    name: 'Brass Reducing Union',
    category: 'Brass Fittings',
    desc: 'Precision machined brass reducing union for joining pipes of different diameters. Three-piece design allows easy installation and maintenance without disturbing the pipeline.',
    specs: ['Sizes: 15 mm x 10 mm – 50 mm x 40 mm', 'Material: IS:319 Brass', 'Thread: BSP / NPT', 'Seal: Metal-to-Metal / Fibre'],
    image: '/images/products/brass-reducing-union-ti.jpg',
  },
  {
    name: 'Brass Pipe Fittings (Flanged)',
    category: 'Brass Fittings',
    desc: 'Heavy-duty flanged brass pipe fittings for industrial piping systems. Available as elbows, tees, crosses, and adapters with drilled flange connections to IS and BS standards.',
    specs: ['Sizes: 15 mm – 100 mm', 'Material: IS:319 Brass', 'Standard: IS:1538 / BS:10', 'Flange: PN10 / PN16'],
    image: '/images/products/brass-pipe-fittings-ti.jpg',
  },
  {
    name: 'Gun Metal Football Valve',
    category: 'Gun Metal Valves',
    desc: 'Traditional football-type gun metal valve for water distribution networks. Robust spherical body design with hand wheel operation for reliable isolation.',
    specs: ['Sizes: 25 mm – 80 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gunmetal-football-valve-im.jpg',
  },
  {
    name: 'Industrial Ball Valve',
    category: 'Brass Valves',
    desc: 'Heavy-duty industrial brass ball valve for process piping and utility systems. Full-bore design minimises pressure drop. Suitable for water, gas, and compressed air.',
    specs: ['Sizes: 15 mm – 100 mm', 'Pressure: PN25 / PN40', 'Material: IS:319 Brass', 'Seat: PTFE / Reinforced'],
    image: '/images/products/industrial-ball-valve-im.jpg',
  },
  {
    name: 'Gun Metal Ferrule Valve',
    category: 'Gun Metal Valves',
    desc: 'Precision-machined gun metal ferrule valve for water meter installations and service line connections. Tamper-proof spindle with locking arrangement for utility use.',
    specs: ['Sizes: 15 mm – 25 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Standard: IS:2692'],
    image: '/images/products/gunmetal-ferrule-valve-im.jpg',
  },
  {
    name: 'Gun Metal Vertical Check Valve (Heavy Pattern)',
    category: 'Gun Metal Valves',
    desc: 'Heavy-pattern vertical check valve with reinforced body and guided disc for high-rise water supply systems. Enhanced seat design for positive sealing at low differential pressures.',
    specs: ['Sizes: 25 mm – 100 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gunmetal-vertical-check-im.jpg',
  },
  {
    name: 'Gun Metal Ball Valve (Industrial)',
    category: 'Gun Metal Valves',
    desc: 'Industrial-grade gun metal ball valve with blow-out proof stem and anti-static device. Full bore design for marine, fire protection, and heavy industrial applications.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25 / PN40', 'Material: Gun Metal LTB2', 'Seat: PTFE'],
    image: '/images/products/gunmetal-ball-valve-im.jpg',
  },
  {
    name: 'Brass Bib Cock (Heavy Duty)',
    category: 'Brass Cocks',
    desc: 'Heavy-duty brass bib cock with reinforced body for commercial and industrial plumbing. Extended spindle with T-head handle for easy operation. Wall-mount with backplate.',
    specs: ['Sizes: 15 mm & 20 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Finish: Chrome / Natural'],
    image: '/images/products/brass-bibcock.jpg',
  },
  {
    name: 'Ball Gate Valve',
    category: 'Gun Metal Valves',
    desc: 'Combined ball-gate valve in gun metal for versatile pipeline isolation. Compact design integrates ball valve mechanism with gate valve body for space-constrained installations.',
    specs: ['Sizes: 25 mm – 80 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Operation: Hand Wheel'],
    image: '/images/products/ball-gate-valve-im.jpg',
  },
  {
    name: 'Gun Metal Angle Valve (Heavy Pattern)',
    category: 'Gun Metal Valves',
    desc: 'Heavy-pattern gun metal angle valve for fire hydrant risers and boiler connections. Reinforced body with integral strainer option for demanding service conditions.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25 / PN40', 'Material: Gun Metal LTB2', 'Thread: BSP'],
    image: '/images/products/gun-metal-angle-valve-im.jpg',
  },
  {
    name: 'Brass Ball Valve (Economy)',
    category: 'Brass Valves',
    desc: 'Economy-series brass ball valve for residential and light commercial plumbing. Nickel-plated body with chrome ball and PTFE seats for reliable shut-off.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16 / PN25', 'Material: IS:319 Brass', 'Seat: PTFE'],
    image: '/images/products/brass-ball-valve-im2.jpg',
  },
  {
    name: 'Gun Metal Check Valve (Flanged)',
    category: 'Gun Metal Valves',
    desc: 'Flanged gun metal check valve for large-diameter municipal water mains and pumping stations. PN16 rated flanged ends for bolted pipeline connections. Swing-type disc for minimal pressure loss.',
    specs: ['Sizes: 50 mm – 200 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Ends: Flanged to IS:1538'],
    image: '/images/products/gun-metal-check-valve-flanged.jpg',
  },
  {
    name: 'Industrial Angle Valve',
    category: 'Brass Valves',
    desc: 'Heavy-duty industrial angle valve for steam, compressed air, and process piping. Precision-lapped disc and seat for reliable shut-off in demanding operating conditions.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25 / PN40', 'Material: IS:319 Brass', 'Thread: BSP / NPT'],
    image: '/images/products/industrial-angle-valve-ti.jpg',
  },
  {
    name: 'Gun Metal Bib Ferrule Valve (Heavy Duty)',
    category: 'Gun Metal Valves',
    desc: 'Heavy-duty gun metal bib ferrule valve combining bib cock and ferrule functions. Designed for water meter and service line installations requiring tamper-proof shut-off.',
    specs: ['Sizes: 15 mm & 20 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Standard: IS:2692'],
    image: '/images/products/gunmetal-bib-ferrule-valve.jpg',
  },
  {
    name: 'Brass Bib Cock (Industrial)',
    category: 'Brass Cocks',
    desc: 'Industrial-grade brass bib cock with reinforced body and extended spindle. Suitable for factory washdown, outdoor taps, and heavy commercial plumbing applications.',
    specs: ['Sizes: 15 mm & 20 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Finish: Natural Brass'],
    image: '/images/products/brass-bib-cock-ti.jpg',
  },
  {
    name: 'Brass Union (Heavy Pattern)',
    category: 'Brass Fittings',
    desc: 'Heavy-pattern brass union with reinforced barrel for high-pressure pipeline connections. Three-piece design allows easy disassembly without disturbing adjacent piping.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: IS:319 Brass', 'Seal: Fibre / Metal'],
    image: '/images/products/brass-union-ti.jpg',
  },
  {
    name: 'Gun Metal Check Valve (Heavy Pattern)',
    category: 'Gun Metal Valves',
    desc: 'Heavy-pattern gun metal check valve with reinforced body and renewable seat. Designed for high-pressure water mains, pumping stations, and fire protection systems.',
    specs: ['Sizes: 25 mm – 150 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-check-valve-ti.jpg',
  },
  {
    name: 'Gun Metal Flush Cock (Concealed)',
    category: 'Gun Metal Cocks',
    desc: 'Concealed-type gun metal flush cock for built-in wall installations. Self-closing mechanism with adjustable flush volume for water-efficient sanitary fittings.',
    specs: ['Sizes: 25 mm & 32 mm', 'Type: Concealed / Self-Closing', 'Material: Gun Metal LTB2', 'Flow: Adjustable'],
    image: '/images/products/gun-metal-flush-cock-ti.jpg',
  },
  {
    name: 'Gun Metal Football Valve (Heavy Pattern)',
    category: 'Gun Metal Valves',
    desc: 'Heavy-pattern football valve with reinforced spherical body for high-pressure water distribution mains. Large bore design minimises flow restriction.',
    specs: ['Sizes: 25 mm – 100 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Standard: IS:778'],
    image: '/images/products/gun-metal-football-valve-im2.jpg',
  },
  {
    name: 'Brass Stop Cock (Compression End)',
    category: 'Brass Cocks',
    desc: 'Premium brass stop cock with compression end connections for easy installation without threading. Ideal for underground mains isolation and residential water supply.',
    specs: ['Sizes: 15 mm – 25 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Ends: Compression'],
    image: '/images/products/brass-stop-cock.jpg',
  },
  {
    name: 'Brass Ferrule Valve',
    category: 'Brass Valves',
    desc: 'Brass ferrule valve for water meter connections and service line isolation. Quarter-turn operation with lock-shield option for tamper-proof utility installations.',
    specs: ['Sizes: 15 mm & 20 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Standard: IS:2692'],
    image: '/images/products/ferrule-valve-im-500.jpg',
  },
  {
    name: 'Fine Finish Industrial Angle Valve',
    category: 'Brass Valves',
    desc: 'Precision-machined industrial angle valve with mirror-polished finish. Designed for high-visibility installations in commercial buildings and process plants.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: IS:319 Brass', 'Finish: Mirror Polish'],
    image: '/images/products/fine-finish-industrial-angle-valve-ti.jpg',
  },
  {
    name: 'Industrial Brass Angle Valve',
    category: 'Brass Valves',
    desc: 'Robust brass angle valve for steam, hot water, and compressed air systems. Integral strainer option with renewable seat disc for extended service life.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25 / PN40', 'Material: IS:319 Brass', 'Thread: BSP / NPT'],
    image: '/images/products/industrial-brass-angle-valve.jpg',
  },
  {
    name: 'Football Ball Valve',
    category: 'Gun Metal Valves',
    desc: 'Football-type ball valve combining the spherical body profile with modern ball valve internals. Quarter-turn operation with full-bore flow path for water distribution networks.',
    specs: ['Sizes: 25 mm – 80 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Operation: Lever'],
    image: '/images/products/football-ball-valve-im-500.jpg',
  },
  {
    name: 'Gun Metal Angle Valve (Flanged)',
    category: 'Gun Metal Valves',
    desc: 'Flanged-end gun metal angle valve for fire hydrant, boiler, and high-pressure piping installations. Robust body with renewable disc and gland packing.',
    specs: ['Sizes: 25 mm – 80 mm', 'Pressure: PN25 / PN40', 'Material: Gun Metal LTB2', 'Ends: Flanged'],
    image: '/images/products/gun-metal-angle-valve-fp.jpg',
  },
  {
    name: 'Gun Metal Ball Valve (Lever Operated)',
    category: 'Gun Metal Valves',
    desc: 'Lever-operated gun metal ball valve for quick isolation in marine, waterworks, and fire protection applications. Full-bore with PTFE seats and blow-out proof stem.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Operation: Lever'],
    image: '/images/products/gun-metal-ball-valve-fp.jpg',
  },
  {
    name: 'Gun Metal Gate Valve (Flanged)',
    category: 'Gun Metal Valves',
    desc: 'Flanged gun metal gate valve for municipal water distribution and pumping stations. Non-rising stem design with hand wheel operation and bolted bonnet.',
    specs: ['Sizes: 50 mm – 200 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Ends: Flanged IS:1538'],
    image: '/images/products/gun-metal-gate-valve-fp.jpg',
  },
  {
    name: 'Gun Metal Wheel Valve (Flanged)',
    category: 'Gun Metal Valves',
    desc: 'Flanged gun metal wheel valve for precise throttling in high-pressure waterworks and industrial systems. Globe-type disc with renewable seat ring.',
    specs: ['Sizes: 25 mm – 80 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Ends: Flanged'],
    image: '/images/products/gun-metal-wheel-valve-fp.jpg',
  },
  {
    name: 'Gun Metal Flush Cock (Exposed)',
    category: 'Gun Metal Cocks',
    desc: 'Exposed-type gun metal flush cock for surface-mounted installations in commercial washrooms. Self-closing with adjustable flush duration and anti-vandal features.',
    specs: ['Sizes: 25 mm & 32 mm', 'Type: Exposed / Self-Closing', 'Material: Gun Metal LTB2', 'Flow: Adjustable'],
    image: '/images/products/gun-metal-flush-cock-fp.jpg',
  },
  {
    name: 'Gun Metal Pressure Reducing Valve (Flanged)',
    category: 'Gun Metal Valves',
    desc: 'Flanged gun metal pressure reducing valve for large-diameter mains. Pilot-operated diaphragm mechanism for stable downstream pressure regulation in municipal networks.',
    specs: ['Sizes: 50 mm – 150 mm', 'Inlet: Up to 25 bar', 'Material: Gun Metal LTB2', 'Ends: Flanged'],
    image: '/images/products/gun-metal-pressure-reducing-fp.jpg',
  },
  {
    name: 'Gun Metal Union Cap (Flanged)',
    category: 'Gun Metal Valves',
    desc: 'Flanged gun metal union cap for large-bore pipeline end closure. Heavy-duty construction with gasket seal for water mains and fire protection systems.',
    specs: ['Sizes: 50 mm – 150 mm', 'Material: Gun Metal LTB2', 'Ends: Flanged IS:1538', 'Seal: Gasket'],
    image: '/images/products/gun-metal-union-cap-fp.jpg',
  },
  {
    name: 'Gun Metal Check Valve (Flanged Heavy)',
    category: 'Gun Metal Valves',
    desc: 'Heavy-duty flanged check valve for pumping stations and municipal water supply mains. Swing-type disc with external lever and counterweight option.',
    specs: ['Sizes: 50 mm – 200 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Ends: Flanged'],
    image: '/images/products/gun-metal-check-valve-fp.jpg',
  },
  {
    name: 'Gun Metal Bib Ferrule Valve (Flanged)',
    category: 'Gun Metal Valves',
    desc: 'Flanged gun metal bib ferrule valve for large service connections and water meter installations. Combined isolation and metering access in one unit.',
    specs: ['Sizes: 25 mm – 50 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Ends: Flanged'],
    image: '/images/products/gunmetal-bib-ferrule-fp.jpg',
  },
  {
    name: 'Brass Angle Valve (Chrome Plated)',
    category: 'Brass Valves',
    desc: 'Chrome-plated brass angle valve for high-end plumbing installations in hotels, hospitals, and commercial buildings. Mirror finish with quarter-turn ceramic disc.',
    specs: ['Sizes: 15 mm – 25 mm', 'Pressure: PN16', 'Material: IS:319 Brass', 'Finish: Chrome Plated'],
    image: '/images/products/angle-valve-im-500.jpg',
  },
  {
    name: 'Brass Ball Valve (Forged)',
    category: 'Brass Valves',
    desc: 'Forged brass ball valve with enhanced pressure rating for industrial and process applications. Full-bore design with stainless steel ball and PTFE seats.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN40 / PN64', 'Material: Forged IS:319 Brass', 'Seat: PTFE'],
    image: '/images/products/brass-ball-valve-im.jpg',
  },
  {
    name: 'Brass Gate Valve (Heavy Pattern)',
    category: 'Brass Valves',
    desc: 'Heavy-pattern brass gate valve with reinforced body and bonnet for high-pressure installations. Rising stem with visual position indicator and solid wedge gate.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: IS:319 Brass', 'Type: Rising Stem'],
    image: '/images/products/brass-gate-valve-im.jpg',
  },
  {
    name: 'Brass Wheel Valve (Flanged)',
    category: 'Brass Valves',
    desc: 'Flanged brass wheel valve for industrial piping systems. Globe-type design with hand wheel for precise flow regulation in water, steam, and compressed air.',
    specs: ['Sizes: 25 mm – 50 mm', 'Pressure: PN25', 'Material: IS:319 Brass', 'Ends: Flanged'],
    image: '/images/products/brass-wheel-valve-fp.jpg',
  },
  {
    name: 'Industrial Ball Valve (Heavy Duty)',
    category: 'Brass Valves',
    desc: 'Heavy-duty industrial ball valve for process plants and utility systems. Reinforced body with anti-blow-out stem, fire-safe design, and lockable lever handle.',
    specs: ['Sizes: 25 mm – 100 mm', 'Pressure: PN40 / PN64', 'Material: IS:319 Brass', 'Type: Fire-Safe'],
    image: '/images/products/industrial-ball-valve-im2.jpg',
  },
  {
    name: 'Industrial Angle Valve (Flanged)',
    category: 'Brass Valves',
    desc: 'Flanged industrial angle valve for steam boilers, pressure vessels, and process piping. Heavy-duty construction with bolted bonnet and renewable disc.',
    specs: ['Sizes: 25 mm – 80 mm', 'Pressure: PN25 / PN40', 'Material: IS:319 Brass', 'Ends: Flanged'],
    image: '/images/products/industrial-angle-valve-fp.jpg',
  },
  {
    name: 'Gun Metal Ball Valve (Quarter Turn)',
    category: 'Gun Metal Valves',
    desc: 'Quarter-turn gun metal ball valve with compact body design for water distribution and fire protection systems. Full-port bore with stainless steel ball and reinforced PTFE seats for long service life.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN25', 'Material: Gun Metal LTB2', 'Seat: Reinforced PTFE'],
    image: '/images/products/ball-valves-im.jpg',
  },
  {
    name: 'Gun Metal Ferrule Valve (Screwed)',
    category: 'Gun Metal Valves',
    desc: 'Precision-machined gun metal ferrule valve for water meter connections and service line isolation. Compact body with BSP threads and compression end for PE pipe connections.',
    specs: ['Sizes: 15 mm – 25 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Standard: IS:2692'],
    image: '/images/products/ferrule-valves-im.jpg',
  },
  {
    name: 'Gun Metal Vertical Check Valve (Compact)',
    category: 'Gun Metal Valves',
    desc: 'Compact vertical check valve in gun metal LTB2 for tight riser pipe installations. Lightweight design with guided disc and stainless steel spring for reliable backflow prevention.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Type: Spring-Loaded'],
    image: '/images/products/vertical-check-valves-im.jpg',
  },
  {
    name: 'Gun Metal Angle Valve (Economy)',
    category: 'Gun Metal Valves',
    desc: 'Economy-grade gun metal angle valve for general plumbing and water supply applications. Sand-cast body with machined BSP threads and renewable gland packing.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN16', 'Material: Gun Metal LTB2', 'Connection: BSP Screwed'],
    image: '/images/products/angle-valves-im2.jpg',
  },
  {
    name: 'Gun Metal Football Valve (Quarter Turn)',
    category: 'Gun Metal Valves',
    desc: 'Quarter-turn football-type valve with spherical body profile for underground water distribution networks. Designed for direct burial with tamper-proof operation and full-bore flow.',
    specs: ['Sizes: 25 mm – 80 mm', 'Pressure: PN16 / PN25', 'Material: Gun Metal LTB2', 'Operation: Quarter Turn'],
    image: '/images/products/gun-metal-football-valve-im3.jpg',
  },
  {
    name: 'Industrial Ball Valve (Compact)',
    category: 'Brass Valves',
    desc: 'Compact industrial ball valve in forged brass for process piping, compressed air, and utility systems. Two-piece body with blow-out proof stem and anti-static device.',
    specs: ['Sizes: 15 mm – 50 mm', 'Pressure: PN40', 'Material: IS:319 Forged Brass', 'Type: Two-Piece'],
    image: '/images/products/industrial-ball-valve-im3.jpg',
  },
]

/* ── Schema ─── */

const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Zest Industries Products',
  itemListElement: products.map((p, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    item: {
      '@type': 'Product',
      name: p.name,
      description: p.desc,
      brand: { '@type': 'Brand', name: 'Zest Industries' },
      manufacturer: { '@type': 'Organization', name: 'Zest Industries' },
    },
  })),
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://zestvalves.com' },
    { '@type': 'ListItem', position: 2, name: 'Products', item: 'https://zestvalves.com/products' },
  ],
}

/* ── Page ─── */

export default function Products() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Hero */}
      <section className="bg-navy py-16 text-white sm:py-20" aria-labelledby="products-hero">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <nav className="mb-4 font-body text-sm text-gray-400" aria-label="Breadcrumb">
            <ol className="flex items-center gap-2">
              <li><Link href="/" className="transition-colors duration-150 hover:text-brass">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-brass" aria-current="page">Products</li>
            </ol>
          </nav>
          <h1 id="products-hero" className="text-balance text-4xl font-bold sm:text-5xl">
            Our <span className="text-brass">Products</span>
          </h1>
          <p className="mt-4 max-w-3xl font-body text-lg text-gray-300">
            64 premium brass and gun metal products — valves, cocks, and fittings manufactured
            to IS:778, IS:319, and BS:5154 standards in our Jalandhar facility since 1998.
          </p>
        </div>
      </section>

      {/* Category pills */}
      <div className="border-b border-gray-200 bg-white" role="navigation" aria-label="Product categories">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto px-4 py-4 sm:px-6 lg:px-8">
          {categories.map((c, i) => (
            <span
              key={c}
              className={`
                inline-flex min-h-touch items-center whitespace-nowrap rounded-full px-5 py-2
                font-heading text-sm font-semibold transition-colors duration-150
                ${i === 0 ? 'bg-navy text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}
              `}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <section className="bg-gray-50 py-16 sm:py-20" aria-label="Product listings">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {products.map((p) => (
              <article key={p.name} className="card group overflow-hidden">
                <div className="relative -mx-6 -mt-6 mb-4 h-56 bg-white">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-2"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div>
                  <span className="inline-flex items-center rounded-full bg-brass/10 px-3 py-1 font-heading text-xs font-semibold text-brass">
                    {p.category}
                  </span>
                  <h2 className="mt-3 font-heading text-lg font-bold text-navy">
                    {p.name}
                  </h2>
                </div>

                <p className="mt-2 font-body text-sm text-gray-600">{p.desc}</p>

                <div className="mt-4 rounded-lg bg-gray-50 p-3">
                  <h3 className="font-heading text-xs font-bold uppercase tracking-wider text-navy">
                    Specifications
                  </h3>
                  <ul className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 font-body text-xs text-gray-600">
                    {p.specs.map((s) => (
                      <li key={s} className="flex items-start gap-1.5">
                        <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-brass" aria-hidden="true" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className="mt-4 inline-flex min-h-touch items-center font-heading text-sm font-semibold text-brass transition-colors duration-150 hover:text-brass-dark"
                  aria-label={`Request a quote for ${p.name}`}
                >
                  Request Quote
                  <span className="ml-1 transition-transform duration-150 group-hover:translate-x-1" aria-hidden="true">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-navy py-16 text-white sm:py-20" aria-labelledby="products-cta">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 id="products-cta" className="text-balance font-heading text-3xl font-bold md:text-4xl">
            Need Custom Specifications?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-body text-lg text-gray-300">
            We manufacture brass and gun metal products to your exact requirements.
            Contact us for custom orders, OEM manufacturing, and bulk pricing.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="btn-primary text-lg !px-10 !py-4">
              Request a Quote
            </Link>
            <a href="tel:+911812345678" className="btn-outline text-lg !px-10 !py-4 !border-white/30 !text-white hover:!bg-white/10">
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
