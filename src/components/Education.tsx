import { GraduationCap, Award } from 'lucide-react';

const Education = () => {
  return (
    <section className="fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
          Pendidikan
        </h2>

        <div className="relative pl-8 border-l-2 border-slate-200">
          <div className="absolute -left-5 top-0 p-2.5 rounded-full bg-purple-100 text-purple-700 shadow-md">
            <GraduationCap size={20} />
          </div>

          <div className="pb-6">
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-4">
              <div>
                <h3 className="text-xl font-bold text-slate-900">Sarjana Manajemen Bisnis (S1)</h3>
                <p className="text-blue-600 font-semibold text-lg">Universitas Indonesia</p>
              </div>
              <div className="text-slate-600 text-sm md:text-right">
                <p className="font-medium">2020 - 2024</p>
                <p>Jakarta, Indonesia</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl p-6 mt-4">
              <div className="flex items-start gap-3 mb-4">
                <Award className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                <div>
                  <h4 className="font-semibold text-slate-900 mb-2">Fokus Studi & Pencapaian</h4>
                  <ul className="space-y-2 text-slate-700">
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>Konsentrasi: Marketing & Digital Business Strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>Mata kuliah unggulan: Consumer Behavior, Digital Marketing, Brand Management</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>Aktif dalam organisasi mahasiswa dan kompetisi business case</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                      <span>Skripsi: "Strategi Digital Marketing untuk Meningkatkan Brand Awareness UMKM"</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
