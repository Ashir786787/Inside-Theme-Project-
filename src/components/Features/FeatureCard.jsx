import "./Features.css";

const FeatureCard = ({ feature }) => {
  const Icon = feature.icon;

  return (
    <div className="feature-card">
      <div className="feature-icon">
        <Icon />
      </div>
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  );
};

export default FeatureCard;
