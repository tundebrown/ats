import Link from "next/link";
import styles from "@/app/ui/dashboard/jobs/jobs.module.css";
import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { deleteJob } from "@/app/lib/actions";
import { fetchJobs } from "@/app/lib/data";
import { MdOutlineArrowDropDown, MdOutlineDelete, MdOutlineEdit, MdOutlineMenu, MdOutlineViewAgenda } from "react-icons/md";


const JobsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, jobs } = await fetchJobs(q, page);

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div>
          <h4>All Job Openings <MdOutlineArrowDropDown /></h4>
        </div>
        <div className={styles.filter}>
        <Search placeholder="Search for a job..." />
          <button className={styles.addButton}><MdOutlineMenu /></button>
        <Link href="/dashboard/jobs/add">
          <button className={styles.addButton}>Create New Job</button>
        </Link>
        </div>
      </div>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>

            <td className={styles.bb}>JOB OPENING ID</td>
            <td className={styles.bb}>TITLE</td>
            <td className={styles.bb}>RECRUITER</td>
            <td className={styles.bb}>TARGET DATE</td>
            <td className={styles.bb}>CLIENT NAME</td>
            <td className={styles.bb}>STATUS</td>
            <td className={styles.bb}>CONTACT NAME</td> 
            <td className={styles.bb}>ACCOUNT MANAGER</td>
            <td className={styles.bb}>DATE CREATED</td>
            <td className={styles.bb}>ACTION</td>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} >
              <td>
                <div className={styles.product}>

                  {job.jobOpeningId}
                </div>
              </td>
              <td>{job.title}</td>
              <td>{job.recruiter}</td>
              <td>{job.targetDate?.toString().slice(4, 16)}</td>
              <td>{job.clientName}</td>
              <td>{job.status}</td>
              <td>{job.contactName}</td>
              <td>{job.accountManager}</td>
              <td>{job.createdAt?.toString().slice(4, 16)}</td>
              <td>
                <div className={styles.buttons}>
                  <Link href={`/dashboard/jobs/${job.id}/view`}>
                    <button className={`${styles.button} ${styles.view}`}>
                    <MdOutlineViewAgenda/>
                    </button>
                  </Link>
                  <Link href={`/dashboard/jobs/${job.id}`}>
                    <button className={`${styles.button} ${styles.edit}`}>
                      <MdOutlineEdit/>
                    </button>
                  </Link>
                  <form action={deleteJob}>
                    <input type="hidden" name="id" value={job.id} />
                    <button className={`${styles.button} ${styles.delete}`}>
                    <MdOutlineDelete/>
                    </button>
                  </form>
                 
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default JobsPage;
