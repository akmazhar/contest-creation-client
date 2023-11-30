// import { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";

const Search = () => {

      //     const [data, setData] = useState([]);

      //   const apiItem = useLoaderData();
      
      //   const handleSearch = e =>{
      //     e.preventDefault();
      //     const inputValue = e.target.text.value;
      //     const dataResult = apiItem.filter(data => data.name === inputValue)
      //     setData(dataResult)
      // }
      
      //   useEffect(()=>{
      //     setData(apiItem)
      //   },[apiItem])

  return (
    <div>
      <div>
        {/* <h1 className="flex justify-center font-serif data-center text-green-500 text-7xl font-extrabold">
          Search Your Contest Choice By Name{" "}
        </h1> */}
     {/* <form onSubmit={handleSearch} className="flex justify-center data-center"> */}
     <form className="flex justify-center data-center">
                    <input type="text" placeholder="Please Search by Contest Name..." name="text" className="input input-bordered rounded-tr-none rounded-br-none md:w-[470px] p-3 mt-32 rounded-t-xl px-7 from-neutral-500" />
                        <input className="btn bg-[rgb(241,59,59)] mt-32 p-3 text-white rounded-tl-none rounded-bl-none rounded-xl px-7 font-medium" type="submit" value="Search" />
                    </form>
      </div>

      {/* Display the search results  */}
      {/* <div className="mt-5">
        {data.map((item) => (
          <div key={item.id}>
            <p>{item.name}</p> */}
           {/* Add other details to display  */}
          {/* </div>
        ))}
      </div> */}
    </div>
  );
};

export default Search;
