import Link from "next/link";
import { FiSave } from "react-icons/fi";
import { IoReturnDownBack } from "react-icons/io5";

import Button from "../common/Button.jsx";
const TopAction = () => {
  return (
    <div className="flex gap-4 ">
      <Link href="/rehabilitation">
        <Button className="hover:bg-slate-900 hover:text-white">
          <IoReturnDownBack className="text-lg" />
        </Button>
      </Link>
      <Button className="hover:bg-slate-900 hover:text-white ">
        <FiSave className="text-lg" />
      </Button>
    </div>
  );
};

export default TopAction;
