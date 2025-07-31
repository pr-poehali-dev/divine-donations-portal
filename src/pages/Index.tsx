import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import Icon from '@/components/ui/icon';

const Index = () => {
  const deities = [
    {
      id: 1,
      name: 'Афина',
      title: 'Богиня Мудрости',
      description: 'Покровительница знаний, стратегии и справедливой войны',
      image: '/img/1d47bdc5-6485-4585-8a74-2a93c8a47bdc.jpg',
      raised: 45670,
      goal: 100000,
      category: 'Олимпийские боги',
      blessing: 'Мудрость и защита',
      followers: 2847
    },
    {
      id: 2,
      name: 'Анубис',
      title: 'Страж Загробного Мира',
      description: 'Египетский бог мумификации и проводник душ',
      image: '/img/833c15d0-cb0f-4236-be4d-ed322103f356.jpg',
      raised: 32890,
      goal: 75000,
      category: 'Египетский пантеон',
      blessing: 'Защита души',
      followers: 1923
    },
    {
      id: 3,
      name: 'Тор',
      title: 'Громовержец',
      description: 'Защитник Мидгарда, владелец молота Мьёльнир',
      image: '/img/b91fe508-6b43-4d94-8fc7-a15c58286890.jpg',
      raised: 67340,
      goal: 120000,
      category: 'Асы',
      blessing: 'Сила и защита',
      followers: 3456
    }
  ];

  const recentNews = [
    {
      id: 1,
      title: 'Великий ритуал весеннего равноденствия завершен',
      category: 'Ритуалы',
      date: '2 часа назад',
      image: '/img/1d47bdc5-6485-4585-8a74-2a93c8a47bdc.jpg',
      summary: 'Афина благословила всех участвовавших в священном обряде'
    },
    {
      id: 2,
      title: 'Новое святилище Анубиса открыто в цифровом пространстве',
      category: 'Храмы',
      date: '5 часов назад',
      image: '/img/833c15d0-cb0f-4236-be4d-ed322103f356.jpg',
      summary: 'Первое виртуальное святилище принимает пожертвования'
    },
    {
      id: 3,
      title: 'Рекордные пожертвования в честь дня Тора',
      category: 'События',
      date: '1 день назад',
      image: '/img/b91fe508-6b43-4d94-8fc7-a15c58286890.jpg',
      summary: 'Сообщество побило все предыдущие рекорды поддержки'
    }
  ];

  const testimonials = [
    {
      name: 'Александра М.',
      deity: 'Афина',
      text: 'После пожертвования Афине получила вдохновение для важного решения',
      amount: '₽5,000',
      avatar: 'AM'
    },
    {
      name: 'Михаил К.',
      deity: 'Тор',
      text: 'Благословение Тора помогло преодолеть сложный период',
      amount: '₽3,500',
      avatar: 'МК'
    },
    {
      name: 'Елена С.',
      deity: 'Анубис',
      text: 'Почувствовала защиту и покой после ритуала с Анубисом',
      amount: '₽7,200',
      avatar: 'ЕС'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-800">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-lg border-b border-white/10 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <Icon name="Flame" className="text-white" size={20} />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                SacredVault
              </h1>
            </div>
            
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-gray-300 hover:text-white transition-colors">Главная</a>
              <a href="#deities" className="text-gray-300 hover:text-white transition-colors">Божества</a>
              <a href="#news" className="text-gray-300 hover:text-white transition-colors">Новости</a>
              <a href="#about" className="text-gray-300 hover:text-white transition-colors">О проекте</a>
            </div>
            
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
              <Icon name="Wallet" size={16} className="mr-2" />
              Войти
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20"></div>
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400 bg-clip-text text-transparent">
                Священное
              </span>
              <br />
              <span className="text-white">
                Хранилище
              </span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed max-w-3xl mx-auto">
              Подключитесь к божественной энергии через цифровые пожертвования. 
              Поддержите древних богов и получите их благословения в современном мире.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Icon name="Users" className="text-purple-400 mb-3" size={32} />
                <div className="text-2xl font-bold text-white mb-1">15,847</div>
                <div className="text-gray-400 text-sm">Активных верующих</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Icon name="DollarSign" className="text-pink-400 mb-3" size={32} />
                <div className="text-2xl font-bold text-white mb-1">₽2.3M</div>
                <div className="text-gray-400 text-sm">Всего пожертвований</div>
              </div>
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                <Icon name="Sparkles" className="text-yellow-400 mb-3" size={32} />
                <div className="text-2xl font-bold text-white mb-1">47</div>
                <div className="text-gray-400 text-sm">Божеств доступно</div>
              </div>
            </div>
            
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                <Icon name="Zap" size={20} className="mr-2" />
                Начать служение
              </Button>
              <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
                <Icon name="Play" size={20} className="mr-2" />
                Посмотреть как работает
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Deities Section */}
      <section id="deities" className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-white mb-6">Выберите своё божество</h3>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Каждое божество обладает уникальной силой и даёт особые благословения. 
              Выберите того, кто откликается вашему сердцу.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {deities.map((deity) => (
              <Card key={deity.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all duration-300 group">
                <div className="relative overflow-hidden">
                  <img 
                    src={deity.image} 
                    alt={deity.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-purple-600/80 text-white border-0">
                      {deity.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 right-4 text-white text-right">
                    <div className="text-sm opacity-90">Последователи</div>
                    <div className="text-lg font-bold">{deity.followers.toLocaleString()}</div>
                  </div>
                </div>
                
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-2xl text-white font-bold">{deity.name}</CardTitle>
                      <CardDescription className="text-purple-300 font-medium text-lg">
                        {deity.title}
                      </CardDescription>
                    </div>
                    <div className="text-right">
                      <div className="text-sm text-gray-400">Благословение</div>
                      <div className="text-yellow-400 font-medium">{deity.blessing}</div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <p className="text-gray-300 mb-6">{deity.description}</p>
                  
                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-400">Собрано</span>
                      <span className="text-white font-medium">
                        ₽{deity.raised.toLocaleString()} / ₽{deity.goal.toLocaleString()}
                      </span>
                    </div>
                    <Progress 
                      value={(deity.raised / deity.goal) * 100} 
                      className="h-2 bg-white/10"
                    />
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
                      <Icon name="Heart" size={16} className="mr-2" />
                      Пожертвовать
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10">
                      <Icon name="Info" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-white mb-6">Священные новости</h3>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Следите за важными событиями в мире божественного и получайте последние обновления.
            </p>
          </div>
          
          <Tabs defaultValue="all" className="w-full">
            <TabsList className="bg-white/10 border-white/20 mb-8">
              <TabsTrigger value="all" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Все новости
              </TabsTrigger>
              <TabsTrigger value="rituals" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                Ритуалы
              </TabsTrigger>
              <TabsTrigger value="events" className="data-[state=active]:bg-purple-600 data-[state=active]:text-white">
                События
              </TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentNews.map((news) => (
                <Card key={news.id} className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                  <div className="relative">
                    <img src={news.image} alt={news.title} className="w-full h-48 object-cover" />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-pink-600/80 text-white border-0">
                        {news.category}
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <Icon name="Clock" size={14} />
                      {news.date}
                    </div>
                    <CardTitle className="text-white text-lg leading-tight">
                      {news.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-300 mb-4">{news.summary}</p>
                    <Button variant="link" className="p-0 text-purple-400 hover:text-purple-300">
                      Читать полностью
                      <Icon name="ArrowRight" size={14} className="ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold text-white mb-6">Отзывы верующих</h3>
            <p className="text-xl text-gray-300">Истории тех, кто получил благословения</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white/5 backdrop-blur-sm border-white/10">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-r from-purple-600 to-pink-600 text-white">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-purple-300">Служитель {testimonial.deity}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <div className="flex justify-between items-center">
                    <Badge className="bg-green-600/20 text-green-400 border-green-600/50">
                      Пожертвование: {testimonial.amount}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white/5">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-5xl font-bold text-white mb-8">О SacredVault</h3>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              Мы создали первую в мире цифровую платформу для духовных пожертвований, 
              объединяющую древние традиции с современными технологиями.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <Icon name="Shield" className="text-green-400 mb-4" size={40} />
                <h4 className="text-2xl font-bold text-white mb-4">Безопасность</h4>
                <p className="text-gray-300">
                  Все транзакции защищены блокчейн-технологиями и сквозным шифрованием. 
                  Ваши пожертвования находятся под защитой как современных алгоритмов, 
                  так и древних защитных рун.
                </p>
              </div>
              
              <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <Icon name="Globe" className="text-blue-400 mb-4" size={40} />
                <h4 className="text-2xl font-bold text-white mb-4">Глобальность</h4>
                <p className="text-gray-300">
                  Платформа объединяет божества всех культур и религий. 
                  От скандинавских асов до египетских нетеров — 
                  все боги равны в цифровом священном пространстве.
                </p>
              </div>
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/40 border-t border-white/10 py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Icon name="Flame" className="text-white" size={20} />
                </div>
                <h4 className="text-xl font-bold text-white">SacredVault</h4>
              </div>
              <p className="text-gray-400">
                Цифровая платформа для духовных пожертвований и связи с божественным.
              </p>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Божества</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Олимпийские боги</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Египетский пантеон</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Скандинавские асы</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Все божества</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Сервис</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">API для разработчиков</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Партнёрство</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-white font-semibold mb-4">Поддержка</h5>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-purple-400 transition-colors">Центр помощи</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Сообщество</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Связаться с нами</a></li>
                <li><a href="#" className="hover:text-purple-400 transition-colors">Статус сервиса</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400">© 2025 SacredVault. Все права защищены священными печатями.</p>
            <div className="flex gap-6 text-gray-400">
              <a href="#" className="hover:text-purple-400 transition-colors">Конфиденциальность</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Условия</a>
              <a href="#" className="hover:text-purple-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;