import { PyramidData } from '../types';

export const PYRAMIDS: PyramidData[] = [
  {
    id: 'khufu',
    name: "Khufu's Great Pyramid",
    arabicName: "Akhet Khufu ('Horizon of Khufu')",
    pharaoh: 'Khufu (Cheops)',
    reignPeriod: 'c. 2589 – 2566 BCE (Dynasty 4)',
    estimatedBCE: 'c. 2570 BCE',
    originalHeightM: 146.6,
    currentHeightM: 138.5,
    baseLengthM: 230.34,
    baseAreaM2: 53056,
    slopeAngleDeg: 51.84, // 51°50'40"
    sekedRatio: '5 palms, 2 fingers per cubit (approx 28:22 rise/run)',
    volumeM3: 2583283,
    estimatedWeightTons: 5750000,
    estimatedStoneBlocks: 2300000,
    casingMaterial: 'Fine white Tura limestone (polished smooth, ~0.5mm joints)',
    coreMaterial: 'Local nummulitic limestone quarried south of the pyramid',
    quarryLocations: [
      'Giza plateau (local bedrock core)',
      'Tura / Mokattam hills (casing, east bank of Nile)',
      'Aswan (granite beams & lintels, 800 km south)'
    ],
    architecturalInnovations: [
      'Three elevated interior chambers built deep inside the masonry',
      'Grand Gallery with massive 8.6m high corbelled stone vault',
      'Five tiered Relieving Chambers above the King’s burial vault',
      'Inclined air/star shafts ascending to the exterior surface'
    ],
    notableFeatures: 'The largest stone masonry structure ever built in antiquity. Possesses an extraordinary cardinal orientation error of less than 4 minutes of arc (0.06°).',
    internalComplexity: 'High — contains three distinct chamber levels (subterranean bedrock, middle Queen’s Chamber, upper granite King’s Chamber) linked by ascending and descending passageways and a massive corbelled Grand Gallery.'
  },
  {
    id: 'khafre',
    name: "Khafre's Pyramid",
    arabicName: "Wer Khafre ('Great is Khafre')",
    pharaoh: 'Khafre (Chephren)',
    reignPeriod: 'c. 2558 – 2532 BCE (Dynasty 4)',
    estimatedBCE: 'c. 2540 BCE',
    originalHeightM: 143.5,
    currentHeightM: 136.4,
    baseLengthM: 215.25,
    baseAreaM2: 46332,
    slopeAngleDeg: 53.17, // 53°10'
    sekedRatio: '5 palms, 1 finger per cubit (approx 4:3 rise/run)',
    volumeM3: 2211096,
    estimatedWeightTons: 4880000,
    estimatedStoneBlocks: 1950000,
    casingMaterial: 'Fine Tura limestone at upper levels; bottom course of pink Aswan granite',
    coreMaterial: 'Local nummulitic limestone from surrounding quarry ditch',
    quarryLocations: [
      'Immediate surrounding quarry terrace (excavated around pyramid base)',
      'Tura (casing limestone)',
      'Aswan (lowest casing course and temple lintels)'
    ],
    architecturalInnovations: [
      'Built upon an elevated bedrock mound (10m higher than Khufu), creating an optical illusion of greater height',
      'Intact top cap (pyramidion zone) preserving original smooth Tura casing',
      'Simplified internal layout: single burial chamber cut into bedrock, reducing structural vulnerability',
      'Direct monumental causeway connected to the majestic Valley Temple and Great Sphinx complex'
    ],
    notableFeatures: 'Often appears taller than Khufu due to its higher topographic bedrock terrace and steeper 53° slope. Retains its gleaming cap of original casing stones at the apex.',
    internalComplexity: 'Moderate — subterranean layout with two descending entrances joining into a single horizontal bedrock corridor that terminates in a gabled burial chamber containing Khafre’s sunken black granite sarcophagus.'
  },
  {
    id: 'menkaure',
    name: "Menkaure's Pyramid",
    arabicName: "Netjer Menkaure ('Divine is Menkaure')",
    pharaoh: 'Menkaure (Mykerinos)',
    reignPeriod: 'c. 2532 – 2504 BCE (Dynasty 4)',
    estimatedBCE: 'c. 2510 BCE',
    originalHeightM: 65.5,
    currentHeightM: 61.0,
    baseLengthM: 104.6,
    baseAreaM2: 10941,
    slopeAngleDeg: 51.33, // 51°20'
    sekedRatio: '5 palms, 2 fingers per cubit (identical slope to Khufu)',
    volumeM3: 235183,
    estimatedWeightTons: 560000,
    estimatedStoneBlocks: 260000,
    casingMaterial: 'Lower 16 courses of heavy unpolished red Aswan granite; upper courses of white Tura limestone',
    coreMaterial: 'Local nummulitic limestone',
    quarryLocations: [
      'Local Giza plateau bedrock',
      'Aswan (granite for 16 casing courses — an immense logistical feat)',
      'Tura (upper limestone casing)'
    ],
    architecturalInnovations: [
      'Extensive use of hard red granite for exterior cladding (roughly one-third of the total height)',
      'Barrel-vaulted granite ceiling inside the bedrock burial chamber',
      'Unique "Palace Façade" carved paneling in the ante-room',
      'Unfinished granite dressing at the base demonstrates ancient masons’ in-situ smoothing technique'
    ],
    notableFeatures: 'Less than one-tenth the volume of Khufu, yet required tremendous logistical effort to transport hundreds of tons of red granite 800 km from Aswan. Its vertical breach on the north face was cut in the 12th century CE by Sultan Al-Aziz Uthman.',
    internalComplexity: 'Intricate subterranean network — multiple descending shafts, a decorative panelled chamber, a storage annex with six niches, and a granite-lined burial crypt.'
  }
];

export interface DynastyGeneration {
  pharaoh: string;
  relationship: string;
  reign: string;
  monument: string;
  location: string;
  significance: string;
  evidence: string;
}

export const DYNASTY_CHRONOLOGY: DynastyGeneration[] = [
  {
    pharaoh: 'Sneferu',
    relationship: 'Father of Khufu (Founder of Dynasty 4)',
    reign: 'c. 2613 – 2589 BCE (~24 years)',
    monument: 'Meidum Pyramid, Bent Pyramid, Red Pyramid (Dahshur)',
    location: 'Meidum & Dahshur',
    significance: 'Mastered true smooth-sided pyramid engineering through empirical trial and error (the collapse at Meidum and angle shift at Dahshur from 54° to 43° directly informed Giza).',
    evidence: 'Inscriptions, quarry marks, and continuous genealogical succession in the Turin King List and Westcar Papyrus.'
  },
  {
    pharaoh: 'Khufu',
    relationship: 'Son of Sneferu & Queen Hetepheres I',
    reign: 'c. 2589 – 2566 BCE (~23 years)',
    monument: 'The Great Pyramid (Akhet Khufu)',
    location: 'Giza Plateau (North terrace)',
    significance: 'Relocated the royal cemetery north to Giza’s stable limestone plateau. Scaled masonry to unprecedented heights and engineered intricate interior corbelled chambers.',
    evidence: 'Diary of Merer (Papyrus Jarf), quarry marks in Campbell’s Relieving Chamber, mortuary temple ruins.'
  },
  {
    pharaoh: 'Djedefre',
    relationship: 'Son of Khufu & elder half-brother of Khafre',
    reign: 'c. 2566 – 2558 BCE (~8 years)',
    monument: 'Pyramid of Djedefre',
    location: 'Abu Rawash (8 km north of Giza)',
    significance: 'Crucial proof that Giza was NOT a pre-planned unified three-pyramid complex. Djedefre chose Abu Rawash, first pharaoh to adopt the title "Son of Ra" (Sa-Ra).',
    evidence: 'Extensive excavation by French-Egyptian teams at Abu Rawash; royal statuary and cartouches.'
  },
  {
    pharaoh: 'Khafre',
    relationship: 'Son of Khufu & brother/half-brother of Djedefre',
    reign: 'c. 2558 – 2532 BCE (~26 years)',
    monument: 'Second Pyramid & Great Sphinx Complex',
    location: 'Giza Plateau (Central bedrock ridge)',
    significance: 'Returned to Giza, choosing the elevated central knoll. Harmonized pyramid, causeway, valley temple, and the colossal Sphinx carved from the quarry ditch.',
    evidence: 'Diorite statues from Valley Temple, quarry stratigraphy, causeway masonry integrated with the Sphinx enclosure.'
  },
  {
    pharaoh: 'Menkaure',
    relationship: 'Son of Khafre & grandson of Khufu',
    reign: 'c. 2532 – 2504 BCE (~28 years)',
    monument: 'Third Pyramid (Netjer Menkaure)',
    location: 'Giza Plateau (Southwest)',
    significance: 'Represented a deliberate shift from sheer vertical volume to precious materials (heavy Aswan red granite casing). Left unfinished at his sudden death.',
    evidence: 'Inscriptions by his son Shepseskaf in the mortuary temple stating he completed his father’s monument; granite statues.'
  },
  {
    pharaoh: 'Shepseskaf',
    relationship: 'Son and successor of Menkaure',
    reign: 'c. 2504 – 2498 BCE (~6 years)',
    monument: 'Mastabat Fara’un',
    location: 'South Saqqara',
    significance: 'Completely abandoned Giza and abandoned the pyramid shape altogether, choosing a massive sarcophagus-shaped mastaba at Saqqara.',
    evidence: 'Inscriptions in Menkaure’s mortuary temple completing father’s work; mortuary complex at Saqqara.'
  }
];
