
import './App.css';
import axios from 'axios';

function App() {
  const url ="hhtps://randomuser.me/api/";
  const getuser = async () =>{
    const {data} =await axios.get(url);
  }
  return (
    <div className="App">
      
    
    </div>
  );
}

export default App;
