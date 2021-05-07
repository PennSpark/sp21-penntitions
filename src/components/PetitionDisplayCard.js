const PetitionDisplayCard = (props) => {
    function formatDate(datetime) {
        let date = datetime.toDate();
        let month = date.getMonth;
        let day = date.getDate;
        let year = date.getYear;

        if (month < 10) {
            month = "0" + month
        }
        if (day < 10) {
            day = "0" + day
        }
        return (month + "/" + day + "/" + year)
    }
    return <div className='w-full flex justify-between px-4 transition hover:bg-gray-100 py-2'>
        
        <div className="flex flex-col">
            <p className="font-bold ">{props.title ? props.title : "title"}</p>
            <p className="text-gray-700">Created {props.date ? formatDate(props.date) : "date"}</p>
        </div>
        <div className='bg-green-400 text-white font-semibold rounded-md px-4 py-1 h-8'>+{props.currentSign ? props.currentSign : "0"}</div>
    </div>;
  };
  export default PetitionDisplayCard;