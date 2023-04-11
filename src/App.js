
import './App.scss';
import { BrowserRouter  as Router,Route,Routes} from "react-router-dom"
import Home from './Components/Home/Home';
import Header from './Components/Header/Header';
import TvShows from './Categories/TvShows/TvShows';
import RecentlyAdd from './Categories/RecentlyAdd/RecentlyAdd';
import MyLists from './Categories/MyLists/MyLists';
import Movies from './Categories/Movies/Movies';

function App() {
  return (
         <Router>
          <Header/>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/tvShow" element={<TvShows/>}/>
            <Route path='/Recently_added' element={<RecentlyAdd/>}/>
            <Route path='/My_Lists'element={<MyLists/>}/>
            <Route path='/movie' element={<Movies/>}/>
          </Routes>
          </Router>   
   
  );
}

export default App;
