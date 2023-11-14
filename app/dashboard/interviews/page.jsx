import Sidebar from "./sidebar/sidebar";
import styles from "@/app/dashboard/interviews/page.module.css";

const Interview = () => {
    return(
        <div className={styles.container}>
            <Sidebar />
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h4>Formal Interview</h4>
                </div>

            </div>
        </div>
    )
}

export default Interview;