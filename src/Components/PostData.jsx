import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const PostData = ({ PostItems }) => {

  return (
    <div className=' flex flex-wrap justify-center gap-10'>
      {PostItems.posts.map((post, index) => (
        <div className="border flex flex-col rounded w-[20%] hover:bg-[#f5f5f5]" key={index}>
          <div className='image'>
            <img src={`https://picsum.photos/310/280?random=${Math.floor(Math.random()*16)}`} alt={post.title} className="rounded" />
          </div>
          <div className='roots px-3 py-3'>
          <div className="flex justify-between align-middle p-0">
            <h4 className='bg-black/[.14] py-1 px-2 rounded'>{post.tags[0]}</h4>
            <h4 className='id'>{post.id}</h4>
          </div>

          <div className='root gap-2'>
          <h4 className='title text-lg font-semibold mb-2 mt-2'>{post.title}</h4>
          <h4 className='discription text-sm text-[#030303] font-normal'>{post.body}</h4>
          </div>

          <div className="mt-6 mb-5 text-center justify-center" key={post.id}>
            <Link className="text-lg font-bold text-white uppercase py-3 px-7 bg-black hover:bg-[#f68f3d] rounded" to={`/Posts/${post.id}`}>View Post</Link>
          </div>
          </div>
        </div>
      ))}
    </div>
  );
};

PostData.propTypes = {
  PostItems: PropTypes.shape({
    posts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        category: PropTypes.string,
        tags: PropTypes.arrayOf(PropTypes.string),
        images: PropTypes.arrayOf(PropTypes.string),
        availabilityStatus: PropTypes.string,
        rating: PropTypes.number,
        returnPolicy: PropTypes.string,
        stock: PropTypes.number,
        warrantyInformation: PropTypes.string,
      })
    ).isRequired,
  }).isRequired,
};

export default PostData;
