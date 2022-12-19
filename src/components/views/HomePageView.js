

import { Link } from 'react-router-dom';
import styles from '../../mystyle.module.css';


const HomePageView = () => {
  return (
    <div>
      <h6 className={styles.title}>CUNY First</h6>
      <Link to={'/instructors'} >
        <button className={styles.button}>
        <span class="material-symbols-outlined" style={{verticalAlign: "bottom", paddingRight: "8px"}}> groups </span>
          All Instructors </button>
      </Link>
      
      <Link to={'/courses'} >
        <button className={styles.button}>
          <span class="material-symbols-outlined" style={{verticalAlign: "bottom", paddingRight: "8px"}}> library_books </span>
          All Courses </button>
      </Link>
      
    </div>
  );    
}




export default HomePageView;
