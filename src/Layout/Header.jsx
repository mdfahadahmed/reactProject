import Logos from "../assets/Runo-logos.png";
import Menu from "../Layout/Menu";

export default function Header() {
  return (
    <div className="flex justify-between px-10 items-center	grid-cols-3	bg-white border-b-2 border-gray-500	">
      <div >
         <img className="w-60 h-auto" src={Logos} alt="Logo" />
      </div>
      <div>
        <Menu/>
      </div>
      <div>
        <a className="py-4 px-5 rounded bg-red-400 text-white" href="">Click Now</a>
      </div>
    </div>
  )
}