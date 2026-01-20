import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { ChevronRight, Wallet, CreditCard, Banknote } from 'lucide-react';
import { toast } from 'sonner';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

import trailer1 from '@/assets/products/trailer-1.jpg';

// Demo cart items
const orderItems = [
  {
    id: 1,
    name: 'Прицеп для квадроцикла ССТ-7132-мини',
    price: 57500,
    quantity: 1,
    image: trailer1,
  }
];

const paymentMethods = [
  {
    id: 'cash',
    name: 'Наличными',
    icon: Banknote,
    description: 'Оплата наличными при получении в офисе или курьеру'
  },
  {
    id: 'sberbank',
    name: 'Оформить заявку на кредит в Сбербанке',
    icon: CreditCard,
    description: 'Кредит от СберБанка на выгодных условиях'
  },
  {
    id: 'tinkoff',
    name: 'Оформить заявку на кредит в Тинькофф',
    icon: Wallet,
    description: 'Кредит от Тинькофф Банка'
  }
];

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('cash');
  const [couponCode, setCouponCode] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    comment: ''
  });
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeCall, setAgreeCall] = useState(false);

  const totalPrice = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' руб.';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Заполните обязательные поля');
      return;
    }
    
    if (!agreePrivacy) {
      toast.error('Необходимо согласиться с политикой конфиденциальности');
      return;
    }

    toast.success('Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.');
  };

  const selectedPaymentMethod = paymentMethods.find(m => m.id === selectedPayment);

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
                <BreadcrumbLink asChild>
                  <Link to="/cart">Корзина</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Оформление заказа</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Main content */}
            <div className="flex-1">
              <form onSubmit={handleSubmit}>
                {/* Section 1: Payment */}
                <div className="bg-white rounded-lg border mb-6">
                  <div className="bg-muted/50 px-4 py-3 rounded-t-lg border-b">
                    <h2 className="font-semibold flex items-center gap-2">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">1</span>
                      Оплата
                    </h2>
                  </div>
                  <div className="p-4">
                    {/* Payment methods */}
                    <div className="flex flex-wrap gap-3 mb-4">
                      {paymentMethods.map((method) => {
                        const Icon = method.icon;
                        return (
                          <button
                            key={method.id}
                            type="button"
                            onClick={() => setSelectedPayment(method.id)}
                            className={`p-3 border-2 rounded-lg flex flex-col items-center gap-2 min-w-[100px] transition-all ${
                              selectedPayment === method.id
                                ? 'border-primary bg-primary/5'
                                : 'border-muted hover:border-primary/50'
                            }`}
                          >
                            {selectedPayment === method.id && (
                              <div className="absolute top-1 left-1 w-4 h-4 bg-primary rounded-sm flex items-center justify-center">
                                <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                </svg>
                              </div>
                            )}
                            <Icon className="w-8 h-8 text-primary" />
                            <span className="text-xs text-center leading-tight">{method.name}</span>
                          </button>
                        );
                      })}

                      {/* Selected method info */}
                      <div className="border rounded-lg p-4 ml-auto hidden md:flex items-center gap-3">
                        {selectedPaymentMethod && (
                          <>
                            <selectedPaymentMethod.icon className="w-10 h-10 text-primary" />
                            <div>
                              <div className="font-medium">{selectedPaymentMethod.name}</div>
                            </div>
                          </>
                        )}
                      </div>
                    </div>

                    {/* Coupon */}
                    <div className="max-w-sm">
                      <label className="text-sm text-muted-foreground mb-1 block">
                        Применить купон:
                      </label>
                      <div className="flex">
                        <Input
                          value={couponCode}
                          onChange={(e) => setCouponCode(e.target.value)}
                          className="rounded-r-none"
                        />
                        <Button variant="outline" className="rounded-l-none border-l-0">
                          <ChevronRight className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>

                    <div className="flex justify-end mt-4">
                      <Button 
                        type="button" 
                        onClick={() => setCurrentStep(2)}
                        className="bg-primary hover:bg-primary/90"
                      >
                        Далее
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Section 2: Customer info */}
                <div className="bg-white rounded-lg border mb-6">
                  <div className="bg-muted/50 px-4 py-3 rounded-t-lg border-b">
                    <h2 className="font-semibold flex items-center gap-2">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">2</span>
                      Покупатель
                    </h2>
                  </div>
                  <div className="p-4 space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-sm">
                        <span className="text-destructive">*</span> Имя
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-sm">
                        <span className="text-destructive">*</span> E-mail
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm">
                        <span className="text-destructive">*</span> Телефон
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (___) ___-__-__"
                        required
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-sm">
                        Адрес
                      </Label>
                      <Textarea
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        rows={3}
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="comment" className="text-sm">
                        Комментарии к заказу:
                      </Label>
                      <Textarea
                        id="comment"
                        name="comment"
                        value={formData.comment}
                        onChange={handleInputChange}
                        rows={3}
                        className="mt-1"
                      />
                    </div>

                    <div className="flex justify-between pt-2">
                      <Button 
                        type="button" 
                        variant="outline"
                        onClick={() => setCurrentStep(1)}
                        className="bg-primary hover:bg-primary/90 text-white"
                      >
                        Назад
                      </Button>
                      <Button 
                        type="button"
                        onClick={() => setCurrentStep(3)}
                        className="bg-primary hover:bg-primary/90"
                      >
                        Далее
                      </Button>
                    </div>
                  </div>
                </div>

                {/* Section 3: Order items */}
                <div className="bg-white rounded-lg border mb-6">
                  <div className="bg-muted/50 px-4 py-3 rounded-t-lg border-b flex items-center justify-between">
                    <h2 className="font-semibold flex items-center gap-2">
                      <span className="w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm">3</span>
                      Товары в заказе
                    </h2>
                    <Link to="/cart" className="text-primary text-sm hover:underline">
                      изменить
                    </Link>
                  </div>
                  <div className="p-4">
                    {orderItems.map((item) => (
                      <div key={item.id} className="flex items-center gap-4 py-2">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-12 object-cover rounded"
                        />
                        <Link 
                          to={`/product/${item.id}`}
                          className="flex-1 text-primary hover:underline text-sm"
                        >
                          {item.name}
                        </Link>
                        <div className="text-sm text-muted-foreground">
                          {item.quantity} шт
                        </div>
                        <div className="font-medium">
                          {formatPrice(item.price)}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Agreements */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="privacy"
                      checked={agreePrivacy}
                      onCheckedChange={(checked) => setAgreePrivacy(checked as boolean)}
                    />
                    <Label htmlFor="privacy" className="text-sm leading-tight cursor-pointer">
                      Соглашаюсь на обработку персональных данных в соответствии с{' '}
                      <Link to="/privacy" className="text-primary hover:underline">
                        Политикой конфиденциальности
                      </Link>{' '}
                      и{' '}
                      <Link to="/terms" className="text-primary hover:underline">
                        Пользовательским соглашением
                      </Link>
                    </Label>
                  </div>

                  <div className="flex items-start gap-2">
                    <Checkbox
                      id="call"
                      checked={agreeCall}
                      onCheckedChange={(checked) => setAgreeCall(checked as boolean)}
                    />
                    <Label htmlFor="call" className="text-sm cursor-pointer">
                      Согласен на звонок
                    </Label>
                  </div>
                </div>

                {/* Submit button */}
                <div className="flex justify-center">
                  <Button 
                    type="submit"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-base"
                  >
                    Оформить заказ
                  </Button>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <div className="lg:w-72 shrink-0">
              <div className="bg-white rounded-lg border p-4 sticky top-24">
                <div className="flex justify-between items-center mb-2 text-sm">
                  <span className="text-muted-foreground">Товаров на:</span>
                  <span>{formatPrice(totalPrice)}</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">Итого:</span>
                    <span className="text-xl font-bold text-primary">{formatPrice(totalPrice)}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
