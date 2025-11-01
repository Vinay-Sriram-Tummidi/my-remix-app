import { Link } from "@remix-run/react";
import calender from "../assets/calender.svg";

export default function Index() {
  return (
    <div className="flex items-center pt-[40px] flex-col gap-4">
      <h1 className="text-4xl">Marraige Expenses Tracker</h1>
      <h3 className="text-2xl">Try Out the Beta !</h3>
      <div>
        <Link
          className="bg-[#4B5945] text-white p-2 text-sm rounded-lg"
          to={"/notes"}
        >
          Try Notes
        </Link>

        <Link
          className="bg-[#4B5945] text-white p-2 text-sm rounded-lg"
          to={"/posts"}
        >
          Read Budget Blogs
        </Link>
      </div>
      <div>
        <img src={calender} className="w-[400px] h-[400px]"></img>
      </div>
    </div>
  );
}
