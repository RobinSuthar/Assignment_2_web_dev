import Image from "next/image";
import StudentList from "./components/StudentList";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 ">
      <main className="flex flex-col items-center justify-center p-8 ">
        <h1 className="text-2xl">Welcome to the French Fries School of Ultimate French Frying.</h1>
        <p className="mt-8">Find your student information under the Student List, or add yourself as a student in the forms section.</p>
      </main>
    </div>
  );
}
