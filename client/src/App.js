import { Route, Switch } from "react-router-dom";
import Home from "./Screens/Home"
import Donate from "./Screens/Donate"
import AboutUs from "./Screens/AboutUs"
import Services from "./Screens/Services"
import ContactUs from "./Screens/ContactUs"
import Testimonies from "./Screens/Testimonies"
import EventContainer from "./Components/EventContainer";
import './App.css';

function App() {
  return (
    <div className="App">
      <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route path="/testimonios">
        <Testimonies />
      </Route>

      <Route path="/nosotros">
        <AboutUs />
        </Route>
        
        <Route path="/servicios">
        <Services />
      </Route>

      <Route path="/eventos" >
          <EventContainer
          />
        </Route>

      <Route path="/donar">
        <Donate />
      </Route>

      <Route path="/contacto">
        <ContactUs />
        </Route>
        </Switch>
    </div>
  );
}

export default App;
