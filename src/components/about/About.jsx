import React from "react";
import Back from "../common/Back";
import Heading from "../common/Heading";
import img from "../images/about.jpg";
import "./about.css";

const About = () => {
  return (
    <>
      <section className="about">
        <Back name="About Us" title="About Us - Who We Are?" cover={img} />
        <div className="container flex mtop">
          <div className="left row">
            <Heading
              title="Discover Our Literary Journey"
              subtitle="Unleashing the Power of Words to Inspire, Entertain, and Illuminate"
            />

            <p>
              Welcome to our book review website, where passion for literature
              meets insightful analysis, we are dedicated to unraveling the
              magic woven within the pages of books, fostering a community of
              avid readers, and celebrating the profound impact of storytelling.
            </p>
            <p>
              Join us on this literary odyssey as we embark on a captivating
              adventure, uncovering the beauty, complexity, and sheer brilliance
              that lies within the pages of every book. Together, let us
              celebrate the written word and embrace the transformative power of
              reading.
            </p>
            <button className="btn2">More About Us</button>
          </div>
          <div className="right row">
            <img src="./immio.jpg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
