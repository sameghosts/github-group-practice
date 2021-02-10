import './App.css';

import Austin from './Austin'
import SeanFeiner from './SeanFeiner'
import Young from './Young'

function App() {
  return (
    <div className="App">

      <h1> Meet Our Team:</h1>
      <div className="team-container">
        <SeanFeiner />
        <Young />
        <Austin />

    </div>


    </div>
  );
}

export default App;
