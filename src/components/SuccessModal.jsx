function SuccessModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button
          className="modal__close"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ✕
        </button>

        <div className="modal__icon">✅</div>
        <h2 className="modal__title">Заявка отправлена!</h2>
        <p className="modal__text">
          Спасибо за обращение! Наш менеджер перезвонит вам
          в течение 15 минут для подтверждения заказа.
        </p>
        <button className="btn btn-primary" onClick={onClose}>
          Отлично!
        </button>
      </div>
    </div>
  )
}

export default SuccessModal