import PropTypes from "prop-types";

const Banner = ({ handleAddMoney }) => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="relative carousel h-[600px]  md:h-[800px]  w-full object-cover">
            <img src="Banner/5494.jpg" className="w-full " />

            <div className="absolute top-36 md:top-80 md:right-[600px] text-center text-white">
              <h1 className=" text-3xl md:text-5xl ">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="md:text-3xl my-10">
                Beyond Boundaries Beyond Limits
              </p>
              <button
                onClick={handleAddMoney}
                className="px-5 text-2xl py-3 bg-[#E7FE29] font-bold text-[#131313] rounded-lg my-10"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide4" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <div className="relative carousel h-[800px]  w-full object-cover">
            <img src="Banner/5495.jpg" className="w-full " />

            <div className="absolute md:top-80 md:right-[600px] text-center text-white">
              <h1 className="text-5xl ">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="text-3xl my-10">Beyond Boundaries Beyond Limits</p>
              <button
                onClick={handleAddMoney}
                className="px-5 text-2xl py-3 bg-[#E7FE29] font-bold text-[#131313] rounded-lg my-10"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <div className="relative carousel h-[800px]  w-full object-cover">
            <img src="Banner/6396301.jpg" className="w-full " />

            <div className="absolute md:top-80 md:right-[600px] text-center text-white">
              <h1 className="text-5xl ">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="text-3xl my-10">Beyond Boundaries Beyond Limits</p>
              <button
                onClick={handleAddMoney}
                className="px-5 text-2xl py-3 bg-[#E7FE29] font-bold text-[#131313] rounded-lg my-10"
              >
                Claim Free Credit
              </button>
            </div>
          </div>
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide4" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  handleAddMoney: PropTypes.func.isRequired,
};

export default Banner;
