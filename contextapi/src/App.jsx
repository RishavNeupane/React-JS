import { ThemeProvider } from './Context/ThemeContext';
import Header from './components/Header';
import Content from './components/Content';

function App() {
  return (
    <ThemeProvider>
      <div className="App">
        <Header />
        <Content />
      </div>
    </ThemeProvider>
  );
}

export default App;