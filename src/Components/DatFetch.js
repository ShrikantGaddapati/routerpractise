// Import Firestore database
import { db } from "../firebase";
import { useState } from "react";
import "../data.css";


const  DatFetch = () => {
  const [info, setInfo] = useState([]);

  // Start the fetch operation as soon as
  // the page loads
//   window.addEventListener("load", () => {
//     Fetchdata();
//   });

  // Fetch the required data using the get() method
  const Fetchdata = () => {
    db.collection("forms")
      .get()
      .then((querySnapshot) => {
        // Loop through the data and store
        // it in array to display
        querySnapshot.forEach((element) => {
          var data = element.data();
          setInfo((arr) => [...arr, data]);
        });
      });
  };

  // Display the result on the page
  return (
    <div>
      <center>
        <h1>Extract Data</h1>
        <button style={{ color: "rgb(2, 2, 110)" }} onClick={Fetchdata}>
          Get Details
        </button>
      </center>

      {info.map((forms) => (
        <Frame
          name={forms.name}
          email={forms.email}
          message={forms.message}
       
        />
      ))}
    </div>
  );
};

// Define how each display entry will be structured
const Frame = ({ name, email, message,options }) => {
  console.log(name + " " + email + " " + message+""+options);
  return (
    <center>
      <div className="div">
        <p>NAME : {name}</p>

        <p>Email : {email}</p>

        <p>Message : {message}</p>

      
      </div>
    </center>
  );
};

export default DatFetch;
