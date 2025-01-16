import PropTypes from "prop-types";
import AddedAllPlayers from "./AddedAllPlayers";

const Addedplayers = ({ addPlayer, handleAvailable, isToggled }) => {
  return (
    <div>
      <h3 className="text-2xl border-b my-10 ">
        {addPlayer.length <= 6
          ? addPlayer.length
          : "You can't Add players more than 6"}
        / 6
      </h3>
      <div className="my-10">
        {addPlayer.map((newPlayer, idx) => (
          <AddedAllPlayers key={idx} newPlayer={newPlayer} />
        ))}
      </div>
      <button
        onClick={handleAvailable}
        className={`mb-10 px-5 py-3 rounded-lg font-bold text-xl ${
          isToggled ? "bg-[#FFFFFF]" : "bg-[#E7FE29]"
        }`}
      >
        Add more players
      </button>
    </div>
  );
};

Addedplayers.propTypes = {
  addPlayer: PropTypes.array.isRequired,
  handleAvailable: PropTypes.func.isRequired,
  isToggled: PropTypes.bool.isRequired,
};

export default Addedplayers;
