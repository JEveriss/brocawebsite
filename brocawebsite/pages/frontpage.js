import Logo from "./components/logo";
import Image from "next/image";
import Bun from "../images/buns.jpeg";
export default function FrontPage() {
  return (
    <div className="front-page">
      <Logo />
      <Image src={Bun} alt="Buns"></Image>
    </div>
  );
}
