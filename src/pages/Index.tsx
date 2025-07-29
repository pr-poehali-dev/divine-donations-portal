import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const gods = [
    {
      id: 1,
      name: 'Зевс',
      title: 'Повелитель Олимпа',
      description: 'Царь богов, повелитель неба и грома',
      image: '/img/6b471ea6-85dc-4b0c-bf8d-7ee71bc837d9.jpg',
      donations: '2,547 ₽',
      category: 'Греческие боги'
    },
    {
      id: 2,
      name: 'Ра',
      title: 'Бог Солнца',
      description: 'Древнеегипетский бог солнца и света',
      image: '/img/7361f3f7-0343-4fce-8260-505f0f7d8aeb.jpg',
      donations: '1,823 ₽',
      category: 'Египетские боги'
    },
    {
      id: 3,
      name: 'Тор',
      title: 'Бог Грома',
      description: 'Скандинавский бог грома и молнии',
      image: '/img/b91fe508-6b43-4d94-8fc7-a15c58286890.jpg',
      donations: '3,156 ₽',
      category: 'Скандинавские боги'
    }
  ];

  const news = [
    {
      id: 1,
      title: 'Новый храм Афины открыт для пожертвований',
      date: '28 июля 2025',
      excerpt: 'Величественный храм богини мудрости принимает дары от верующих по всему миру.'
    },
    {
      id: 2,
      title: 'Благословение Тора: рекордные пожертвования',
      date: '27 июля 2025',
      excerpt: 'Скандинавский бог грома получил невиданную поддержку от сообщества.'
    },
    {
      id: 3,
      title: 'Священные ритуалы: новые возможности',
      date: '26 июля 2025',
      excerpt: 'Расширяем функционал платформы для более глубокого духовного опыта.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary/5 to-background">
      {/* Header */}
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Zap" className="text-golden" size={32} />
              <h1 className="font-display text-2xl font-bold text-primary">Божественные Дары</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Главная</a>
              <a href="#gods" className="text-muted-foreground hover:text-primary transition-colors">Боги</a>
              <a href="#news" className="text-muted-foreground hover:text-primary transition-colors">Новости</a>
              <a href="#info" className="text-muted-foreground hover:text-primary transition-colors">Информация</a>
            </nav>
            <Button className="bg-golden hover:bg-golden/90 text-golden-foreground">
              <Icon name="Heart" size={16} className="mr-2" />
              Поддержать
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="py-20 px-4">
        <div className="container mx-auto text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-5xl md:text-6xl font-bold text-primary mb-6">
              Соединяем миры через 
              <span className="text-golden"> священные дары</span>
            </h2>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Откройте портал к древним богам и божествам. Ваши пожертвования помогают поддерживать связь между мирами и приносят благословения в вашу жизнь.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Icon name="Sparkles" size={20} className="mr-2" />
                Начать путешествие
              </Button>
              <Button variant="outline" size="lg">
                <Icon name="BookOpen" size={20} className="mr-2" />
                Узнать больше
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Gods Section */}
      <section id="gods" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display text-4xl font-bold text-primary mb-4">Выберите божество</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Каждый бог имеет свою уникальную силу и благословения. Выберите того, кто резонирует с вашей душой.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {gods.map((god) => (
              <Card key={god.id} className="group hover:shadow-lg transition-all duration-300 border-2 hover:border-golden/50">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={god.image} 
                    alt={god.name}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge variant="secondary" className="bg-background/80 backdrop-blur-sm">
                      {god.category}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl font-display">{god.name}</CardTitle>
                      <CardDescription className="text-golden font-medium">{god.title}</CardDescription>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-muted-foreground">Собрано</p>
                      <p className="font-bold text-primary">{god.donations}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{god.description}</p>
                  <Button className="w-full bg-golden hover:bg-golden/90 text-golden-foreground">
                    <Icon name="Gift" size={16} className="mr-2" />
                    Сделать пожертвование
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="font-display text-4xl font-bold text-primary mb-4">Священные новости</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Следите за важными событиями в мире богов и получайте вдохновение для духовного роста.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {news.map((article) => (
              <Card key={article.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                    <Icon name="Calendar" size={14} />
                    {article.date}
                  </div>
                  <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">{article.excerpt}</p>
                  <Button variant="link" className="p-0 h-auto text-primary">
                    Читать далее
                    <Icon name="ArrowRight" size={14} className="ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section id="info" className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h3 className="font-display text-4xl font-bold text-primary mb-4">О платформе</h3>
              <p className="text-lg text-muted-foreground">
                Божественные Дары — это современная платформа для духовных практик и связи с высшими силами.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="Shield" className="text-golden" size={24} />
                    <CardTitle>Безопасность</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Все пожертвования защищены современными технологиями шифрования. 
                    Ваши средства находятся под надёжной защитой священных алгоритмов.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="Users" className="text-golden" size={24} />
                    <CardTitle>Сообщество</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Присоединяйтесь к тысячам верующих по всему миру. Делитесь опытом, 
                    получайте благословения и находите единомышленников.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="Sparkles" className="text-golden" size={24} />
                    <CardTitle>Благословения</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Каждое пожертвование приносит особые благословения и духовную силу. 
                    Откройте новые возможности для личностного роста.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Icon name="Globe" className="text-golden" size={24} />
                    <CardTitle>Глобальность</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Боги всех культур и религий собраны в едином пространстве. 
                    Исследуйте разнообразие духовных традиций мира.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Zap" className="text-golden" size={24} />
                <h4 className="font-display text-lg font-bold">Божественные Дары</h4>
              </div>
              <p className="text-primary-foreground/80 text-sm">
                Священная платформа для связи с богами всех культур и традиций.
              </p>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Боги</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-golden transition-colors">Греческие</a></li>
                <li><a href="#" className="hover:text-golden transition-colors">Египетские</a></li>
                <li><a href="#" className="hover:text-golden transition-colors">Скандинавские</a></li>
                <li><a href="#" className="hover:text-golden transition-colors">Все божества</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Информация</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li><a href="#" className="hover:text-golden transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-golden transition-colors">Как это работает</a></li>
                <li><a href="#" className="hover:text-golden transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-golden transition-colors">Поддержка</a></li>
              </ul>
            </div>
            
            <div>
              <h5 className="font-semibold mb-3">Контакты</h5>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={14} />
                  support@divine-gifts.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={14} />
                  +7 (800) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          
          <Separator className="my-8 bg-primary-foreground/20" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-primary-foreground/60">
            <p>© 2025 Божественные Дары. Все права защищены.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-golden transition-colors">Политика конфиденциальности</a>
              <a href="#" className="hover:text-golden transition-colors">Условия использования</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;