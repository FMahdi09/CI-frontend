import './App.css';
import Footer from './Components/Footer/Footer';
import MainWindow from './Components/MainWindow/MainWindow';
import Navigationbar from './Components/Navigationbar/Navigationbar';

function App() 
{
    return (
        <>
            <Navigationbar/>
            <MainWindow/>
            <Footer/>
        </>
    );
}

export default App;