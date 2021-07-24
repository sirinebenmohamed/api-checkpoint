import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import UserList from './Components/UserList';
import Profile from './Components/Profile';
import Nvbar from './Components/Nvbar';

function App() {
  return (
    <div className='container'>
      <Nvbar/>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={UserList} />
          <Route path='/profile' component={Profile}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
