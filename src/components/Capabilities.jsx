const cards = [
  {
    title: "ISR & Reconnaissance",
    text: "Long-range surveillance, border patrol and real-time situational awareness with EO/IR payloads.",
  },
  {
    title: "Tactical Delivery",
    text: "Payload-optimized platforms for time-critical delivery of supplies in hostile terrain.",
  },
  {
    title: "Industrial Inspections",
    text: "Automated asset inspection for wind farms, pipelines and critical infrastructure.",
  },
  {
    title: "Custom Mission Profiles",
    text: "Modular airframes and APIs to integrate with existing C2 and telemetry systems.",
  },
];

function Capabilities() {
  return (
    <div className="section container">
      <div className="section-header">
        <p className="eyebrow">CAPABILITIES</p>
        <h2>Platforms built for demanding missions.</h2>
      </div>

      <div className="card-grid">
        {cards.map((card) => (
          <div className="feature-card" key={card.title}>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Capabilities;
