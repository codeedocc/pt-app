  <h1 align="center">Используемые технологии:</h1>
  
 <br />

 <h1>1. <strong>RTK Query</strong></h1>
 <p>В этом проекте идёт обращение к двум разным API:</p>
 <p>- Для получения AccessToken</p>
 <p>- Для получения бонусов</p>
 <p>Всю логику по взаимодействию с этими данными я распределил по соответствующим папкам:</p>
 <img src='https://user-images.githubusercontent.com/83381510/232210560-fa6fb283-a02c-4ec0-a35e-3b25ffe2dbeb.png'/>
 <p>Здесь создаётся эндпоинт для получения AccessToken:</p>
 <p>https://github.com/codeedocc/pt-app/blob/main/src/store/access/access.api.ts</p>
 <p>Здесь создается эндпоинт для получения информации о бонусах:</p>
 <p>https://github.com/codeedocc/pt-app/blob/main/src/store/bonus/bonus.api.ts</p>
 
 <br />

 <h1>2. <strong>SCSS и адаптивная вёрстка</strong></h1>
 <p>Все стили написаны с помощью SCSS, проект выглядит хорошо на любом устройстве, с которого вы будете его открывать.</p>
 <p>К примеру, так выглядит главная страница с телефона:</p>
 <img src='https://user-images.githubusercontent.com/83381510/232210704-389227c3-db58-4cb0-93ab-bcb7611d00bc.png'/>

 <br />

 <h1>3. <strong>Loader для ожидания</strong></h1>
 <p>Для того, чтобы визуализировать процесс загрузки, я создал компонент Loader, который выглядит следующим образом:</p>
 <img src='https://user-images.githubusercontent.com/83381510/232210825-d563aec4-c06f-400c-a364-36c734dc7b0d.png'/>
 <p>Ссылка на Loader:</p>
 <p>https://github.com/codeedocc/pt-app/blob/main/src/components/Loader.tsx</p>
 
 <br />

  <h1>4. <strong>TypeScript</strong></h1>
  <p>Проект максимально типизирован для удобства разработки и дальнейшего масштабирования.</p>















