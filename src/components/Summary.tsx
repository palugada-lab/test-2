import { Target, TrendingUp, Lightbulb } from 'lucide-react';

const Summary = () => {
  const highlights = [
    {
      icon: Target,
      title: 'Hasil Terukur',
      description: 'Meningkatkan engagement media sosial 30% dan penjualan online 40%',
      color: 'blue'
    },
    {
      icon: TrendingUp,
      title: 'Kemampuan Analitis',
      description: 'Menganalisis data kampanye untuk optimasi strategi marketing berkelanjutan',
      color: 'green'
    },
    {
      icon: Lightbulb,
      title: 'Pemecahan Masalah',
      description: 'Mengidentifikasi peluang pasar dan merancang solusi kreatif untuk UMKM',
      color: 'orange'
    }
  ];

  const colorClasses = {
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700',
    orange: 'bg-orange-100 text-orange-700'
  };

  return (
    <section className="fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
          <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
          Tentang Saya
        </h2>

        <div className="prose prose-lg max-w-none mb-8">
          <p className="text-slate-700 leading-relaxed">
            Sebagai marketing professional dengan background Manajemen Bisnis dari Universitas Indonesia,
            saya memiliki passion dalam menciptakan strategi marketing yang data-driven dan berdampak nyata.
            Pengalaman saya di startup lokal telah mengasah kemampuan saya dalam social media marketing,
            analisis performa kampanye, dan optimasi engagement.
          </p>
          <p className="text-slate-700 leading-relaxed mt-4">
            Saya percaya bahwa marketing yang efektif dimulai dari pemahaman mendalam tentang target audience
            dan didukung oleh data yang solid. Keahlian saya dalam pemecahan masalah membantu saya
            mengidentifikasi peluang pertumbuhan dan merancang solusi kreatif yang menghasilkan ROI positif.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-gradient-to-br from-slate-50 to-white rounded-xl border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`inline-flex p-3 rounded-lg ${colorClasses[item.color as keyof typeof colorClasses]} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon size={24} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Summary;
