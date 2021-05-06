const PetitionDisplayCard = (props) => {
    return <div className='w-full flex justify-between px-4 transition hover:bg-gray-100 py-2'>
        
        <div className="flex flex-col">
            <p className="font-bold ">Petition title</p>
            <p className="text-gray-700">Created</p>
        </div>
        <div className='bg-green-400 text-white font-semibold rounded-md px-4 py-1 h-8'>+100</div>
    </div>;
  };
  export default PetitionDisplayCard;