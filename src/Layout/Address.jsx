import SocialIcon from "./SocialIcon";

export default function Address() {
    return (
      <div>
          <h4 className="text-black text-2xl text-bold pb-1 mb-5 uppercase">Contact info</h4>
          <ul className="gap-8 items-center text-black font-bold font-mono text-base capitalize">
              <li className="flex gap-2 mb-3">Email : <span className="font-normal">fahadahmed2024@gamil.com</span></li>
              <li className="flex gap-2 mb-3">Phone : <span className="font-normal">01300000022</span></li>
              <li className="flex gap-2 mb-3">Location: <span className="font-normal">Khadim para roud No-03 shah paran sylhet, Bangladesh</span></li>
          </ul>
          <SocialIcon/>
      </div>
    )
  }