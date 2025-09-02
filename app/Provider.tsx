"use client"
import { useMutation } from 'convex/react'
import { api } from '@/convex/_generated/api'
import { useUser } from '@clerk/nextjs'
import React, { useEffect,useState} from 'react'
import { UserDetailContext } from '@/context/UserDetailContext'
import { createContext } from 'vm'

function Provider({children}: any) {

    const {user}=useUser();  
    const CreateUser=useMutation(api.users.CreateNewUser)
    const [userDetail,setUserDetail]=useState<any>();   
        useEffect(()=>{
            user && CreateNewUser();
        },[user])
        const CreateNewUser=async()=>{
            if(user){
            const result=await CreateUser({
                name:user?.fullName || "",
                email:user?.primaryEmailAddress?.emailAddress || "",
                imageUrl:user?.imageUrl || ""
                })
                console.log(result);
                setUserDetail(result);
            }
        }
  return (
    <UserDetailContext.Provider value={{userDetail,setUserDetail}}>
        <div>{children}</div>
    </UserDetailContext.Provider>
  )
}

export default Provider

export const useUserDetailContext=()=>{
    return createContext(UserDetailContext);
}