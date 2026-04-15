function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container hero__inner">
        <div className="hero__content">
          <div className="hero__badge">
            Работаем с 2018 года
          </div>

          <h1 className="hero__title">
            Чистота в вашем доме — <span>наша забота</span>
          </h1>

          <p className="hero__description">
            Профессиональная уборка квартир, домов и коммерческих помещений.
            Используем экологичные средства и современное оборудование.
          </p>

          <div className="hero__buttons">
            <a href="#contact" className="btn btn-primary">
              Вызвать уборку
            </a>
            <a href="#pricing" className="btn btn-outline">
              Узнать цены
            </a>
          </div>

          <div className="hero__stats">
            <div>
              <div className="hero__stat-number">2 500+</div>
              <div className="hero__stat-label">Выполненных заказов</div>
            </div>
            <div>
              <div className="hero__stat-number">98%</div>
              <div className="hero__stat-label">Клиентов довольны</div>
            </div>
            <div>
              <div className="hero__stat-number">4.9</div>
              <div className="hero__stat-label">Рейтинг на Яндекс</div>
            </div>
          </div>
        </div>

        <aside className="hero__card">
         <img
             className="hero__card-image"
             src="public/images/still-life-office-cleaning-process.jpg"
             alt="Уютный чистый интерьер"
        />
          <div className="hero__card-features">
            <div className="hero__card-feature">
              <div className="hero__card-feature-icon">🌿</div>
              <span className="hero__card-feature-text">Экологичные средства</span>
            </div>
            <div className="hero__card-feature">
              <div className="hero__card-feature-icon">⚡</div>
              <span className="hero__card-feature-text">Выезд за 1 час</span>
            </div>
            <div className="hero__card-feature">
              <div className="hero__card-feature-icon">🛡️</div>
              <span className="hero__card-feature-text">Гарантия качества</span>
            </div>
            <div className="hero__card-feature">
              <div className="hero__card-feature-icon">💰</div>
              <span className="hero__card-feature-text">Фиксированные цены</span>
            </div>
          </div>
        </aside>
      </div>
    </section>
  )
}

export default Hero