import { mutation } from "./_generated/server";
import { v } from "convex/values";
export const CreateNewUser = mutation({
    args:{
        name:v.string(),
        email:v.string(),
        imageUrl:v.string()
    },
    handler:async (ctx,{name,email,imageUrl})=>{
        // If User already exists, do not create a new one
        const User = await ctx.db.query("UserTable")
            .filter((q) => q.eq(q.field("email"), email)).collect();
        // If user does not exist, create a new one
        if (User?.length == 0) {
            const data={
                email:email,
                name:name,
                imageUrl:imageUrl
            }
            const result=await ctx.db.insert("UserTable", {
                ...data
                
            });
            console.log(result);
            return {
                ...data,
                result
               // _id: result
            };
        }
        return User[0];
    } 
})
