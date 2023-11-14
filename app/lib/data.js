import { MdEmail, MdFileCopy, MdOutlineWork, MdPerson, MdSupervisedUserCircle } from "react-icons/md";
import { Job, Product, User } from "./models";
import { connectToDB } from "./utils";

export const fetchUsers = async (q, page) => {
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 10;

  try {
    connectToDB();
    // const count = await User.find({ username: { $regex: regex } }).count();
    // const users = await User.find({ username: { $regex: regex } })
    const count = await User.find({$and: [{ username: { $regex: regex }, }, { isAdmin: false }]} ).count();
    const users = await User.find({$and: [{ username: { $regex: regex }, }, { isAdmin: false }]})
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, users };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch users!");
  }
};

export const fetchUser = async (id) => {
  console.log(id);
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch user!");
  }
};

export const fetchProducts = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 2;

  try {
    connectToDB();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, products };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch products!");
  }
};

export const fetchProduct = async (id) => {
  try {
    connectToDB();
    const product = await Product.findById(id);
    return product;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch product!");
  }
};

export const fetchJobs = async (q, page) => {
  console.log(q);
  const regex = new RegExp(q, "i");

  const ITEM_PER_PAGE = 20;

  try {
    connectToDB();
    const count = await Job.find({ title: { $regex: regex } }).count();
    const jobs = await Job.find({ title: { $regex: regex } })
      .limit(ITEM_PER_PAGE)
      .skip(ITEM_PER_PAGE * (page - 1));
    return { count, jobs };
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch jobs!");
  }
};

export const fetchJob = async (id) => {
  try {
    connectToDB();
    const job = await Job.findById(id);
    return job;
  } catch (err) {
    console.log(err);
    throw new Error("Failed to fetch job!");
  }
};


// DUMMY DATA

export const cards = [
  {
    id: 1,
    title: "Active Jobs",
    number: 0,
    icon: <MdOutlineWork />,
    color: "pale",
  },
  {
    id: 2,
    title: "Applicants",
    number: 0,
    icon: <MdPerson />,
    color: "indigo",
  },
  {
    id: 3,
    title: "Interviews",
    number: 0,
    icon: <MdSupervisedUserCircle />,
    color: "purple",
  },
  {
    id: 3,
    title: "Submissions",
    number: 0,
    icon: <MdFileCopy />,
    color: "indigo",
  },
  {
    id: 3,
    title: "Hire",
    number: 0,
    icon: <MdEmail />,
    color: "pale",
  },
];
