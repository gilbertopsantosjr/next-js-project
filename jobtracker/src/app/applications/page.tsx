import { Job } from "@/model/application"
import Link from "next/link"

export default async function Applications({ jobs } : { jobs: Job[] }) {

    return (
      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Job Listings</h1>
        <ul>
          {jobs?.map((job) => (
            <li key={job.id} className="mb-6 p-4 border rounded-lg shadow-lg">
              <Link key={'a_' + job.id} href={"/application-detail"}>
                <img src={job.company.logo} alt={job.company.name} className="w-12 h-12 mb-2" />
                <h2 className="text-xl font-semibold">{job.title}</h2>
                <p>{job.description}</p>
                <p className="text-sm text-gray-500">Company: {job.company.name}</p>
              </Link>
            </li>
          ))}
        </ul>
    </div>
    )
}