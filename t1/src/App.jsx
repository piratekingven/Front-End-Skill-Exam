import React from 'react';
import { ThemeProvider } from './ThemeContext';
import ThemeToggle from './ThemeToggle';
import './App.css'; 

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <header className="App-header">
          <h1>Student Dashboard</h1>
          <ThemeToggle />
        </header>
        <main>
          <p>This content will adapt to the selected theme.</p>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
