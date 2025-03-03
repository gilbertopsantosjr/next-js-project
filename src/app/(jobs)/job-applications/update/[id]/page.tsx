import { JobApplication } from "@/app/types";
import EditJobApplicationForm from "./edit-job-application-form";

export default async function EditJobApplication({ params } : { params: Promise<{ id: string}>}) {
    const { id } = await params;
    const jobApplication: JobApplication = await fetch(`/api/jobs/applications/${id}`)
    return <EditJobApplicationForm jobApplication={jobApplication} />
}