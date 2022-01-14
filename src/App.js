import { BrowserRouter } from 'react-router-dom';
import AppRouter from './Components/Routes/AppRouter';

function App() {
  return (
  <BrowserRouter>
      <AppRouter/>
  </BrowserRouter>
  );
}

export default App;