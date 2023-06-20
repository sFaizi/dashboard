import { useSelector, useDispatch } from 'react-redux';
import classes from './SidebarLabels.module.css';
import { dataActions } from '../../store/data-redux';

const SidebarLabels = () => {
  const dispatch = useDispatch();
  const sidebarExpand = useSelector((state) => state.data.sidebarExpansion);
  const toggleSidebar = () => {
    dispatch(dataActions.slider());
  };
  return (
    <div
      className={`${classes.sidebarLabels} ${
        sidebarExpand === false ? classes.sidebarTransform : ''
      }`}
    >
      <img src="/logo-w.png" alt="logo"></img>
      <button
        onClick={toggleSidebar}
        className={
          sidebarExpand !== true
            ? classes.sidebarBtnclose
            : classes.sidebarBtnSlide
        }
      ></button>
      <ul className={classes.sidebarLabelsList}>
        <li>
          <span className="material-symbols-outlined">home</span>Dashboard
        </li>
        <li>
          <span className="material-symbols-outlined">your_trips</span>Prime
          Packs
        </li>
        <li>
          <span className="material-symbols-outlined">videocam</span>Courses
        </li>
        <li>
          <span className="material-symbols-outlined">picture_as_pdf</span>
          eBooks
        </li>
        <li>
          <span className="material-symbols-outlined">card_membership</span>
          Annual Membership
        </li>
        <li>
          <span className="material-symbols-outlined">bookmarks</span>
          Bookmarks
        </li>
        <li>
          <span className="material-symbols-outlined">description</span>Notes
        </li>
        <li>
          <span className="material-symbols-outlined">help_center</span>
          Questions
        </li>
        <li>
          <span className="material-symbols-outlined">work_history</span>
          Purchase History
        </li>
        <li>
          <span className="material-symbols-outlined">report</span>Report An
          Issue
        </li>
      </ul>
    </div>
  );
};

export default SidebarLabels;
