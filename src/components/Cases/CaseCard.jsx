import "./Cases.css";

const CaseCard = ({ item }) => {
  return (
    <div className="case-card">
      <div className="case-image">
        <img src={item.image} alt={item.title} />
      </div>
      <div className="case-content">
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </div>
    </div>
  );
};

export default CaseCard;
