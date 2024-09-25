import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
    <h1 className='sectionTitle'>Projects</h1>
    <div className={styles.projectsContainer}>
      <ProjectCard src={viberr} link={'https://github.com/mariatemp/TODO'} h3='ToDo List' p='Task Management App'/>
      <ProjectCard src={freshBurger} link={'https://github.com/mariatemp/pokedex'} h3='Pokedex' p='Pokémon Database App'/>
      <ProjectCard src={hipsster} link={'https://github.com/mariatemp/hotel-booking-app-frontend'} h3='Hotel-Booking(Fond-end)' p='Hotel Reservation Interface'/>
      <ProjectCard src={fitLift} link={'https://github.com/mariatemp/HotelBookingApp-Backend'} h3='Hotel-Booking(Back-end)' p='Hotel Booking System'/>
    </div>
  </section>
  );
}

export default Projects