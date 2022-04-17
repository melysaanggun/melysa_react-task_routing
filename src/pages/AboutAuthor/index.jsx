/**Component */
import Navbar from "../../components/Navbar";

const AboutAuthor = () => {
  return (
    <div style={{display: "flex"}}>
      <Navbar />
      <div className="about-author">
        <h1>About The Author</h1>
        <p>
          This app was developed by someone, a self-taught web developer, and
          technical writer.
        </p>
      </div>
    </div>
  );
};

export default AboutAuthor;
