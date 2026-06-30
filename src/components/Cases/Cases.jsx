import "./Cases.css";
import { cases } from "../../data/cases";
import CaseCard from "./CaseCard";

const Cases = () => {
  return (
    <section className="cases">

      <div className="container">

        <div className="section-heading">
          <span>SOLUTIONS</span>
          <h2>our cases</h2>
          <div className="divider"></div>
        </div>

        <div className="cases-grid">

          {cases.map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Cases;