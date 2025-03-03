"use server"

import { Company, JobApplication } from "@/app/types"
import { redirect } from "next/navigation"
import { randomUUID } from 'crypto'

type Errors = {
    title?: string
    description?: string
    company?: string
    location?: string
}

type FormState = {
    errors: Errors
}

export async function createJobApp(prevState: FormState, formData: FormData){
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const companyName = formData.get("company") as string
    const location = formData.get("location") as string

    const errors: Errors = {  }

    if(!title){
        errors.title = 'Title is required'
    }

    if(!description){
        errors.description = 'Description is required'
    }

    if(!companyName){
        errors.company = 'Company name is required'
    }

    if(Object.keys(errors).length > 0){
        return { errors }
    }

    const company: Company = { name: companyName } satisfies Company

    const job: JobApplication = {
        id: randomUUID(),
        title: title, 
        description: description, 
        createAt: new Date(), 
        updateAt: new Date(), 
        status: 'saved',
        company: company, 
        location: location,
    } satisfies JobApplication

    await fetch(`${process.env.JSON_SERVER_URL}/applications`, { 
        method: 'POST',
        body: JSON.stringify(job),
        headers: {'Content-Type': 'applications/json'}
    })

    redirect("/job-applications")
}