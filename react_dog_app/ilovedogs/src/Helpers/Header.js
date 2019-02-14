import React from "react";
/*
    File name: Header.js
    Author: Chrystian Rafael Sanches dos Santos
    Date: September 28, 2018
    Description: Header of the UI which displays a simple message.
 */

/*
    Here we do not need to declare a constructor since React 16. This const does all the job using a () and a lambda "=>" sign
    because we are returning only one argument.
    It makes the code more readable and there is no need to import unnecessary functions.
 */
const Header = () => (
    <div>
        <h1 className={"title"}>DOG LOVERS PAGE </h1>
    </div>
); // ps: that's ok if you do not like dogs. Nobody is perfect, right?

export default Header; // here we are exporting our Header to the App.js so it can see this.