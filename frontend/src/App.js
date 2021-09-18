import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./UI/LandingPage/LandingPage";
import {BrowserRouter, Route} from "react-router-dom";
import {MyNotes} from "./UI/MyNotes/MyNotes";

const App = () => {
    return (
        <BrowserRouter>
            <Header/>
            <main>
                <Route path="/" component={LandingPage} exact/>
                <Route path="/mynotes" component={() => <MyNotes/>}/>
            </main>
            <Footer/>
        </BrowserRouter>
    );
};

export default App;
