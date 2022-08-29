const LikedRecipes = ({ recipes, isLoading, toggleLike }) => {
  const liked = recipes.filter(recipe => recipe.isLiked);

  return (
    <div className='mt-[72px] justify-center w-full bg-[#fefefe] px-4 flex h-fit'>
      <div className='flex items-center max-w-5xl w-full py-16 flex-wrap gap-8'>
        {liked.map(recipe => (
          <div key={recipe.id} className='w-36 h-36 rounded-md relative mb-8'>
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
						<p className="text-xs font-semibold ">{recipe.title}</p>
          </div>
        ))}
        {liked.length < 1 && (
          <h2 className='text-4xl text-center self-center h-[100vh] w-full flex items-center justify-center -my-40'>
            Currently, you don't have any liked recipes
          </h2>
        )}
      </div>
    </div>
  );
};

export default LikedRecipes;
