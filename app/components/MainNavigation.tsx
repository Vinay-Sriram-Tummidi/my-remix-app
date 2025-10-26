import { NavLink } from "@remix-run/react";

export default function MainNavigation({ notes }) {
  //Iterates from 0 and sum as accumulates it iterates every thing in the array
  const total = notes.reduce((sum, count) => sum + Number(count.content), 0);
  return (
    <div className="bg-[#4B5945] p-4">
      <div className="flex items-center gap-4">
        <NavLink to="/" className="text-sm text-white">
          {" "}
          Home
        </NavLink>
        <NavLink to="/notes" className="text-sm text-white">
          Expenses
        </NavLink>
        <h2 className="text-xl text-white ml-auto">₹{total}</h2>
      </div>
    </div>
  );
}
