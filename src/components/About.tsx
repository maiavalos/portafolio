import { useLanguage } from '../contexts/LanguageContext';

export const About = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t('about.title')}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.intro')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.passion')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.approach')}
            </p>
            
            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                {t('about.personal.title')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 dark:text-gray-400">{t('about.personal.location')}:</span>
                  <span className="text-gray-900 dark:text-white font-medium">Argentina</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 dark:text-gray-400">{t('about.personal.languages')}:</span>
                  <span className="text-gray-900 dark:text-white font-medium">Español, English</span>
                </div>
                <div className="flex items-center space-x-3">
                  <span className="text-gray-600 dark:text-gray-400">{t('about.personal.status')}:</span>
                  <span className="text-green-500 font-medium">{t('about.personal.available')}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl">
              <div className="w-full h-full bg-gradient-to-br from-blue-400 to-purple-600 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <span className="text-4xl font-bold">MA</span>
                  </div>
                  <p className="text-xl font-medium">{t('about.photo.placeholder')}</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full opacity-20 blur-xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full opacity-20 blur-xl"></div>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-blue-500 mb-2">2+</div>
            <div className="text-gray-600 dark:text-gray-400">{t('about.stats.years')}</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-500 mb-2">10+</div>
            <div className="text-gray-600 dark:text-gray-400">{t('about.stats.projects')}</div>
          </div>
          <div className="text-center p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-500 mb-2">100%</div>
            <div className="text-gray-600 dark:text-gray-400">{t('about.stats.commitment')}</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
