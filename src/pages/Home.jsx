import { Link } from 'react-router-dom'
import dish from "../img/dish.png";

const Home = ({ recipes, isLoading, toggleLike }) => {
   return (
    <div className='flex flex-col items-center'>
      <div className='mt-[72px] justify-center w-full bg-[#fefefe] px-4 flex'>
        <div className='flex items-center justify-between max-w-5xl w-full py-16'>
          <div className='flex flex-col items-start gap-6'>
            <h1 className='text-5xl font-bold max-w-sm leading-snug'>
              Let's Start Cooking With Popular Recipes
            </h1>
            <p className='leading-loose text-[#B3B3B3] font-semibold tracking-wide'>
              Want to learn how to cook but confused where to start?
              <br />
              No need to worry again!
            </p>
            <Link to='/recipes' className='bg-[#31B768] transition duration-500 text-white font-bold py-3 px-6 rounded-md tracking-wide hover:shadow-xl'>
              Explore Recipes
            </Link>
          </div>
          <img src={dish} alt='' className='hidden md:flex' />
        </div>
      </div>
      <div className='px-4 py-20 bg-[#F8FAFB] w-full flex flex-col items-center md:p-20'>
        <div className='max-w-5xl w-full flex flex-col items-center gap-12'>
          <h2 className='font-bold text-center text-3xl'>
            RECIPES YOU MAY LIKE
          </h2>
          <p className='text-center max-w-sm text-sm font-semibold tracking-wide text-[#B3B3B3]'>
            We provide a variety of food and beverage recipes with high taste
            from various chefs
          </p>
          <div className='flex gap-8 rounded-md flex-wrap justify-center'>
            {recipes.slice(0, 4).map(recipe => (
              <div key={recipe.id} className='w-36 h-36 rounded-md relative'>
                {isLoading ? (
                  <div className='w-full h-full rounded-md bg-black'></div>
                ) : (
                  <img
                    src={recipe.image}
                    alt=''
                    className='w-full h-full object-cover rounded-md'
										/>
										)}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  preserveAspectRatio='xMidYMid meet'
                  viewBox='0 0 24 24'
                  className='w-8 h-8 absolute bottom-2 right-2 cursor-pointer shadow-xl'
									onClick={() => toggleLike(recipe.id)}
									>
                  <path
                    fill={recipe.isLiked ? "red" : "white"}
                    d='M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29c2.64-1.8 5.9-.96 7.66 1.1c1.76-2.06 5.02-2.91 7.66-1.1c1.41.96 2.28 2.59 2.34 4.29c.14 3.88-3.3 6.99-8.55 11.76l-.1.09z'
                  />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
