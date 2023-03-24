import Background from './components/Background';
import TopBar from './components/TopBar';
import Stores from './components/Stores';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="background"></div>
      <Background />
      <Stores />
    </div>
  );
}

export default App;
