import Toolbar from "../components/Toolbar";
import Card from "../components/Card";
import styles from "../Components/card.module.css";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";

/*
 * Main page or the swiping page of the app
 *
 * NEED: a loop to cycle through a list of cards generated with backend content
 */
function Main() {
  const [casesList, setCasesList] = useState([]);
  const casesCollectionRef = collection(db, "cases");

  useEffect(() => {
    const getCasesList = async () => {
      //read the data from the database
      //set matchlist
      try {
        const data = await getDocs(casesCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setCasesList(filteredData);
      } catch (err) {
        console.error(err);
      }
    };
    getCasesList();
  }, []);

  function leftHandler() {}

  function rightHandler() {}

  return (
    <div>
      <Toolbar></Toolbar>
      <div className={styles.card_container}>
        {casesList.map((c) => (
          <Card onLeft={leftHandler} onRight={rightHandler}>
            <h1> {c.Title} </h1>
            <h2> Company: {c.Company} </h2>
            <p>{c.Preview}</p>
            <a href={c.Link}>
              <button>Visit Site</button>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Main;
