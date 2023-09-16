import { useState } from 'react'
import './App.css'
import AddNameToLeaderBoard from './AddNameToLeaderBoard';

// function App() {

//   return (
//     <>
//     <p>Hello world </p>
//     </>
//   )
// }

function App() {
  return (
    <div className="App">
      <AddNameToLeaderBoard />
      {/* Add other components and display leaderboard here */}
    </div>
  );
}


export default App
