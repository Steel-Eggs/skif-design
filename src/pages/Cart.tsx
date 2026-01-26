import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  X, 
  Minus, 
  Plus, 
  ShoppingCart, 
  Truck, 
  Shield, 
  Clock, 
  Phone,
  Check,
  Gift,
  CreditCard,
  RotateCcw,
  Wrench
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { useCart, dispatchCartUpdate } from '@/hooks/useCart';

// Import parts images
import amortizator from '@/assets/parts/amortizator.jpg';
import roliki from '@/assets/parts/roliki.jpg';
import rozetka from '@/assets/parts/rozetka.jpg';
import stupica from '@/assets/parts/stupica.jpg';

// Compatible parts for trailers
const compatibleParts = [
  {
    id: 201,
    name: "Амортизатор AL-KO Octagon",
    price: 2450,
    oldPrice: 2900,
    image: amortizator,
  },
  {
    id: 202,
    name: "Ролики для лебёдки",
    price: 890,
    image: roliki,
  },
  {
    id: 203,
    name: "Розетка 7-pin европейская",
    price: 650,
    oldPrice: 750,
    image: rozetka,
  },
  {
    id: 204,
    name: "Ступица в сборе МЗСА",
    price: 3200,
    image: stupica,
  },
];

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeFromCart, cartTotal, cartCount, addToCart } = useCart();
  const [filterText, setFilterText] = useState('');
  const [addedParts, setAddedParts] = useState<number[]>([]);

  const filteredItems = cartItems.filter(item =>
    item.name.toLowerCase().includes(filterText.toLowerCase())
  );

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' руб.';
  };

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleUpdateQuantity = (id: number, delta: number) => {
    const item = cartItems.find(i => i.id === id);
    if (item) {
      updateQuantity(id, item.quantity + delta);
    }
  };

  const handleSetQuantity = (id: number, quantity: number) => {
    updateQuantity(id, Math.max(1, quantity));
  };

  const handleAddPart = (part: typeof compatibleParts[0]) => {
    addToCart({
      id: part.id,
      name: part.name,
      price: part.price,
      image: part.image,
    });
    setAddedParts(prev => [...prev, part.id]);
    setTimeout(() => {
      setAddedParts(prev => prev.filter(id => id !== part.id));
    }, 1500);
  };

  // Calculate free shipping threshold
  const FREE_SHIPPING_THRESHOLD = 50000;
  const remainingForFreeShipping = Math.max(0, FREE_SHIPPING_THRESHOLD - cartTotal);
  const freeShippingProgress = Math.min(100, (cartTotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="flex-1">
        <div className="container mx-auto px-4 py-6">
          {/* Breadcrumb */}
          <Breadcrumb className="mb-6">
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Главная</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Корзина</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <h1 className="text-2xl md:text-3xl font-bold mb-6">Корзина</h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <ShoppingCart className="w-16 h-16 mx-auto text-muted-foreground mb-4" />
              <h2 className="text-xl font-semibold mb-2">Корзина пуста</h2>
              <p className="text-muted-foreground mb-6">Добавьте товары из каталога</p>
              <Button asChild>
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main cart content */}
              <div className="lg:col-span-2 space-y-4">
                {/* Free shipping progress */}
                <div className="bg-gradient-to-r from-secondary/10 to-secondary/5 rounded-lg border border-secondary/30 p-4">
                  <div className="flex items-center gap-3 mb-2">
                    <Truck className="w-5 h-5 text-secondary shrink-0" />
                    {remainingForFreeShipping > 0 ? (
                      <span className="text-sm">
                        До <span className="font-bold text-secondary">бесплатной доставки</span> осталось{' '}
                        <span className="font-bold">{formatPrice(remainingForFreeShipping)}</span>
                      </span>
                    ) : (
                      <span className="text-sm font-bold text-secondary">
                        🎉 Поздравляем! Доставка по городу бесплатно!
                      </span>
                    )}
                  </div>
                  <div className="w-full bg-muted rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-secondary h-full rounded-full transition-all duration-500"
                      style={{ width: `${freeShippingProgress}%` }}
                    />
                  </div>
                </div>

                {/* Filter and count */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                  <div className="flex items-center gap-2 max-w-xs">
                    <Input
                      value={filterText}
                      onChange={(e) => setFilterText(e.target.value)}
                      placeholder="Фильтр"
                      className="w-48"
                    />
                    {filterText && (
                      <button
                        onClick={() => setFilterText('')}
                        className="text-muted-foreground hover:text-foreground"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    В корзине {cartCount} {cartCount === 1 ? 'товар' : cartCount < 5 ? 'товара' : 'товаров'}
                  </div>
                </div>

                {/* Cart items */}
                <div className="bg-white rounded-lg border divide-y">
                  {filteredItems.map((item) => (
                    <div key={item.id} className="p-4 flex items-center gap-4">
                      {/* Image */}
                      <Link to={`/product/${item.id}`} className="shrink-0">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-16 md:w-28 md:h-20 object-cover rounded"
                        />
                      </Link>

                      {/* Name */}
                      <div className="flex-1 min-w-0">
                        <Link 
                          to={`/product/${item.id}`}
                          className="font-medium hover:text-primary transition-colors line-clamp-2"
                        >
                          {item.name}
                        </Link>
                      </div>

                      {/* Price */}
                      <div className="text-right shrink-0">
                        <div className="font-semibold text-primary">
                          {formatPrice(item.price)}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          цена за 1 шт
                        </div>
                      </div>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-2 shrink-0">
                        <button
                          onClick={() => handleUpdateQuantity(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center border rounded hover:bg-muted transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <Input
                          type="number"
                          value={item.quantity}
                          onChange={(e) => handleSetQuantity(item.id, parseInt(e.target.value) || 1)}
                          className="w-14 text-center"
                          min={1}
                        />
                        <button
                          onClick={() => handleUpdateQuantity(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center border rounded hover:bg-muted transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>

                      {/* Unit label */}
                      <div className="text-sm text-muted-foreground shrink-0 hidden sm:block">
                        шт
                      </div>

                      {/* Remove button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-muted-foreground hover:text-destructive transition-colors shrink-0"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>

                {/* Compatible parts section */}
                <div className="bg-white rounded-lg border p-4 mt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Wrench className="w-5 h-5 text-primary" />
                    <h3 className="font-bold text-lg">Подойдёт к этому прицепу</h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">
                    Рекомендуемые запчасти и аксессуары для вашего прицепа
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {compatibleParts.map((part) => {
                      const isAdded = addedParts.includes(part.id);
                      const isInCart = cartItems.some(item => item.id === part.id);
                      
                      return (
                        <Card key={part.id} className="overflow-hidden hover:shadow-md transition-shadow">
                          <CardContent className="p-3">
                            <Link to={`/product/${part.id}`} className="block">
                              <img
                                src={part.image}
                                alt={part.name}
                                className="w-full aspect-square object-cover rounded mb-2"
                              />
                            </Link>
                            <Link 
                              to={`/product/${part.id}`}
                              className="text-sm font-medium line-clamp-2 hover:text-primary transition-colors mb-2 block h-10"
                            >
                              {part.name}
                            </Link>
                            <div className="flex items-baseline gap-1 mb-2">
                              <span className="font-bold text-sm">{formatPrice(part.price)}</span>
                              {part.oldPrice && (
                                <span className="text-xs text-muted-foreground line-through">
                                  {formatPrice(part.oldPrice)}
                                </span>
                              )}
                            </div>
                            <Button
                              size="sm"
                              className={`w-full text-xs transition-all ${
                                isAdded || isInCart
                                  ? 'bg-secondary text-secondary-foreground'
                                  : 'gradient-primary'
                              }`}
                              onClick={() => handleAddPart(part)}
                              disabled={isInCart}
                            >
                              {isInCart ? (
                                <>
                                  <Check className="w-3 h-3 mr-1" />
                                  В корзине
                                </>
                              ) : isAdded ? (
                                <>
                                  <Check className="w-3 h-3 mr-1 animate-bounce" />
                                  Добавлено
                                </>
                              ) : (
                                <>
                                  <Plus className="w-3 h-3 mr-1" />
                                  Добавить
                                </>
                              )}
                            </Button>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 space-y-4">
                {/* Order summary */}
                <div className="bg-white rounded-lg border p-4 sticky top-4">
                  <h3 className="font-bold text-lg mb-4">Ваш заказ</h3>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Товары ({cartCount})</span>
                      <span>{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Доставка</span>
                      <span className={remainingForFreeShipping === 0 ? 'text-secondary font-medium' : ''}>
                        {remainingForFreeShipping === 0 ? 'Бесплатно' : 'Рассчитывается'}
                      </span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4 mb-4">
                    <div className="flex justify-between items-baseline">
                      <span className="font-medium">Итого:</span>
                      <span className="text-2xl font-bold">{formatPrice(cartTotal)}</span>
                    </div>
                    <div className="text-xs text-muted-foreground text-right">
                      НДС включён
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleCheckout}
                    className="w-full gradient-primary text-white py-3 text-base mb-3"
                  >
                    Оформить заказ
                  </Button>
                  
                  <Button 
                    variant="outline"
                    asChild
                    className="w-full"
                  >
                    <Link to="/catalog">Продолжить покупки</Link>
                  </Button>
                </div>

                {/* Promotional badges */}
                <div className="bg-white rounded-lg border p-4 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center shrink-0">
                      <Gift className="w-5 h-5 text-secondary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Подарок при покупке</div>
                      <div className="text-xs text-muted-foreground">
                        При заказе от 100 000 ₽ — фирменный набор автомобилиста
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                      <CreditCard className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Рассрочка 0%</div>
                      <div className="text-xs text-muted-foreground">
                        На 6 месяцев без переплат на любой товар
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                      <RotateCcw className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <div className="font-medium text-sm">Возврат 14 дней</div>
                      <div className="text-xs text-muted-foreground">
                        Вернём деньги, если товар не подошёл
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trust badges */}
                <div className="bg-gradient-to-br from-muted/50 to-muted/30 rounded-lg border p-4">
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-secondary" />
                      <span className="text-xs">Гарантия качества</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Truck className="w-4 h-4 text-secondary" />
                      <span className="text-xs">Доставка по РФ</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-secondary" />
                      <span className="text-xs">В наличии</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-secondary" />
                      <span className="text-xs">Поддержка 24/7</span>
                    </div>
                  </div>
                </div>

                {/* Urgency notice */}
                <div className="bg-destructive/5 border border-destructive/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-destructive mb-1">
                    <Clock className="w-4 h-4" />
                    <span className="font-medium text-sm">Успейте купить!</span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Товары в корзине резервируются на 30 минут. После этого они могут быть проданы другим покупателям.
                  </p>
                </div>

                {/* Contact help */}
                <div className="text-center p-3 bg-muted/30 rounded-lg">
                  <p className="text-xs text-muted-foreground mb-2">Нужна помощь с заказом?</p>
                  <a 
                    href="tel:+78129991234" 
                    className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
                  >
                    <Phone className="w-4 h-4" />
                    +7 (812) 999-12-34
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Cart;
