import StudentList from "../components/StudentList";

export default function StudentListPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100">
      <StudentList />
    </div>
  );
}