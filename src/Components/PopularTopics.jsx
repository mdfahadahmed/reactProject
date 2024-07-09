import { useEffect, useState } from "react";
import Loading from "../Components/Loadding";
import PostData from "./PostData";

function PopularTopics() {
  const [PostItems, setPostItems] = useState(null);

  useEffect(() => {
    const Post = async () => {
      const response = await fetch("https://dummyjson.com/posts?limit=8");
      const data = await response.json();
      setPostItems(data);
      console.log(data)
    };
    Post();
  }, []);

  return (
    <section className='Populartopics py-32 px-16'>
      <div className="title">
        <h2 className='text-black font-bold text-4xl mt-5 mb-5 leading-[46px] font-mono'>Popular topics</h2>
      </div>
      
      <div className="root1 pt-10">
        <div className="justify-center items-center">

        {PostItems ? (
          <PostData PostItems={PostItems}/>
        ): (

          <Loading/>

        )}
        </div>
      </div>
    </section>
  );
}

export default PopularTopics;
