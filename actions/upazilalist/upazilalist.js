export const getUpazilaList = async () => {
  try {
    const req = await fetch("http://localhost:3000/api/upazilalists");
    const response = await req.json();
    return response.data;
  } catch (error) {
    console.log("this error from get faq actions", error);
  }
};
