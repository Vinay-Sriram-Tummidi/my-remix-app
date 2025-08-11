import { Form, Link } from "@remix-run/react";
import writing2 from "../assets/writing2.png"



export default function Index()
{
  return (
  <div className="flex items-center pt-[40px] flex-col gap-4">
   <h1 className="text-4xl
">A Better Way for Storing Notes</h1>
   <h3 className="text-2xl">Try Out the Beta !</h3>
   <div>
  <Link className="bg-[#4B5945] text-white p-2 rounded-lg" to={"/notes"}  >Try Notes</Link>
   </div>
   <img src={writing2} className="w-full h-auto"></img>
   </div>
  )
}