import { EvidenceBadgeInfo, EvidenceLevel, EvidenceRecord } from '../types';

export const EVIDENCE_LEVELS: Record<EvidenceLevel, EvidenceBadgeInfo> = {
  ESTABLISHED: {
    level: 'ESTABLISHED',
    label: 'Established',
    description: 'Strongly supported by direct archaeological, epigraphic, stratigraphical, or empirical scientific evidence with peer-reviewed consensus.',
    dotColor: '#22c55e', // green
    badgeBg: 'bg-emerald-950/40',
    badgeBorder: 'border-emerald-700/60',
    badgeText: 'text-emerald-300'
  },
  SUPPORTED: {
    level: 'SUPPORTED',
    label: 'Supported',
    description: 'Supported by substantial archaeological or physical evidence, but incorporates some degree of modeling, extrapolation, or minor scholarly nuance.',
    dotColor: '#38bdf8', // blue
    badgeBg: 'bg-sky-950/40',
    badgeBorder: 'border-sky-700/60',
    badgeText: 'text-sky-300'
  },
  DEBATED: {
    level: 'DEBATED',
    label: 'Debated',
    description: 'Significant scholarly, geological, or architectural disagreement exists; competing hypotheses present differing interpretations of the same data.',
    dotColor: '#eab308', // yellow
    badgeBg: 'bg-amber-950/40',
    badgeBorder: 'border-amber-700/60',
    badgeText: 'text-amber-300'
  },
  SPECULATIVE: {
    level: 'SPECULATIVE',
    label: 'Speculative',
    description: 'Hypothesis or popular claim lacking rigorous empirical validation, contradictory to primary textual or stratigraphical records, or relying on confirmation bias.',
    dotColor: '#ef4444', // red
    badgeBg: 'bg-rose-950/40',
    badgeBorder: 'border-rose-700/60',
    badgeText: 'text-rose-300'
  },
  UNKNOWN: {
    level: 'UNKNOWN',
    label: 'Unknown',
    description: 'The physical evidence currently does not establish an answer; unresolved archaeological, structural, or chronological mystery.',
    dotColor: '#a8a29e', // neutral stone
    badgeBg: 'bg-stone-900/60',
    badgeBorder: 'border-stone-600/60',
    badgeText: 'text-stone-300'
  }
};

export const EVIDENCE_RECORDS: EvidenceRecord[] = [
  {
    id: 'khufu-authorship',
    topic: 'Royal Chronology',
    claim: 'The Great Pyramid was constructed under Pharaoh Khufu (Dynasty 4, c. 2589–2566 BCE).',
    level: 'ESTABLISHED',
    summary: 'Direct contemporary quarry inscriptions, royal papyri, mortuary temple architecture, and dynastic genealogies securely attribute the monument to Khufu.',
    primaryEvidence: [
      'Red-ochre quarry marks found in 1837 by Howard Vyse in Campbell’s Relieving Chamber naming "The Gang, the Companions of Khufu" and the 17th year of his cattle count.',
      'The Diary of Merer (Papyrus Jarf found in 2013), an eyewitness logbook by an inspector transporting Tura casing stone to "Akhet-Khufu" (Horizon of Khufu) in Year 26/27 of Khufu’s reign.',
      'Mortuary temple, boat pits, and surrounding Western and Eastern cemeteries belonging to Khufu’s immediate royal family, viziers (Hemiunu), and high officials.'
    ],
    limitationsAndCounterpoints: [
      'No formal decorative hieroglyphs were inscribed on the interior chamber walls (unlike 5th/6th Dynasty Pyramid Texts), which led 19th-century speculative writers to question authorship.'
    ],
    sources: ['Tallet (2014) Papyrus Jarf', 'Vyse (1840)', 'Lehner (1997)', 'Verner (2001)']
  },
  {
    id: 'labor-not-slaves',
    topic: 'Labor & Society',
    claim: 'The pyramids were built by organized, salaried Egyptian conscripts and skilled artisans, not enslaved captives.',
    level: 'ESTABLISHED',
    summary: 'Excavations at the Lost City of the Pyramids (Heit el-Ghurab) have proven the existence of institutional barracks, bakeries, medical treatment, and animal bone remains from prime livestock.',
    primaryEvidence: [
      'Excavations by Mark Lehner at Heit el-Ghurab revealing permanent barracks for ~10,000–20,000 workers, cattle bones indicating consumption of thousands of kilos of prime beef daily, and beer brewing facilities.',
      'Skeletal analysis by Zahi Hawass and Azza Sarry el-Din showing healed bone fractures, brain trepanation, and orthopedic surgery — confirming skilled medical attention.',
      'Worker cemetery tombs situated directly beside the pyramids, an honor strictly forbidden to enslaved populations in antiquity.',
      'Graffiti identifying competing work crews: "Friends of Khufu", "Drunkards of Menkaure".'
    ],
    limitationsAndCounterpoints: [
      'Herodotus (writing in the 5th century BCE, 2,000 years post-construction) popularized the myth of 100,000 suffering slaves, a narrative later reinforced by biblical epics and Hollywood films.'
    ],
    sources: ['Lehner & Hawass (2017)', 'Redford (2004)', 'Sarry el-Din (2003)']
  },
  {
    id: 'ahramat-waterway',
    topic: 'Landscape & Transport',
    claim: 'An extinct branch of the Nile (the Ahramat Branch) flowed directly adjacent to the Giza plateau during the Old Kingdom.',
    level: 'ESTABLISHED',
    summary: 'Satellite radar imaging, sedimentological core drilling, and historical harbour structures confirm the pyramids were built along a major navigable river branch.',
    primaryEvidence: [
      '2024 satellite radar and geophysical coring study by Eman Ghoneim et al. mapping a 64 km extinct Nile tributary running immediately past Giza, Saqqara, and Dahshur.',
      'Ancient harbour basins and causeway terminal structures excavated at the base of the Giza escarpment, directly lining the path of this extinct branch.',
      'The Diary of Merer explicitly records navigating wooden barges laden with Tura limestone blocks through the Ro-She Khufu basin.'
    ],
    limitationsAndCounterpoints: [
      'The exact seasonal water depth fluctuations and rate of sedimentation siltation across Dynasty 4 remain subject to continued hydraulic modeling.'
    ],
    sources: ['Ghoneim et al. (2024, Communications Earth & Environment)', 'Tallet (2017)', 'Bunbury (2019)']
  },
  {
    id: 'sphinx-khafre',
    topic: 'Great Sphinx',
    claim: 'The Great Sphinx was carved during the reign of Khafre (c. 2558–2532 BCE) as part of his mortuary landscape.',
    level: 'SUPPORTED',
    summary: 'The Sphinx sits directly within the quarry cut from which Khafre’s Valley and Sphinx Temples were constructed, and its southern ditch walls align with Khafre’s causeway.',
    primaryEvidence: [
      'Petrological matching proves the multi-ton limestone core blocks used to construct the Sphinx Temple and Khafre Valley Temple came directly from the Sphinx ditch ditch excavation.',
      'Khafre’s monumental causeway runs alongside the southern enclosure ditch of the Sphinx, perfectly integrating it into his processional axis.',
      'Fragmentary mention of Khafre’s cartouche on line 13 of the 18th Dynasty Dream Stela of Thutmose IV.'
    ],
    limitationsAndCounterpoints: [
      'The Sphinx itself has no contemporary 4th Dynasty dedicatory inscription carved into its body.',
      'A minority view (Vassil Dobrev) suggests it was carved by Djedefre to honor his father Khufu.'
    ],
    sources: ['Lehner (1991)', 'Hawass (1993)', 'Verner (2001)', 'Dobrev (2004)']
  },
  {
    id: 'sphinx-water-erosion',
    topic: 'Sphinx Geology',
    claim: 'Deep vertical undulating fissures on the Sphinx ditch walls were caused by thousands of years of heavy pluvial precipitation prior to 5,000–9,000 BCE.',
    level: 'DEBATED',
    summary: 'Robert Schoch and John Anthony West argue for water erosion requiring early Holocene rainfall; mainstream geologists counter with salt haloclasty, episodic rainstorms, and differential quarry weathering.',
    primaryEvidence: [
      'Schoch’s geological surveys identifying rounded, undulating vertical gullying in the Member II limestone strata characteristic of surface precipitation runoff.',
      'Seismic refraction measurements indicating deeper subsurface weathering at the front and sides than the back.'
    ],
    limitationsAndCounterpoints: [
      'Member II limestone is famously heterogeneous, alternating between porous soft marls and hard dolomitic beds that weather into round coved profiles naturally.',
      'Colin Reader and K. Lal Gauri showed that subsurface salt crystallization (haloclasty) under Nile moisture and seasonal flash floods in the 4th Dynasty fully accounts for the erosion profile.',
      'No Neolithic settlements, tools, or urban infrastructure dating to 7,000–10,000 BCE have ever been discovered anywhere in the Nile Valley that could support monumental quarrying.'
    ],
    sources: ['Schoch (1992)', 'Gauri et al. (1995)', 'Reader (2001)', 'Lehner (1997)']
  },
  {
    id: 'cardinal-alignment',
    topic: 'Astronomy',
    claim: 'The Great Pyramid is aligned to true north with an accuracy of within 4 minutes of arc (1/15th of a degree).',
    level: 'ESTABLISHED',
    summary: 'Flinders Petrie’s original triangulation and modern laser telemetry establish that the 230-meter baseline deviates by a mere 3 minutes 38 seconds from astronomical north.',
    primaryEvidence: [
      'Laser theodolite surveys by J.H. Cole (1925), Mark Lehner, and Dash (2017) confirming the eastern, western, and northern baseline alignments.',
      'Consistent stellar orientation visible across multiple Dynasty 4 pyramids demonstrating a systematic astronomical sighting technique.'
    ],
    limitationsAndCounterpoints: [
      'The precise observational methodology used by Egyptian priest-astronomers (Kate Spence’s Simultaneous Transit of Mizar & Kochab vs Glen Dash’s Indian Solar Gnomon method) remains debated.'
    ],
    sources: ['Petrie (1883)', 'Spence (2000, Nature)', 'Dash (2017, JEA)', 'Belmonte (2001)']
  },
  {
    id: 'orion-correlation-theory',
    topic: 'Astronomy & Theories',
    claim: 'The three Giza pyramids were laid out as a deliberate terrestrial map of the three belt stars of Orion (Mintaka, Alnilam, Alnitak) as they appeared in 10,500 BCE.',
    level: 'DEBATED',
    summary: 'Robert Bauval’s Orion Correlation Theory gained worldwide popular fame, but is rejected by professional Egyptologists and astronomers due to spatial reversals and anachronistic dating.',
    primaryEvidence: [
      'Visual layout: The third smaller pyramid (Menkaure) is offset from the diagonal axis, visually resembling the smaller offset star Mintaka in Orion’s belt.',
      'Egyptian texts from later periods (Pyramid Texts of Dynasty 5/6) associate the constellation Sah (Orion) with Osiris, lord of the afterlife.'
    ],
    limitationsAndCounterpoints: [
      'Spatial mismatch: To match the pyramids on the ground to the stars in the sky, one must view the stars looking south while the map faces north, requiring an inverted mirror flip.',
      'Chronological leap: Proponents invoke 10,500 BCE based on precessional lowest culmination, yet all archaeological layers, carbon-14 dates, tools, and written records belong securely to ~2550 BCE.',
      'Old Kingdom texts do not mention Orion’s belt stars having individual tripartite symbolic equivalents in tomb layouts.'
    ],
    sources: ['Bauval & Gilbert (1994)', 'Krupp (1997)', 'Schaefer (2006)', 'Spence (2000)']
  },
  {
    id: 'scanpyramids-void',
    topic: 'Interior Khufu',
    claim: 'Non-destructive cosmic-ray muon radiography detected a ~30-meter-long void above the Grand Gallery in Khufu.',
    level: 'ESTABLISHED',
    summary: 'Confirmed independently by three separate physical detection teams (nuclear emulsions, scintillator hodoscopes, and micromegas gas detectors), published in Nature (2017).',
    primaryEvidence: [
      'Morishima et al. (ScanPyramids, Nature 2017) recorded a statistically robust muon excess (over 5 standard deviations) above the Grand Gallery.',
      'In 2023, high-precision muon detectors and an endoscopic camera verified the North Face Corridor (9m long x 2m wide) behind the chevron rafters above the main entrance.'
    ],
    limitationsAndCounterpoints: [
      'Muon tomography reveals density deficits (empty space), not functional purpose. Whether it is an intentional chamber, an architectural relieving space to reduce weight on the Grand Gallery, or a construction ramp void is currently UNKNOWN.'
    ],
    sources: ['Morishima et al. (Nature, 2017)', 'Procureur et al. (Nature Comms, 2023)']
  },
  {
    id: 'internal-ramps-houdin',
    topic: 'Engineering',
    claim: 'The upper two-thirds of the Great Pyramid were constructed using an internal spiraling ramp system built into the masonry.',
    level: 'SUPPORTED',
    summary: 'Proposed by French architect Jean-Pierre Houdin; supported by micro-gravimetric surveys (EDF 1986) showing spiral low-density bands, though awaiting direct endoscopic verification.',
    primaryEvidence: [
      'External straight ramps become mathematically impossible beyond ~50m height without requiring more material than the pyramid itself.',
      '1986 microgravimetry surveys by Électricité de France (EDF) revealed a spiraling low-density anomaly throughout the inner masonry.',
      'Notches at the corners (such as the "Bob Brier notch" at 82m) could have served as open turning platforms for pivoting stones.'
    ],
    limitationsAndCounterpoints: [
      'Direct visual physical confirmation inside the suspected internal tunnels has not yet been permitted by Egyptian antiquities authorities.',
      'Multiple construction techniques were likely combined: local quarries show traces of straight masonry ramps at lower levels.'
    ],
    sources: ['Houdin (2006)', 'Brier & Houdin (2008)', 'Lakshmanan et al. (1986 EDF survey)']
  },
  {
    id: 'ten-thousand-bce-origin',
    topic: 'Alternative Claims',
    claim: 'The Giza plateau was built by an advanced lost civilization around 10,500 BCE ("Zep Tepi").',
    level: 'SPECULATIVE',
    summary: 'Promoted by Graham Hancock and alternative authors; directly contradicted by stratigraphy, radiocarbon dating, metallurgical history, and thousands of 4th Dynasty artifacts.',
    primaryEvidence: [
      'Based primarily on precessional astronomical backtracking of Orion and Leo at the vernal equinox in 10,500 BCE, and the disputed water erosion on the Sphinx.'
    ],
    limitationsAndCounterpoints: [
      'Extensive carbon-14 dating of organic mortar embedded within the original pyramid blocks (Bonani et al., 2001) confirms construction in the 3rd millennium BCE (2620–2480 BCE).',
      'Copper chisel marks matching Old Kingdom arsenical copper metallurgy are physically present on limestone and granite blocks throughout the site.',
      'Total absence of 10,500 BCE material culture: no settlements, metallurgy, domesticated crops, ceramics, or human burials of an advanced civilization anywhere in Egypt.'
    ],
    sources: ['Bonani et al. (2001, Radiocarbon)', 'Hancock (1995)', 'Fagan (2006)', 'Lehner (1997)']
  },
  {
    id: 'pi-phi-mathematics',
    topic: 'Mathematics',
    claim: 'The Great Pyramid deliberately encodes the universal mathematical constants Pi (π) and the Golden Ratio (Phi/φ).',
    level: 'DEBATED',
    summary: 'The ratio of the pyramid’s perimeter to double its height is 3.142 (close to π), but mainstream historians demonstrate this is a natural consequence of the standard ancient Egyptian slope ratio (seked).',
    primaryEvidence: [
      'Perimeter / (2 × Height) = (4 × 230.34) / (2 × 146.6) ≈ 3.1424 (matches π within 0.05%).',
      'The slant height divided by half the base length yields approximately 1.618 (Phi).'
    ],
    limitationsAndCounterpoints: [
      'Ancient Egyptian mathematics as recorded in the Rhind Mathematical Papyrus and Moscow Mathematical Papyrus used fractions and the "seked" system (horizontal run in palms per vertical cubit of 7 palms / 28 fingers).',
      'The chosen slope of 51°50\' corresponds precisely to a seked of 5 palms and 2 fingers (a run of 22 fingers for a rise of 28 fingers). This simple 28:22 integer ratio naturally generates π (22/7) without requiring knowledge of irrational transcendental numbers.'
    ],
    sources: ['Rhind Mathematical Papyrus (c. 1550 BCE)', 'Petrie (1883)', 'Robins & Shute (1987)', 'Rossi (2004)']
  },
  {
    id: 'power-plant-resonance',
    topic: 'Alternative Claims',
    claim: 'The Great Pyramid was a wireless acoustic power plant or piezoelectric energy generator.',
    level: 'SPECULATIVE',
    summary: 'Christopher Dunn’s "Giza Power Plant" hypothesis proposes chemical hydrogen generation and acoustic resonance; entirely unsupported by physical residues, physics, or archaeological context.',
    primaryEvidence: [
      'The granite King’s Chamber exhibits distinctive acoustic resonance frequencies (approx 117 Hz - 121 Hz).',
      'Quartz crystals in the Aswan granite possess piezoelectric properties.'
    ],
    limitationsAndCounterpoints: [
      'No conductive cabling, high-temperature thermal alteration, chemical residues, or electrical transduction devices exist in the monument.',
      'All architectural elements fit standard dynastic royal mortuary programs: the granite sarcophagus matches royal burial caskets of the 4th Dynasty, and the portcullis grooves were standard anti-robbery mechanisms.',
      'Violates principles of electrical power transmission; pure science-fiction extrapolation.'
    ],
    sources: ['Dunn (1998)', 'Feder (2019 Frauds, Myths, and Mysteries)', 'Fritze (2009)']
  },
  {
    id: 'center-of-earth-landmass',
    topic: 'Alternative Claims',
    claim: 'The Great Pyramid sits at the exact geographic center of all landmass on Earth.',
    level: 'SPECULATIVE',
    summary: 'First calculated in 1864 by Charles Piazzi Smyth; modern geospatial GIS calculations show this relies on arbitrary map projections, outdated continental outlines, and selective cartography.',
    primaryEvidence: [
      'Smyth claimed the 30th parallel north and 31st meridian east intersect at Giza, traversing more land than any other latitude/longitude intersection.'
    ],
    limitationsAndCounterpoints: [
      'Modern spherical GIS calculations by cartographers demonstrate that the true geographic center of Earth’s landmass (the center of area of all dry land) depends entirely on sea level baselines and map projections, falling elsewhere (Turkey or Ukraine depending on projection).',
      'Ancient Egyptians selected Giza because it was a solid limestone bedrock plateau situated immediately north of their capital city of Memphis, adjacent to their stone quarries, not because of global geodesic knowledge.'
    ],
    sources: ['Smyth (1864)', 'Wood (2007 Geospatial Review)', 'Petrie (1883)']
  },
  {
    id: 'ancient-astronauts',
    topic: 'Alternative Claims',
    claim: 'Extraterrestrial beings engineered or provided the technology to construct the Giza pyramids.',
    level: 'SPECULATIVE',
    summary: 'Popularized by Erich von Däniken (Chariots of the Gods, 1968); relies on an argument from incredulity that underestimates human ingenuity and ignores the clear evolution of Egyptian masonry.',
    primaryEvidence: [
      'Proponents argue the precision of cut stone and heavy lifting exceeds the capacity of Bronze Age / Copper Age humans.'
    ],
    limitationsAndCounterpoints: [
      'Ignores the 100-year empirical progression of trial and error directly visible in earlier pyramids: Djoser’s Step Pyramid (Saqqara) → Meidum’s collapsed casing → Sneferu’s Bent Pyramid (angle reduced mid-build due to cracking) → Red Pyramid (first successful true pyramid) → Giza.',
      'Thousands of authentic Egyptian tools, copper chisels, dolerite pounders, wooden levers, sledges, ropes, and logbooks (Merer) have been excavated in-situ.',
      'Slights the proven mathematical and organizational capabilities of ancient civilizations.'
    ],
    sources: ['von Däniken (1968)', 'Feder (2019)', 'Lehner (1997)', 'Hawass (2006)']
  },
  {
    id: 'big-void-purpose',
    topic: 'Interior Khufu',
    claim: 'The purpose of the 30-meter Big Void detected by ScanPyramids in 2017.',
    level: 'UNKNOWN',
    summary: 'The void is physically confirmed by particle physics, but whether it is an architectural weight-relieving space, a sealed ritual chamber, or a construction ramp void remains unproven.',
    primaryEvidence: [
      'Muon radiography confirms an empty space of at least 30 meters length situated above the Grand Gallery with similar cross-sectional dimensions.'
    ],
    limitationsAndCounterpoints: [
      'No physical camera or bore-scope has entered the Big Void. Until non-destructive access is achieved, any claim regarding its contents or definitive function is pure speculation.'
    ],
    sources: ['Morishima et al. (Nature, 2017)', 'ScanPyramids Scientific Report (2023)']
  }
];
