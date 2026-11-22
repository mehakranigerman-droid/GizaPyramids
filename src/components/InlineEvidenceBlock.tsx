import React from 'react';
import { EVIDENCE_RECORDS, EVIDENCE_LEVELS } from '../data/evidenceData';
import { EvidenceBadge } from './EvidenceBadge';

interface InlineEvidenceBlockProps {
  claimIds: string[];
  surface?: 'light' | 'dark';
}

export const InlineEvidenceBlock: React.FC<InlineEvidenceBlockProps> = ({
  claimIds,
  surface = 'light',
}) => {
  const records = EVIDENCE_RECORDS.filter((r) => claimIds.includes(r.id));
  if (records.length === 0) return null;

  const isDark = surface === 'dark';
  const borderClass = isDark ? 'border-[#B49A72]/20' : 'border-[#2B211B]/15';
  const headingClass = isDark ? 'text-[#F4EFE5]' : 'text-[#2B211B]';
  const textClass = isDark ? 'text-[#E2D2B4]' : 'text-[#2B211B]/85';
  const mutedClass = isDark ? 'text-[#E8C56E]' : 'text-[#8A4F3D]';

  return (
    <div className={`border-t ${borderClass} pt-12 mt-14`}>
      <div className={`border-b ${borderClass} pb-4 mb-8`}>
        <span className={`font-mono text-xs uppercase tracking-widest font-bold ${mutedClass}`}>
          Primary Evidence & Verification
        </span>
        <h3 className={`text-2xl sm:text-3xl font-serif font-bold mt-1 ${headingClass}`}>
          Archaeological Proof & Limitations
        </h3>
      </div>

      <div className={`divide-y ${borderClass}`}>
        {records.map((rec) => {
          const info = EVIDENCE_LEVELS[rec.level] || EVIDENCE_LEVELS.UNKNOWN;
          return (
            <div key={rec.id} className="py-7 first:pt-0 last:pb-0">
              <div className="flex flex-wrap items-baseline justify-between gap-4 mb-3">
                <h4 className={`font-serif text-xl font-bold ${headingClass} max-w-2xl`}>
                  {rec.claim}
                </h4>
                <EvidenceBadge level={rec.level} as="span" surface={surface} />
              </div>

              <p className={`text-sm leading-relaxed max-w-3xl mb-5 ${textClass}`}>
                {rec.summary}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
                <div>
                  <span className={`font-mono uppercase tracking-wider font-bold block mb-2 ${mutedClass}`}>
                    Supporting Physical Evidence
                  </span>
                  <ul className={`space-y-2 ${textClass}`}>
                    {rec.primaryEvidence.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className={`font-mono font-bold ${mutedClass}`}>{idx + 1}.</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <span className={`font-mono uppercase tracking-wider font-bold block mb-2 ${mutedClass}`}>
                    Context & Limitations ({info.label})
                  </span>
                  <ul className={`space-y-2 ${textClass}`}>
                    {rec.limitationsAndCounterpoints.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className={`font-mono font-bold ${mutedClass}`}>—</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className={`mt-4 text-[11px] font-mono ${isDark ? 'text-[#D8C7A3]/65' : 'text-[#2B211B]/60'}`}>
                Sources: {rec.sources.join(' · ')}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
