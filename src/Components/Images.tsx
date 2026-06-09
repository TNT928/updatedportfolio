import React, { useEffect, useState } from "react";
import styles from "./Images.module.css";

const Images = () => {
  const images = [
    "/Images/Photography/IMG_0734.JPG",
    "/Images/Photography/IMG_0764.JPG",
    "/Images/Photography/IMG_0818.JPG",
    "/Images/Photography/IMG_0830.JPG",
    "/Images/Photography/IMG_0834.png",
    "/Images/Photography/IMG_0840.JPG",
    "/Images/Photography/IMG_0865.JPG",
    "/Images/Photography/IMG_0869.JPG",
    "/Images/Photography/IMG_0895.JPG",
    "/Images/Photography/IMG_0900.JPG",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.frame}>
        <img
          src={images[index]}
          alt={`slide-${index}`}
          className={styles.image}
        />
      </div>
    </div>
  );
};

export default Images;