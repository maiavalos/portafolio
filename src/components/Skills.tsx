import { useLanguage } from '../contexts/LanguageContext';

export const Skills = () => {
  const { t } = useLanguage();

  const skillCategories = [
    {
      title: t('skills.categories.frontend.title'),
      icon: '🎨',
      skills: [
        { name: 'React', level: 90, color: 'bg-blue-500' },
        { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
        { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
        { name: 'Next.js', level: 80, color: 'bg-gray-800' },
        { name: 'Vue.js', level: 75, color: 'bg-green-500' },
      ]
    },
    {
      title: t('skills.categories.backend.title'),
      icon: '⚙️',
      skills: [
        { name: 'Node.js', level: 85, color: 'bg-green-600' },
        { name: 'Python', level: 80, color: 'bg-blue-500' },
        { name: 'PostgreSQL', level: 75, color: 'bg-blue-700' },
        { name: 'MongoDB', level: 70, color: 'bg-green-500' },
        { name: 'Express.js', level: 85, color: 'bg-gray-700' },
      ]
    },
    {
      title: t('skills.categories.tools.title'),
      icon: '🛠️',
      skills: [
        { name: 'Git', level: 90, color: 'bg-orange-500' },
        { name: 'Docker', level: 70, color: 'bg-blue-400' },
        { name: 'AWS', level: 65, color: 'bg-yellow-500' },
        { name: 'Figma', level: 80, color: 'bg-purple-500' },
        { name: 'VS Code', level: 95, color: 'bg-blue-600' },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('skills.title')}
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            {t('skills.subtitle')}
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center mb-6">
                <span className="text-3xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <div
                        className={`${skill.color} h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
            {t('skills.soft.title')}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🤝', title: t('skills.soft.teamwork'), desc: t('skills.soft.teamwork.desc') },
              { icon: '💡', title: t('skills.soft.creativity'), desc: t('skills.soft.creativity.desc') },
              { icon: '📚', title: t('skills.soft.learning'), desc: t('skills.soft.learning.desc') },
              { icon: '🎯', title: t('skills.soft.problem'), desc: t('skills.soft.problem.desc') },
            ].map((softSkill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700">
                <div className="text-3xl mb-3">{softSkill.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {softSkill.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {softSkill.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
