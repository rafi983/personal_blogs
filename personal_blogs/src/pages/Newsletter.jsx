import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) {
      setStatus('success')
      setEmail('')
    }
  }

  return (
    <section className="newsletter">
      <div className="newsletter__container">
        <h1 className="newsletter__title">Join My Newsletter</h1>
        <p className="newsletter__text">
          Get email updates about my latest blog posts, coding adventures, and resources
          I find helpful. I'll keep it relevant and not too frequent - promise!
        </p>

        <form className="newsletter__form" onSubmit={handleSubmit}>
          <div className="newsletter__box">
            <input
              type="email"
              placeholder="Enter your email address"
              className="newsletter__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <button type="submit" className="newsletter__button button">
              Subscribe
            </button>
          </div>

          {status === 'success' && (
            <div className="newsletter__message success">
              <img
                src="/src/assets/images/icon-success.svg"
                alt="Success"
                className="newsletter__icon"
              />
              <p>Thanks for subscribing!</p>
            </div>
          )}
        </form>
      </div>
    </section>
  )
}

export default Newsletter
