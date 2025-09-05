import React from "react";
import styles from "./header.module.css";
import logo from "../../assets/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  return (
    <div className={styles.header_outer_container}>
      <div className={styles.header_container}>
        <div className={styles.header_left}>
          <ul>
            <li>
              <img src={logo} alt="Netflix Logo" width="100" />
            </li>
          </ul>
        </div>
        <div className={styles.header_center}>
          <ul>
            <li>Home</li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My List</li>
            <li>Browse By Language</li>
          </ul>
        </div>
        <div className={styles.header_right}>
          <ul>
            <div>
              <li>
                <SearchIcon />
              </li>
              <li>
                <NotificationsNoneIcon />
              </li>
              <li>
                <AccountBoxIcon />
              </li>
            </div>
            <li className={styles.menu_icon}>
              <MenuIcon className={styles.menu_icon} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
