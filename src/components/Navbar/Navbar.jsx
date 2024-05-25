import { Link } from "react-router-dom";
import logo from "../../assets/images/Navbar/conquest-logo.png";

import * as styles from "./navbar.module.scss";

export default function Navbar() {
  return (
    <>
      <nav className={styles.navbar}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
      <img src={logo} />
    </>
  );
}
