export default function PageLayout({ title, subtitle, description, children }) {
  return (
    <div className="pt-32">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-[#4c4191] to-[#3d357a] text-white py-16 mb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl md:text-2xl text-white/90 mb-4">
              {subtitle}
            </p>
          )}
          {description && (
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>
      </div>

      {/* Page Content */}
      <div className="pb-20">
        {children}
      </div>
    </div>
  );
}