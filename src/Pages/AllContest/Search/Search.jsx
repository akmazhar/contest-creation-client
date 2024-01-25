import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Search = () => {
    const [data, setData] = useState([]);

    const apiItem = useLoaderData();
  
    const handleSearch = e =>{
      e.preventDefault();
      const inputValue = e.target.text.value;
      const dataResult = apiItem.filter(data => data.name === inputValue)
      setData(dataResult)
  }
  
    useEffect(()=>{
      setData(apiItem)
    },[apiItem])

    return (

        <div>
                <form onSubmit={handleSearch} className="flex font-mono text-lg justify-center data-center mt-10 mb-10">
                    <input type="text" placeholder="Please Search by Contest Name..." name="text" className="input input-bordered rounded-tr-none rounded-br-none md:w-[470px] p-3  rounded-b-full px-7 from-neutral-800 border-red-600" />
                        <input className="btn bg-rose-600 p-3 text-white rounded-tl-none rounded-bl-none rounded-xl px-7 font-medium font-mono text-base" type="submit" value="Search" />

                    </form>
        </div>
    );
};

export default Search;