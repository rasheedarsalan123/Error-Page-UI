import "./index.css";

function App() {
  return (
    <>
      <div
        className="w-full h-full justify-center flex-wrap  fixed  md:fixed  sm:fixed  "
        style={{
          background: "linear-gradient(90deg, #5C80B6 -110.57%, #283850 100%)",
        }}
      >
        <div className="hidden lg:block ">
          <div className=" flex justify-start items-center absolute top-16 left-48 ">
            <img src="/Images/Group 1410103678.svg" />
          </div>
          <div className="flex justify-start items-center absolute top-48 left-10 ">
            <img src="/Images/Group 1410103677.svg" />
          </div>
          <div className="flex justify-end absolute top-24 right-24">
            <img src="/Images/Group 1410103677.svg" />
          </div>
          <div className=" flex justify-end absolute top-80 right-[181px]  ">
            <img src="/Images/Group 1410103680.png" />
          </div>
        </div>
        <div className=" flex flex-col  items-center top-[150px] lg:top-[200px] sm:top-[220px] relative z-10 space-y-1 ">
          <div className="flex flex-col justify-center flex-wrap barlow-condensed-extrabold  ">
            <h1 className="text-white text-[30px] lg:text-[50px] sm:text-[40px]">
              ERROR 404
            </h1>
          </div>
          <div className="text-white text-[15px] sm:text-[20px]  ">
          
            opps! we can't find that page
          </div>
          <div className=" border-2 border-white p-1 text-[12px]  sm:text-[12px] text-white rounded-2xl">
            <button> Back to Home</button>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center   ">
          <img
            src="/Images/Group 1410103691.png"
            alt=" i paid screen"
            className="hidden lg:block     "
          />
        </div>
        <div className=" flex   w-full h-[100px] mt-5 overflow-hidden">
          <img
            src="/Images/Group 1410103690.png"
            alt=""
            className=" hidden sm:block lg:hidden w-full absolute top-20 object-cover h-[800px] "
          />
        </div>
        <div className=" flex  justify-center items-center  w-full h-full  mt-5">
          <img
            src="/Images/Group 1410103689.png"
            alt=""
            className=" block sm:hidden lg:hidden absolute top-20  object-cover h-full  "
          />
        </div>
      </div>
    </>
  );
}

export default App;
