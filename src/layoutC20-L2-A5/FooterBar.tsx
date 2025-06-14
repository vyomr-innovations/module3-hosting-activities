"use client";
type myProps ={
   setGoal: (goal: string) => void;
  goal: string;
}

const FooterBar = ({ setGoal, goal }:myProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGoal(e.target.value); // Ensure this is called onChange
  };
  return (
    <>
      <div className=" flex justify-center items-center text-center gap-2 pb-3 px-3 w-full">
        <div className=" bg-red-800 text-white rounded-lg relative p-2 w-full">
          <label htmlFor="prize" className="text-left text-md text-bold  ">
            Reward :{" "}
          </label>
          <input
          placeholder="write reward name"
            id="prize"
            className="  inline text-sm text-bold  placeholder:text-gray-300 bg-transparent border border-gray-500 rounded-lg py-2 pl-2  focus:outline-none focus:ring-2 focus:ring-blue-500 hover:border-gray-300 relative z-10"
          />

         
        </div>

        {/* ======================== */}
        <div className=" w-full bg-red-800 text-white  rounded-lg relative p-2">
          <label htmlFor="Reward" className="text-md text-bold">
            Goal :{" "}
          </label>
          <input
          type="number"
          min={0}
            id="Reward"
            value={goal}
            onChange={handleChange}
            placeholder="0"
            className=" w-[60px]  text-md text-bold   placeholder:text-gray-300 bg-transparent border border-gray-500 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500  hover:border-gray-300 relative z-10"
          />
          
          <label htmlFor="Reward" className="text-sm text-bold">
            {" "}
            Points
          </label>
        </div>

        {/* ======================= */}
      </div>
    </>
  );
};

export default FooterBar;
