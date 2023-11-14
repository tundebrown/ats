"use client"
import { addJob } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/jobs/addJob/addJob.module.css";
// import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
// import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const AddJobPage = () => {
  // const [value, setValue] = useState('');
  const uniqueValue = `ATP_${uuidv4()}`;

  return (
    <div className={styles.container}>
      <div className={styles.jobForm}>
        <h4>
        What is the job you are hiring for?
        </h4>
        <form action={addJob} className={styles.form}>
          <input type="text" placeholder="Job Title" name="title" required />
          <select name="status" id="status">
            <option value="general">Choose a Status</option>
            <option value="active">Active</option>
            <option value="closed">Closed</option>
            <option value="on-hold">On-hold</option>
          </select>
          <input type="text" placeholder="Recruiter" name="recruiter" required />
          <input type="date" placeholder="Target Date" name="targetDate" required />
          <input type="text" placeholder="Client Name" name="clientName" />
          <input type="text" placeholder="Contact Name" name="contactName" />
          <select name="experience" id="experience">
            <option value="general">Choose an Experience Level</option>
            <option value="novice">novice</option>
            <option value="intermediate">intermediate</option>
            <option value="advanced">advanced</option>
            <option value="expert">expert</option>
          </select>
          <input type="number" placeholder="payment range" name="payment" />
          <input type="text" placeholder="Location (Remote, Office, etc)" name="location" />
          <select name="jobType" id="jobType">
            <option value="general">Job Type</option>
            <option value="fulltime">Full Time</option>
            <option value="parttime">Part Time</option>
            <option value="hourly">Hourly</option>
          </select>
          <input type="text" placeholder="Specify Required Skills" name="skills" />
          <input type="text" placeholder="Account Manager" name="accountManager" />
          {/* <input type="hidden" placeholder="Job Description" value={value} name="jobDesc" /> */}
          <input type="hidden" placeholder="Job Id" value={uniqueValue} name="jobOpeningId" />
          <textarea
            required
            name="jobDesc"
            id="desc"
            rows="16"
            placeholder="Description"
          ></textarea>
          {/* <p style={{fontSize: "12px"}}>Description</p> */}
          {/* <ReactQuill theme="snow" value={value} onChange={setValue} className={styles.quill}/>- */}
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className={styles.help}>Would you like some help in creating the job description?</div>
    </div>
  );
};

export default AddJobPage;
