import "./Features.css";
import FeatureCard from "./FeatureCard";
import { features, featureImageData } from "../../data/features";

const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container">
        <div className="section-heading">
          <span>WHY CHOOSE US</span>
          <h2>Our Features</h2>
          <div className="divider"></div>
        </div>
        <div className="features-wrapper">
          <div className="features-left">
            {features.map((feature) => (
              <FeatureCard key={feature.id} feature={feature} />
            ))}
          </div>
          <div className="features-right">
            <img src={featureImageData} alt="Business Dashboard" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
