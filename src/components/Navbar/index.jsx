/*Routing */
import { Link } from "react-router-dom";

/*Hooks */
import { useState } from "react";

/*Icon, Styling*/
import styles from "./style.module.css";
import * as FaIcons from "react-icons/fa";
import * as MdIcons from "react-icons/md";

const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const [dropdown, setDropdown] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  const showDropdown = () => setDropdown(!dropdown);

  return (
    <div className={styles.navbar}>
      <Link to="#" className={styles.menubar}>
        <FaIcons.FaBars onClick={showSidebar} className={styles.bar} />
      </Link>
      <nav className={sidebar ? styles.nav_menu_active : styles.nav_menu}>
        <ul>
          <li>
            <Link to="/" classname={styles.link}>
              Home
            </Link>
          </li>
          <div className={styles.dropdown}>
            <li>
              <Link to="/" className={styles.menubar} onClick={showDropdown}>
                About
                <MdIcons.MdArrowDropDownCircle />
              </Link>
            </li>
            <div className={dropdown ? styles.dropdown_container_active : styles.dropdown_container}>
              <li>
                <Link to="/about/aboutApp" classname={styles.link} >
                  About App
                </Link>
              </li>
              <li>
                <Link to="/about/aboutAuthor" classname={styles.link}>
                  About Author
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
