// src/app/components/NavBar.tsx

"use client";

import React, { useEffect, useState } from "react";
import styles from "./NavBar.module.css";
import {
  FaHome,
  FaBook,
  FaVideo,
  FaTasks,
  FaCalendarAlt,
  FaFolderOpen,
  FaUsers,
  FaRocket,
} from "react-icons/fa";

const NavBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger the fade-in effect after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to ensure the animation starts after initial render

    return () => clearTimeout(timer);
  }, []);

  return (
    <nav
      className={`${styles.navbar} ${
        isVisible ? styles.fadeIn : styles.hidden
      }`}
    >
      <div className={styles.logo}>
        {/* Replace with your logo image if available */}
        <FaRocket className={styles.logoIcon} />
        <h1>Deep Learning</h1>
      </div>
      <ul className={styles.navLinks}>
        <li>
          <a href="#landing-page">
            <FaHome className={styles.icon} /> Home
          </a>
        </li>
        <li>
          <a href="#course-description">
            <FaBook className={styles.icon} /> Course
          </a>
        </li>
        <li>
          <a href="#lectures">
            <FaVideo className={styles.icon} /> Lectures
          </a>
        </li>
        <li>
          <a href="#assignments">
            <FaTasks className={styles.icon} /> Assignments
          </a>
        </li>
        <li>
          <a href="#calendar">
            <FaCalendarAlt className={styles.icon} /> Calendar
          </a>
        </li>
        <li>
          <a href="#resources">
            <FaFolderOpen className={styles.icon} /> Resources
          </a>
        </li>
        <li>
          <a href="#staff">
            <FaUsers className={styles.icon} /> Staff
          </a>
        </li>
      </ul>
      {/* Optional: Add decorative stars or cosmic elements */}
    </nav>
  );
};

export default NavBar;
