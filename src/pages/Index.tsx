import { Button } from "@/components/ui/button";

const Index = () => {
  const packages = [
    {
      id: "gold",
      badge: "VIP",
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
      ]
    },
    {
      id: "silver",
      badge: "Популярный",
      title: "Пакет STANDART",
      price: "25 000 ₽",
      features: [
        "5 входных билетов на мероприятие",
        "Вкладыш в промо пакет участникам (создаете свою рекламу со специальным предложением)",
        "Установка Ролл-апов",
        "Размещение на сайте конференции",
        "Упоминание в ТГ канале с участниками конференции",
        "Вставка логотипа на общем рекламном плакате"
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
        "Вставка логотипа на общем рекламном плакате",
        "Вкладыш в промо пакет участникам (создаете свою рекламу со специальным предложением)"
      ]
    }
  ];

  return (
    <div className="min-h-screen py-10 px-5" style={{
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    }}>
      <div className="max-w-[1200px] mx-auto">
        <h1 className="text-center text-white text-[2.5rem] mb-2.5 font-bold" style={{
          textShadow: '2px 2px 4px rgba(0,0,0,0.2)'
        }}>
          Партнерам и спонсорам
        </h1>
        <p className="text-center text-[rgba(255,255,255,0.9)] text-[1.1rem] mb-[50px]">
          Выберите подходящий пакет для сотрудничества
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[30px]">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-[20px] p-[35px] relative overflow-hidden transition-all duration-300 ease-in-out hover:-translate-y-2.5`}
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
                  className="px-4 py-2 rounded-[20px] text-[0.75rem] font-bold uppercase tracking-[1px]"
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

              <h2 className="text-[1.5rem] text-[#333] mb-2.5 font-bold">
                {pkg.title}
              </h2>

              <div 
                className="text-[2.5rem] font-extrabold mb-[25px]"
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
                <div className="bg-[#f8f9fa] p-[15px] rounded-[10px] mb-5 italic text-[#666] border-l-[4px] border-[#cd7f32]">
                  {pkg.note}
                </div>
              )}

              <ul className="list-none">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="py-3 border-b border-[#eee] text-[#555] flex items-start last:border-0">
                    <span className="text-[#4CAF50] font-bold mr-3 flex-shrink-0 text-[1.2rem]">
                      ✓
                    </span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                className="w-full py-[15px] mt-[25px] border-0 rounded-[10px] text-base font-semibold cursor-pointer transition-all duration-300 ease-in-out uppercase tracking-[1px] hover:scale-105"
                style={{
                  background: pkg.id === 'gold'
                    ? 'linear-gradient(135deg, #ffd700, #ffaa00)'
                    : pkg.id === 'silver'
                    ? 'linear-gradient(135deg, #667eea, #764ba2)'
                    : 'linear-gradient(135deg, #cd7f32, #8b4513)',
                  color: pkg.id === 'gold' ? '#333' : 'white',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
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