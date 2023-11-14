import styles from "./ui/general/page.module.css"
import Navbar from "./ui/navbar/navbar";
import Image from "next/image";


const Dashboard = async () => {
  return (
    <>
    <Navbar/>
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
      <Image
          className={styles.heroImage}
          src={"/ats-hero.jpg"}
          alt=""
          width="2000"
          height="600"
        />
      </div>
      <div className={styles.sectionContainer}>
      <Image
          className={styles.sectionImage}
          src={"/section.jpg"}
          alt=""
          width="1000"
          height="500"
        />
      </div>
      <div>

      </div>
      
    </div>
    </>
  );
};

export default Dashboard;