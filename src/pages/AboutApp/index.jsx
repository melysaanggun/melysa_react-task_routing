/**Component */
import Navbar from "../../components/Navbar";

const AboutApp = () => {
    return ( 
        <div style={{display: "flex"}} >
            <Navbar />
            <div className="about-app">
                <h1>About The App</h1>
                <p>
                In this app, you can add, delete, submit, and edit items. Tap to edit items, simply double click on it. 
                Once you are done, press the enter key to resubit. This app will persist your data in the browser local storage.
                So whether you reload, close your app or reopened it, you still have access to your todos' sistem.
                </p>
            </div>
        </div>
     );
}
 
export default AboutApp;