"use server";

import connectMongo from "../../dbConnect/connectMongo.js";
import Testimonial from "../../models/Testimonial.js";

export const getTestimonials = async () => {
  try {
    await connectMongo();
    const testimonial = await Testimonial.find().sort({ createdOn: -1 });
    const res = JSON.parse(JSON.stringify(testimonial));
    return res;
  } catch (error) {
    console.log(error);
  }
};
