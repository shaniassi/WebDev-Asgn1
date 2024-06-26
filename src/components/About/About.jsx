import React from "react";
import Banner3 from "../../assets/Banner3.png";

const About = () => {
  return (
    <div className="bg-customBackground min-h-screen">
      <div className="absolute w-full h-[480px] top-[1830px] bg-white opacity-50"></div>
      <div className="relative z-10 w-[513px] h-[473px] left-[95px] top-[255px]">
        <img src={Banner3} alt="Banner3" className="relative z-10" />
      </div>
      <div
        className="absolute w-229 h-31 left-[680px] top-[1900px] leading-65 text-brown"
        style={{ fontFamily: "Inika" }}
      >
        <h1 className="font-bold text-4xl mb-4">About Us</h1>
        <p className="leading-[28px] text-[20px] mt-6 mr-40">
          At SereneBooks, we believe in the transformative power of literature
          to bring peace and serenity into our lives. Our mission is to curate a
          diverse collection of books that inspire mindfulness, relaxation, and
          personal growth. Whether you're seeking a moment of calm in a busy
          world or a journey of self-discovery, SereneBooks is here to guide you
          through the pages of tranquility.
        </p>
      </div>
      <div className="absolute w-[200px] h-[45px] left-[680px] top-[2160px] bg-red rounded-[20px]">
        <div
          className="absolute w-[160px] h-[31px] left-[45px] top-[3px] font-bold text-[23px] leading-[39px] text-white hover:underline"
          style={{ fontFamily: "Inika" }}
        >
          Read More
        </div>
      </div>
    </div>
  );
};

export default About;
