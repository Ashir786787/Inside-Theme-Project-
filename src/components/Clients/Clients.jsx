import "./Clients.css";
import client1 from "../../assets/images/clients/client1.png";
import client2 from "../../assets/images/clients/client2.png";
import client3 from "../../assets/images/clients/client3.png";
import client4 from "../../assets/images/clients/client4.png";
import client5 from "../../assets/images/clients/client5.png";
import client6 from "../../assets/images/clients/client6.png";

const logos = [client1, client2, client3, client4, client5, client6];

const Clients = () => {
  return (
    <section className="clients">
      <div className="container clients-container">
        {logos.map((logo, index) => (
          <div className="client-logo" key={index}>
            <img src={logo} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Clients;
