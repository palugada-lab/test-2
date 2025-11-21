import { Rocket, TrendingUp, Users, Target } from 'lucide-react';

const Projects = () => {
  const project = {
    title: 'Kampanye Digital Marketing UMKM Lokal',
    period: '3 Bulan',
    description: 'Merancang dan mengeksekusi strategi digital marketing komprehensif untuk UMKM fashion lokal, menghasilkan pertumbuhan penjualan online yang signifikan.',
    results: [
      {
        icon: TrendingUp,
        metric: '40%',
        label: 'Peningkatan Penjualan Online',
        color: 'green'
      },
      {
        icon: Users,
        metric: '2.5x',
        label: 'Pertumbuhan Followers',
        color: 'blue'
      },
      {
        icon: Target,
        metric: '65%',
        label: 'Engagement Rate',
        color: 'purple'
      }
    ],
    responsibilities: [
      'Melakukan riset pasar dan analisis kompetitor untuk mengidentifikasi peluang',
      'Merancang strategi konten media sosial dengan fokus pada Instagram dan TikTok',
      'Mengoptimasi kampanye iklan Facebook dan Instagram dengan budget terbatas',
      'Membuat 50+ konten visual menggunakan Canva dan tools editing video',
      'Menganalisis performa kampanye secara weekly dan melakukan optimasi berkelanjutan',
      'Berkolaborasi dengan owner UMKM untuk memastikan alignment dengan brand value'
    ],
    tools: ['Instagram', 'TikTok', 'Facebook Ads', 'Google Analytics', 'Canva', 'Meta Business Suite']
  };

  const colorClasses = {
    green: 'bg-green-100 text-green-700',
    blue: 'bg-blue-100 text-blue-700',
    purple: 'bg-purple-100 text-purple-700'
  };

  return (
    <section className="fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
          Proyek & Portfolio
        </h2>

        <div className="space-y-8">
          <div className="relative">
            <div className="absolute -top-4 -left-4 p-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg">
              <Rocket className="text-white" size={32} />
            </div>

            <div className="pl-16 pt-2">
              <h3 className="text-2xl font-bold text-slate-900 mb-2">{project.title}</h3>
              <p className="text-blue-600 font-semibold mb-4">Durasi: {project.period}</p>
              <p className="text-slate-700 leading-relaxed mb-6">{project.description}</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {project.results.map((result, index) => {
              const Icon = result.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-xl ${colorClasses[result.color as keyof typeof colorClasses]} text-center transform hover:scale-105 transition-all duration-300`}
                >
                  <Icon className="mx-auto mb-3" size={32} />
                  <div className="text-3xl font-bold mb-2">{result.metric}</div>
                  <div className="text-sm font-medium">{result.label}</div>
                </div>
              );
            })}
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6">
            <h4 className="font-bold text-slate-900 mb-4 text-lg">Tanggung Jawab & Aktivitas</h4>
            <ul className="space-y-3">
              {project.responsibilities.map((resp, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <span className="inline-block w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                  <span className="leading-relaxed">{resp}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4 text-lg">Tools & Platform yang Digunakan</h4>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-medium shadow-md hover:bg-blue-700 transition-colors duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
