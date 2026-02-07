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
    { number: "500+", label: "Участников на каждом мероприятии" },
    { number: "50+", label: "Спикеров и экспертов" },
    { number: "10+", label: "Лет успешной работы" },
    { number: "95%", label: "Довольных партнеров" }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold">
            Конференция <span className="text-purple-600">2024</span>
          </div>
          <div className="hidden md:flex gap-8 items-center">
            <a href="#main" className="text-gray-700 hover:text-purple-600 transition">Главная</a>
            <a href="#about" className="text-gray-700 hover:text-purple-600 transition">О мероприятии</a>
            <a href="#benefits" className="text-gray-700 hover:text-purple-600 transition">Преимущества</a>
            <a href="#packages" className="text-gray-700 hover:text-purple-600 transition">Пакеты</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 transition">Контакты</a>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white">
              Стать партнером
            </Button>
          </div>
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
        {/* Animated Background Circles */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl -top-48 -left-48"
            style={{ transform: `translateY(${scrollY * 0.5}px)` }}
          />
          <div 
            className="absolute w-96 h-96 bg-white/10 rounded-full blur-3xl top-1/2 right-0"
            style={{ transform: `translateY(${scrollY * 0.3}px)` }}
          />
          <div 
            className="absolute w-64 h-64 bg-white/10 rounded-full blur-3xl bottom-0 left-1/3"
            style={{ transform: `translateY(${scrollY * 0.4}px)` }}
          />
        </div>

        <div className="container mx-auto px-4 py-32 relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full mb-8">
              <span className="text-white text-sm">✨ Приглашаем к сотрудничеству</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.2)' }}>
              Партнерам и <span className="underline decoration-wavy decoration-white/50">спонсорам</span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto mb-12 leading-relaxed">
              Станьте частью главного события года. Выберите подходящий пакет сотрудничества и получите максимальную видимость для вашего бренда.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                className="bg-white text-purple-700 hover:bg-purple-50 px-8 py-6 text-lg font-semibold rounded-xl transition-all hover:scale-105 shadow-2xl"
              >
                Стать партнером →
              </Button>
              <Button 
                className="bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white/20 px-8 py-6 text-lg font-semibold rounded-xl transition-all"
              >
                Узнать подробнее
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-20">
            {stats.slice(0, 3).map((stat, i) => (
              <div key={i} className="text-center animate-fade-in" style={{ animationDelay: `${i * 0.1}s` }}>
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-white/80 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                О <span className="text-purple-600">мероприятии</span>
              </h2>
              <p className="text-gray-700 text-lg mb-6 leading-relaxed">
                Наша конференция — это уникальная площадка для нетворкинга, обмена опытом и установления деловых контактов. Каждый год мы собираем сотни профессионалов со всей страны.
              </p>
              <p className="text-gray-700 text-lg mb-8 leading-relaxed">
                Партнерство с нами — это возможность представить ваш бренд целевой аудитории, укрепить репутацию и найти новых клиентов. Мы создаем условия для максимальной видимости вашего бизнеса.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-purple-600 text-3xl mb-2">👥</div>
                  <div className="font-bold text-2xl text-gray-800">500+</div>
                  <div className="text-sm text-gray-600">Участников</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-purple-600 text-3xl mb-2">🎤</div>
                  <div className="font-bold text-2xl text-gray-800">50+</div>
                  <div className="text-sm text-gray-600">Спикеров</div>
                </div>
                <div className="text-center p-4 bg-white rounded-xl shadow-sm">
                  <div className="text-purple-600 text-3xl mb-2">📅</div>
                  <div className="font-bold text-2xl text-gray-800">10+</div>
                  <div className="text-sm text-gray-600">Лет опыта</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
                <img 
                  src="https://cdn.poehali.dev/projects/793731e1-8d4b-4c53-ab9f-05f10b17b291/bucket/8a55314e-30d0-49f2-a0da-645f95b157fa.png"
                  alt="Конференция"
                  className="w-full h-auto"
                />
                <div className="absolute top-6 right-6 bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
                  <span className="text-2xl">📅</span>
                  <div>
                    <div className="text-xs">Следующее</div>
                    <div className="font-bold">15 марта 2024</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Преимущества <span className="text-purple-600">партнерства</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Получите максимальную отдачу от сотрудничества с нами
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <div 
                key={i}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Section */}
      <section id="packages" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-6">
              Пакеты <span className="text-purple-600">сотрудничества</span>
            </h2>
            <p className="text-gray-600 text-lg">
              Выберите оптимальный вариант для ваших задач
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {packages.map((pkg, index) => (
              <div
                key={pkg.id}
                className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 relative"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Top gradient border */}
                <div 
                  className="h-1.5"
                  style={{ background: pkg.gradientBorder }}
                />

                {/* Badge */}
                <div className="absolute top-6 right-6">
                  <span 
                    className="px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg"
                    style={{
                      background: pkg.badgeGradient,
                      color: pkg.id === 'gold' ? '#333' : 'white'
                    }}
                  >
                    {pkg.badge}
                  </span>
                </div>

                <div className="p-8">
                  {/* Icon & Title */}
                  <div className="text-4xl mb-4">{pkg.icon}</div>
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {pkg.title}
                  </h2>

                  {/* Price */}
                  <div 
                    className="text-5xl font-extrabold mb-6"
                    style={{ color: pkg.priceColor }}
                  >
                    {pkg.price}
                  </div>

                  {/* Note for Barter */}
                  {pkg.note && (
                    <div className="bg-gray-50 p-4 rounded-xl mb-6 italic text-gray-600 border-l-4 border-orange-400 text-sm">
                      {pkg.note}
                    </div>
                  )}

                  {/* Features */}
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600">
                        <span className="text-green-500 font-bold text-xl flex-shrink-0 mt-0.5">✓</span>
                        <span className="text-sm leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className="w-full py-6 text-base font-semibold uppercase tracking-wide rounded-xl transition-all duration-300 hover:scale-105 shadow-lg"
                    style={{
                      background: pkg.buttonGradient,
                      color: pkg.buttonColor
                    }}
                  >
                    {pkg.buttonText}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section Dark */}
      <section className="py-24 relative overflow-hidden" style={{ background: '#1a1d2e' }}>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}
            />
          ))}
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl md:text-6xl font-bold text-white mb-3">
                  <span className="text-purple-400">{stat.number.replace(/[^0-9%+]/g, '')}</span>
                  <span className="text-purple-400">{stat.number.match(/[%+]/)?.[0] || ''}</span>
                </div>
                <div className="text-gray-300 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-32 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Готовы стать <span className="underline decoration-wavy">партнером?</span>
          </h2>
          <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
            Свяжитесь с нами, и мы обсудим детали сотрудничества
          </p>
          <Button className="bg-white text-purple-700 hover:bg-purple-50 px-12 py-7 text-xl font-bold rounded-xl transition-all hover:scale-105 shadow-2xl">
            Связаться с нами
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="text-2xl font-bold mb-4">Конференция 2024</div>
          <p className="text-gray-400 mb-6">Создаем возможности для вашего бизнеса</p>
          <div className="flex justify-center gap-8 text-sm text-gray-400">
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
