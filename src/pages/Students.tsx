import { Link } from "react-router-dom";

const students = [
  { id: 1, name: "Andi", major: "Informatika" },
  { id: 2, name: "Budi", major: "Sistem Informasi" },
  { id: 3, name: "Citra", major: "Teknologi Informasi" },
];

const Students = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white shadow-md p-6 rounded-xl mt-8">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">Daftar Mahasiswa</h2>
      <ul className="divide-y divide-gray-200">
        {students.map((s) => (
          <li key={s.id} className="py-3 flex justify-between items-center">
            <div>
              <p className="font-semibold text-gray-800">{s.name}</p>
              <p className="text-sm text-gray-500">{s.major}</p>
            </div>
            <Link
              to={`/students/${s.id}`}
              className="px-3 py-1 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            >
              Detail
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Students;
