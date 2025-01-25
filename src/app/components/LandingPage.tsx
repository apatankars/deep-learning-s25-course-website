"use client";

import React, { useRef } from "react";
import styles from "./LandingPage.module.css";
import Stars from "./Stars";
import TypewriterText from "./TypewriterText";

const LandingPage = () => {
  const spaceshipRef = useRef<HTMLButtonElement>(null);

  const handleButtonClick = () => {
    if (spaceshipRef.current) {
      spaceshipRef.current.classList.add(styles.takeoff);

      const nextSection = document.getElementById("course-description");
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
      }

      spaceshipRef.current.addEventListener(
        "animationend",
        () => {
          if (spaceshipRef.current) {
            spaceshipRef.current.classList.remove(styles.takeoff);
          }
        },
        { once: true }
      );
    }
  };

  return (
    <div className={styles.container}>
      {/* The star background */}
      {/* <Stars /> */}

      {/* Content on top of the star background */}
      <TypewriterText
        text=" Welcome to Deep Learning"
        speed={150}
        className={styles.title}
      />
      <TypewriterText
        text=" CSCI1470 - Spring 2025"
        speed={150}
        className={styles.subTitle}
      />

      <button
        ref={spaceshipRef}
        className={styles.spaceshipButton}
        onClick={handleButtonClick}
        aria-label="Scroll to next section"
      >
        <span className={styles.spaceshipIcon}>🚀</span>
      </button>
    </div>
  );
};

export default LandingPage;
