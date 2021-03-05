// import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './Pages/Home';
import Join from './Pages/join';
import {GlobalStyle} from './styles/globalStyle';
import LoaderPage from './components/loaderpage';



function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
    
      
      <GlobalStyle/>
          <Switch>
          <Route exact path = '/' component={LoaderPage} /> 
          <Route exact path = '/home' component={Home} />
          <Route exact path = '/join' component={Join} />

        </Switch>

        

        
      </BrowserRouter> 
    </div>
  );
}

export default App;
