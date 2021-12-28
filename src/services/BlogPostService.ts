import 
{ 
    JsonPlaceHolderURI, 
    commentServiceName, 
    postServiceName, 
} from "./Utils";


const BlogPostService = 
{
    getsAllPosts : async (): Promise<any> => 
    {
        return await fetch(`${JsonPlaceHolderURI}${postServiceName}`)
        .then(async response =>
        {              
            return await response.json().then(data => data);                
        }).catch((err) => 
        {
            console.log(err);
        });
    },
    getsSinglePost : async (postId: number): Promise<any> => 
    {
        return await fetch(`${JsonPlaceHolderURI}${postServiceName}/${postId}`)
        .then(async response =>
        {              
            return await response.json().then(data => data);                
        }).catch((err) => 
        {
            console.log(err);
        });
    },
    getsAllComments : async (): Promise<any> => 
    {
        return await fetch(`${JsonPlaceHolderURI}${commentServiceName}`)
        .then(async response =>
        {              
            return await response.json().then(data => data);                
        }).catch((err) => 
        {
            console.log(err);
        });
    },
    getsSingleComment : async (commentId: number): Promise<any> => 
    {
        return await fetch(`${JsonPlaceHolderURI}${commentServiceName}/${commentId}`)
        .then(async response =>
        {              
            return await response.json().then(data => data);                
        }).catch((err) => 
        {
            console.log(err);
        });
    },
    getsCommentsByPost : async (postId: number): Promise<any> => 
    {
        return await fetch(`${JsonPlaceHolderURI}${postServiceName}/${postId}/comments`)
        .then(async response =>
        {                
            return await response.json().then(data => data);                
        }).catch((err) => 
        {
            console.log(err);
        });
    }


}

export default BlogPostService;