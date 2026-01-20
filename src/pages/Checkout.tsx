import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Wallet, CreditCard, Banknote, Check, ChevronDown } from 'lucide-react';
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
    name: 'Кредит в Сбербанке',
    icon: CreditCard,
    description: 'Кредит от СберБанка на выгодных условиях'
  },
  {
    id: 'tinkoff',
    name: 'Кредит в Тинькофф',
    icon: Wallet,
    description: 'Кредит от Тинькофф Банка'
  }
];

type StepStatus = 'pending' | 'valid' | 'invalid';

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState('cash');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    comment: ''
  });
  const [agreePrivacy, setAgreePrivacy] = useState(false);
  const [agreeCall, setAgreeCall] = useState(false);
  
  const [stepStatuses, setStepStatuses] = useState<Record<number, StepStatus>>({
    1: 'pending',
    2: 'pending',
    3: 'pending'
  });

  const totalPrice = orderItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatPrice = (price: number) => {
    return price.toLocaleString('ru-RU') + ' руб.';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateStep1 = () => {
    return selectedPayment !== '';
  };

  const validateStep2 = () => {
    return formData.name.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.phone.trim() !== '';
  };

  const goToStep = (step: number) => {
    // Validate current step before moving
    if (step > currentStep) {
      if (currentStep === 1) {
        const isValid = validateStep1();
        setStepStatuses(prev => ({ ...prev, 1: isValid ? 'valid' : 'invalid' }));
        if (!isValid) {
          toast.error('Выберите способ оплаты');
          return;
        }
      } else if (currentStep === 2) {
        const isValid = validateStep2();
        setStepStatuses(prev => ({ ...prev, 2: isValid ? 'valid' : 'invalid' }));
        if (!isValid) {
          toast.error('Заполните обязательные поля');
          return;
        }
      }
    }
    
    // Update previous step status when going back
    if (step < currentStep) {
      if (currentStep === 2) {
        setStepStatuses(prev => ({ ...prev, 2: validateStep2() ? 'valid' : 'pending' }));
      } else if (currentStep === 3) {
        setStepStatuses(prev => ({ ...prev, 3: 'pending' }));
      }
    }
    
    setCurrentStep(step);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate all steps
    const step1Valid = validateStep1();
    const step2Valid = validateStep2();
    
    setStepStatuses({
      1: step1Valid ? 'valid' : 'invalid',
      2: step2Valid ? 'valid' : 'invalid',
      3: 'valid'
    });
    
    if (!step1Valid || !step2Valid) {
      toast.error('Заполните все обязательные поля');
      return;
    }
    
    if (!agreePrivacy) {
      toast.error('Необходимо согласиться с политикой конфиденциальности');
      return;
    }

    toast.success('Заказ успешно оформлен! Мы свяжемся с вами в ближайшее время.');
  };

  const selectedPaymentMethod = paymentMethods.find(m => m.id === selectedPayment);

  const getStepHeaderClasses = (step: number) => {
    const status = stepStatuses[step];
    const isActive = currentStep === step;
    
    let bgColor = 'bg-muted/50';
    let borderColor = '';
    
    if (status === 'valid' && !isActive) {
      bgColor = 'bg-green-50';
      borderColor = 'border-green-500';
    } else if (status === 'invalid' && !isActive) {
      bgColor = 'bg-red-50';
      borderColor = 'border-red-500';
    }
    
    return `${bgColor} px-4 py-3 rounded-t-lg border-b ${borderColor} cursor-pointer transition-colors hover:bg-muted/70`;
  };

  const getStepNumberClasses = (step: number) => {
    const status = stepStatuses[step];
    const isActive = currentStep === step;
    
    if (status === 'valid' && !isActive) {
      return 'w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm';
    } else if (status === 'invalid' && !isActive) {
      return 'w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm';
    }
    
    return 'w-6 h-6 bg-primary text-white rounded-full flex items-center justify-center text-sm';
  };

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
                <div className={`bg-white rounded-lg border mb-4 ${stepStatuses[1] === 'valid' && currentStep !== 1 ? 'border-green-500' : stepStatuses[1] === 'invalid' && currentStep !== 1 ? 'border-red-500' : ''}`}>
                  <div 
                    className={getStepHeaderClasses(1)}
                    onClick={() => goToStep(1)}
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold flex items-center gap-2">
                        <span className={getStepNumberClasses(1)}>
                          {stepStatuses[1] === 'valid' && currentStep !== 1 ? (
                            <Check className="w-4 h-4" />
                          ) : '1'}
                        </span>
                        Оплата
                        {stepStatuses[1] === 'valid' && currentStep !== 1 && selectedPaymentMethod && (
                          <span className="text-sm font-normal text-muted-foreground ml-2">
                            — {selectedPaymentMethod.name}
                          </span>
                        )}
                      </h2>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${currentStep === 1 ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                  
                  {currentStep === 1 && (
                    <div className="p-4">
                      {/* Payment methods */}
                      <div className="flex flex-wrap gap-4 mb-4">
                        {paymentMethods.map((method) => {
                          const Icon = method.icon;
                          const isSelected = selectedPayment === method.id;
                          return (
                            <button
                              key={method.id}
                              type="button"
                              onClick={() => setSelectedPayment(method.id)}
                              className={`relative p-4 border-2 rounded-lg flex flex-col items-center justify-center gap-2 w-28 h-24 transition-colors ${
                                isSelected
                                  ? 'border-primary bg-primary/5'
                                  : 'border-border bg-white hover:border-primary/50'
                              }`}
                            >
                              {isSelected && (
                                <div className="absolute top-2 left-2 w-5 h-5 bg-primary rounded flex items-center justify-center">
                                  <Check className="w-3 h-3 text-white" />
                                </div>
                              )}
                              <Icon className="w-8 h-8 text-primary" />
                              <span className="text-xs text-center leading-tight line-clamp-2">{method.name}</span>
                            </button>
                          );
                        })}

                        {/* Selected method info */}
                        {selectedPaymentMethod && (
                          <div className="border rounded-lg p-4 ml-auto hidden md:flex items-center gap-3 bg-white">
                            <selectedPaymentMethod.icon className="w-10 h-10 text-primary" />
                            <div>
                              <div className="font-medium">{selectedPaymentMethod.name}</div>
                            </div>
                          </div>
                        )}
                      </div>

                      <div className="flex justify-end mt-4">
                        <Button 
                          type="button" 
                          onClick={() => goToStep(2)}
                          className="bg-primary hover:bg-primary/90"
                        >
                          Далее
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Section 2: Customer info */}
                <div className={`bg-white rounded-lg border mb-4 ${stepStatuses[2] === 'valid' && currentStep !== 2 ? 'border-green-500' : stepStatuses[2] === 'invalid' && currentStep !== 2 ? 'border-red-500' : ''}`}>
                  <div 
                    className={getStepHeaderClasses(2)}
                    onClick={() => currentStep > 1 || stepStatuses[1] === 'valid' ? goToStep(2) : null}
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold flex items-center gap-2">
                        <span className={getStepNumberClasses(2)}>
                          {stepStatuses[2] === 'valid' && currentStep !== 2 ? (
                            <Check className="w-4 h-4" />
                          ) : '2'}
                        </span>
                        Покупатель
                        {stepStatuses[2] === 'valid' && currentStep !== 2 && formData.name && (
                          <span className="text-sm font-normal text-muted-foreground ml-2">
                            — {formData.name}
                          </span>
                        )}
                      </h2>
                      <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${currentStep === 2 ? 'rotate-180' : ''}`} />
                    </div>
                  </div>
                  
                  {currentStep === 2 && (
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
                          onClick={() => goToStep(1)}
                        >
                          Назад
                        </Button>
                        <Button 
                          type="button"
                          onClick={() => goToStep(3)}
                          className="bg-primary hover:bg-primary/90"
                        >
                          Далее
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Section 3: Order items */}
                <div className={`bg-white rounded-lg border mb-6 ${stepStatuses[3] === 'valid' && currentStep !== 3 ? 'border-green-500' : ''}`}>
                  <div 
                    className={getStepHeaderClasses(3)}
                    onClick={() => (currentStep > 2 || stepStatuses[2] === 'valid') ? goToStep(3) : null}
                  >
                    <div className="flex items-center justify-between">
                      <h2 className="font-semibold flex items-center gap-2">
                        <span className={getStepNumberClasses(3)}>
                          {stepStatuses[3] === 'valid' && currentStep !== 3 ? (
                            <Check className="w-4 h-4" />
                          ) : '3'}
                        </span>
                        Товары в заказе
                      </h2>
                      <div className="flex items-center gap-2">
                        {currentStep === 3 && (
                          <Link to="/cart" className="text-primary text-sm hover:underline">
                            изменить
                          </Link>
                        )}
                        <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${currentStep === 3 ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                  
                  {currentStep === 3 && (
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
                      
                      <div className="flex justify-between pt-4 mt-4 border-t">
                        <Button 
                          type="button" 
                          variant="outline"
                          onClick={() => goToStep(2)}
                        >
                          Назад
                        </Button>
                      </div>
                    </div>
                  )}
                </div>

                {/* Agreements - only show when on step 3 */}
                {currentStep === 3 && (
                  <>
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
                  </>
                )}
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
