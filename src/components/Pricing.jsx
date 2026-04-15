function Pricing() {
  const plans = [
    {
      name: 'Поддерживающая',
      description: 'Для регулярной чистоты',
      price: '2 500',
      period: 'за 1-комн. квартиру',
      features: [
        'Влажная уборка полов',
        'Протирка пыли',
        'Уборка кухни и санузла',
        'Вынос мусора',
        'Срок: 2–3 часа',
      ],
      popular: false,
    },
    {
      name: 'Генеральная',
      description: 'Глубокая уборка всего помещения',
      price: '5 000',
      period: 'за 1-комн. квартиру',
      features: [
        'Всё из «Поддерживающей»',
        'Мытьё окон изнутри',
        'Чистка бытовой техники',
        'Глажка постельного белья',
        'Срок: 4–6 часов',
      ],
      popular: true,
    },
    {
      name: 'После ремонта',
      description: 'Полное удаление строительной пыли',
      price: '6 000',
      period: 'за 1-комн. квартиру',
      features: [
        'Удаление строительной пыли',
        'Мытьё окон и рам',
        'Чистка всех поверхностей',
        'Уборка балкона',
        'Срок: 6–8 часов',
      ],
      popular: false,
    },
  ]

  return (
    <section className="section" id="pricing">
      <div className="container">
        <h2 className="section-title">Тарифы и цены</h2>
        <p className="section-subtitle">
          Прозрачные цены без скрытых платежей. Стоимость зависит от площади и степени загрязнения.
        </p>

        <div className="pricing__grid">
          {plans.map((plan, index) => (
            <article
              className={`pricing-card ${plan.popular ? 'pricing-card--popular' : ''}`}
              key={index}
            >
              <h3 className="pricing-card__name">{plan.name}</h3>
              <p className="pricing-card__description">{plan.description}</p>
              <div className="pricing-card__price">
                {plan.price} <span>₽</span>
              </div>
              <div className="pricing-card__period">{plan.period}</div>

              <ul className="pricing-card__features">
                {plan.features.map((feature, i) => (
                  <li className="pricing-card__feature" key={i}>
                    <span className="pricing-card__feature-check">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <a href="#contact" className="btn btn-primary" style={{ width: '100%' }}>
                Заказать
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Pricing