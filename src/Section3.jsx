import styles from "./styles/section3.module.css"
const Section3 = () => {
  return (
    <div className={styles.section3}>
        <div className={styles.col}>
          <img src="src/assets/images/home-5.svg" alt="Image of this section" />
          <p>Download samples in PDF or EPUB of your favorite books</p>
        </div>

        <div className={styles.col}> 
          <img src="src/assets/images/home-6.svg" alt="Image of this section" />
          <p>Buy the books you're looking for from your phone or PC</p>
        </div>
        
      </div>
     
  );
};

export default Section3;
