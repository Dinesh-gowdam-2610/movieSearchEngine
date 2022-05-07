import './App.css';
import './css/style.css'
import SearchMovies from './components/searchMovies';

function App() {
  return (
    <div className='App'>
      <div className='container'>
        <h1 className='title'>React Movie Search</h1>
      </div>
      <SearchMovies/>
    </div>
  );
}

export default App;
