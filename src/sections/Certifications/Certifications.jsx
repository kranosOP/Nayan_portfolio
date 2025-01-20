import React from 'react';
import { useTheme } from '../../common/ThemeContext'; // Assuming you have a ThemeContext
import styles from './Certifications.module.css';

function Certifications() {
  const { theme } = useTheme();

  const bulletColor = theme === 'light' ? '#2ecc71' : '#f39c12'; // Green for light, golden for dark

  const achievements = [
    {
      name: 'KVPY Test 2021',
      description: 'Achieved a top 1% rank with All India Rank 4797 among 50,000 candidates.',
    },
    {
      name: 'Quiz Manthan',
      description: 'Secured 2nd rank among 700 participants, organized by IIT BHU.',
    },
    {
      name: 'Clash of Codes Hackathon',
      description: 'Finalist among 800 participants, organized by IIT Madras.',
    },
    {
      name: 'Brain Battle Season 2',
      description: 'Secured 11th rank in the coding round among 600 teams by Coding Junction.',
    },
    {
      name: 'Coding Platforms',
      description: 'Proficient in algorithms and programming with 500+ problems solved on Leetcode and Codeforces.',
    },
  ];

  return (
    <section id="certifications" className={styles.container}>
      <h2 className={styles.title}>Achievements</h2>
      <ul className={styles.list}>
        {achievements.map((achievement, index) => (
          <li key={index} className={styles.item}>
            <span
              className={styles.bullet}
              style={{ color: bulletColor }} // Dynamically apply bullet color
            >
              &#8226;
            </span>
            <div>
              <h3 className={styles.certName}>{achievement.name}</h3>
              <p className={styles.details}>{achievement.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Certifications;

