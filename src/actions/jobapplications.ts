"use server"

import { Company, JobApplication } from "@/app/types"
import { redirect } from "next/navigation"
import { randomUUID } from 'crypto'

type JobApplicationFormErrors = {
    title?: string
    company?: string
    description?: string
    location?: string
    status?: string
}

type JobApplicationFormState = {
    errors: JobApplicationFormErrors
}

export async function updateJobApplication(prevState: JobApplicationFormState, formData: FormData){
    const status = formData.get("status") as string
    const description = formData.get("description") as string

    const errors: JobApplicationFormErrors = {  }

    if(!status){
        errors.status = 'Status of job application is required'
    }

    if(!description){
        errors.description = 'Description is required'
    }

    if(Object.keys(errors).length > 0){
        return { errors }
    }

    const job: JobApplication = {
        id: ??,
        title: title, 
        description: description, 
        createAt: new Date(), 
        updateAt: new Date(), 
        status: 'saved',
        company: company, 
        location: location,
    } satisfies JobApplication


    await fetch(`${process.env.JSON_SERVER_URL}/applications`, { 
        method: 'PUT',
        body: JSON.stringify(job),
        headers: {'Content-Type': 'applications/json'}
    })

    redirect("/job-applications")

}

export async function createJobApp(prevState: JobApplicationFormState, formData: FormData){
    const title = formData.get("title") as string
    const description = formData.get("description") as string
    const companyName = formData.get("company") as string
    const location = formData.get("location") as string

    const errors: JobApplicationFormErrors = {  }

    if(!title){
        errors.title = 'Title is required'
    }

    if(!description){
        errors.description = 'Description is required'
    }

    if(!location){
        errors.location = 'Location is required'
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