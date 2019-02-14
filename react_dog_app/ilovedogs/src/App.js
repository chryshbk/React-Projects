import React from "react";
import Header from "./Helpers/Header";
import Form from "./Helpers/Form";
import Dogs from "./Helpers/Dogs";
import Footer from "./Helpers/Footer";

/*
    File name: App.js
    Author: Chrystian Rafael Sanches dos Santos
    Date: September 28, 2018
    Description: Our "main" method, we are extending the React Component and rendering our app.
                 Also we will fetch data from the dog API to get the images we want.
                 When we render our app, we call all the classes involved for a party and display them to the user.
 */
class App extends React.Component
{
    //Starting our state with undefined values, which we are going to populate later.
    state = {
      dogBreed: undefined,
      message: undefined,
      status: undefined,
    };

    // Here we use async so we can receive requests from the API and we are using await to wait the API take its time to respond.
    getDogs = async (event) => {
        // Event handler in case the pages refresh
        event.preventDefault();
        const dogBreed = event.target.elements.dogBreed.value; // we are getting the value from "dogBreed".

        if(dogBreed === "select") // If default option on the drop down box is still selected or is selected.
            console.log("Invalid selection.");
        else {
            const dogImages = await fetch(`https://dog.ceo/api/breed/${dogBreed}/images/random`); // Having a valid selection, we fetch data from the API.
            const data = await dogImages.json(); // Converting it into JSON format.

            // Setting up these states we declared undefined earlier to real data retrieved
            this.setState({
                status: data.status,
                dogBreed: data.message[0],
                message: data.message,
            });

            console.log(data); // Here for debugging purposes.
        }
    };
    // Now we render what we have to the UI. Please note the calls for the helper classes. Form is accessing the "getDogs" function we set up earlier
    // Underneath it we call the message state to get the url of the image retrieved from the API to use with our Dogs class.
    render() {
        return (
            <div>
                <div className={"wrapper"}>
                    <Header />
                    <div className={"main"}>
                        <div className={"column"}>
                            <Form getDogs={this.getDogs}/>
                        </div>
                        <div className={"image"}>
                            <Dogs message={this.state.message}/>
                        </div>
                    </div>
                    <div className={"footer"}>
                        <Footer />
                    </div>
                </div>
            </div>
        );
    }
}

export default App; // Here we tell the Index.js "we are done" so he can do his job.