import "./Stats.css";
import {
  FaBriefcase,
  FaUsers,
  FaAward,
  FaSmile,
} from "react-icons/fa";

import statsBg from "../../assets/images/stats/stats-bg.jpg";

const Stats = () => {
  return (
    <section
      className="stats"
      style={{ backgroundImage: `url(${statsBg})` }}
    >
      <div className="stats-overlay">
        <div className="container stats-grid">

          <div className="stat-item">
            <FaBriefcase />
            <h2>2500+</h2>
            <p>Projects Completed</p>
          </div>

          <div className="stat-item">
            <FaUsers />
            <h2>1300+</h2>
            <p>Happy Clients</p>
          </div>

          <div className="stat-item">
            <FaAward />
            <h2>400+</h2>
            <p>Awards Won</p>
          </div>

          <div className="stat-item">
            <FaSmile />
            <h2>98%</h2>
            <p>Client Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Stats;