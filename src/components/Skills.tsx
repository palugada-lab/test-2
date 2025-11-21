import { BarChart3, Brain, Palette, MessageSquare } from 'lucide-react';
import { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('marketing');

  const skillCategories = {
    marketing: {
      title: 'Marketing & Digital',
      icon: BarChart3,
      color: 'blue',
      skills: [
        { name: 'Social Media Marketing', level: 90 },
        { name: 'Content Strategy', level: 85 },
        { name: 'Google Analytics', level: 80 },
        { name: 'Meta Business Suite', level: 85 },
        { name: 'Email Marketing', level: 75 },
        { name: 'SEO/SEM', level: 70 }
      ]
    },
    analytical: {
      title: 'Analitis & Problem Solving',
      icon: Brain,
      color: 'green',
      skills: [
        { name: 'Data Analysis', level: 85 },
        { name: 'Market Research', level: 80 },
        { name: 'Campaign Optimization', level: 85 },
        { name: 'ROI Analysis', level: 80 },
        { name: 'Competitor Analysis', level: 75 },
        { name: 'Strategic Planning', level: 80 }
      ]
    },
    creative: {
      title: 'Creative & Design',
      icon: Palette,
      color: 'purple',
      skills: [
        { name: 'Canva', level: 90 },
        { name: 'Adobe Photoshop', level: 70 },
        { name: 'Video Editing', level: 65 },
        { name: 'Copywriting', level: 85 },
        { name: 'Brand Development', level: 75 },
        { name: 'Visual Storytelling', level: 80 }
      ]
    },
    soft: {
      title: 'Soft Skills',
      icon: MessageSquare,
      color: 'orange',
      skills: [
        { name: 'Komunikasi', level: 90 },
        { name: 'Teamwork', level: 90 },
        { name: 'Leadership', level: 85 },
        { name: 'Time Management', level: 85 },
        { name: 'Adaptability', level: 90 },
        { name: 'Critical Thinking', level: 85 }
      ]
    }
  };

  const colorClasses = {
    blue: { bg: 'bg-blue-600', light: 'bg-blue-100', text: 'text-blue-700', border: 'border-blue-600' },
    green: { bg: 'bg-green-600', light: 'bg-green-100', text: 'text-green-700', border: 'border-green-600' },
    purple: { bg: 'bg-purple-600', light: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-600' },
    orange: { bg: 'bg-orange-600', light: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-600' }
  };

  const currentCategory = skillCategories[activeCategory as keyof typeof skillCategories];
  const Icon = currentCategory.icon;
  const colors = colorClasses[currentCategory.color as keyof typeof colorClasses];

  return (
    <section className="fade-in">
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10">
        <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
          <span className="w-12 h-1 bg-blue-600 rounded-full"></span>
          Keahlian
        </h2>

        <div className="flex flex-wrap gap-3 mb-8">
          {Object.entries(skillCategories).map(([key, category]) => {
            const CategoryIcon = category.icon;
            const isActive = activeCategory === key;
            return (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`flex items-center gap-2 px-5 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? `${colorClasses[category.color as keyof typeof colorClasses].bg} text-white shadow-lg transform scale-105`
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <CategoryIcon size={18} />
                <span>{category.title}</span>
              </button>
            );
          })}
        </div>

        <div className="space-y-4">
          <div className={`flex items-center gap-3 mb-6 p-4 rounded-lg ${colors.light}`}>
            <Icon className={colors.text} size={24} />
            <h3 className="text-xl font-bold text-slate-900">{currentCategory.title}</h3>
          </div>

          {currentCategory.skills.map((skill, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-slate-700">{skill.name}</span>
                <span className={`text-sm font-semibold ${colors.text}`}>{skill.level}%</span>
              </div>
              <div className="h-3 bg-slate-100 rounded-full overflow-hidden">
                <div
                  className={`h-full ${colors.bg} rounded-full transition-all duration-1000 ease-out`}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
