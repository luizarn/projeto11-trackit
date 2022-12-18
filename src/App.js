import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HabitScreen from './screens/HabitScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import HabitTodayScreen from './screens/HabitTodayScreen';
import HistoryScreen from './screens/HistoryScreen';
import ImageContext from './contexts/ImageContext'
import { useState } from 'react';



function App() {

const [imageProfile, setImageProfile] = useState("")

  return (
<BrowserRouter>
<ImageContext.Provider value={[imageProfile, setImageProfile]}>
  <Routes>
     <Route path="/" element={<SignInScreen/>}/>
     <Route path="/cadastro" element={<SignUpScreen/>}/>
     <Route path="/habitos" element={<HabitScreen/>}/>
     <Route path="/hoje" element={<HabitTodayScreen/>}/>
     <Route path="/historico" element={<HistoryScreen/>}/>
  </Routes>
</ImageContext.Provider>
</BrowserRouter>

  );
}

export default App;
