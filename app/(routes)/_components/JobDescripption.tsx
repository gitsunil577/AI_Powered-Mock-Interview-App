import React from 'react'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

function JobDescripption({onHandleInputChane}:any) {
  return (
<div>
    <div>
    <label>Job Title</label>
    <Input type="text" placeholder="Ex. Full Stack Nextjs devloper" 
    onChange={(event) => onHandleInputChane('jobTitle', event.target.value)}
        />
    </div>
    <div className='border rounder-2xl p-4 my-4'>
    <label>Job Description</label>
    <Textarea className='h-[200px]' placeholder="Enter Job Description" />
    </div>
</div>
  )
}

export default JobDescripption