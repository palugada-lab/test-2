import { Briefcase, TrendingUp, Users, Calendar, MapPin } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Marketing Intern',
      company: 'Startup Test',
      period: 'Juni 2023 - Agustus 2023',
      location: 'Jakarta, Indonesia',
      achievements: [
        'Meningkatkan engagement media sosial sebesar 30% melalui strategi konten yang terencana',
        'Menganalisis performa kampanye menggunakan Google Analytics dan Meta Business Suite',
        'Merancang dan mengeksekusi 15+ post media sosial per minggu dengan konsistensi branding',
        'Berkolaborasi dengan tim desain untuk membuat visual marketing yang menarik'
      ],
      icon: TrendingUp,
      color: 'blue'
    },
    {
      title: 'Wakil Ketua',
      company: 'Klub Marketing Universitas',
      period: 'Januari 2022 - Januari 2023',
      location: 'Universitas Indonesia',
      achievements: [
        'Mengorganisir 5 acara kampus yang berhasil menjangkau 500+ mahasiswa',
        'Memimpin tim 15 anggota dalam perencanaan dan eksekusi event marketing',
        'Meningkatkan anggota klub sebesar 40% melalui kampanye rekrutmen yang efektif',
        'Mengelola budget acara senilai Rp 20 juta+ dengan akuntabilitas penuh'
      ],
      icon: Users,
      color: 'green'
    }
  ];

  const colorClasses = {
    blue: {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-200',
      hover: 'hover:border-blue-400'
    },
    green: {
      bg: 'bg-green-100',
      text: 'text-green-700',
      border: 'border-green-200',
      hover: 'hover:border-green-400'
    }
  };

  return (
    <section className="slide-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
          Pengalaman Kerja
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            const colors = colorClasses[exp.color as keyof typeof colorClasses];
            
            return (
              <div
                key={index}
                className={`group border-2 ${colors.border} ${colors.hover} rounded-xl p-6 transition-all duration-300 hover:shadow-xl`}
              >
                {/* Header Card */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-lg ${colors.bg} ${colors.text} group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={24} />
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                    <Briefcase size={12} className="inline mr-1" />
                    {index === 0 ? 'Internship' : 'Leadership'}
                  </div>
                </div>

                {/* Title & Company */}
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-slate-900 mb-1">{exp.title}</h3>
                  <p className="text-blue-600 font-semibold text-lg">{exp.company}</p>
                </div>

                {/* Period & Location */}
                <div className="flex flex-col gap-2 mb-4 pb-4 border-b border-slate-200">
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <Calendar size={16} className="flex-shrink-0" />
                    <span>{exp.period}</span>
                  </div>
                  <div className="flex items-center gap-2 text-slate-600 text-sm">
                    <MapPin size={16} className="flex-shrink-0" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 text-sm">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-1.5 flex-shrink-0"></span>
                        <span className="leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
