import PropTypes from "prop-types";
import AddedAllPlayers from "./AddedAllPlayers";

const Addedplayers = ({ addPlayer }) => {
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
    </div>
  );
};

Addedplayers.propTypes = {
  addPlayer: PropTypes.array.isRequired,
};

export default Addedplayers;
