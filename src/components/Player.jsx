import { useRef, useState } from "react";

export default function Player() {

  const [playerName, setplayerName] = useState('')
  const player = useRef();

  function handleSubmit() {
    setplayerName(player.current.value)
    player.current.value = ''

  }
  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'unknown'} entity</h2>
      <p>
        <input ref={player} type="text" />
        <button onClick={handleSubmit}>Set Name</button>
      </p>
    </section>
  );
}
