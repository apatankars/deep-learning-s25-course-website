// components/CourseDescription.tsx
import React from "react";
import styles from "./CourseDescription.module.css";
import { FaMapMarkerAlt, FaCalendarAlt, FaUser } from "react-icons/fa";
import { SiCanvas, SiGooglescholar } from "react-icons/si";
import { RiQuestionLine } from "react-icons/ri";
import Stars from "./Stars";
import RecentItems from "./RecentItems";

const CourseDescription = () => {
  return (
    <section id="course-description" className={styles.container}>
      {/* <Stars /> */}
      <div className={styles.content}>
        <div className={styles.topContent}>
          <div className={styles.textContent}>
            <h2 className={styles.heading}>Course Description</h2>
            <p className={styles.paragraph}>
              Welcome to Deep Learning! Over the past few years, Deep Learning
              has become a popular area, with deep neural network methods
              obtaining state-of-the-art results on applications in computer
              vision (Self-Driving Cars), natural language processing (Google
              Translate), and reinforcement learning (AlphaGo). These
              technologies are having transformative effects on our society,
              including some undesirable ones (e.g. deep fakes).
            </p>
            <p className={styles.paragraph}>
              This course is there to give students a practical understanding of
              how Deep Learning works, how to implement neural networks, and how
              to apply them ethically. We introduce students to the core
              concepts of deep neural networks and survey the techniques used to
              model complex processes within the contexts of computer vision and
              natural language processing.
            </p>
            <p className={styles.paragraph}>
              Throughout the course, we emphasize and require students to think
              critically about potential ethical pitfalls that can result from
              mis-application of these powerful models. The course is taught
              using the Tensorflow deep learning framework.
            </p>
          </div>

          <div className={styles.quickInfo}>
            <div className={styles.info}>
              <div className={styles.infoItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <div>
                  <h3>Location</h3>
                  <p>Room 101, Engineering Building</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FaCalendarAlt className={styles.icon} />
                <div>
                  <h3>Schedule</h3>
                  <p>Tuesdays and Thursdays, 10:00 AM - 11:30 AM</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <FaUser className={styles.icon} />
                <div>
                  <h3>Instructor</h3>
                  <p>Dr. Jane Smith</p>
                </div>
              </div>
            </div>

            <div className={styles.links}>
              <a
                href="https://edstem.org/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <RiQuestionLine className={styles.linkIcon} />
                Edstem
              </a>
              <a
                href="https://www.gradescope.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <SiGooglescholar className={styles.linkIcon} />
                Gradescope
              </a>
              <a
                href="https://canvas.instructure.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.link}
              >
                <SiCanvas className={styles.linkIcon} />
                Canvas
              </a>
            </div>
          </div>
        </div>
        <RecentItems />
      </div>
    </section>
  );
};

export default CourseDescription;
