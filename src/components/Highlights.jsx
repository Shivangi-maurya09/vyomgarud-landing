function Highlights() {
  return (
    <div className="section container">
      <div className="section-header">
        <p className="eyebrow">SYSTEM HIGHLIGHTS</p>
        <h2>What makes VyomGarud different.</h2>
      </div>

      <ul className="highlights-list">
        <li>
          <span className="dot" />
          <p>
            <strong>Autonomous mission engine</strong> – waypoint planning,
            dynamic rerouting and return-to-home fail-safes.
          </p>
        </li>
        <li>
          <span className="dot" />
          <p>
            <strong>Dark, rugged design language</strong> – optimized for
            low-visibility operations and night sorties.
          </p>
        </li>
        <li>
          <span className="dot" />
          <p>
            <strong>Modular payload bay</strong> – quickly swap cameras,
            LIDAR or custom sensors without rewiring.
          </p>
        </li>
        <li>
          <span className="dot" />
          <p>
            <strong>24×7 support and training</strong> – simulator-based
            pilot training and mission-readiness checklists.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default Highlights;
