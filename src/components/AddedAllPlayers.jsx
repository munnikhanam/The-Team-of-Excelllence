import PropTypes from "prop-types";

import { RiDeleteBin6Line } from "react-icons/ri";
const AddedAllPlayers = ({ newPlayer }) => {
  const { name, profile_img } = newPlayer;

  return (
    <div className="my-10 ">
      <div className="shadow-2xl rounded-md ">
        <div className="my-5  flex gap-5 justify-around items-center py-2">
          <div className="flex gap-2 items-center">
            <img className="w-10 h-10 rounded-full" src={profile_img} alt="" />
            <h2 className="card-title">{name}</h2>
          </div>

          <div className="card-actions">
            <button className="text-[red]">
              <RiDeleteBin6Line />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
AddedAllPlayers.propTypes = {
  newPlayer: PropTypes.object.isRequired,
};

export default AddedAllPlayers;

// ===========================
