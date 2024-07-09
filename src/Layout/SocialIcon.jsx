import Search from "../assets/Search Icon.png";
import Behance from "../assets/behance.png";
import Facebook from "../assets/facebook.png";
import Pinterest from "../assets/pinterest.png";
import Twitter from "../assets/twitter.png";
import Youtube from "../assets/youtube.png";


const SocialIcon = () => {
  return (
    <div className="flex">
        <div className="social-icons flex justify-between text-center gap-5 border-x border-gray-300 px-1">
            <img className="max-h-10 max-w-8" src={Facebook} alt="Facebook" />
            <img className="max-h-10 max-w-8" src={Twitter} alt="Twitter" />
            <img className="max-h-10 max-w-8" src={Youtube} alt="Youtube" />
            <img className="max-h-10 max-w-8" src={Pinterest} alt="Pinterest" />
            <img className="max-h-10 max-w-8" src={Behance} alt="Behance" />
        </div>
        <div className="search-icons flex justify-between text-center px-3">
            <img className="max-h-10 max-w-8" src={Search} alt="Search" />
        </div>
    </div>
  )
}

export default SocialIcon
