import { Briefcase, TrendingUp, Users } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Marketing Intern',
      company: 'Startup Lokal',
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
    blue: 'bg-blue-100 text-blue-700',
    green: 'bg-green-100 text-green-700'
  };

  return (
    <section className="slide-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
          Pengalaman Kerja
        </h2>

        <div className="space-y-8">
          {experiences.map((exp, index) => {
            const Icon = exp.icon;
            return (
              <div key={index} className="relative pl-8 border-l-2 border-slate-200 hover:border-blue-400 transition-colors duration-300">
                <div className={`absolute -left-5 top-0 p-2.5 rounded-full ${colorClasses[exp.color as keyof typeof colorClasses]} shadow-md`}>
                  <Icon size={20} />
                </div>

                <div className="pb-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900">{exp.title}</h3>
                      <p className="text-blue-600 font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-slate-600 text-sm md:text-right">
                      <p className="font-medium">{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>

                  <ul className="space-y-2 mt-4">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
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
