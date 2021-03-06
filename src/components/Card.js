const Card = (props) => {

    function formatDate(str) {
        const arr = str.split(" ")
        return arr[1] + " " +  arr[2] + ", " + arr[3]
    }

    return <div className='w-2/3 shadow-md rounded-lg border border-grey-400 outline-none '>
        <div className='px-4 py-3 border-b'>
            <div className='flex justify-between'>
                <h1 className='font-bold text-3xl'>{props.title ? props.title : "Loading Title"}</h1>
                <h1 className='bg-blue-700 text-white text-base px-6 py-1 rounded-full lg:rounded-full md:rounded-md sm:rounded-sm'>{props.isActive ? "Active" : "Inactive"}</h1>
            </div>
            <div className='flex justify-between'>
                <h2>by {props.author ? props.author : "Loading Author"}, {props.dateCreated ? formatDate(props.dateCreated) : "Loading Date"}</h2>
                <h2>{props.supporters ? props.supporters : "0"} Supporters</h2>
            </div>
        </div>
        <div className='px-4 py-2 font-medium'>{props.description ? props.description : "Loading description"} <a href={"/petition/" + props.linkedPetitionId} className='font-bold text-blue-700 underline'>See more</a></div>
        <div className='px-4 py-2 text-gray-500'>Tags</div>
    </div>;
  };
  export default Card;