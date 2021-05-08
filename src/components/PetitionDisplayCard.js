const PetitionDisplayCard = (props) => {
    function formatDate(str) {
        const arr = str.split(" ")
        return arr[1] + " " +  arr[2] + ", " + arr[3]
    }
    return <div className='w-full flex justify-between px-4 transition hover:bg-gray-100 py-2'>
        
        <div className="flex flex-col">
            <p className="font-bold ">{props.title ? props.title : "title"}</p>
            <p className="text-gray-700">created {props.date ? formatDate(props.date) : "date"}</p>
        </div>
        <div className='bg-green-400 text-white font-semibold rounded-md px-4 py-1 h-8'>+{props.currentSign ? props.currentSign : "0"}</div>
    </div>;
  };
  export default PetitionDisplayCard;