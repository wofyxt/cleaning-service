function Services() {
  const services = [
    {
      icon: '🏠',
      title: 'Уборка квартир',
      description:
        'Поддерживающая и генеральная уборка квартир любой площади. Пыль, полы, сантехника, кухня — всё под контролем.',
      price: 'от 2 500 ₽',
    },
    {
      icon: '🏢',
      title: 'Уборка офисов',
      description:
        'Ежедневная и генеральная уборка офисных помещений. Работаем в удобное для вас время — утром, вечером или в выходные.',
      price: 'от 3 000 ₽',
    },
    {
      icon: '🧽',
      title: 'Генеральная уборка',
      description:
        'Полная уборка от потолка до пола. Моем окна, чистим мебель, удаляем сложные загрязнения. Ваш дом засияет!',
      price: 'от 5 000 ₽',
    },
    {
      icon: '🪟',
      title: 'Мытьё окон',
      description:
        'Профессиональная мойка окон, рам и подоконников. Работаем на любой высоте, включая панорамные окна.',
      price: 'от 300 ₽/окно',
    },
    {
      icon: '🛋️',
      title: 'Химчистка мебели',
      description:
        'Глубокая чистка диванов, кресел, матрасов и ковров. Удаляем пятна, запахи и аллергены.',
      price: 'от 1 500 ₽',
    },
    {
      icon: '🏗️',
      title: 'Уборка после ремонта',
      description:
        'Удаляем строительную пыль, остатки клея и цемента. Подготовим помещение к заселению.',
      price: 'от 6 000 ₽',
    },
  ]

  return (
    <section className="section services" id="services">
      <div className="container">
        <h2 className="section-title">Наши услуги</h2>
        <p className="section-subtitle">
          Подберём оптимальный вариант уборки под ваши задачи и бюджет
        </p>

        <div className="services__grid">
          {services.map((service, index) => (
            <article className="service-card" key={index}>
              <div className="service-card__icon">{service.icon}</div>
              <h3 className="service-card__title">{service.title}</h3>
              <p className="service-card__description">{service.description}</p>
              <div className="service-card__price">{service.price}</div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services