import "./Banner.css";
import bannerBg from "../../assets/images/banner/banner-bg.jpg";

const Banner = () => {
  return (
    <section className="banner" style={{ backgroundImage: `url(${bannerBg})` }}>
      <div className="banner-overlay">
        <div className="container">
          <h2>Opening the World to Something New</h2>
        </div>
      </div>
    </section>
  );
};

export default Banner;
