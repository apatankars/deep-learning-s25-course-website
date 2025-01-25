// components/Assignments.tsx
import React from "react";
import styles from "./Assignments.module.css";
import { assignments } from "../data/assignmentData";
import { FaRocket, FaRegMoon, FaStar } from "react-icons/fa";

const Assignments = () => {
  return (
    <section id="assignments" className={styles.container}>
      <div className={styles.meteor}></div>
      <div className={styles.meteor2}></div>
      <h2 className={styles.heading}>
        <FaStar className={styles.headerStar} />
        Assignments
        <FaStar className={styles.headerStar} />
      </h2>
      <div className={styles.assignmentList}>
        {assignments.map((assignment) => (
          <div key={assignment.id} className={styles.assignmentItem}>
            <div className={styles.glowOrb}></div>
            <div className={styles.assignmentInfo}>
              <h3 className={styles.assignmentTitle}>
                <span className={styles.titleText}>{assignment.name}</span>
              </h3>
              <div className={styles.assignmentDates}>
                <span className={styles.assignmentDate}>
                  <span className={styles.dateLabel}>In Date:</span>
                  {assignment.inDate}
                </span>
                <span className={styles.assignmentDate}>
                  <span className={styles.dateLabel}>Out Date:</span>
                  {assignment.outDate}
                </span>
              </div>
              <div className={styles.assignmentParts}>
                {assignment.conceptual && (
                  <a
                    href={assignment.conceptual.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkButton} ${styles.conceptualButton}`}
                  >
                    <FaRegMoon className={styles.linkIcon} />
                    {assignment.conceptual.title}
                  </a>
                )}
                {assignment.programming && (
                  <a
                    href={assignment.programming.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.linkButton} ${styles.programmingButton}`}
                  >
                    <FaRocket className={styles.linkIcon} />
                    {assignment.programming.title}
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Assignments;
