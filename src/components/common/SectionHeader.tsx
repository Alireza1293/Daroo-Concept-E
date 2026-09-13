import React from 'react';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  actionText?: string;
  actionHref?: string;
  center?: boolean;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  badge,
  actionText,
  actionHref = '#',
  center = false,
}) => {
  return (
    <div
      className={`flex flex-col sm:flex-row items-start ${
        center ? 'sm:items-center sm:justify-center text-center' : 'sm:items-end sm:justify-between'
      } gap-4 mb-8 md:mb-10`}
    >
      <div className={center ? 'flex flex-col items-center max-w-2xl' : 'max-w-xl'}>
        {badge && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-[#1F8A5B] border border-emerald-200/60 mb-2.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#1F8A5B]"></span>
            {badge}
          </span>
        )}
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
            {subtitle}
          </p>
        )}
      </div>

      {actionText && (
        <a
          href={actionHref}
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#1F8A5B] hover:text-[#166945] transition-colors py-1 group shrink-0"
        >
          <span>{actionText}</span>
          <svg
            className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
        </a>
      )}
    </div>
  );
};
