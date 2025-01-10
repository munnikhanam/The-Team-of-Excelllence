import PropTypes from "prop-types";
import { Children } from "react";

const Player = ({ player, handleSelectedBtn }) => {
  const { name, achievements, banner_img, profile_img, role, price } = player;

  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img src={banner_img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleSelectedBtn(player)}
              className="btn btn-primary"
            >
              Buy Now
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
};

export default Player;
