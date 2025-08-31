import { NavLink } from "@remix-run/react";


export default function()
{
    return (
        <div className="flex items-center gap-4 justify-center bg-[#4B5945] p-4">
<NavLink to="/" className="text-sm text-white"> Home</NavLink>
<NavLink to="/notes" className="text-sm text-white"> My Notes</NavLink>
<NavLink to="/notes" className="text-sm text-white"> Login</NavLink>
        </div>

    );
}
