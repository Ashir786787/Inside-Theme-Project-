import "./Team.css";

import team1 from "../../assets/images/team/team1.jpg";
import team2 from "../../assets/images/team/team2.jpg";
import team3 from "../../assets/images/team/team3.jpg";
import team4 from "../../assets/images/team/team4.jpg";

import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const members = [
  {
    image: team1,
    name: "John Anderson",
    role: "CEO & Founder",
  },
  {
    image: team2,
    name: "Emma Watson",
    role: "Marketing Manager",
  },
  {
    image: team3,
    name: "Michael Smith",
    role: "Creative Director",
  },
  {
    image: team4,
    name: "Sophia Lee",
    role: "Business Consultant",
  },
];

const Team = () => {
  return (
    <section className="team">

      <div className="container">

        <div className="section-heading">

          <span>OUR TEAM</span>

          <h2>Meet Our Experts</h2>

          <div className="divider"></div>

        </div>

        <div className="team-grid">

          {members.map((member, index) => (

            <div className="team-card" key={index}>

              <div className="team-image">

                <img src={member.image} alt={member.name} />

                <div className="team-overlay">

                  <FaFacebookF />
                  <FaTwitter />
                  <FaLinkedinIn />

                </div>

              </div>

              <div className="team-content">

                <h3>{member.name}</h3>

                <p>{member.role}</p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Team;