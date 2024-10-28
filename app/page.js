import Image from "next/image";
import StudentList from "./components/StudentList";
import Form from "./components/Form";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center p-8 ">
      <main className="flex flex-col items-center justify-center p-8 ">
      <StudentList />
      <Form />
    </main>
    </div>
  );
}
