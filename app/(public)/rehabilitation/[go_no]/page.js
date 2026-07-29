import Button from "../../../../components/common/Button";
const RehabilitationItemPage = async ({ params }) => {
  const { go_no } = await params;
  return (
    <>
      <Button>Back</Button>
      <div className="text-xl text-center">RehabilitationItemPage</div>
      <form action="">
        <label htmlFor="name"></label>
        <input type="text" />
      </form>
      {go_no};
    </>
  );
};

export default RehabilitationItemPage;
