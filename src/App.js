import './App.css';
import Card from './components/Card/Card.js';
import Button from './components/Button/Button.js';
import Input from './components/Input/Input.js';
import Selection from './components/Selection/Selection.js';




function App() {
  const arr = [
    {
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-21.jpg?raw=true',      
      description: '450 мл',
      title: 'AOS средство для мытья посуды Crystal',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      description: '15X28.8 г',
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-31.jpg?raw=true',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      description: '1500 г',
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-41.jpg?raw=true',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-21.jpg?raw=true',      
      description: '450 мл',
      title: 'AOS средство для мытья посуды Crystal',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      description: '15X28.8 г',
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-31.jpg?raw=true',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      description: '1500 г',
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-41.jpg?raw=true',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-21.jpg?raw=true',      
      description: '450 мл',
      title: 'AOS средство для мытья посуды Crystal',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      description: '15X28.8 г',
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-31.jpg?raw=true',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      description: '1500 г',
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-41.jpg?raw=true',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-21.jpg?raw=true',      
      description: '450 мл',
      title: 'AOS средство для мытья посуды Crystal',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      description: '15X28.8 г',
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-31.jpg?raw=true',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      description: '1500 г',
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-41.jpg?raw=true',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-21.jpg?raw=true',      
      description: '450 мл',
      title: 'AOS средство для мытья посуды Crystal',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      title: 'ARIEL Автмат Гель СМС жидкое в растворимых капсулах Liquid Capsules Горный родник',
      description: '15X28.8 г',
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-31.jpg?raw=true',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },
    {
      title: 'BIMAX Порошок стиральный Автомат 100 пятен COMPACT',
      description: '1500 г',
      img: 'https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/image-41.jpg?raw=true',
      price: '48,76T',
      barcode: 'Штрихкод: 4604049097548',
      producer: 'Производитель: Нэфис',
      brand: 'Брэнд: AOS'
    },  
    
  ]

  const res = JSON.stringify(arr, ['img','title','description','barcode','producer','brand','price']);

  console.log(res);

  
  arr.sort(function(a, b){
    let titleA=a.title.toLowerCase(), titleB=b.title.toLowerCase()
    if (titleA < titleB)
      return -1
    if (titleA > titleB)
      return 1
    return 0
  })




  return (
    <div className="App">
      <div className='Group-179'>
        <div className='Group-99'>opt.sultan@mail.ru На связи в любое время</div>
        <div className='Group-98'>г. Кокчетав, ул. Ж. Ташенова 129Б (Рынок Восточный)</div>
        <div className='From_company'>О компании</div>
        <div className='Shipping'>Доставка и оплата</div>
        <div className='Return'>Возврат</div>
        <div className='Contacts'>Контакты</div>
        <div className="SULTAN">
          <img className="SULTAN1" src={ "https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/3.1%20Лого%20Султан%20RGB.png?raw=true" }/>
        </div>
        <div className="Main-button">
          <Button>КАТАЛОГ</Button>
        </div>
        <div className="Search">
          <Input type="Search1" placeholder="Поиск..." name="Search1" id="Search1" />
        </div>
        <div className="Group-102">
          <img className="Group-102-1" src={ "https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/Group%20102.png?raw=true"} />
        </div>
        <div className="Price-button">
          <Button>Прайс-лист</Button>
        </div>
      </div>
      <div className="Frame-111-1">Главная:  Косметика и гигиена</div>
      <div className="Group-160">
        <div className="Cosmetics_and_hygiene">КОСМЕТИКА И ГИГИЕНА</div>
        <div className="Price_Names">
          <Selection></Selection>
        </div>
      </div>
      <div className="Group-133">
        <div className="Frame-109">Уход за телом</div>
        <div className="Frame-110">Уход за руками</div>
        <div className="Frame-111">Уход за ногами</div>
        <div className="Frame-112">Уход за лицом</div>
        <div className="Frame-113">Уход за волосами</div>
        <div className="Frame-114">Средства для загара</div>
        <div className="Frame-115">Средства для бритья</div>
        <div className="Frame-116">Подарочные наборы</div>
        <div className="Frame-117">Гигиеническая продукция</div>
        <div className="Frame-118">Гигиена полости рта</div>
        <div className="Frame-119">Бумажная продукция</div>
      </div>
      <div className="Group-135">
        <div className="Parametres">ПОДБОР ПО ПАРАМЕТРАМ</div>
        <div className="Price1">Цена:Т</div>
        <div className="Group-130"></div>
        <div className="Manufacturer">Производитель</div>
        <div className="Frame-94">
          <Input placeholder="Поиск..."></Input>
        </div>
        <div className="Group-134"></div>
        <div className="Brand-1">Брэнд</div>
        <div className="Frame-98">
          <Input placeholder="Поиск..."></Input>
        </div>
        <div className="Group-135-1"></div>
        <div className="Frame-96">
          <Button>Показать</Button>
        </div>
        <div className="body_treatment">УХОД ЗА ТЕЛОМ</div>
        <div className="b1">Эпиляция и депиляция</div>
        <div className="b2">Средства для ванны и душа</div>
        <div className="b3">Скрабы, пилинги и пр.</div>
        <div className="b4">Мочалки и губки для тела</div>
        <div className="b5">Кремы, лосьоны, масла</div>
        <div className="b6">Интимный уход</div>
        <div className="b7">Дезодоранты, антиперсперанты</div>
        <div className="b8">Гели для душа</div>
        <div className="hand_care">УХОД ЗА РУКАМИ</div>
        <div className="h1">Увлажнение и питание</div>
        <div className="h2">Средства для ногтей</div>
        <div className="h3">Мыло твердое</div>
        <div className="h4">Мыло жидкое</div>
        <div className="h5">Крем для рук</div>
        <div className="h6">Защита рук</div>
        <div className="h7">Жидкость для снятия лака</div>
        <div className="foot_care">УХОД ЗА НОГАМИ</div>
        <div className="f1">Скрабы, пилинги</div>
        <div className="f2">Пилки, ролики</div>
        <div className="f3">Крем для ног</div>
        <div className="f4">Дезодоранты для ног</div>
      </div>
      <div className="App-container">
        <div className="Product-card">
          {
            arr.map((item) => {
              return <Card img = {item.img} description = {item.description} title = {item.title} price = {item.price} barcode = {item.barcode} producer = {item.producer} brand = { item.brand }/>
            })
          }
        </div>
        <div className="Pagination">

        </div>   
      </div>
      <div className="Comments1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum ut justo, vestibulum sagittis iaculis iaculis. Quis mattis vulputate feugiat massa vestibulum duis. Faucibus consectetur aliquet sed pellentesque consequat consectetur congue mauris venenatis. </div>
      <div className="Footer">
        <div className="Group_124">
          <div className="Contacts124">Контакты</div>
          <div className="telephone">+7 (777) 490-00-91</div>
          <div className="times_work">время работы: 9:00-20:00</div>
          <div className="book_a_call">Заказать звонок</div>
          <div className="email-124">opt.sultan@mail.ru На связи в любое время</div>
          <div className="VISA1">
            <img className="VISA1-1" src={ "https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/Visa.png?raw=true" }/>
          </div>
          <div className="VISA2">
            <img className="VISA2-1" src={ "https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/Visa%20(1).png?raw=true" }/>
          </div>
        </div>
        <div className="Group-125">
          <div className="Download-125">Скачать прайс-лист:</div>
          <div className="Price_list">
            <Button>Прайс-лист</Button>
          </div>
          <div className="Connect">Связь в мессенджерах:</div>
          <div className="Group-162">
            <img className="Group-162-1" src={ "https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/Group%20162.png?raw=true" }/>
          </div>
          <div className="Telegram">
            <img className="Telegram-1" src={ "https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/logos_telegram.png?raw=true" } />
          </div>
        </div>
          <div className="Group-122">
          <div className="Categories-122">Категории:</div>
          <div className="household_chemicals">Бытовая химия</div>
          <div className="cosmetics_and_hygiene">Косметика и гигиена</div>
          <div className="household_products">Товары для дома</div>
          <div className="Children">Товары для детей и мам</div>
          <div className="Dishes">Посуда</div>
        </div>
          <div className="Group-121">
          <div className="Menu">Меню сайта:</div>
          <div className="About_company">О компании</div>
          <div className="shipping_and_payment">Доставка и оплата</div>
          <div className="Returns">Возврат</div>
          <div className="Contacts-121">Контакты</div>
        </div>
        <div className="logo_SULTAN">
          <img className="logo_SULTAN-1" src={ "https://github.com/Kononov1983/new-lessons-final_work/blob/main/src/components/img/3.1%20Лого%20Султан%20RGB.png?raw=true" }/>
        </div>        
        <div className="text_logo">Компания «Султан» — снабжаем розничные магазины товарами "под ключ" в Кокчетаве и Акмолинской области</div>
        <div className="logo_Description">Подпишись на скидки и акции</div>
        <div className="Group99">
          <Input type="email" placeholder="Введите ваш email" name="email" id="email" />
        </div>
      </div>
    </div>
  );
}

export default App;



