import { JobApplication } from "@/app/types";
import EditJobApplicationForm from "./edit-job-application-form";
import { notFound } from "next/navigation";

export default async function EditJobApplication({ params } : { params: Promise<{ id: string}>}) {
    const { id } = await params;
    const res = await fetch(`/api/jobs/applications/${id}`)
    const jobApplication: JobApplication = res.json() as unknown as JobApplication
    if(!jobApplication){
        notFound()
    }
    return <EditJobApplicationForm jobApplication={jobApplication} />
}