import PropTypes from "prop-types";

const Player = ({ player, handleSelectedBtn, isToggled }) => {
  const { name, banner_img, profile_img, role, price, ratings, achievements } =
    player;

  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
        <figure>
          <img
            className="w-full h-[250px] bg-cover bg-center object-cover"
            src={banner_img}
            alt="banner"
          />
        </figure>
        <div className="card-body">
          <div className="flex justify-around items-center gap-2 my-5 border-b ">
            <div className="flex items-center gap-3 ">
              <img className="w-8 h-8 rounded-full" src={profile_img} alt="" />
              <h2 className="card-title font-bold text-2xl">{name}</h2>
            </div>
            <div>
              <button className="btn my-5">{role}</button>
            </div>
          </div>
          <p className="text-xl font-bold">Ratings: {ratings}</p>
          <p className="text-xl font-bold"> Price: {price} $</p>
          <p className="text-xl font-bold"> Achievements: {achievements} </p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleSelectedBtn(player)}
              className={`btn font-bold ${
                isToggled ? "bg-[#E7FE29]" : "bg-[#ffff]"
              }`}
            >
              Choose Players
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  player: PropTypes.object.isRequired,
  handleSelectedBtn: PropTypes.func.isRequired,
  isToggled: PropTypes.bool,
};

export default Player;
