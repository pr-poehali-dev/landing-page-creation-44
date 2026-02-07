import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  const packages = [
    {
      id: "vip",
      badge: "VIP",
      title: "Генеральный партнер",
      price: "100 000 ₽",
      gradient: "from-yellow-400 to-yellow-600",
      badgeColor: "bg-yellow-400 text-yellow-900",
      buttonColor: "bg-yellow-400 hover:bg-yellow-500 text-yellow-900",
      features: [
        "20 входных билетов",
        "Ведущий говорит вставки о спонсоре (детали обсуждаем)",
        "Ролл-апы у сцены",
        "Центральная вставка на рекламном плакате",
        "Упоминание на сайте конференции",
        "Промо в чате с участниками",
        "Вкладыш в промо пакет участникам"
      ]
    },
    {
      id: "standard",
      badge: "Популярный",
      title: "Пакет STANDART",
      price: "25 000 ₽",
      gradient: "from-purple-500 to-purple-700",
      badgeColor: "bg-purple-500 text-white",
      buttonColor: "bg-purple-600 hover:bg-purple-700 text-white",
      features: [
        "5 входных билетов",
        "Вкладыш в промо пакет участникам",
        "Установка Ролл-апов",
        "Размещение на сайте конференции",
        "Упоминание в ТГ канале",
        "Вставка логотипа на рекламном плакате"
      ]
    },
    {
      id: "barter",
      badge: "Бартер",
      title: "Информационные спонсоры",
      price: "БАРТЕР",
      gradient: "from-orange-400 to-orange-600",
      badgeColor: "bg-orange-400 text-orange-900",
      buttonColor: "bg-orange-500 hover:bg-orange-600 text-white",
      note: "Мы ничего не платим им, они ничего не платят нам — делают рекламу",
      features: [
        "Размещение на сайте конференции",
        "Вставка логотипа на рекламном плакате",
        "Вкладыш в промо пакет участникам"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 animate-fade-in">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 animate-scale-in">
            Партнерам и спонсорам
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Выберите подходящий пакет для сотрудничества
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <Card
              key={pkg.id}
              className="relative overflow-hidden bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Top Gradient Border */}
              <div className={`h-1.5 bg-gradient-to-r ${pkg.gradient}`} />
              
              {/* Badge */}
              <div className="absolute top-6 right-6">
                <span className={`${pkg.badgeColor} px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wide shadow-md`}>
                  {pkg.badge}
                </span>
              </div>

              <div className="p-8">
                {/* Title */}
                <h2 className="text-2xl font-bold text-gray-800 mb-2 mt-4">
                  {pkg.title}
                </h2>

                {/* Price */}
                <div className={`text-4xl font-extrabold mb-6 bg-gradient-to-r ${pkg.gradient} bg-clip-text text-transparent`}>
                  {pkg.price}
                </div>

                {/* Note for Barter */}
                {pkg.note && (
                  <div className="bg-orange-50 border-l-4 border-orange-400 p-4 mb-6 rounded-lg">
                    <p className="text-sm text-gray-700">{pkg.note}</p>
                  </div>
                )}

                {/* Features List */}
                <ul className="space-y-4 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 text-gray-600">
                      <Icon name="Check" className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button 
                  className={`w-full ${pkg.buttonColor} font-semibold py-6 rounded-xl text-base transition-all duration-300 hover:scale-105 shadow-lg`}
                >
                  {pkg.id === "vip" && "Стать генеральным партнером"}
                  {pkg.id === "standard" && "Стать партнером"}
                  {pkg.id === "barter" && "Стать спонсором"}
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center mt-20 animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 max-w-3xl mx-auto border border-white/20">
            <Icon name="Mail" className="w-12 h-12 text-white mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-3">
              Остались вопросы?
            </h3>
            <p className="text-purple-100 mb-6">
              Свяжитесь с нами для обсуждения индивидуальных условий партнерства
            </p>
            <Button className="bg-white text-purple-700 hover:bg-purple-50 font-semibold px-8 py-6 rounded-xl transition-all hover:scale-105">
              Связаться с организаторами
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
