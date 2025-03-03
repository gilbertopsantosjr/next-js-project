import { SubmitButton } from "@/components/SubmitButton"
import { JobApplication, jobStatuses } from "@/app/types"
import { useActionState } from "react"
import { updateJobApplication } from "@/actions/jobapplications"


export default function EditJobApplicationForm({ jobApplication } : { jobApplication: JobApplication }){
    const [state, formAction] = useActionState(updateJobApplication, { errors: {}})
    return (
        <form action={formAction} className="p-4 space-y-4 max-w-96">
            <div>
                <label className="text-white">
                    Status
                    <select className="block w-full p-2 text-black border rounded" name="status" >
                    {jobStatuses.map((status) => (
                        <option key={status} value={status}>
                        {status.charAt(0).toUpperCase() + status.slice(1)} 
                        </option>
                    ))}
                    </select>
                </label>
                {state.errors.status && (
                    <p className="text-red-500">{state.errors.status}</p>
                )}
            </div>

            <div>
                <label className="text-white">
                    Location
                    <select defaultValue={jobApplication.location} disabled className="block w-full p-2 text-black border rounded" name="location" >
                        <option value="US">United State</option>
                        <option value="BR">Brazil</option>
                        <option value="Ireland">Brazil</option>
                    </select>
                </label>
                {state.errors.location && (
                    <p className="text-red-500">{state.errors.location}</p>
                )}
            </div>

            <div>
                <label className="text-white">
                    Title
                    <input type="text" defaultValue={jobApplication.title} disabled className="block w-full p-2 text-black border rounded" name="title" />
                </label>
                {state.errors.title && (
                    <p className="text-red-500">{state.errors.title}</p>
                )}
            </div>

            <div>
                <label className="text-white">
                    Company
                    <input type="text" defaultValue={jobApplication.company.name} disabled className="block w-full p-2 text-black border rounded" name="company" />
                </label>
                {state.errors.company && (
                    <p className="text-red-500">{state.errors.company}</p>
                )}
            </div>

            <div>
                <label className="text-white">
                    Description
                    <textarea className="block w-full p-2 text-black border rounded" name="description" ></textarea>
                </label>
                {state.errors.description && (
                    <p className="text-red-500">{state.errors.description}</p>
                )}
            </div>
           
            <SubmitButton />
        </form>
    )
}