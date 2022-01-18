import './App.css';
import AddForm from './components/addForm/AddForm';
import CountTable from './components/countTable/CountTable';
import Header from './components/mainTable/Header';
import Main from './components/mainTable/Main';

function App() {
  return (
    <div className='app'>
      <Header />
      <Main />
      <AddForm />
      <CountTable />
    </div>
  );
}

export default App;
