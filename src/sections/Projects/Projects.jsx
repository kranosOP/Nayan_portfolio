import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="https://img.freepik.com/free-vector/flat-design-woman-running-fitness-trackers_23-2148508678.jpg?t=st=1737314061~exp=1737317661~hmac=0b3af959dcab3861afe82dd36392a3e6cebd66a66e9baacf246c1039d7e5dd2b&w=1060"
          link="https://health-tracker-ecru.vercel.app/"
          h3="HealthSync Application"
          //p="A Health Tracker application using React to log daily health metrics featuring real-time updates"
        />
        <ProjectCard
          src="https://img.freepik.com/free-vector/indian-rupee-money-bag_23-2148008728.jpg?t=st=1737313942~exp=1737317542~hmac=51d660edfc28ff1682acd7d48668e29498909083fe6e65072d2806f06b0610f5&w=1060"
          link="https://expense-tracker-ymxh.vercel.app/"
          h3="BudgetBuddy Application"
         // p="An Expense Tracker application using React, with functionalities to add, edit, and delete expenses"
          
         
        />
      </div>
    </section>
  );
}

export default Projects;
