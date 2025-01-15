import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import Player from "../Player";
import { ToastContainer, toast } from "react-toastify";
import Addedplayers from "../Addedplayers";
const Players = ({ handleSelectedBtn, selected }) => {
  const [players, setPlayers] = useState([]);
  const [addPlayer, setAddPlayer] = useState([]);
  const [isToggled, setIsToggled] = useState(true);
  const handleSelectedPlayers = (items) => {
    // setAddPlayer([...addPlayer, items]);
    setAddPlayer([...addPlayer, ...items]);
  };
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  const handleAvailable = () => {
    setIsToggled(true);
    {
      selected.length <= 6
        ? selected.length
        : toast("Sorry you can't add more than 6 players!", {
            position: "top-center",
          });
    }
  };
  return (
    <div>
      <h1 className="text-4xl text-black">{players.length}</h1>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Available Players</h2>
        <div className="flex gap-2">
          <button
            onClick={handleAvailable}
            className={`btn font-bold ${
              isToggled ? "bg-[#E7FE29]" : "bg-[#ffff]"
            }`}
          >
            Available
          </button>
          <div onClick={() => setIsToggled(!isToggled)}>
            <button
              onClick={() => handleSelectedPlayers(selected)}
              className={`btn font-bold ${
                isToggled ? "bg-[#FFFFFF]" : "bg-[#E7FE29]"
              }`}
            >
              selected:
              <span>
                <p>
                  {selected.length <= 6
                    ? selected.length
                    : toast("Sorry you can't add more than 6 players!", {
                        position: "top-center",
                      })}
                  <ToastContainer />
                </p>
              </span>
            </button>
          </div>

          {/* <div onClick={() => setIsToggled(!isToggled)}>
            <button
              onClick={() => handleSelectedPlayers(selected)}
              className="btn font-bold"
            >
              selected:
              <span>
                <p>
                  {selected.length <= 6
                    ? selected.length
                    : toast("Sorry you can't add more than 6 players!", {
                        position: "top-center",
                      })}
                  <ToastContainer />
                </p>
              </span>
            </button>
          </div> */}
        </div>
      </div>
      {isToggled ? (
        <div className="md:grid md:grid-cols-3  gap-5 my-12">
          {players.map((player) => (
            <Player
              key={player.id}
              player={player}
              handleSelectedBtn={handleSelectedBtn}
            />
          ))}
        </div>
      ) : (
        <Addedplayers
          addPlayer={addPlayer}
          handleAvailable={handleAvailable}
          isToggled={isToggled}
        />
      )}
    </div>
  );
};

Players.propTypes = {
  handleSelectedBtn: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  handleSelectedPlayers: PropTypes.func.isRequired,
  handleAvailable: PropTypes.func,
};

export default Players;
