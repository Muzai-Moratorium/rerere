import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1>회원가입</h1>
      <Link to="/">홈으로 이동</Link>
      <main>
        <form className={Signup} action="">
          안녕
        </form>
      </main>
    </div>
  );
};

export default Signup;
