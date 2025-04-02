import React from 'react';
import './App.css';
import ProfileCard from './components/ProfileCard';  // Імпортуємо компонент

function App() {
  return (
    <div className="App">
      <ProfileCard />  {/* Відображаємо картку профілю */}
    </div>
  );
}

export default App;