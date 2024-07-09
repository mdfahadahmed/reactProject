import Menu from "../Layout/Menu";
import SocialIcon from "./SocialIcon";

export default function Header() {
  return (
    <header className="flex justify-between align-middle px-10 items-center	grid-cols-3	bg-black/[.24] border-gray-500 py-5 absolute w-full ">
      <div className="logos">
         <h2 className="uppercase font-mono text-white font-bold text-5xl">RUNO</h2>
      </div>
      <div className="flex align-middle">
      <div className="menus">
        <Menu/>
      </div>
      <div className="social-icons">
        <SocialIcon/>
      </div>
      </div>
    </header>
  )
}