import { Job } from "@/model/application"
import Image from 'next/image'

export default function JobApplicationsList({ jobApplications } : { jobApplications: Job[] }){
    return (
        <>
        {jobApplications.map( jobApp => {
            <div key={jobApp.id}>
                <h1> {jobApp.title} </h1>
                <p> {jobApp.title} </p>
                <Image src={'/' + jobApp.company.logo} width={150} height={150} alt={jobApp.company.name} />
                <small> {jobApp.company.name} </small>
            </div>
        })}
        </>
    )
}