import Address from "./Address";

export default function Footer() {
  return (
    <footer className="py-16 px-10	bg-white border-t	border-[#888888]">
    <div className="flex justify-between grid-cols-3 mb-8">
      <div className="w-1/3 border-r-2">
         <h2 className="uppercase font-mono text-black font-bold text-5xl">RUNO</h2>
         <p className="font-mono text-base text-black mt-6">I am very sociable and curious. I love discussing ideas and events. Knowing I could share these interests with my Cambly tutors, I dont remember ever missing a single booked lesson.</p>
      </div>

      <div className="w-3/12 border-r-2">
        <h4 className="text-black text-2xl text-bold pb-1 mb-5 uppercase">Pages</h4>
        <ul className="items-center text-black font-bold font-mono text-base capitalize">
          <li className="mb-3 hover:text-[#f68f3d]" >Home</li>
          <li className="mb-3 hover:text-[#f68f3d]" >About</li>
          <li className="mb-3 hover:text-[#f68f3d]" >Profile</li>
          <li className="mb-3 hover:text-[#f68f3d]" >Location</li>
          <li className="mb-3 hover:text-[#f68f3d]" >Contact US</li>
        </ul>
      </div>

      <div className="w-1/3">
        <Address/>
      </div>

    </div>
    <div className="border-t	border-[#888888] pt-5 text-center">
      <p className="text-[#888888] font-mono font-normal text-base">Copyrighy@2024</p>
    </div>
    </footer>
  )
}