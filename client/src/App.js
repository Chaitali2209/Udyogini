import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { useEffect,useContext } from 'react';
import CurrentUserContext from "./context/LoggedInUser/CurrentUserContext";


// import {PeriodTracker} from './components/PeriodTracker'
function App() {
  const currentUser = useContext(CurrentUserContext);
  console.warn(currentUser);
  // const [postArray, setPostArray] = useState([]);

  useEffect(() => {
    const checkUser = async () => {
      const postsResponse = await fetch("http://localhost:8000/checkUser", {
        method: "POST",
        credentials: "include",
      });
      if (postsResponse.status === 200) {
        const resJson = await postsResponse.json();
        currentUser.setState(resJson);
        console.warn(currentUser.state);
      }
    };
    checkUser()
  },[]);
  
  return (
    <div className="App">
      <NavBar isLoggedIn={currentUser.state != undefined} />
      <Banner />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      
      <Footer />
      
    </div>
  );
}

export default App;