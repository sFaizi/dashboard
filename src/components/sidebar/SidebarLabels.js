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
        <li className={classes.sidebarLabelsList_li}>
          <span className="material-symbols-outlined">home</span>Dashboard
        </li>
        <li className={classes.sidebarLabelsList_li}>
          <span className="material-symbols-outlined">your_trips</span>Prime
          Packs
        </li>
        <li className={classes.sidebarLabelsList_li}>
          <span className="material-symbols-outlined">videocam</span>Courses
        </li>
        <li className={classes.sidebarLabelsList_li}>
          <span className="material-symbols-outlined">picture_as_pdf</span>
          eBooks
        </li>
        <li className={classes.sidebarLabelsList_li}>
          <span className="material-symbols-outlined">card_membership</span>
          Annual Membership
        </li>
        <li className={classes.sidebarLabelsList_li}>
          <span className="material-symbols-outlined">bookmarks</span>
          Bookmarks
        </li>
        <li className={classes.sidebarLabelsList_li}>
          <span className="material-symbols-outlined">description</span>Notes
        </li>
        <li className={classes.sidebarLabelsList_li}>
          <span className="material-symbols-outlined">help_center</span>
          Questions
        </li>
        <li className={classes.sidebarLabelsList_li}>
          <span className="material-symbols-outlined">work_history</span>
          Purchase History
        </li>
        <li className={classes.sidebarLabelsList_li}>
          <span className="material-symbols-outlined">report</span>Report An
          Issue
        </li>
      </ul>
    </div>
  );
};

export default SidebarLabels;
