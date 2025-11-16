function Hero() {
  return (
    <div className="hero container">
      <div className="hero-text">
        <p className="eyebrow">MILITARY-GRADE UAV SYSTEMS</p>
        <h1>
          Precision drones for <span className="accent">critical missions</span>.
        </h1>
        <p className="subtitle">
          VyomGarud builds autonomous UAV platforms for defence,
          surveillance, and high-risk industrial inspections – engineered
          for reliability, redundancy and real-time intelligence.
        </p>

        <div className="hero-actions">
          <a href="#contact" className="btn-primary">
            Request a demo
          </a>
          <a
            href="#capabilities"
            className="btn-ghost"
          >
            View capabilities
          </a>
        </div>

        <div className="hero-metrics">
          <div>
            <h3>250+</h3>
            <p>Successful missions</p>
          </div>
          <div>
            <h3>12 hrs</h3>
            <p>Max flight endurance</p>
          </div>
          <div>
            <h3>4K</h3>
            <p>Encrypted video link</p>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="drone-card">
            
          <div className="drone-body" />
          <div className="drone-arm arm-1" />
          <div className="drone-arm arm-2" />
          <div className="drone-arm arm-3" />
          <div className="drone-arm arm-4" />
          <p className="drone-caption">Live telemetry • MAVLink • AES-256</p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
