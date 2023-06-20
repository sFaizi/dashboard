import classes from './Header.module.css';
import HeaderMenu from './HeaderMenu';
import { useDispatch, useSelector } from 'react-redux';
import { dataActions } from '../../store/data-redux';

const Header = () => {
  const dispatch = useDispatch();
  const isMenuVisible = useSelector((state) => state.data.menuVisibility);
  const showMenuHandler = () => {
    dispatch(dataActions.headerMenuVisibility(true));
  };

  return (
    <div className={classes.header}>
      <button>
        <span class="material-symbols-outlined">shopping_cart</span>
      </button>
      <div className={classes.displayPic} onMouseEnter={showMenuHandler}>
        A
      </div>
      {isMenuVisible && <HeaderMenu />}
    </div>
  );
};

export default Header;
