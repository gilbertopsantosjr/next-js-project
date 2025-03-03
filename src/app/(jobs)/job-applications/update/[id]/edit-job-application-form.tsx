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
           
            <SubmitButton />
        </form>
    )
}