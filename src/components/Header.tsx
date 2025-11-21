import { Mail, Linkedin, Github, Download } from 'lucide-react';

const Header = () => {
  const handleDownloadCV = () => {
    window.print();
  };

  return (
    <header className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white pt-24 pb-16 overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-1/2 -left-1/4 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-700"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-300 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white shadow-2xl">
              <img
                src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Sarah Putri - Marketing Professional"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex-1 text-center md:text-left fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-3 tracking-tight">
              Sarah Putri
            </h1>
            <h2 className="text-xl md:text-2xl text-blue-100 mb-4 font-light">
              Marketing Professional & Digital Strategist
            </h2>
            <p className="text-blue-50 text-lg mb-6 max-w-2xl leading-relaxed">
              Passionate tentang membangun strategi marketing yang berdampak. Spesialisasi dalam digital marketing, social media engagement, dan kampanye yang menghasilkan pertumbuhan bisnis terukur.
            </p>

            <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
              <a
                href="mailto:sarah.putri@email.com"
                className="flex items-center gap-2 bg-white text-blue-700 px-5 py-2.5 rounded-lg hover:bg-blue-50 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Mail size={18} />
                <span className="font-medium">Email</span>
              </a>
              <a
                href="https://linkedin.com/in/sarahputri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-blue-500 text-white px-5 py-2.5 rounded-lg hover:bg-blue-400 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Linkedin size={18} />
                <span className="font-medium">LinkedIn</span>
              </a>
              <a
                href="https://github.com/sarahputri"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-slate-700 text-white px-5 py-2.5 rounded-lg hover:bg-slate-600 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Github size={18} />
                <span className="font-medium">GitHub</span>
              </a>
              <button
                onClick={handleDownloadCV}
                className="flex items-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-lg hover:bg-orange-400 transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 no-print"
              >
                <Download size={18} />
                <span className="font-medium">Download CV</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
