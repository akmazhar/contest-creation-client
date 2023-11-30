import moment from 'moment';


const Time = () => {
    return (
        <div>
              
            <div className="items-center justify-center font-mono bg-[#083344] py-2 px-5 text-center text-red-500 font-bold">
            <p>{moment().format('llll')}</p>
            </div>
        </div>
    );
};

export default Time;