import { Route, Routes } from 'react-router-dom';
import './App.css';
import './Form.css';
import Footer from './Components/Footer/Footer';
import Navigationbar from './Components/Navigationbar/Navigationbar';
import Register from './Components/Register/Register';
import Explore from './Components/Explore/Explore';
import Help from './Components/Help/Help';
import Login from './Components/Login/Login';
import Welcome from './Components/Welcome/Welcome';
import ExploreRepositories from './Components/Explore/ExploreRepositories/ExploreRepositories';
import ExploreUsers from './Components/Explore/ExploreUsers/ExploreUsers';
import ExploreOrganisations from './Components/Explore/ExploreOrganisations/ExploreOrganisations';

function App() 
{
    return (
        <>
            <Navigationbar/>
            <div className='main primary-background'>
                <Routes>
                    <Route path='/' element={<Welcome/>}/>
                    <Route path='/explore/*' element={<Explore/>}>
                        <Route path='repos' element={<ExploreRepositories />}/>
                        <Route path='users' element={<ExploreUsers />}/>
                        <Route path='organisations' element={<ExploreOrganisations />}/>
                    </Route>
                    <Route path='/help' element={<Help/>}/>
                    <Route path='/register' element={<Register/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='*' element={<Welcome/>}/>
                </Routes>
            </div>
            <Footer/>
        </>
    );
}

export default App;