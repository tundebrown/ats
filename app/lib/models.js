import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    lastname: {
      type: String,
      required: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isActive: {
      type: Boolean,
      default: true,
    },
    phone: {
      type: String,
    },
    address: {
      type: String,
    },
    experience:{
      type: String,
    },
    highestQualification:{
      type: String,
    },
    jobTitle: {
      type: String,
    },
    employer: {
      type: String,
    }, 
    expectedSalary: {
      type: Number,
    },
    currentSalary: {
      type: Number,
    }
  },
  { timestamps: true }
);

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    stock: {
      type: Number,
      required: true,
      min: 0,
    },
    img: {
      type: String,
    },
    color: {
      type: String,
    },
    size: {
      type: String,
    },
  },
  { timestamps: true }
);

const jobSchema = new mongoose.Schema(
  {
    jobOpeningId: {
      type: String,
      required: true,
      unique: true,
    },
    title: {
      type: String,
      // required: true,
    },
    jobDesc: {
      type: String,
      // required: true,
    },
    recruiter: {
      type: String,
      // required: true,
    },
    targetDate: {
      type: Date,
      // required: true,
    },
    clientName: {
      type: String,
      // required: true,
    },
    status: {
      type: String,
      // required: true,
    },
    contactName: {
      type: String,
      // required: true,
    },
    experience: {
      type: String,
      // required: true,
    },
    skills: {
      type: String,
      // required: true,
    },
    jobType: {
      type: String,
      // required: true,
    },
    payment: {
      type: String,
      // required: true,
    },
    location: {
      type: String,
      // required: true,
    },
    accountManager: {
      type: String,
      // required: true,
    },
  },
  { timestamps: true },
);

export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Product =
  mongoose.models.Product || mongoose.model("Product", productSchema);
export const Job = mongoose.models.Job || mongoose.model("Job", jobSchema);
