import { Divider } from '@chakra-ui/react';
import PopularTopic from "../Components/PopularTopics";
import BenarImage from "../assets/Benar.png";

const Home = () => {
    return (
      <>
      <section style={{ backgroundImage: "url(" + BenarImage + ")" }}
      className="herro-section w-full h-screen bg-no-repeat bg-cover bg-center align-middle self-center pt-[150px] grow flex flex-col justify-center pl-7 pb-[100px]">
        <div className="container w-[42%] gap-5">
         <p className="text-base uppercase font-normal text-white self-start px-2 py-1 bg-white/[.24] rounded w-[23%]">ADVENTURE</p>
         <h2 className="text-white font-bold text-4xl mt-5 mb-5 leading-[46px]">Richird Norton photorealistic rendering as real photos</h2>
         <div className='flex justify-between'>
          <p className='text-white'>08.08.2021</p>
          <Divider orientation="horizontal" borderColor="white" borderWidth="medium" width="30px" alignSelf="center" />
          <p className='text-white'>Progressively incentivize cooperative systems through technically sound functionalities. The credibly productivate seamless data.</p>
         </div>
        </div>
      </section>

      <PopularTopic/>
      </>
    );
  }
  
  export default Home;
  