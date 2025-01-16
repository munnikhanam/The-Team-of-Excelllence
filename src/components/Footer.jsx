const Footer = () => {
  return (
    <div className="bg-[#06091A] py-14 mt-10 ">
      <div className=" w-40 mx-auto my-5">
        <img src="logo-footer.png" alt="footer-logo" />
      </div>
      {/* footer details */}
      <div className=" w-11/12 mx-auto ">
        <footer className="footer text-base-content p-10">
          <nav>
            <h6 className="footer-title text-xl text-[#FFFFFF]">About us</h6>
            <p className="text-[#FFFFFF99] text-base">
              We are a passionate team <br /> dedicated to providing the best{" "}
              <br /> services to our customers.
            </p>
          </nav>
          <nav>
            <h6 className="footer-title text-xl text-[#FFFFFF] ">
              Quick Links
            </h6>

            <a className="link link-hover text-[#FFFFFF99] text-base"> Home</a>
            <a className="link link-hover text-[#FFFFFF99] text-base">
              Services
            </a>
            <a className="link link-hover text-[#FFFFFF99] text-base">About</a>
            <a className="link link-hover text-[#FFFFFF99] text-base">
              Contact
            </a>
          </nav>
          <form>
            <h6 className="footer-title  text-xl text-[#FFFFFF] ">
              Newsletter
            </h6>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className=" text-[#FFFFFF99] text-base">
                  Subscribe to our newsletter for the <br /> latest updates.
                </span>
              </label>
              <div className="md:join">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="input input-bordered md:join-item my-5 "
                />
                <button className="btn font-bold text-xl  join-item bg-gradient-to-r from-pink-500 via-orange-300 to-yellow-400">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
