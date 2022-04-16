/*Routing */
import { Link } from "react-router-dom";

/*Hooks */
import { useState } from "react";

/*Icon, Styling*/
import styles from "./style.module.css";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';

const Navbar = () => {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return ( 
        <div className={styles.navbar} >
            <Link to="#" className={styles.menubar}>
                <FaIcons.FaBars onClick={showSidebar} className={styles.bar}/>
            </Link>
            <nav className={sidebar ? styles.nav_menu_active : styles.nav_menu}>
                <ul >
                    <li>
                        <Link to="#">
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    <li><Link to="/" classname={styles.link}>Home</Link></li>
                    <li><Link to="/aboutApp" classname={styles.link}>About</Link></li>
                </ul>  
            </nav>       
        </div>
     );
}
 
export default Navbar;