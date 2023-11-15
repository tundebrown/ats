"use client";
import { addCandidate } from "@/app/lib/actions";
import styles from "@/app/ui/dashboard/candidates/addCandidate/addCandidate.module.css";
import Image from "next/image";
import { useState } from "react";
import { MdOutlineClose, MdOutlineRemoveRedEye } from "react-icons/md";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css"; // Import the styles

const AddCandidatePage = () => {

  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState();

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };


  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);
  const [fileSizeError, setFileSizeError] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    // Check for file size
    // if (file.size > 2 * 1024 * 1024) {
    //   setFileSizeError("File size exceeds the limit (2 MB).");
    //   return;
    // } else {
    //   setFileSizeError("");
    // }

    // Set the selected file
    setSelectedFile(file);

    // Create a preview URL for the selected file
    const previewURL = URL.createObjectURL(file);
    setPreviewImage(previewURL);
  };

  return (
    <div className={styles.container}>
      <div className={styles.userForm}>
        Enter candidate details
        <form action={addCandidate} className={styles.form}>
          <input
            type="text"
            placeholder="First Name*"
            name="firstname"
            required
          />
          <input type="text" placeholder="Last Name*" name="lastname" required />
          <input type="email" placeholder="Email*" name="email" required />
          <input
            type="hidden"
            placeholder="Phone"
            name="phone"
            id="phone"
            value={phoneNumber}
          />
          <PhoneInput
            international
            defaultCountry="" // You can set a default country
            value={phoneNumber}
            onChange={setPhoneNumber}
            placeholder="Phone Number*"
            inputProps={{
              id: "phone",
              name: "phone",
            }}
            style={{ width: "49%" }}
          />
          <input type="text" placeholder="address*" name="address" />
          <input type="number" placeholder="experience in years*" name="experience" />
          <select name="highestQualification" id="highestQualification">
            <option value="">Highest Qualification*</option>
            <option value="PhD">PhD</option>
            <option value="MSc">MSc</option>
            <option value="Bsc">Bsc</option>
          </select>
          <input type="text" placeholder="Job Title*" name="jobTitle" />
          <input type="text" placeholder="Employer*" name="employer" />
          <input
            type="number"
            placeholder="Expected Salary Annually ($)*"
            name="expectedSalary"
          />
          <input
            type="number"
            placeholder="Current Salary Annually($)*"
            name="currentSalary"
          />
           <div className={styles.inputContainer}>
            <label htmlFor="companyLogo">Upload your resume</label>
            <input
              type="file"
              placeholder="Resume"
              name="img"
              id="img"
              onChange={handleFileChange}
              required
            />
          </div>
          <div className={styles.inputContainer}>
            {/* Show the selected image preview */}
            {previewImage && (
              <Image
                src={previewImage}
                alt="Selected Preview"
                style={{
                  maxWidth: "15%",
                  justifyContent: "flex-start",
                  alignContent: "start",
                }}
              />
            )}
            {fileSizeError && <p style={{ color: "red" }}>{fileSizeError}</p>}
          </div>

          <button type="submit">Submit</button>
          <p style={{fontSize:"10px", color: "gray"}}>Hint: all inputs mark with * are required</p>
        </form>
      </div>
    </div>
  );
};

export default AddCandidatePage;
