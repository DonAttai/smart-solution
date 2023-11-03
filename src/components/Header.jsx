import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="h-16 font-bold text-xl ">
      <div className="h-full w-full  text-slate-900 bg-blue-50 flex items-center justify-between px-10">
        <div>Smart Solution</div>
        <div className="space-x-3">
          <NavLink to="/">Home</NavLink>
          <NavLink to="about">About</NavLink>
          <NavLink to="services">Services</NavLink>
          <NavLink to="contact">Contact</NavLink>
        </div>
      </div>
    </header>
  );
};
