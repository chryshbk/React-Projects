import React from "react";

/*
    File name: Dogs.js
    Author: Chrystian Rafael Sanches dos Santos
    Date: September 28, 2018
    Description: This class will retrieve the image from the API and display it in the UI. In this case we used "props" without the braces
                 because we will only return one element (div), regardless of what is within it, there is only one element.
 */
const Dogs = props => (
    <div>
    {
        props.message !== "Breed not found" && // Just to make sure the user does not press the button without changing the dog breed.
        <a href={props.message}><img className="resize" src={props.message} alt={props.dogBreed}/></a> // Here we are getting the data from "dogBread" and "message" which is in our App.js class.
    }
    </div>
); // closing our return statement.

export default Dogs; // Exporting our Dogs class to the App.js.