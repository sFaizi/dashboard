import classes from './Sidebar.module.css';
import SidebarLabels from './SidebarLabels';
import { useSelector, useDispatch } from 'react-redux';
import { dataActions } from '../../store/data-redux';

const Sidebar = () => {
  const dispatch = useDispatch();
  const slideExpand = useSelector((state) => state.data.sidebarExpansion);
  const hoverHandle = () => {
    dispatch(dataActions.slider(true));
  };

  return (
    <>
      <div
        className={`${classes.sidebar} ${
          slideExpand === true ? classes.disapear : ''
        }`}
        onMouseOver={hoverHandle}
      >
        <ul>
          <li className={classes.sidebarList}>
            <span className="material-symbols-outlined">home</span>
          </li>
          <li className={classes.sidebarList}>
            <span className="material-symbols-outlined">your_trips</span>
          </li>
          <li className={classes.sidebarList}>
            <span className="material-symbols-outlined">videocam</span>
          </li>
          <li className={classes.sidebarList}>
            <span className="material-symbols-outlined">picture_as_pdf</span>
          </li>
          <li className={classes.sidebarList}>
            <span className="material-symbols-outlined">card_membership</span>
          </li>
          <li className={classes.sidebarList}>
            <span className="material-symbols-outlined">bookmarks</span>
          </li>
          <li className={classes.sidebarList}>
            <span className="material-symbols-outlined">description</span>
          </li>
          <li className={classes.sidebarList}>
            <span className="material-symbols-outlined">help_center</span>
          </li>
          <li className={classes.sidebarList}>
            <span className="material-symbols-outlined">work_history</span>
          </li>
          <li className={classes.sidebarList}>
            <span className="material-symbols-outlined">report</span>
          </li>
        </ul>
      </div>
      <SidebarLabels />
    </>
  );
};

export default Sidebar;
