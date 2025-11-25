import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div>
      <header>
        <h1>로그인</h1>
        <nav>
          <Link to="/">
            <i className="bx bx-bear"></i>
          </Link>
        </nav>
      </header>
    </div>
  );
}
