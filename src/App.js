import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HabitScreen from './screens/HabitScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import HabitTodayScreen from './screens/HabitTodayScreen';
import HistoryScreen from './screens/HistoryScreen';
import ImageContext from './contexts/ImageContext'
import { useState } from 'react';
import AuthorizationContext from './contexts/AuthorizationContext';



function App() {

const [imageProfile, setImageProfile] = useState("")
const [token, setToken] = useState("")

  return (
<BrowserRouter>
<ImageContext.Provider value={[imageProfile, setImageProfile]}>
<AuthorizationContext.Provider value={[token, setToken]}>
  <Routes>
     <Route path="/" element={<SignInScreen/>}/>
     <Route path="/cadastro" element={<SignUpScreen/>}/>
     <Route path="/habitos" element={<HabitScreen/>}/>
     <Route path="/hoje" element={<HabitTodayScreen/>}/>
     <Route path="/historico" element={<HistoryScreen/>}/>
  </Routes>
  </AuthorizationContext.Provider>
</ImageContext.Provider>
</BrowserRouter>

  );
}

export default App;
