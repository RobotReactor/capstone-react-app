import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import LogWorkout from './Pages/LogWorkout/LogWorkout';
import Measurements from './Pages/Measurements/Measurements';
import Goals from './Pages/Goals/Goals';
import SignOut from './Pages/SignOut/SignOut';
import Help from './Pages/Help/Help';
import Settings from './Pages/Settings/Settings';
import Home from './Pages/Home/Home';
import AddWorkout from './Pages/AddWorkouts/AddWorkout';

function App() {
    return ( 
        <div className='App'>
            <Router>
                <Header />
                <Sidebar />
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/dashboard/home' element={<Home />}/>
                    <Route path='/dashboard/log-workout' element={<LogWorkout />}/>
                    <Route path='/dashboard/add-workout' element={<AddWorkout />}/>
                    <Route path='/dashboard/measurements' element={<Measurements />}/>
                    <Route path='/dashboard/goals' element={<Goals />}/>
                    <Route path='/dashboard/settings' element={<Settings />}/>
                    <Route path='/dashboard/help' element={<Help />}/>
                    <Route path='/dashboard/sign-out' element={<SignOut />}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;