import React, { useState } from 'react'

const Newsletter = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validateEmail(email)) {
      setStatus('success')
      setEmail('')
    } else {
      setStatus('error')
    }
  }

  return (
      <main className="main">
        <section className="newsletter">
          <h1 className="newsletter__title">Newsletter</h1>

          <p className="newsletter__text">
            Want to stay updated on my latest articles, coding tutorials, and
            personal adventures? Sign up for my newsletter! It's a simple way to
            keep track of new posts and occasional coding tips I discover. Just
            drop your email in the sign-up box, and I'll send you updates whenever
            there's something new to share.
          </p>

          <h2 className="newsletter__your-journey">
            I'd love to have you along for the ride and also hear about your own
            journey!
          </h2>

          <form className="newsletter__form" onSubmit={handleSubmit}>
            <label htmlFor="email" className="newsletter__label">Email Address</label>

            <div className="newsletter__email">
              <input
                  type="text"
                  id="email"
                  placeholder="email@example.com"
                  className="newsletter__input"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                    setStatus('')
                  }}
              />

              {status === 'error' && (
                  <p className="newsletter__text-error">
                    Please enter a valid email address.
                  </p>
              )}

              {status === 'success' && (
                  <p className="newsletter__text-success">
                    You’re subscribed! Check your inbox for updates.
                  </p>
              )}
            </div>

            <input
                type="submit"
                value="Stay updated"
                id="newsletter__submit"
                className="newsletter__button button"
            />

            <p className="newsletter__form-text">
              Stay updated Unsubscribe anytime. No spam, I promise 🙂
            </p>
          </form>
        </section>
      </main>
  )
}

export default Newsletter;