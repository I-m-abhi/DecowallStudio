import PageTitle from "../components/PageTitle";
import About from "../sections/About";
import Vision from "../sections/Vision";
import about2 from "../assets/about-2.webp";
import Counter from "../sections/Counter";

const AboutUs = () => {
  return (
    <div className="about-page">
      <PageTitle pageTitle="About us" />
      <About
        h2={'"Layered in Style: Who We Are"'}
        p1={"At Decowall Studio, we believe walls are more than just boundaries—they’re canvases for creativity. Based in the heart of Delhi NCR and serving Noida and Greater Noida, we specialize in transforming ordinary spaces into extraordinary interiors with our curated collection of premium wallpapers."}
        p2={"With a passion for design and an eye for detail, Decowall Studio offers end-to-end wallpaper solutions—from consultation and selection to flawless installation. Our small but dedicated team ensures every project is handled with professionalism, creativity, and care."}
        imgPath={about2}
      />
      <Counter />
      <Vision />
    </div>
  )
};

export default AboutUs;