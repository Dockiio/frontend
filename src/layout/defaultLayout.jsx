import React, { useState, useEffect } from "react";
import { MidEllipse } from "../assets/index";

export default function DefaultLayout({children}) {
  const [backgroundImage, setBackgroundImage] = useState("https://res.cloudinary.com/phantom1245/image/upload/v1679974352/dockii/generalImg_mfdjrd.png");
  const mobileBackgroundImage = "https://res.cloudinary.com/phantom1245/image/upload/v1679974351/dockii/preloaderImg_kzauqj.png";

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setBackgroundImage(mobileBackgroundImage);
      } else {
        setBackgroundImage("https://res.cloudinary.com/phantom1245/image/upload/v1679974352/dockii/generalImg_mfdjrd.png");
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [mobileBackgroundImage]);
  return (
    <div className="flex flex-col w-full object-cover px-8 md:px-20  h-max py-4 md:py-6 bg-center bg-cover bg-no-repeat" style={{ 
      backgroundImage: `url(${backgroundImage})`
    }}>

      {/* decoration */}
      <div className="fixed top-2 left-0 w-full pt-6 hidden md:flex justify-center items-center">
        <img src={MidEllipse} alt="" className="w-[40%]"/>
      </div>
      {children}
   
    </div>
  );
}
