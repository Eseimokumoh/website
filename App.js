import React from 'react';
import './App.css';
import Home from './components/Home';
import Models from './Modelpages/Models';
import Signup from './components/Signup';
import { BrowserRouter } from 'react-router-dom';
import {AuthContextProvider} from './AuthContext'
import ErrorBoundary from './api/ErrorBoundary';
import {Routes, Route} from 'react-router-dom';
import NewRangeRover from './Modelpages/NewRangeRover';
import NewRangeRoverSport from './Modelpages/NewRangeRoverSport';
import NewRangeRoverVelar from './Modelpages/NewRangeRoverVelar';
import RangeRoverEvoque from './Modelpages/RangeRoverEvoque';
import Discovery from './Modelpages/Discovery';
import DiscoverySports from './Modelpages/DiscoverySports';
import Defender from './Modelpages/Defender';
import BuyOnline from './components/BuyOnline';
import { Cars, userInputs } from './formSource';
import New from './components/New';
import Login from './components/Login';
import Single from './components/Single';
import ProtectedRoute from './components/ProtectedRoute';
import ChatApp from './components/ChatApp';
import Tracking from './components/Tracking';


function App() {
  return (
    <ErrorBoundary>
    <BrowserRouter>
    <AuthContextProvider className='font-bodyFont'>
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="Models">
          <Route index element={<Models/>}/>
          <Route path=":id" element={<NewRangeRover/>}/>
          <Route path="The-New-Range-Rover-Sport" element={<NewRangeRoverSport/>}/>
          <Route path="The-New-Range-Rover-Velar" element={<NewRangeRoverVelar/>}/>
          <Route path="Range-Rover-Evoque" element={<RangeRoverEvoque/>}/>
          <Route path="Discovery" element={<Discovery/>}/>
          <Route path="Discovery-Sports" element={<DiscoverySports/>}/>
          <Route path="Defender" element={<Defender/>}/>
        </Route>
        <Route path="Buy-Online" element={<BuyOnline cars={Cars}/>}/>
        <Route path="Signup">
          <Route index element={<Signup/>}/>
          <Route path=':id' element={<New inputs={userInputs}/>}/>
        </Route>
        <Route path="Login" element={<Login/>}/>   
        <Route path="Single" element={<ProtectedRoute><Single/></ProtectedRoute>}/> 
        <Route path="ChatApp" element={<ChatApp/>}/> 
        <Route path="Tracking" element={<ProtectedRoute><Tracking/></ProtectedRoute>}/>
      </Routes>
      </AuthContextProvider> 
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
