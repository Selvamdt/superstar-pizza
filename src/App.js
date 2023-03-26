

import AppBar from './components/Appbar';
import Banner from './components/Banner';
import Menu from './components/Menu';
import BasicExample from './components/Cart2';
import Pickup from './components/Pickup';
import Comments from './components/Comments';
import Prod from './components/Bestseller';
import Beverages from './components/Beverages';
import Sides from './components/Side';
import Dest from './components/Dest';
import New from './components/New';




function App() {
  return (
    <>
    <AppBar/>
    <Banner/> 
    <New/>
    <BasicExample/>
    <Pickup/>
    <Prod/>
    <Beverages/>
    <Sides/>
    <Dest/>
    <Comments/>
    
  
    <div className='text-center my-3 text-primary small'>Copyright 2023-2024</div>
    </>
  );
}

export default App;
