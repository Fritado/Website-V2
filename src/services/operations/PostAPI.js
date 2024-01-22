import {apiConnector} from "../apiConnector";
import {PostendPoints } from "../apis";

const {CREATEPOST_API , UPDATEPOST_API , DELETEPOST_API , GETALLPOST_API} = PostendPoints;

export const getAllBlogPosts = async() =>{
    let result;

    try{
        const response  = await apiConnector("GET" ,  GETALLPOST_API)

        if(!response?.data?.success)
            throw new Error("Could not Fetch Blog page data");

         result = response?.data;

    }
    catch(error){
        console.log("Blog Post API Error..." , error);
        result = error.response?.data;
    }
}