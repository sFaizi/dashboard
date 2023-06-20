import classes from './Dashboard.module.css';
import { dataActions } from '../../store/data-redux';
import { useDispatch } from 'react-redux';

const Dashboard = () => {
  const dispatch = useDispatch();
  const headMenuCloser = () => {
    dispatch(dataActions.headerMenuVisibility(false));
    dispatch(dataActions.slider(false));
  };
  return (
    <div className={classes.dashboard} onMouseOver={headMenuCloser}>
      <div className={classes.studentBoard}>
        <span class="material-symbols-outlined">person</span>
        <p>Student's Dashboard</p>
        <div className={classes.studentBoardGal}>
          <div
            className={`${classes.studentBoardGalBox} ${classes.primeBooks}`}
          >
            <span className="material-symbols-outlined">your_trips</span>
            <h2>0</h2>
            <p>Total Prime Books</p>
          </div>
          <div className={`${classes.studentBoardGalBox} ${classes.courses}`}>
            <span className="material-symbols-outlined">videocam</span>
            <h2>0</h2>
            <p>Total Courses</p>
          </div>
          <div className={`${classes.studentBoardGalBox} ${classes.eBooks}`}>
            <span class="material-symbols-outlined">menu_book</span>
            <h2>0</h2>
            <p>Total eBooks</p>
          </div>
        </div>
      </div>
      <div className={classes.purchased}>
        <span class="material-symbols-outlined">shopping_bag</span>
        <p>Purchased courses</p>
        <div className={classes.purchaseSection}>
          <div className={classes.purchasedCourses}>
            <span className="material-symbols-outlined">videocam</span>
            <h2>0</h2>
            <p>Courses available</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
