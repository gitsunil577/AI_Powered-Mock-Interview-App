import React from 'react'
import { useState } from 'react'
import {Button} from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ResumeUpolad from './ResumeUpolad'
import JobDescripption from './JobDescripption'
import { DialogClose } from '@radix-ui/react-dialog'

function CreateInterviewDialog() {

  const [formData,setFormData]=useState<any>()
  const onHandleInputChange=(field:string,value:string)=>{
    setFormData((prevData:any)=>({
      ...prevData,
      [field]:value
    }))
  }
  return (
    <Dialog>
  <DialogTrigger>
    <Button>+ Create Interview</Button>
  </DialogTrigger>
  <DialogContent className="sm:max-w-[425px]">
    <DialogHeader>
      <DialogTitle>Please submit following details</DialogTitle>
      <DialogDescription>
        <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="resume-upload">Resume Upload</TabsTrigger>
    <TabsTrigger value="job-description">Job Description</TabsTrigger>
  </TabsList>
  <TabsContent value="resume-upload"><ResumeUpolad/></TabsContent>
  <TabsContent value="job-description"><JobDescripption onHandleInputChane={onHandleInputChange}/></TabsContent>
    </Tabs>
      </DialogDescription>
    </DialogHeader>
    <DialogFooter className='mt-4 flex flex-col gap-2'>
        <DialogClose>
            <Button variant="outline" className='w-full'>Cancel</Button>
        </DialogClose>
      <Button type='submit'>Submit</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
  )
}

export default CreateInterviewDialog