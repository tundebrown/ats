"use server";

import { revalidatePath } from "next/cache";
import { Candidate, Job, Product, User } from "./models";
import { connectToDB } from "./utils";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";

export const addUser = async (formData) => {
  const {
    username,
    lastname,
    email,
    password,
    isAdmin,
    isActive,
    phone,
    address,
    experience,
    highestQualification,
    jobTitle,
    employer,
    expectedSalary,
    currentSalary,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      lastname,
      email,
      password: hashedPassword,
      isAdmin,
      isActive,
      phone,
      address,
      experience,
      highestQualification,
      jobTitle,
      employer,
      expectedSalary,
      currentSalary,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to create user! ${err}`);
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const {
    id,
    username,
    lastname,
    email,
    password,
    phone,
    address,
    isAdmin,
    isActive,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      lastname,
      email,
      password,
      phone,
      address,
      isAdmin,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};



export const addCandidate = async (formData) => {
  const {
    firstname,
    lastname,
    email,
    img,
    phone,
    address,
    experience,
    highestQualification,
    jobTitle,
    employer,
    expectedSalary,
    currentSalary,
  } = Object.fromEntries(formData);

  const actualFilePath = "/nofile.jpg";

  try {
    connectToDB();

    const newCandidate = new Candidate({
      firstname,
    lastname,
    email,
    img: actualFilePath,
    phone,
    address,
    experience,
    highestQualification,
    jobTitle,
    employer,
    expectedSalary,
    currentSalary,
    });

    await newCandidate.save();
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to create candidate! ${err}`);
  }

  revalidatePath("/dashboard/candidates");
  redirect("/dashboard/candidates");
};


export const updateCandidate = async (formData) => {
  const {
    firstname,
    lastname,
    email,
    img,
    phone,
    address,
    experience,
    highestQualification,
    jobTitle,
    employer,
    expectedSalary,
    currentSalary,
  } = Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      firstname,
    lastname,
    email,
    img,
    phone,
    address,
    experience,
    highestQualification,
    jobTitle,
    employer,
    expectedSalary,
    currentSalary,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Candidate.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update candidate!");
  }

  revalidatePath("/dashboard/candidates");
  redirect("/dashboard/candidates");
};



export const addProduct = async (formData) => {
  const { title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newProduct = new Product({
      title,
      desc,
      price,
      stock,
      color,
      size,
    });

    await newProduct.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const updateProduct = async (formData) => {
  const { id, title, desc, price, stock, color, size } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      stock,
      color,
      size,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Product.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update product!");
  }

  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const addJob = async (formData) => {
  const {
    jobOpeningId,
    title,
    jobDesc,
    recruiter,
    targetDate,
    clientName,
    status,
    contactName,
    minExperience,
    maxExperience,
    skills,
    jobType,
    minSalary,
    maxSalary,
    location,
    workplaceModule,
    phone,
    companyName,
    companyWebsite,
    companyLogo,
    // accountManager,
  } = Object.fromEntries(formData);

  const actualFilePath = "/nologo.png";

  try {
    connectToDB();

    const newJob = new Job({
      jobOpeningId,
      title,
      jobDesc,
      recruiter,
      targetDate,
      clientName,
      status,
      contactName,
      minExperience,
      maxExperience,
      skills,
      jobType,
      minSalary,
      maxSalary,
      location,
      workplaceModule,
      phone,
      companyName,
      companyWebsite,
      companyLogo: actualFilePath,
      // accountManager,
    });

    await newJob.save();
  } catch (err) {
    console.log(err);
    throw new Error(`Failed to create job! ${err}`);
  }

  revalidatePath("/dashboard/jobs");
  redirect("/dashboard/jobs");
};

export const updateJob = async (formData) => {
  const {
    id,
    jobOpeningId,
    title,
    jobDesc,
    recruiter,
    targetDate,
    clientName,
    status,
    contactName,
    minExperience,
    maxExperience,
    skills,
    jobType,
    minSalary,
    maxSalary,
    location,
    workplaceModule,
    phone,
    companyName,
    companyWebsite,
    companyLogo,
  } = Object.fromEntries(formData);

  const actualFilePath = "/nologo.png";

  try {
    connectToDB();

    const updateFields = {
      jobOpeningId,
      title,
      jobDesc,
      recruiter,
      targetDate,
      clientName,
      status,
      contactName,
      minExperience,
      maxExperience,
      skills,
      jobType,
      minSalary,
      maxSalary,
      location,
      workplaceModule,
      phone,
      companyName,
      companyWebsite,
      companyLogo,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Job.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update Job!");
  }

  revalidatePath("/dashboard/jobs");
  redirect("/dashboard/jobs");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/products");
};

export const deleteCandidate = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Candidate.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete candidate!");
  }

  revalidatePath("/dashboard/candidates");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Product.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete product!");
  }

  revalidatePath("/dashboard/products");
};

export const deleteJob = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Job.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete job!");
  }

  revalidatePath("/dashboard/jobs");
};

export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  await signIn("credentials", { username, password });
  // try {
  //   revalidatePath("/dashboard");
  //   redirect("/dashboard");
  // } catch (err) {
  //   return err.Error;
  //   // return "Wrong Credentials!";
  //   // console.log(err);
  //   // throw new Error(`Wrong Credentials! ${err}`)
  // }
};
