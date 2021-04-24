const Card = (props) => {
    return <div className='w-2/6 shadow-md rounded-lg border border-grey-400 outline-none '>
        <div className='px-4 py-3 border-b'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-3xl'>Title</h1>
                <h1 className='bg-blue-700 text-white text-base rounded-full px-3 py-1'>Active</h1>
            </div>
            <div className='flex justify-between'>
                <h2>From</h2>
                <h2>Supporters</h2>
            </div>
        </div>
        <div className='px-4 py-2 font-medium'>Description <a className='font-bold text-blue-700 underline'>Link</a></div>
        <div className='px-4 py-2'>Tags</div>
    </div>;
  };
  export default Card;