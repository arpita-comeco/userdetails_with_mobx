import './App.css';
import UserDetails from './components/UserDetails';
import UserStore from './UserStore';

function App() {
  const store= new UserStore()
  return (
    <div className="App">
      <UserDetails store={store} />
    </div>
  );
}

export default App;
