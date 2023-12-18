import "tailwindcss/tailwind.css";
import "tailwind.config.ts";
import Image from "next/image";
import { Accounts } from "@/app/api/admin/route";

export default async function Home() {
  
  let students: Accounts[] = [];
  const response = await fetch('/api/admin');
  if(response.ok) {
    const accountsJson = await response.json();
    if(accountsJson && accountsJson.length > 0) students = accountsJson
  }
  return (
    <div className="flex flex-col  ">
      <nav className=" justify-between items-center  mr-12">
        <div className="flex flex-row mt-3 items-center ">
          <div className=" ml-7  shadow-blue-300 ">
            <Image
              alt="home"
              src="/house-solid.svg"
              layout="fixed"
              className="border-t-2 hover:border-t-4 rounded-md"
              height={32}
              width={32}
            />
          </div>
          <div className=" ml-12  shadow-blue-300 ">
            <Image
              alt="home"
              src="/logout.png"
              layout="fixed"
              className="border-t-2   hover:border-t-4   rounded-md"
              height={32}
              width={32}
            />
          </div>
        </div>
        <p className="text-3xl  flex justify-center text-center">Hostel Management</p>
      </nav>

      <div className="rounded-md mt-7  min-h-screen bg-blue-300 shadow-blue-300">
        <p className="text-3xl text-center">Student Details</p>
          {students.map()}
      </div>
    </div>
  );
}
