import { useState } from 'react'

function CallForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    address: '',
    comment: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Форма отправлена:', formData)
    onSubmit()
    setFormData({ name: '', phone: '', service: '', address: '', comment: '' })
  }

  return (
    <section className="section call-form" id="contact">
      <div className="container">
        <h2 className="section-title">Вызвать уборку</h2>
        <p className="section-subtitle">
          Оставьте заявку, и мы перезвоним вам в течение 15 минут
        </p>

        <div className="call-form__inner">
          <form onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Ваше имя</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Иван Иванов"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Телефон</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label htmlFor="service">Вид уборки</label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Выберите услугу</option>
                  <option value="supporting">Поддерживающая</option>
                  <option value="general">Генеральная</option>
                  <option value="after-repair">После ремонта</option>
                  <option value="windows">Мытьё окон</option>
                  <option value="dry-cleaning">Химчистка мебели</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="address">Адрес</label>
                <input
                  type="text"
                  id="address"
                  name="address"
                  placeholder="ул. Примерная, д. 1"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="comment">Комментарий</label>
              <textarea
                id="comment"
                name="comment"
                placeholder="Укажите площадь, пожелания или особые требования..."
                value={formData.comment}
                onChange={handleChange}
              ></textarea>
            </div>

            <button type="submit" className="btn btn-accent form__submit">
              Отправить заявку
            </button>

            <p className="form__note">
              Нажимая кнопку, вы соглашаетесь с обработкой персональных данных
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default CallForm