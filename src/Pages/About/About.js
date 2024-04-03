import Banner from "../../components/Banner/Banner";
import Footer from "../../components/Footer/Footer";
import Intro from "../../components/Intro/Intro";
import NavBar from "../../components/NavBar/NavBar";
import { AboutDiv } from "./About-style";

function About() {
  return (
    <>
      <NavBar />
      <Intro />
      <AboutDiv>

      <div>
          <h2>About our shop</h2>
          <p>That's a lovely and elegant name for a furniture shop! "Velvet Vista" suggests a combination of comfort (with "velvet") and a scenic view or perspective (with "vista"). It creates an image of a place where customers can find luxurious and comfortable furniture while enjoying a beautiful and stylish setting.

If you're looking for additional suggestions or ideas related to your furniture shop named "Velvet Vista," feel free to let me know specific aspects you'd like to focus on (e.g., branding, marketing, product selection), and I can provide more tailored advice. Good luck with your furniture shop venture!
</p>
      </div>
      </AboutDiv>
      <Banner />
      <Footer />
    </>
  );
}

export default About;
