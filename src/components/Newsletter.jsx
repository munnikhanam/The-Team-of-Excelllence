const Newsletter = () => {
  return (
    <div className="rounded-lg  py-10  text-center w-10/12 mx-auto bg-footer-texture bg-cover bg-center bg-white shadow-2xl   ">
      <h6 className="footer-title font-bold text-2xl  md:text-3xl text-[#06091A] ">
        Subscribe to our Newsletter
      </h6>
      <div className=" w-3/4 mx-auto  ">
        <div className=" my-5">
          <span className=" text-[#131313B3] text-xl">
            Get the latest updates and news right in your inbox!
          </span>
        </div>

        <div className="md:join">
          <input
            type="text"
            placeholder="Enter your email"
            className="input input-bordered md:join-item my-2 text-[#13131366]"
          />
          <button className="btn font-bold text-xl  join-item bg-gradient-to-r from-pink-500 via-orange-300 to-yellow-400">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
