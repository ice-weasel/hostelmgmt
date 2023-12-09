import Link from "next/link";

export default function LandingPage() {

  return (
    <div className=" flex flex-col justify-evenly text-black">
      <Link href="/login">Login</Link>
      <Link href="/home">Home</Link>
    </div>
    
  );
}
