import './App.css';
import { Route, Routes } from 'react-router-dom';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
// import Review from './Component/Review/Review';
import Dashboard from './Component/Dashboard/Dashboard';
import Blog from './Component/Blog/Blog'
import About from './Component/About/About'
import AllReviews from './Component/AllReviews/AllReviews'


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}> </Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/orderReview' element={<AllReviews></AllReviews>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>
        <Route path='/blog' element={<Blog></Blog>} ></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
    </div>
  );
}

export default App;
