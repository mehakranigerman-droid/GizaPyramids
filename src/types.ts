export type EvidenceLevel = 
  | 'ESTABLISHED' 
  | 'SUPPORTED' 
  | 'DEBATED' 
  | 'SPECULATIVE' 
  | 'UNKNOWN';

export interface EvidenceBadgeInfo {
  level: EvidenceLevel;
  label: string;
  description: string;
  dotColor: string;
  badgeBg: string;
  badgeBorder: string;
  badgeText: string;
}

export interface EvidenceRecord {
  id: string;
  topic: string;
  claim: string;
  level: EvidenceLevel;
  summary: string;
  primaryEvidence: string[];
  limitationsAndCounterpoints: string[];
  sources: string[];
}

export interface PyramidData {
  id: 'khufu' | 'khafre' | 'menkaure';
  name: string;
  arabicName: string;
  pharaoh: string;
  reignPeriod: string;
  estimatedBCE: string;
  originalHeightM: number;
  currentHeightM: number;
  baseLengthM: number;
  baseAreaM2: number;
  slopeAngleDeg: number;
  sekedRatio: string;
  volumeM3: number;
  estimatedWeightTons: number;
  estimatedStoneBlocks: number;
  casingMaterial: string;
  coreMaterial: string;
  quarryLocations: string[];
  architecturalInnovations: string[];
  notableFeatures: string;
  internalComplexity: string;
}

export interface ChamberItem {
  id: string;
  name: string;
  status: 'KNOWN_STRUCTURE' | 'DETECTED_SPACE' | 'UNKNOWN_PURPOSE';
  evidenceLevel: EvidenceLevel;
  coordinates: { x: number; y: number }; // SVG % coordinates on pyramid cutaway
  elevationMeters: number;
  dimensions: string;
  material: string;
  description: string;
  archaeologicalDiscovery: string;
  debatedAspects?: string;
  iconType: 'chamber' | 'corridor' | 'anomaly' | 'shaft';
}

export interface TheoryItem {
  id: string;
  claim: string;
  proponents: string;
  whatItSays: string;
  evidencePresented: string[];
  scientificCritique: string[];
  consensusStatus: EvidenceLevel;
  statusSummary: string;
  keySources: string[];
}

export interface SourceItem {
  id: string;
  citation: string;
  author: string;
  year: number;
  title: string;
  publication: string;
  category: 'Archaeology' | 'Geology' | 'Astronomy' | 'Engineering' | 'Epigraphy' | 'Muon Radiography';
  note: string;
}
