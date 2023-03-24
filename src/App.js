import './App.css';
import Background from './components/Background';
import TopBar from './components/TopBar';

function App() {
  return (
    <div className="App">
      <TopBar />
      <div className="background"></div>
      <Background />
    </div>
  );
}

export default App;
