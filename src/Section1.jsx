import styles from "./styles/section1.module.css"

const Section1 = () => {
  return (
    <div className={styles.section1}>
      <div className={styles.heading}>
      <h2>The importance of reading books</h2>

      </div>
  
      <div className={styles.row} >
        <div>
          <h4>Reading practice improves vocabulary</h4>
          <p>
            Whether for pleasure, study or information, reading practice
            improves vocabulary and streamlines reasoning and interpretation.
          </p>
        </div>

        <div  className={styles.imgContainer}>
          <img src="/assets/images/home-1.svg" alt="Image of this section" />
        </div>
      </div>

      <div  className={styles.row}>
        <div className={styles.imgContainer}>
          <img src="/assets/images/home-2.svg" alt="Image of this section" />
        </div>

        <div className={styles.right}>
          <h4>Advancing technology</h4>
          <p>
            With the advancement of technologies in the modern world, people are
            less and less interested in reading.
          </p>
        </div>
      </div>

      <div  className={styles.row}>
        <div>
          <h4>Dynamic reading</h4>
          <p>
            Dynamic and relaxed reading is one of the best ways to acquire
            information. The ideal is to learn to read informative texts,
            scientific articles, textbooks, educational books, etc.
          </p>
        </div>

        <div  className={styles.imgContainer}>
          <img src="/assets/images/home-3.svg" alt="Image of this section" />
        </div>
      </div>
    </div>
  );
};

export default Section1;
