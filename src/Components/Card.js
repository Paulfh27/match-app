import styles from "./card.module.css";

function Card(props) {
  return (
    <div className={styles.body}>
      <div className={styles.card}>
        <p className={styles.car_content}>{props.children}</p>
        <div className={styles.navigation_buttons}>
          <button onClick={props.onLeft}>Left</button>
          <button onClick={props.onRight}>Right</button>
        </div>
      </div>
    </div>
  );
}

export default Card;
