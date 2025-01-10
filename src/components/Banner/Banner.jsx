import PropTypes from "prop-types";

const Banner = ({ handleAddMoney }) => {
  return (
    <div>
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <div className="relative carousel w-full">
            <img
              src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
              className="w-full"
            />
            <div className="absolute md:top-32 md:right-[600px] text-center">
              <h1 className="text-4xl text-[#FFFFFF]">
                Assemble Your Ultimate Dream 11 Cricket Team
              </h1>
              <p className="text-[#FFFFFFB3] text-2xl my-5">
                Beyond Boundaries Beyond Limits
              </p>
              <button
                onClick={handleAddMoney}
                className="px-5 text-base py-3 bg-[#E7FE29] font-bold text-[#131313] rounded-lg"
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
          <img
            src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
            className="w-full"
          />
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
          <img
            src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
            className="w-full"
          />
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
