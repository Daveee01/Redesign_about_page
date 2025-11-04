import { useParams, Link } from "react-router-dom";

const students = [
  { id: 1, name: "Andi", major: "Informatika", gpa: 3.7 },
  { id: 2, name: "Budi", major: "Sistem Informasi", gpa: 3.5 },
  { id: 3, name: "Citra", major: "Teknologi Informasi", gpa: 3.9 },
];

const StudentDetail = () => {
  const { id } = useParams<{ id: string }>();
  const student = students.find((s) => s.id === Number(id));

  if (!student) {
    return (
      <div className="text-center mt-10">
        <p className="text-red-500 font-semibold">Mahasiswa tidak ditemukan.</p>
        <Link to="/students" className="text-blue-600 underline mt-4 block">
          Kembali ke daftar
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto bg-white shadow-md rounded-xl p-6 mt-8">
      <h2 className="text-2xl font-bold mb-3 text-blue-700">Detail Mahasiswa</h2>
      <p className="text-gray-800">
        <span className="font-semibold">Nama:</span> {student.name}
      </p>
      <p className="text-gray-800">
        <span className="font-semibold">Jurusan:</span> {student.major}
      </p>
      <p className="text-gray-800">
        <span className="font-semibold">IPK:</span> {student.gpa}
      </p>
      <Link
        to="/students"
        className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
      >
        Kembali
      </Link>
    </div>
  );
};

export default StudentDetail;
