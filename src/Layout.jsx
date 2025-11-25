import React from "react";
import Header from "./pages/Header";
// Footer가 없다면 임시로 생성
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
}
