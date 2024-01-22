const BASE_URL = process.env.REACT_APP_BASE_URL;

//AUTH RNDPOINTS

//POST ENDPOINTS
export const PostendPoints = {
  CREATEPOST_API: BASE_URL + "/post/createPost",
  UPDATEPOST_API: BASE_URL + "/post/update/:id",
  DELETEPOST_API: BASE_URL + "/post/delete/:id",
  GETALLPOST_API: BASE_URL + "/post/getAllPost",
  GETSINGLEPOST_API: BASE_URL + "/post/getPost/:id",
  GETUSERPOST_API: BASE_URL + "/post/user/userId",
};
