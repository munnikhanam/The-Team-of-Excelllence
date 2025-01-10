import PropTypes from "prop-types";
import { useState } from "react";
import { useEffect } from "react";
import Player from "../Player";
const Players = ({ handleSelectedBtn, handleSelectedPlayers, selected }) => {
  const [players, setPlayers] = useState([]);
  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);
  return (
    <div>
      <h1 className="text-4xl text-black">{players.length}</h1>
      <div className="flex justify-between">
        <h2 className="text-2xl font-bold">Available Players</h2>
        <div>
          <button className="btn font-bold">Available</button>
          <button
            onClick={handleSelectedPlayers(selected)}
            className="btn font-bold"
          >
            selected:
            <span>
              <p>{selected.length}</p>
            </span>
          </button>
        </div>
      </div>
      <div className="md:grid md:grid-cols-3 gap-5 my-12">
        {players.map((player) => (
          <Player
            key={player.id}
            player={player}
            players={players}
            handleSelectedBtn={handleSelectedBtn}
          />
        ))}
      </div>
    </div>
  );
};

Players.propTypes = {
  handleSelectedBtn: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired,
  handleSelectedPlayers: PropTypes.func.isRequired,
};

export default Players;
