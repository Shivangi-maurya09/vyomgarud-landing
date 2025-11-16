function Contact() {
  return (
    <div className="section container contact-section">
      <div className="section-header">
        <p className="eyebrow">CONTACT</p>
        <h2>Schedule a briefing.</h2>
      </div>

      <p className="section-body">
        Share your mission requirements and our team will respond with a
        tailored deployment plan, demo slots and compliance details.
      </p>

      <form
        className="contact-form"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" placeholder="Your name" required />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@organization.com"
              required
            />
          </div>
        </div>

        <div className="form-field">
          <label htmlFor="org">Organization</label>
          <input
            id="org"
            type="text"
            placeholder="Agency / company name"
          />
        </div>

        <div className="form-field">
          <label htmlFor="message">Mission details</label>
          <textarea
            id="message"
            rows="4"
            placeholder="Briefly describe your use-case and timelines."
          />
        </div>

        <button type="submit" className="btn-primary full-width">
          Submit request
        </button>
      </form>
    </div>
  );
}

export default Contact;
