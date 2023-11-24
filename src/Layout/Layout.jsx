import React from "react";
import LayoutHeader from "./LayoutHeader";
import { Outlet } from "react-router-dom";
import LayoutFooter from "./LayoutFooter";

export default function Layout() {
  return (
    <div>
      <LayoutHeader />
      <div>
        <Outlet />
      </div>
      <LayoutFooter />
    </div>
  );
}
