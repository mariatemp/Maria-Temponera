import { useTheme } from '../common/ThemeContext';
import PropTypes from 'prop-types';
import './Navigation.css';

function Navigation({ activeSection, setActiveSection }) {
  const { theme } = useTheme();

  return (
    <nav className={`navigation ${theme}`}>
      <ul>
      <li 
          className={activeSection === 'home' ? 'active' : ''} 
          onClick={() => setActiveSection('home')}
        >
          Home
        </li>
        <li className={activeSection === 'projects' ? 'active' : ''} onClick={() => setActiveSection('projects')}>Projects</li>
        <li className={activeSection === 'skills' ? 'active' : ''} onClick={() => setActiveSection('skills')}>Skills</li>
        <li className={activeSection === 'contact' ? 'active' : ''} onClick={() => setActiveSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired 
};

export default Navigation;
