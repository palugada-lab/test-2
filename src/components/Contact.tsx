import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [status, setStatus] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('Terima kasih! Pesan Anda telah diterima. Saya akan segera menghubungi Anda.');
    setFormData({ name: '', email: '', message: '' });

    setTimeout(() => setStatus(''), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'sarah.putri@email.com',
      href: 'mailto:sarah.putri@email.com',
      color: 'blue'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+62 812-3456-7890',
      href: 'tel:+6281234567890',
      color: 'green'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Jakarta, Indonesia',
      href: '#',
      color: 'orange'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/sarahputri',
      href: 'https://linkedin.com/in/sarahputri',
      color: 'blue'
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
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
          Hubungi Saya
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Informasi Kontak</h3>
            <div className="space-y-4">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <a
                    key={index}
                    href={info.href}
                    className="flex items-start gap-4 p-4 bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-300 group"
                  >
                    <div className={`p-3 rounded-lg ${colorClasses[info.color as keyof typeof colorClasses]} group-hover:scale-110 transition-transform duration-300`}>
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="text-sm text-slate-600 font-medium">{info.label}</p>
                      <p className="text-slate-900 font-semibold">{info.value}</p>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="mt-8 p-6 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl text-white">
              <h4 className="font-bold mb-3 text-lg">Mari Berkolaborasi!</h4>
              <p className="text-blue-50 leading-relaxed">
                Saya selalu terbuka untuk kesempatan baru, kolaborasi proyek, atau sekadar diskusi tentang marketing dan digital strategy. Jangan ragu untuk menghubungi saya!
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-6">Kirim Pesan</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Nama
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="Nama Anda"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Pesan
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all duration-200 resize-none"
                  placeholder="Tulis pesan Anda di sini..."
                />
              </div>

              {status && (
                <div className="p-4 bg-green-100 text-green-700 rounded-lg">
                  {status}
                </div>
              )}

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 font-medium"
              >
                <Send size={18} />
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
