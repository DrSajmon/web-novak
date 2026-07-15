export default function WebFinance() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800">
      {/* Elegantní tmavá hlavička */}
      <header className="bg-slate-900 text-white p-10 md:p-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-2">Hynek Novák</h1>
          <p className="text-slate-400 text-lg">Regionální ředitel & Specialista na investice a reality</p>
          <div className="mt-6 inline-block bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold tracking-wide">
            Broker Consulting
          </div>
        </div>
      </header>

      {/* Analytická sekce */}
      <main className="max-w-4xl mx-auto p-8 -mt-10">
        <div className="bg-white rounded-xl shadow-lg p-8 border border-slate-100">
          <h2 className="text-2xl font-bold mb-4">Investiční strategie na míru</h2>
          <p className="text-slate-600 mb-6">
            Zde může být interaktivní kalkulačka složeného úročení nebo Lottie animace rostoucího grafu, která se spustí při najetí myší.
          </p>
          <button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors">
            Sjednat konzultaci
          </button>
        </div>
      </main>
    </div>
  )
}