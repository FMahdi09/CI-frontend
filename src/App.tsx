import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer/Footer';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Register from './Components/Register/Register';
import Explore from './Components/Explore/Explore';
import Help from './Components/Help/Help';
import Login from './Components/Login/Login';

function App() 
{
    return (
        <>
            <Navigationbar/>
            <div className='main primary-background'>
                <Routes>
                    <Route path='/' element={<Explore/>}/>
                    <Route path='/explore/*' element={<Explore/>}/>
                    <Route path='/help' element={<Help/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;