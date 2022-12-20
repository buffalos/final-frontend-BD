

import { Link } from 'react-router-dom';
import styles from '../../mystyle.module.css';


const HomePageView = () => {
  return (
    <div>
      <h1 className={styles.hometitle}>CUNY First</h1>
      <h2>Welcome!</h2>
      <br/>
      <h3>Choose a view:</h3>
      <Link to={'/instructors'} >
        <button className={styles.button}>
        <span class="material-symbols-outlined" style={{verticalAlign: "middle", paddingRight: "8px"}}> groups </span>
          All Instructors </button>
      </Link>

      <Link to={'/courses'} >
        <button className={styles.button} style={{marginLeft: "7px"}}>
          <span class="material-symbols-outlined" style={{verticalAlign: "middle", paddingRight: "8px"}}> library_books </span>
          All Courses </button>
      </Link>

    </div>
  );
}

export default HomePageView;
