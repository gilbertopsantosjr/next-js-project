import { useRouter } from "next/router";
import { Job } from "@/model/application"

export default async function ApplicationDetail(){
 const { id } = context.params!;
  const res = await fetch(`http://localhost:5000/applications/${id}`); // Fetch from JSON server
  const job: Job = await res.json();
  const router = useRouter();

  if (!job) return <p>Loading...</p>;

    return(
        <div className="max-w-2xl mx-auto p-6 border rounded-lg shadow-lg">
        <button
          onClick={() => router.push("/applications")}
          className="mb-4 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded"
        >
          ← Back to Jobs
        </button>
  
        <img src={job.company.logo} alt={job.company.name} className="w-16 h-16 mb-4" />
        <h1 className="text-2xl font-bold">{job.title}</h1>
        <p className="text-gray-600">{job.description}</p>
        <p className="text-sm text-gray-500 mt-2">Company: {job.company.name}</p>
        <p className="text-xs text-gray-400">
          Created at: {new Date(job.createAt).toLocaleDateString()}
        </p>
        <p className="text-xs text-gray-400">
          Updated at: {new Date(job.updateAt).toLocaleDateString()}
        </p>
      </div>
    )
}