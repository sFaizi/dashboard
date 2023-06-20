import classes from './HeaderMenu.module.css';

const HeaderMenu = () => {
  return (
    <div className={classes.headerMenu}>
      <div className={classes.headerMenuBrief}>
        <div className={classes.headerMenuDP}>A</div>
        <p>Student Name</p>
        <h5>Designation</h5>
      </div>
      <ul className={classes.headerMenuList}>
        <li>
          <span class="material-symbols-outlined">dashboard</span>Student
          Dashboard
        </li>
        <li>
          <span class="material-symbols-outlined">record_voice_over</span>Become
          a instructor
        </li>
        <li>
          <span class="material-symbols-outlined">favorite</span>Wishlist
        </li>
        <li>
          <span class="material-symbols-outlined">edit</span>Edit profile
        </li>
        <li>
          <span class="material-symbols-outlined">work_history</span>Purchase
          history
        </li>
        <li>
          <span class="material-symbols-outlined">logout</span>Sign out
        </li>
      </ul>
    </div>
  );
};

export default HeaderMenu;
