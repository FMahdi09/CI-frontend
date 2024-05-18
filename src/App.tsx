import './App.css';
import Footer from './Components/Footer/Footer';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Register from './Components/Register/Register';

function App() 
{
    return (
        <>
            <Navigationbar/>
            <div className='main'>
                <Register />
            </div>
            <Footer/>
        </>
    );
}

export default App;