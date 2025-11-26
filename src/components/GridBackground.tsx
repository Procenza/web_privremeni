// Technical Blueprint Grid Background
export const GridBackground = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* 4 Vertical Grid Lines - Blueprint Style */}
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-12 h-full max-w-7xl mx-auto">
          {/* Grid Line at col 3 */}
          <div className="col-start-3 border-r border-slate-200 dark:border-slate-800 h-full" />
          {/* Grid Line at col 6 */}
          <div className="col-start-6 border-r border-slate-200 dark:border-slate-800 h-full" />
          {/* Grid Line at col 9 */}
          <div className="col-start-9 border-r border-slate-200 dark:border-slate-800 h-full" />
          {/* Grid Line at col 12 */}
          <div className="col-start-12 border-r border-slate-200 dark:border-slate-800 h-full" />
        </div>
      </div>

      {/* Subtle dot pattern overlay for technical feel */}
      <div
        className="absolute inset-0 opacity-[0.015] dark:opacity-[0.025]"
        style={{
          backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />
    </div>
  );
};
