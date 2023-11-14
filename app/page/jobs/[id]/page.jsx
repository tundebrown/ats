import { updateJob } from "@/app/lib/actions";
import { fetchJob } from "@/app/lib/data";
import styles from "@/app/ui/dashboard/jobs/singleJob/singleJob.module.css";
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

const SingleJobPage = async ({ params }) => {
  // const [value, setValue] = useState('');
  const { id } = params;

  const job = await fetchJob(id);
  const desc = job.jobDesc
  // setValue(job.jobDesc);

  return (
    <div className={styles.container}>
      <div className={styles.jobForm}>
        Edit your job placement
        <form action={updateJob} className={styles.form}>
          <div className={styles.formInput}>
            <label>
              Job Title 
            </label>
            <input type="text" placeholder={job.title} name="title" />
          </div>
          <div className={styles.formInput}>
            <label>
              Status 
            </label>
            <select name="status" id="status">
              <option value={job.status}>{job.status}</option>
              <option value="active">Active</option>
              <option value="closed">Closed</option>
              <option value="on-hold">On-hold</option>
            </select>
          </div>
          <div className={styles.formInput}>
            <label>
              Recruiter 
            </label>
          <input type="text" placeholder={job.recruiter} name="recruiter" />
          </div>
          <div className={styles.formInput}>
            <label>
              Target Date: <span style={{color:"grey"}}>{job.targetDate?.toString().slice(4, 16)}</span>
            </label>
          <input type="date" placeholder={job.targetDate} name="targetDate" />
          </div>
          <div className={styles.formInput}>
            <label>
              Client Name 
            </label>
          <input type="text" placeholder={job.clientName} name="clientName" />
          </div>
          <div className={styles.formInput}>
            <label>
              Contact Name 
            </label>
          <input type="text" placeholder={job.contactName} name="contactName" />
          </div>
          <div className={styles.formInput}>
            <label>
              Experience 
            </label>
          <select name="experience" id="experience">
            <option value={job.experience}>{job.experience}</option>
            <option value="novice">novice</option>
            <option value="intermediate">intermediate</option>
            <option value="advanced">advanced</option>
            <option value="expert">expert</option>
          </select>
          </div>
          <div className={styles.formInput}>
            <label>
              Payment
            </label>
          <input type="number" placeholder={job.payment} name="payment" />
          </div>
          <div className={styles.formInput}>
            <label>
              Location
            </label>
          <input type="text" placeholder={job.location} name="location" />
          </div>
          <div className={styles.formInput}>
            <label>
              Job Type
            </label>
          <select name="jobType" id="jobType">
            <option value={job.jobType}>{job.jobType}</option>
            <option value="fulltime">Full Time</option>
            <option value="parttime">Part Time</option>
            <option value="hourly">Hourly</option>
          </select>
          </div>
          <div className={styles.formInput}>
            <label>
              Skills
            </label>
          <input type="text" placeholder={job.skills} name="skills" />
          </div>

          <input
            type="hidden"
            placeholder={job.jobOpeningId}
            value={job.jobOpeningId}
            name="jobOpeningId"
          />
          
          <div className={styles.formInput}>
            <label>
              Account Manager
            </label>
          <input
            type="text"
            placeholder={job.accountManager}
            name="accountManager"
          />
          </div>
          {/* <input type="hidden" placeholder={job.jobDesc} value={value} name="jobDesc" /> */}
          <label>
              Description:
              <div style={{display: "block", color: "gray"}}>
                {desc}
              </div>
            </label>
          <textarea
            
            name="jobDesc"
            id="jobDesc"
            rows="10"
            placeholder={job.jobDesc}
          ></textarea>
          {/* <p style={{fontSize: "12px"}}>Description</p>
          <ReactQuill theme="snow" value={value} onChange={setValue} className={styles.quill}/>- */}
          <button type="submit">Update</button>
        </form>
      </div>

      {/* <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className={styles.formContainer}>
        <form action={updateJob} className={styles.form}>
          <input type="hidden" name="id" value={product.id} />
          <label>Title</label>
          <input type="text" name="title" placeholder={product.title} />
          <label>Price</label>
          <input type="number" name="price" placeholder={product.price} />
          <label>Stock</label>
          <input type="number" name="stock" placeholder={product.stock} />
          <label>Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
          />
          <label>Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
          />
          <label>Cat</label>
          <select name="cat" id="cat">
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label>Description</label>
          <textarea
            name="desc"
            id="desc"
            rows="10"
            placeholder={product.desc}
          ></textarea>
          <button>Update</button>
        </form>
      </div> */}
    </div>
  );
};

export default SingleJobPage;
