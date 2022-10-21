import FirstPage from './components/firstPage';
import Home from './components/Home';
import Result from './components/Result'
import {StyledContainer} from './components/Styles'
import { BrowserRouter as Router,Route ,Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <StyledContainer>
<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/regester' element={<FirstPage/>}/>
  <Route path='/result' element={<Result/>}/>
</Routes>
    </StyledContainer>
    </Router>
    
  );
}

export default App;
