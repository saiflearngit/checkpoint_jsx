import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Component/Profile/ProfilePhoto.js' ;
import FullName from './Component/Profile/FullName.js' ;
import Address from './Component/Profile/Address' ;

function App() {
  return (
    <div>
      <ProfilePhoto/>
      <FullName/>
      <Address/>
    </div>
  );
}

export default App;
