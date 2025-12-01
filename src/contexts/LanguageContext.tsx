import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'es' | 'en';
type Translations = {
  [key: string]: {
    [key: string]: string;
  };
};

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traducciones
const translations: Translations = {
  es: {
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.skills': 'Habilidades',
    'nav.projects': 'Proyectos',
    'nav.contact': 'Contacto',
    'hero.greeting': 'Hola, soy',
    'hero.role': 'Desarrolladora Full Stack',
    'hero.available': 'DISPONIBLE PARA NUEVOS PROYECTOS',
    
    // About section
    'about.title': 'Sobre Mí',
    'about.intro': 'Soy una desarrolladora Full Stack apasionada por crear experiencias web excepcionales. Me especializo en construir aplicaciones modernas, escalables y fáciles de usar que resuelven problemas reales.',
    'about.passion': 'Mi pasión por la tecnología me impulsa a estar siempre aprendiendo y explorando nuevas herramientas y metodologías. Disfruto trabajando en proyectos desafiantes que me permitan crecer tanto profesional como personalmente.',
    'about.approach': 'Enfoque cada proyecto con atención al detalle, creatividad y un compromiso con la calidad. Creo firmemente en el poder del código limpio, las buenas prácticas y la colaboración efectiva.',
    'about.personal.title': 'Información Personal',
    'about.personal.location': 'Ubicación',
    'about.personal.languages': 'Idiomas',
    'about.personal.status': 'Estado',
    'about.personal.available': 'Disponible para trabajar',
    'about.photo.placeholder': 'Foto de perfil',
    'about.stats.years': 'Años de experiencia',
    'about.stats.projects': 'Proyectos completados',
    'about.stats.commitment': 'Compromiso',
    
    // Skills section
    'skills.title': 'Habilidades',
    'skills.subtitle': 'Tecnologías y herramientas que domino para crear soluciones digitales innovadoras',
    'skills.categories.frontend.title': 'Frontend',
    'skills.categories.backend.title': 'Backend',
    'skills.categories.tools.title': 'Herramientas',
    'skills.soft.title': 'Habilidades Blandas',
    'skills.soft.teamwork': 'Trabajo en Equipo',
    'skills.soft.teamwork.desc': 'Colaboración efectiva y comunicación clara',
    'skills.soft.creativity': 'Creatividad',
    'skills.soft.creativity.desc': 'Soluciones innovadoras y pensamiento crítico',
    'skills.soft.learning': 'Aprendizaje Continuo',
    'skills.soft.learning.desc': 'Siempre aprendiendo nuevas tecnologías',
    'skills.soft.problem': 'Resolución de Problemas',
    'skills.soft.problem.desc': 'Análisis y soluciones eficientes',
    
    // Projects section
    'projects.title': 'Mis Proyectos',
    'projects.subtitle': 'Algunos de los proyectos en los que he trabajado recientemente',
    'projects.viewDemo': 'Ver Demo',
    'projects.viewCode': 'Código',
    
    // Contact section
    'contact.title': 'Contacto',
    'contact.subtitle': '¿Tienes un proyecto en mente? Me encantaría saber de ti',
    'contact.info.title': 'Información de Contacto',
    'contact.info.email.title': 'Email',
    'contact.info.phone.title': 'Teléfono',
    'contact.info.location.title': 'Ubicación',
    'contact.info.location.content': 'Buenos Aires, Argentina',
    'contact.social.title': 'Redes Sociales',
    'contact.form.title': 'Envíame un Mensaje',
    'contact.form.name': 'Nombre',
    'contact.form.name.placeholder': 'Tu nombre',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'tu@email.com',
    'contact.form.message': 'Mensaje',
    'contact.form.message.placeholder': 'Cuéntame sobre tu proyecto...',
    'contact.form.send': 'Enviar Mensaje',
    'contact.form.sending': 'Enviando...',
    'contact.success': '¡Mensaje enviado con éxito! Te responderé pronto.',
  },
  en: {
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'hero.greeting': 'Hi, I\'m',
    'hero.role': 'Full Stack Developer',
    'hero.available': 'AVAILABLE FOR NEW PROJECTS',
    
    // About section
    'about.title': 'About Me',
    'about.intro': 'I\'m a Full Stack developer passionate about creating exceptional web experiences. I specialize in building modern, scalable, and user-friendly applications that solve real problems.',
    'about.passion': 'My passion for technology drives me to always be learning and exploring new tools and methodologies. I enjoy working on challenging projects that allow me to grow both professionally and personally.',
    'about.approach': 'I approach each project with attention to detail, creativity, and a commitment to quality. I firmly believe in the power of clean code, good practices, and effective collaboration.',
    'about.personal.title': 'Personal Information',
    'about.personal.location': 'Location',
    'about.personal.languages': 'Languages',
    'about.personal.status': 'Status',
    'about.personal.available': 'Available for work',
    'about.photo.placeholder': 'Profile Photo',
    'about.stats.years': 'Years of experience',
    'about.stats.projects': 'Completed projects',
    'about.stats.commitment': 'Commitment',
    
    // Skills section
    'skills.title': 'Skills',
    'skills.subtitle': 'Technologies and tools I master to create innovative digital solutions',
    'skills.categories.frontend.title': 'Frontend',
    'skills.categories.backend.title': 'Backend',
    'skills.categories.tools.title': 'Tools',
    'skills.soft.title': 'Soft Skills',
    'skills.soft.teamwork': 'Teamwork',
    'skills.soft.teamwork.desc': 'Effective collaboration and clear communication',
    'skills.soft.creativity': 'Creativity',
    'skills.soft.creativity.desc': 'Innovative solutions and critical thinking',
    'skills.soft.learning': 'Continuous Learning',
    'skills.soft.learning.desc': 'Always learning new technologies',
    'skills.soft.problem': 'Problem Solving',
    'skills.soft.problem.desc': 'Analysis and efficient solutions',
    
    // Projects section
    'projects.title': 'My Projects',
    'projects.subtitle': 'Some of the projects I\'ve been working on recently',
    'projects.viewDemo': 'View Demo',
    'projects.viewCode': 'Code',
    
    // Contact section
    'contact.title': 'Contact',
    'contact.subtitle': 'Have a project in mind? I\'d love to hear from you',
    'contact.info.title': 'Contact Information',
    'contact.info.email.title': 'Email',
    'contact.info.phone.title': 'Phone',
    'contact.info.location.title': 'Location',
    'contact.info.location.content': 'Buenos Aires, Argentina',
    'contact.social.title': 'Social Networks',
    'contact.form.title': 'Send Me a Message',
    'contact.form.name': 'Name',
    'contact.form.name.placeholder': 'Your name',
    'contact.form.email': 'Email',
    'contact.form.email.placeholder': 'your@email.com',
    'contact.form.message': 'Message',
    'contact.form.message.placeholder': 'Tell me about your project...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.success': 'Message sent successfully! I\'ll get back to you soon.',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('es');

  useEffect(() => {
    // Verificar el idioma guardado en localStorage o la preferencia del navegador
    const savedLanguage = localStorage.getItem('language') as Language | null;
    const browserLanguage = navigator.language.split('-')[0] as Language;
    
    if (savedLanguage) {
      setLanguage(savedLanguage);
    } else if (browserLanguage === 'es' || browserLanguage === 'en') {
      setLanguage(browserLanguage);
    }
  }, []);

  const changeLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[language]?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export default LanguageContext;
