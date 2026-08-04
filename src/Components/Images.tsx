import React, { useEffect, useState } from "react";
import styles from "./Images.module.css";

const Images = () => {
  const images = [
    "/Images/Photography/web/cadillac1.jpg",
    "/Images/Photography/web/cadillac2.jpg",
    "/Images/Photography/web/IMG_0851.jpg",
    "/Images/Photography/web/IMG_0734.jpg",
    "/Images/Photography/web/IMG_0764.jpg",
    "/Images/Photography/web/IMG_0818.jpg",
    "/Images/Photography/web/IMG_0830.jpg",
    "/Images/Photography/web/IMG_0834.jpg",
    "/Images/Photography/web/IMG_0840.jpg",
    "/Images/Photography/web/IMG_0865.jpg",
    "/Images/Photography/web/IMG_0869.jpg",
    "/Images/Photography/web/IMG_0895.jpg",
    "/Images/Photography/web/IMG_0900.jpg",
  
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
          decoding="async"
          width="1600"
          height="1066"
        />
      </div>
    </div>
  );
};

export default Images;
