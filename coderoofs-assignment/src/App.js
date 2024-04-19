import './App.css';
import Navbar from './components/Navbar';
import Head from './components/Head';
import CardBox from './components/CardBox';
import LastBox from './components/LastBox';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Head />
      <CardBox />
      <LastBox />
    </div>
  );
}

export default App;
