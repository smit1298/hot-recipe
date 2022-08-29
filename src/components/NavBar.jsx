import { Link } from "react-router-dom";

const NavBar = ({ recipes, filterRecipes }) => {

  return (
    <div className='flex justify-center p-4 absolute w-full left-0 top-0 bg-[#fefefe]'>
      <div className='flex items-center justify-between max-w-5xl w-full'>
        <div className='font-semibold text-2xl'>
          <span className=''>HOT</span>
          <span className='text-[#32B769]'>RECIPE</span>
        </div>
        <div className='flex gap-4 text-sm'>
          <Link to='/' className='p-2 transition duration-500 hover:font-bold'>
            Home
          </Link>
          <Link
            to='/recipes'
            className='p-2 transition duration-500 hover:font-bold'
          >
            Recipes
          </Link>
          <Link
            to='/liked-recipes'
            className='p-2 transition duration-500 hover:font-bold'
          >
            Your Liked Recipes
          </Link>
        </div>
        <div className=''>
          <div className='flex border-2 rounded-md'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-8 h-8 p-2'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
              />
            </svg>

            <input
              className='px-2 text-sm'
              type='text'
              placeholder='Search Recipe'
              onChange={event => filterRecipes(event, recipes) }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
