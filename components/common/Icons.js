import { BiSave, BiSupport } from "react-icons/bi";
import {
  FaEye,
  FaHome,
  FaLaptopCode,
  FaRegUser,
  FaSearchengin,
  FaTwitter,
  FaUsers,
  FaYoutube,
} from "react-icons/fa";
import { FaBriefcase, FaDiagramProject, FaFacebookF } from "react-icons/fa6";
import { FiEdit } from "react-icons/fi";
import {
  IoIosArrowDown,
  IoMdEyeOff,
  IoMdNotificationsOutline,
  IoMdSettings,
} from "react-icons/io";
import {
  IoBookSharp,
  IoReturnUpBack,
  IoSettingsOutline,
} from "react-icons/io5";
import { MdAutoGraph, MdDeleteOutline } from "react-icons/md";
import { PiWarningCircleLight } from "react-icons/pi";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { RxDashboard } from "react-icons/rx";
import BrandLogo from "../../public/ph-logo-en.png";
import { FcGoogle } from "react-icons/fc";


const Icons = {
  ArrowDown: IoIosArrowDown,
  Back: IoReturnUpBack,
  Home: FaHome,
  Facebook: FaFacebookF,
  User: FaRegUser,
  Users: FaUsers,
  Google: FcGoogle,
  Youtube: FaYoutube,
  Twitter: FaTwitter,
  Logout: RiLogoutCircleRLine,
  Logo: BrandLogo,
  Eye: FaEye,
  EyeOff: IoMdEyeOff,
  Setting: IoSettingsOutline,
  Dashboard: RxDashboard,
  Notification: IoMdNotificationsOutline,
  BookIcon: IoBookSharp,
  CodeLaptop: FaLaptopCode,
  CustomerSupport: BiSupport,
  Marketer: FaSearchengin,
  Briefcase: FaBriefcase,
  Settings: IoMdSettings,
  Save: BiSave,
  Edit: FiEdit,
  Delete: MdDeleteOutline,
  AutoGraph: MdAutoGraph,
  Diagram: FaDiagramProject,
  Warnning: PiWarningCircleLight,
};
export default Icons;
