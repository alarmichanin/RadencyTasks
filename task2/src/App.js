import './App.css';
import CountTable from './components/countTable/CountTable';
import Header from './components/mainTable/Header';
import Main from './components/mainTable/Main';

function App() {
  return (
    <div className='app'>
      <Header showArchive={false} />
      <Main />
      <CountTable />
    </div>
  );
}

export default App;
