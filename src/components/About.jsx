function About() {
  return (
    <div className="section container">
      <div className="section-header">
        <p className="eyebrow">ABOUT VYOMGARUD</p>
        <h2>Engineering trust in the sky.</h2>
      </div>

      <p className="section-body">
        VyomGarud is a UAV &amp; drone-systems company focused on
        mission-critical defence and industrial use-cases. Our platforms
        combine redundant avionics, secure communication links and advanced
        autonomy so operators can focus on decisions – not on keeping
        hardware in the air.
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>Military-grade reliability</h3>
          <p>
            Built with redundant flight controllers, multi-sensor fusion and
            rigorous pre-flight checks to ensure stable performance in
            adverse environments.
          </p>
        </div>
        <div className="about-card">
          <h3>Operational intelligence</h3>
          <p>
            Real-time telemetry dashboards, geofencing, and mission
            replay tools for post-flight analysis and compliance.
          </p>
        </div>
        <div className="about-card">
          <h3>Secure by design</h3>
          <p>
            Encrypted control links, hardened data pipelines and regional
            data residency options for sensitive deployments.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
