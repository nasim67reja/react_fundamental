import styles from "./Hero.module.css";
let imgSrc = require("../../asset/meals.jpg");

const Hero = () => {
  return (
    <section id={styles.id}>
      <div className={styles.hero}>
        <img
          className={styles["hero-img"]}
          src={imgSrc}
          alt="many food on the food table"
        />
      </div>
      <div className={styles.ovarlay}>
        <h2 className={styles["heading-secondary"]}>
          Delicious Food,Delivered To You
        </h2>
        <p className={styles.description}>
          Chosse your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <p className={styles.description}>
          All our meals are cooked with high-quality ingredients,just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};
export default Hero;
