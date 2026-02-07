import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

const Index = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const packages = [
    {
      id: "gold",
      badge: "VIP",
      icon: "👑",
      title: "Генеральный партнер",
      price: "100 000 ₽",
      features: [
        "20 входных билетов",
        "Ведущий говорит вставки о спонсоре в течение мероприятия (детали обсуждаем)",
        "Ролл-апы у сцены",
        "Центральная вставка на общем рекламном плакате",
        "Упоминание на сайте конференции",
        "Благодарность или рекламное промо в чате с участниками встречи",
        "Вкладыш в промо пакет участникам (создаете свою рекламу со специальным предложением)"
      ],
      buttonText: "Стать генеральным партнером",
      gradientBorder: "linear-gradient(90deg, #ffd700, #ffaa00)",
      badgeGradient: "linear-gradient(135deg, #ffd700, #ffaa00)",
      buttonGradient: "linear-gradient(135deg, #ffd700, #ffaa00)",
      priceColor: "#e6a700",
      buttonColor: "#333"
    },
    {
      id: "silver",
      badge: "ПОПУЛЯРНЫЙ",
      icon: "⭐",
      title: "Пакет STANDART",
      price: "25 000 ₽",
      features: [
        "5 входных билетов на мероприятие",
        "Вкладыш в промо пакет участникам (создаете свою рекламу со специальным предложением)",
        "Установка Ролл-апов",
        "Размещение на сайте конференции",
        "Упоминание в ТГ канале с участниками конференции",
        "Вставка логотипа на общем рекламном плакате"
      ],
      buttonText: "Стать партнером",
      gradientBorder: "linear-gradient(90deg, #7c6fd6, #8b7ee0)",
      badgeGradient: "linear-gradient(135deg, #7c6fd6, #8b7ee0)",
      buttonGradient: "linear-gradient(135deg, #667eea, #764ba2)",
      priceColor: "#7c6fd6",
      buttonColor: "white"
    },
    {
      id: "bronze",
      badge: "БАРТЕР",
      icon: "🎁",
      title: "Информационные спонсоры",
      price: "БАРТЕР",
      note: "Мы ничего не платим им, они ничего не платят нам — делают рекламу",
      features: [
        "Размещение на сайте конференции",
        "Вставка логотипа на общем рекламном плакате",
        "Вкладыш в промо пакет участникам (создаете свою рекламу со специальным предложением)"
      ],
      buttonText: "Стать спонсором",
      gradientBorder: "linear-gradient(90deg, #cd7f32, #8b4513)",
      badgeGradient: "linear-gradient(135deg, #cd7f32, #8b4513)",
      buttonGradient: "linear-gradient(135deg, #cd7f32, #8b4513)",
      priceColor: "#8b4513",
      buttonColor: "white"
    }
  ];

  const benefits = [
    {
      icon: "👁️",
      title: "Видимость бренда",
      description: "Ваш логотип на всех материалах мероприятия: сайт, плакаты, презентации"
    },
    {
      icon: "👥",
      title: "Нетворкинг",
      description: "Прямой контакт с целевой аудиторией — профессионалами и лидерами мнений"
    },
    {
      icon: "🎯",
      title: "Лидогенерация",
      description: "Сбор контактов заинтересованных клиентов и потенциальных партнеров"
    },
    {
      icon: "🏆",
      title: "Репутация",
      description: "Ассоциация с ведущим отраслевым событием повышает статус вашего бренда"
    },
    {
      icon: "📸",
      title: "Контент",
      description: "Фото и видео материалы для использования в ваших маркетинговых каналах"
    },
    {
      icon: "⚙️",
      title: "Гибкость",
      description: "Индивидуальные условия сотрудничества под ваш бизнес-задачи"
    }
  ];

  const stats = [
    { number: "150+", label: "Предпринимателей на мероприятии" },
    { number: "6+", label: "Спикеров" },
    { number: "18 апреля", label: "2026 года" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-3 md:py-4 flex justify-between items-center">
          <div className="text-lg sm:text-xl md:text-2xl font-bold">
            Конференция <span className="text-purple-600">2026</span>
          </div>
          <div className="hidden lg:flex gap-4 xl:gap-8 items-center text-sm xl:text-base">
            <a href="#main" className="text-gray-700 hover:text-purple-600 transition">Главная</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition">О мероприятии</a>
            <a href="#benefits" className="text-gray-700 hover:text-purple-600 transition">Преимущества</a>
            <a href="#packages" className="text-gray-700 hover:text-purple-600 transition">Пакеты</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition">Контакты</a>
            <Button 
              className="bg-purple-600 hover:bg-purple-700 text-white text-sm"
              onClick={() => window.open('https://t.me/DashaChernikova8', '_blank')}
            >
              Стать партнером
            </Button>
          </div>
          <Button 
            className="lg:hidden bg-purple-600 hover:bg-purple-700 text-white text-sm px-4 py-2"
            onClick={() => window.open('https://t.me/DashaChernikova8', '_blank')}
          >
            Связаться
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section 
        id="main"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
        }}
      >
        {/* Animated Background Pattern */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Floating Gradient Orbs */}
          <div className="absolute w-96 h-96 bg-purple-400/20 rounded-full blur-3xl -top-20 -left-20 animate-float" />
          <div className="absolute w-80 h-80 bg-indigo-400/20 rounded-full blur-3xl top-1/3 right-0 animate-float-delay-1" />
          <div className="absolute w-72 h-72 bg-violet-400/20 rounded-full blur-3xl bottom-10 left-1/4 animate-float-delay-2" />
          
          {/* Geometric Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }} />
          </div>
          
          {/* Animated Lines */}
          <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{ stopColor: 'white', stopOpacity: 0 }} />
                <stop offset="50%" style={{ stopColor: 'white', stopOpacity: 0.5 }} />
                <stop offset="100%" style={{ stopColor: 'white', stopOpacity: 0 }} />
              </linearGradient>
            </defs>
            <line x1="0" y1="20%" x2="100%" y2="20%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse-slow" />
            <line x1="0" y1="50%" x2="100%" y2="50%" stroke="url(#line-gradient)" strokeWidth="1" className="animate-pulse-slow" style={{ animationDelay: '1s' }} />
            <line x1="0" y1="80%" x2="100%" y2="80%" stroke="url(#line-gradient)" strokeWidth="2" className="animate-pulse-slow" style={{ animationDelay: '2s' }} />
          </svg>
          
          {/* Rotating Border Squares */}
          <div className="absolute top-20 right-20 w-32 h-32 border-2 border-white/10 rounded-lg animate-rotate-slow" />
          <div className="absolute bottom-32 left-32 w-24 h-24 border-2 border-white/10 rounded-lg animate-rotate-slow" style={{ animationDirection: 'reverse' }} />
          
          {/* Subtle Dots Pattern */}
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
            backgroundSize: '30px 30px'
          }} />
        </div>

        <div className="container mx-auto px-4 py-20 sm:py-28 md:py-32 relative z-10">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 sm:px-6 py-2 sm:py-3 rounded-full mb-6 sm:mb-8">
              <span className="text-white text-xs sm:text-sm">✨ Приглашаем к сотрудничеству</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 px-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
              Партнерам и <span className="underline decoration-wavy decoration-white/50">спонсорам</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto mb-8 sm:mb-12 leading-relaxed px-4">
              Станьте частью главного события года. Выберите подходящий пакет сотрудничества и получите максимальную видимость для вашего бренда.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
              <Button 
                className="bg-white text-purple-700 hover:bg-purple-50 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all hover:scale-105 shadow-2xl w-full sm:w-auto"
                onClick={() => window.open('https://t.me/DashaChernikova8', '_blank')}
              >
                Стать партнером →
              </Button>
              <Button 
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg font-semibold rounded-xl transition-all w-full sm:w-auto"
                onClick={() => window.open('https://t.me/DashaChernikova8', '_blank')}
              >
                Узнать подробнее
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 sm:gap-6 md:gap-8 max-w-4xl mx-auto mt-12 sm:mt-16 md:mt-20 px-4">
            {stats.map((stat, i) => (
              <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                <div className="text-white/80 text-xs sm:text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                О <span className="text-purple-600">мероприятии</span>
              </h2>
              <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6 leading-relaxed">
                Наша конференция — это уникальная площадка для нетворкинга, обмена опытом и установления деловых контактов. Каждый год мы собираем сотни профессионалов со всей страны.
              </p>
              <p className="text-gray-700 text-base sm:text-lg mb-6 sm:mb-8 leading-relaxed">
                Партнерство с нами — это возможность представить ваш бренд целевой аудитории, укрепить репутацию и найти новых клиентов. Мы создаем условия для максимальной видимости вашего бизнеса.
              </p>
              <div className="grid grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                <div className="text-center p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm">
                  <div className="text-purple-600 text-2xl sm:text-3xl mb-1 sm:mb-2">👥</div>
                  <div className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800">150+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Предпринимателей</div>
                </div>
                <div className="text-center p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm">
                  <div className="text-purple-600 text-2xl sm:text-3xl mb-1 sm:mb-2">🎤</div>
                  <div className="font-bold text-lg sm:text-xl md:text-2xl text-gray-800">6+</div>
                  <div className="text-xs sm:text-sm text-gray-600">Спикеров</div>
                </div>
                <div className="text-center p-2 sm:p-3 md:p-4 bg-white rounded-lg sm:rounded-xl shadow-sm">
                  <div className="text-purple-600 text-2xl sm:text-3xl mb-1 sm:mb-2">🏢</div>
                  <div className="font-bold text-sm sm:text-base md:text-lg text-gray-800">Седанка-Парк</div>
                  <div className="text-xs sm:text-sm text-gray-600">Место проведения</div>
                </div>
              </div>
            </div>
            <div className="relative mt-8 md:mt-0">
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/793731e1-8d4b-4c53-ab9f-05f10b17b291/bucket/8a55314e-30d0-49f2-a0da-645f95b157fa.png"
                  alt="Конференция"
                  className="w-full h-auto"
                />
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6 bg-purple-600 text-white px-3 py-2 sm:px-6 sm:py-3 rounded-full shadow-lg flex items-center gap-2">
                  <span className="text-xl sm:text-2xl">📅</span>
                  <div>
                    <div className="text-xs">Мероприятие</div>
                    <div className="font-bold text-xs sm:text-base">18 апреля 2026</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Преимущества <span className="text-purple-600">партнерства</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              Получите максимальную отдачу от сотрудничества с нами
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {benefits.map((benefit, i) => (
              <div 
                key={i}
                className="bg-gray-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-purple-100 rounded-xl sm:rounded-2xl flex items-center justify-center text-2xl sm:text-3xl mb-4 sm:mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-2 sm:mb-4">{benefit.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-12 sm:py-16 md:py-20 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
              Пакеты <span className="text-purple-600">сотрудничества</span>
            </h2>
            <p className="text-gray-600 text-base sm:text-lg px-4">
              Выберите оптимальный вариант для ваших задач
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Top gradient border */}
                <div 
                  className="h-1.5"
                  style={{ background: pkg.gradientBorder }}
                />

                {/* Badge */}
                <div className="absolute top-3 right-3 sm:top-6 sm:right-6">
                  <span 
                    className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                    style={{
                      background: pkg.badgeGradient,
                      color: pkg.id === 'gold' ? '#333' : 'white'
                    }}
                  >
                    {pkg.badge}
                  </span>
                </div>

                <div className="p-5 sm:p-6 md:p-8">
                  {/* Icon & Title */}
                  <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{pkg.icon}</div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3 sm:mb-4">
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div 
                    className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 sm:mb-6"
                    style={{ color: pkg.priceColor }}
                  >
                    {pkg.price}
                  </div>

                  {/* Note for Barter */}
                  {pkg.note && (
                    <div className="bg-gray-50 p-3 sm:p-4 rounded-lg sm:rounded-xl mb-4 sm:mb-6 italic text-gray-600 border-l-4 border-orange-400 text-xs sm:text-sm">
                      {pkg.note}
                    </div>
                  )}

                  {/* Features */}
                  <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 sm:gap-3 text-gray-600">
                        <span className="text-green-500 font-bold text-lg sm:text-xl flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-xs sm:text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full py-4 sm:py-5 md:py-6 text-sm sm:text-base font-semibold uppercase tracking-wide rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                    style={{
                      background: pkg.buttonGradient,
                      color: pkg.buttonColor
                    }}
                    onClick={() => window.open('https://t.me/DashaChernikova8', '_blank')}
                  >
                    {pkg.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 sm:py-20 md:py-24 lg:py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
            Готовы стать <span className="underline decoration-wavy">партнером?</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-12 max-w-2xl mx-auto px-4">
            Свяжитесь с нами, и мы обсудим детали сотрудничества
          </p>
          <Button 
            className="bg-white text-purple-700 hover:bg-purple-50 px-8 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 text-base sm:text-lg md:text-xl font-bold rounded-xl transition-all hover:scale-105 shadow-2xl w-full sm:w-auto"
            onClick={() => window.open('https://t.me/DashaChernikova8', '_blank')}
          >
            Связаться с нами
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 sm:py-10 md:py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Конференция 2026</div>
          <p className="text-gray-400 mb-4 sm:mb-6 text-sm sm:text-base">Создаем возможности для вашего бизнеса</p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8 text-xs sm:text-sm text-gray-400">
            <a href="#" className="hover:text-white transition">Главная</a>
            <a href="#" className="hover:text-white transition">О мероприятии</a>
            <a href="#" className="hover:text-white transition">Пакеты</a>
            <a href="#" className="hover:text-white transition">Контакты</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;