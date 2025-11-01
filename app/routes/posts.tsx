import { Outlet } from "@remix-run/react";
import React from "react";

const Posts = () => {
  return (
    <div>
      <h1>Shared Layout</h1>
      <Outlet />
    </div>
  );
};

export default Posts;
