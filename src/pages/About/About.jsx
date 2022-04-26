import React from 'react'

// components:
import { Container } from 'layouts'

const AboutPage = () => {
  return (
    <Container>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 className='ui-title-1 text-center'>В этом приложении</h1>

        <p>
          В этом приложении мы напишем свой интернет магазин, в котором будем
          использовать react-router и собственный Store. Все продукты будут
          храниться в общем хранилище приложения, а роутер будет обрабатывать
          все динамические маршруты.
        </p>

        <ul className='ml-3 mt-4'>
          <li>🔥 Динамические и вложенные маршруты</li>
          <li>🔥 Редиректы и обработка путей</li>
          <li>
            🔥 Продвинутая работа с хуками useContext, useMemo, а также
            эффектами и стейтом
          </li>
          <li>🔥 Меморизированный Store в связке с Seeders</li>
          <li>🔥 Настройка отображения товаров в слайдере</li>
          <li>🔥 Шаринг стейта приложения</li>
          <li>🔥 Хранение данных в хранилище приложения</li>
        </ul>

        <h3 className='ui-title-2 mt-4'>А также мелочи:</h3>
        <ul className='ui-ol'>
          <li>Создание динамического меню</li>
          <li>Активная ссылка по текущему роуту</li>
          <li>Подгрузка единичного товара в отдельном компоненте</li>
          <li>
            Работа с редиректами, отдельные хуки для редиректов и страница 404
          </li>
          <li>Подключение и использование сторонних библиотек</li>
          <li>Адаптация приложения под мобильные устройства</li>
        </ul>

        <p className='mt-8'>
          Сделано на курсе
          <a
            target='_blank'
            href='https://tocode.ru/courses/react-s-nulya-do-rezultata/'
            className='ui-link ml-1'
          >
            React.js - С нуля до про
          </a>
        </p>
      </div>
    </Container>
  )
}

export default AboutPage
