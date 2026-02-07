import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const packages = [
    {
      id: "gold",
      badge: "VIP",
      title: "Генеральный партнер",
      price: "100 000 ₽",
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
      id: "silver",
      badge: "Популярный",
      title: "Пакет STANDART",
      price: "25 000 ₽",
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
      id: "bronze",
      badge: "Бартер",
      title: "Информационные спонсоры",
      price: "БАРТЕР",
      note: "Мы ничего не платим им, они ничего не платят нам — делают рекламу",
      features: [
        "Размещение на сайте конференции",
        "Вставка логотипа на рекламном плакате",
        "Вкладыш в промо пакет участникам"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-10 px-5" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-center text-white text-4xl md:text-5xl mb-2.5 font-bold" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Партнерам и спонсорам
        </h1>
        <p className="text-center text-white/90 text-lg mb-12">
          Выберите подходящий пакет для сотрудничества
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`package-${pkg.id} bg-white rounded-[20px] p-[35px] relative overflow-hidden transition-all duration-300 hover:-translate-y-2.5`}
              style={{
                boxShadow: '0 20px 60px rgba(0,0,0,0.3)'
              }}
            >
              {/* Top gradient border */}
              <div 
                className="absolute top-0 left-0 right-0 h-[5px]"
                style={{
                  background: pkg.id === 'gold' 
                    ? 'linear-gradient(90deg, #ffd700, #ffaa00)'
                    : pkg.id === 'silver'
                    ? 'linear-gradient(90deg, #c0c0c0, #808080)'
                    : 'linear-gradient(90deg, #cd7f32, #8b4513)'
                }}
              />

              {/* Badge */}
              <div className="absolute top-5 right-5">
                <span 
                  className="px-4 py-2 rounded-[20px] text-xs font-bold uppercase tracking-wider"
                  style={{
                    background: pkg.id === 'gold'
                      ? 'linear-gradient(135deg, #ffd700, #ffaa00)'
                      : pkg.id === 'silver'
                      ? 'linear-gradient(135deg, #c0c0c0, #808080)'
                      : 'linear-gradient(135deg, #cd7f32, #8b4513)',
                    color: pkg.id === 'gold' ? '#333' : 'white'
                  }}
                >
                  {pkg.badge}
                </span>
              </div>

              <h2 className="text-2xl text-gray-800 mb-2.5 font-bold mt-2">
                {pkg.title}
              </h2>

              <div 
                className="text-[2.5rem] font-extrabold mb-6"
                style={{
                  color: pkg.id === 'gold' 
                    ? '#e6a700'
                    : pkg.id === 'silver'
                    ? '#666'
                    : '#8b4513'
                }}
              >
                {pkg.price}
              </div>

              {pkg.note && (
                <div className="bg-orange-50 p-3 rounded-lg mb-4 text-sm text-gray-700 border-l-[3px] border-orange-400">
                  {pkg.note}
                </div>
              )}

              <ul className="list-none mb-6">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="py-2.5 border-b border-gray-200 text-gray-600 flex items-start last:border-0">
                    <Icon name="Check" className="text-green-500 font-bold mr-2.5 text-lg mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full py-3.5 mt-5 border-0 rounded-[10px] text-sm font-semibold cursor-pointer transition-all duration-300 uppercase hover:scale-105"
                style={{
                  background: pkg.id === 'gold'
                    ? '#ffd700'
                    : pkg.id === 'silver'
                    ? '#667eea'
                    : '#cd7f32',
                  color: pkg.id === 'silver' ? 'white' : pkg.id === 'bronze' ? 'white' : '#333'
                }}
              >
                {pkg.id === 'gold' && 'Стать генеральным партнером'}
                {pkg.id === 'silver' && 'Стать партнером'}
                {pkg.id === 'bronze' && 'Стать спонсором'}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
