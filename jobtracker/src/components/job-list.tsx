import { Job } from "@/model/application"

export default function JobApplicationsList({ jobApplications } : { jobApplications: Job[] }){
    return (
        <>
        {jobApplications.map( jobApp => {
            <div key={jobApp.id}>
                <h1> {jobApp.title} </h1>
                <p> {jobApp.title} </p>
                <small> {jobApp.company.name} </small>
            </div>
        })}
        </>
    )
}