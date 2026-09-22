import { TheoryItem } from '../types';

export const THEORIES_DOSSIER: TheoryItem[] = [
  {
    id: 'orion-correlation',
    claim: 'Orion Correlation Theory (OCT)',
    proponents: 'Robert Bauval & Adrian Gilbert (The Orion Mystery, 1994); Graham Hancock',
    whatItSays: 'Proposes that the layout of the three Giza Pyramids is an intentional terrestrial mirror image of the three belt stars of Orion (Alnitak = Khufu, Alnilam = Khafre, Mintaka = Menkaure), specifically oriented to match the sky as it appeared at its lowest culmination around 10,500 BCE due to axial precession.',
    evidencePresented: [
      'Visual layout: The third pyramid (Menkaure) is noticeably smaller and slightly offset to the east from the diagonal line connecting Khufu and Khafre, mirroring how Mintaka is dimmer and slightly offset from the line of Alnitak and Alnilam.',
      'Cultural context: Ancient Egyptian funerary texts (e.g., the Pyramid Texts of Dynasty 5/6) closely identify the constellation Sah (Orion) with Osiris, ruler of the netherworld and rebirth.'
    ],
    scientificCritique: [
      'Spatial Inversion (The Krupp Critique): As demonstrated by astronomer E.C. Krupp (Griffith Observatory), to superimpose the Giza pyramids onto the sky, the northern pyramid (Khufu) must match the eastern star (Alnitak), while Menkaure in the south matches Mintaka in the west. This requires looking south while placing north at the top of the map—an arbitrary inversion.',
      'Chronological Anachronism: In 2500 BCE, Orion was visible in the southern sky, but the "perfect fit" invoked by Bauval requires dating the ground plan to 10,500 BCE—a date with zero archaeological, epigraphic, or radiocarbon presence at Giza.',
      'Lack of Textual Corroboration: No Old Kingdom inscription ever refers to the three pyramids as an earthly representation of the three belt stars, nor did Egyptians view Orion’s belt as a distinct tripartite deity distinct from Sah as a whole.'
    ],
    consensusStatus: 'DEBATED',
    statusSummary: 'Considered an unproven astronomical hypothesis by mainstream Egyptology and archaeoastronomy due to severe spatial orientation reversals and absence of contemporary textual backing.',
    keySources: ['Bauval & Gilbert (1994)', 'Krupp (1997, Nature / Sky & Telescope)', 'Schaefer (2006)', 'Spence (2000)']
  },
  {
    id: 'ten-thousand-bce-origin',
    claim: '10,500 BCE "Zep Tepi" Civilizational Origin',
    proponents: 'Graham Hancock (Fingerprints of the Gods, 1995), Robert Bauval, John Anthony West',
    whatItSays: 'Claims that Giza, the Great Sphinx, and the pyramids were originally engineered around 10,500 BCE by an advanced predecessor civilization (the legendary "First Time" or Zep Tepi) before being reoccupied or renovated by dynastic Egyptians in 2500 BCE.',
    evidencePresented: [
      'Disputed water precipitation erosion grooves on the Great Sphinx enclosure walls (attributed to early Holocene pluvial rains).',
      'The alignment of the Sphinx (facing due east) with the constellation Leo rising at the spring equinox around 10,500 BCE.'
    ],
    scientificCritique: [
      'Radiocarbon Dating: Over 250 radiocarbon samples taken from organic plant fibers, straw, charcoal, and wood embedded directly inside the original mortar between the Great Pyramid core blocks (Bonani et al., 2001) date consistently to 2620–2480 BCE, precisely matching Dynasty 4.',
      'Absence of Material Culture: Hunter-gatherer populations inhabited North Africa in 10,500 BCE during the Epipalaeolithic. Not a single ceramic sherd, metal chisel, foundation trench, road, or domestic settlement of a high-technology civilization has ever been excavated in Egypt.',
      'Continuous Architectural Evolution: Pyramids did not appear abruptly in 10,500 BCE. They evolved over 150 years through clear recorded stages: Predynastic pit graves → 1st/2nd Dynasty mudbrick mastabas → Djoser’s Step Pyramid → Meidum → Sneferu’s Bent and Red Pyramids → Giza.'
    ],
    consensusStatus: 'SPECULATIVE',
    statusSummary: 'Decisively rejected by empirical archaeology and geochronology; directly contradicted by dozens of direct radiocarbon dates and continuous regional material stratigraphy.',
    keySources: ['Bonani et al. (2001, Radiocarbon)', 'Hancock (1995)', 'Fagan (2006)', 'Lehner (1997)']
  },
  {
    id: 'mathematical-encoding',
    claim: 'Deliberate Encoding of Pi (π) and the Golden Ratio (Phi / φ)',
    proponents: 'John Taylor (1859), Charles Piazzi Smyth (1864), Peter Tompkins (1971)',
    whatItSays: 'Asserts that the Great Pyramid’s proportions intentionally embody the mathematical constants Pi (3.14159...) and the Golden Ratio (1.61803...), proving that Old Kingdom Egyptians possessed advanced geometry thousands of years before the Greeks.',
    evidencePresented: [
      'The perimeter of the base (4 × 230.34m = 921.36m) divided by twice the height (2 × 146.6m = 293.2m) equals 3.1424, matching π within 0.05%.',
      'The slant height divided by half the base width yields approximately 1.618, the Golden Ratio.'
    ],
    scientificCritique: [
      'The Ancient "Seked" System: Ancient Egyptian architectural papyri (Rhind Mathematical Papyrus, Moscow Papyrus) document that builders calculated slope using the "seked"—the horizontal setback in palms per vertical cubit of 7 palms (28 fingers).',
      'Natural Integer Ratios: The chosen slope for Khufu (51°50\') is an exact seked of 5 palms and 2 fingers (22 fingers horizontal run for 28 fingers vertical rise). The ratio 28/22 simplifies to 14/11, which naturally generates 4 × (11/14) = 22/7 ≈ 3.1428. The appearance of π is an emergent mathematical byproduct of standard masonry modular measurements, not transcendental mathematical mysticism.',
      'Measurement Variances: Over the vast perimeter, slight variations in baseline measurement (due to missing casing stones) allow modern theorists to cherry-pick dimensions to produce desired mathematical constants.'
    ],
    consensusStatus: 'DEBATED',
    statusSummary: 'The mathematical values exist in the geometry, but are recognized by architectural historians as an automatic consequence of the practical 28:22 seked slope ratio rather than deliberate esoteric encoding.',
    keySources: ['Rhind Mathematical Papyrus (c. 1550 BCE)', 'Petrie (1883)', 'Robins & Shute (1987)', 'Rossi (2004, Architecture and Mathematics in Ancient Egypt)']
  },
  {
    id: 'power-plant-resonance',
    claim: 'Acoustic Resonance & The "Giza Power Plant"',
    proponents: 'Christopher Dunn (The Giza Power Plant, 1998)',
    whatItSays: 'Claims the Great Pyramid was not a tomb, but a machine: a chemical laser/hydrogen power plant that converted seismic vibrations from the Earth into acoustic microwave energy via piezoelectric quartz resonance in the King’s Chamber granite.',
    evidencePresented: [
      'The King’s Chamber granite exhibits acoustic resonance at specific frequencies (around 117–121 Hz, near the musical note A).',
      'Quartz crystals within the pink Aswan granite possess known piezoelectric properties (producing voltage under mechanical stress).',
      'The absence of an original mummy found inside the King’s Chamber sarcophagus.'
    ],
    scientificCritique: [
      'Total Physical Impossibility: To generate industrial microwave power, any machine requires conductive wiring, waveguides, thermal insulation, and energy sinks. The Great Pyramid contains only solid limestone and granite blocks with zero conductive materials.',
      'No Chemical Residues: Rigorous chemical sampling of the shafts and walls reveals normal calcium carbonate, gypsum mortar, and bat guano—no hydrogen gas erosion or catalytic residues.',
      'Sarcophagus Funerary Context: The granite box in the King’s Chamber has standard dimensions of a 4th Dynasty royal sarcophagus, identical in form and placement to documented royal sarcophagi of Khafre and Menkaure. The absence of a body is the standard result of tomb robbing in antiquity.'
    ],
    consensusStatus: 'SPECULATIVE',
    statusSummary: 'Classified as speculative pseudo-engineering; has no basis in electrical physics, thermodynamics, or archaeological discovery.',
    keySources: ['Dunn (1998)', 'Feder (2019, Frauds, Myths, and Mysteries)', 'Fritze (2009)']
  },
  {
    id: 'center-of-earth-landmass',
    claim: 'Geographic Center of Earth’s Landmass',
    proponents: 'Charles Piazzi Smyth (1864), modern pyramidology writers',
    whatItSays: 'Claims that the Great Pyramid is situated at the exact geographic midpoint of all the continents and habitable landmass on Earth, positioned on the longest land meridian and longest land parallel.',
    evidencePresented: [
      'In 1864, Scotland’s Astronomer Royal Charles Piazzi Smyth calculated that the 30° North parallel and 31° East meridian traverse more total land area than any other coordinates on the globe, intersecting at Giza.'
    ],
    scientificCritique: [
      'GIS Sensitivity & Map Projections: Modern geographic information systems (GIS) calculate the geographical center of Earth’s land surfaces based on exact continental polygonal datasets. Depending on the map projection, whether Antarctica is counted, and island weighting, the true center falls hundreds of kilometers away (often in modern Turkey or the Black Sea).',
      'Local Geological Realism: Ancient Egyptians chose Giza for purely pragmatic and local landscape reasons: it was a hard, stable limestone outcrop directly opposite the capital city of Memphis, elevated above the annual Nile flood, and adjacent to massive local limestone quarries. Global geodesy played no role in their selection.'
    ],
    consensusStatus: 'SPECULATIVE',
    statusSummary: 'A 19th-century cartographic artifact resulting from crude planar projections and confirmation bias.',
    keySources: ['Smyth (1864)', 'Wood (2007, Geospatial Review)', 'Petrie (1883)']
  },
  {
    id: 'ancient-astronauts',
    claim: 'Extraterrestrial / Alien Intervention',
    proponents: 'Erich von Däniken (Chariots of the Gods?, 1968), popular television docuseries',
    whatItSays: 'Asserts that human technology in the 26th century BCE was utterly incapable of quarrying, transporting, and hoisting millions of multi-ton blocks, necessitating intervention by extraterrestrial visitors or ancient alien levitation technology.',
    evidencePresented: [
      'Arguments from incredulity highlighting the tight stone joints (<0.5mm), the 50-ton granite ceiling beams, and the astronomical precision of cardinal alignment.'
    ],
    scientificCritique: [
      'Argument from Personal Incredulity: "I cannot explain how it was done, therefore aliens did it" is a classical logical fallacy that discounts human intelligence, organizational power, and empirical problem solving.',
      'Visible 150-Year Technological Trial-and-Error: Giza was not an isolated miracle. It was preceded by dozens of experimental stone monuments where structural mistakes are physically preserved: Imhotep’s Step Pyramid at Saqqara, the collapsed casing at Meidum, and Sneferu’s Bent Pyramid at Dahshur (whose angle was hastily reduced from 54° to 43° halfway up when massive cracks appeared).',
      'Abundant Material Proof: Excavations have uncovered authentic Egyptian copper chisels, dolerite hammerstones, wooden sledges, massive hauling ramps at Hatnub and Giza, and the personal daily logbook of Inspector Merer describing the real human logistics of moving stone.'
    ],
    consensusStatus: 'SPECULATIVE',
    statusSummary: 'Unsubstantiated pop-cultural myth; directly refuted by the rich physical record of Egyptian tools, work camps, and evolutionary structural prototypes.',
    keySources: ['von Däniken (1968)', 'Feder (2019)', 'Lehner (1997)', 'Hawass (2006)']
  }
];
