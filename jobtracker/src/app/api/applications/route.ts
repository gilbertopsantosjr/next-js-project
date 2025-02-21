import { Job } from "@/model/application"

export async function GET(){
    const res = await fetch("http://localhost:5000/applications");
    const jobs: Job[] = await res.json();
    return new Response(JSON.stringify(jobs), {status: 200, headers: {
        "Content-Type": "application/json"
    }})
}