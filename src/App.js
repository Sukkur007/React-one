import './App.css';
import Header from './Components/Header/index'
import Routers from './routes'



function App() {

  const menuItems = ["home", "about", "contact", "details", "phone"]

  return (
    <div>
      <Routers/>
      <Header items = {menuItems}/>
    </div>
  );
}

export default App;
