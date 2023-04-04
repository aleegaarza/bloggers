import React, { useEffect } from "react";
import { fetchAllBloggers } from "../store/slices";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";

const getDataFromLocalStorage=()=>{
  const dataFromLS = localStorage.getItem('bloggers')
  if(dataFromLS){
    return JSON.parse(dataFromLS)
  }
  else{
    return []
  }
}

const BloggersList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.bloggers);

  const [bloggers, setBloggers] = useState(getDataFromLocalStorage())
  const [userName, setUserName] = useState('')
  const [bloggerPic, setBloggerPic] = useState('')
  const [email, setEmail] = useState('')

  const deleteBlogger=(userName)=>{
    const filteredBloggers=bloggers.filter((element, index)=>{
      return element.userName !== userName
    })
    setBloggers(filteredBloggers)
  }

     const handleSubmit=(e)=>{
      e.preventDefault()
      let blogger={
        userName,
        bloggerPic,
        email
      }
      setBloggers([...bloggers, blogger])
      setUserName('')
      setBloggerPic('')
      setEmail('')
     }

  useEffect(() => {
    dispatch(fetchAllBloggers());
    localStorage.setItem('bloggers', JSON.stringify(bloggers))
  }, [dispatch, bloggers]);

  return (
    <div className="container mt-4">
      <div className="container bg-light">
        <h1>Add new blogger</h1>
        <form onSubmit={handleSubmit}>
        <label className="form-label">Blogger name</label>
        <input className="form-control form-control-lg" type="text" placeholder="Name" value={userName} onChange={(e)=> setUserName(e.target.value)} >
        </input>
        <label className="form-label mt-1">Blogger picture</label>
        <input className="form-control form-control-lg" type="file" placeholder="Image url" value={bloggerPic} onChange={(e)=> setBloggerPic(e.target.value)} >
        </input>
        <label className="form-label mt-1">Blogger email</label>
        <input className="form-control form-control-lg" type="email" placeholder="name@example.com" value={email} onChange={(e)=> setEmail(e.target.value)} >
        </input>
        <button type="submit" className="btn btn-primary mt-2">
          Add blogger
        </button>
        </form>
      </div>
      <div className="row">
        {list.map((blogger, index) => (
          <div key={index} className="col-md-3 mt-4 card">
            <div className="card-body">
              <img
                className="card-img-top"
                src={blogger.avatar}
                alt="avatar"
              ></img>
              <h5 className="card-title">{`${blogger.first_name} ${blogger.last_name}`}</h5>
              <p className="card-text">{blogger.email} </p>
            </div>
          </div>
        ))}
        
      </div>
      <div className="container">
        {bloggers.length > 0 &&<>
        <div className="table-responsive">
          <table className="table">
            <thead>
            <tr>
              <th>Blogger Name</th>
              <th> Image</th>
              <th>Email</th>
              <th>Delete</th>
            </tr>
            </thead>
            <tbody>
              {bloggers.map(blogger=>(
            <tr key={blogger.userName}>
                <td>{blogger.userName} </td>
                <td>{blogger.bloggerPic} </td>
                <td>{blogger.email} </td>
                <td onClick={()=>deleteBlogger(blogger.userName)} ><button className="btn btn-danger">Delete</button></td>
            </tr>
      ))}
              </tbody>
          </table>
          </div></>}
      {bloggers.length < 1 && <div>There are no new bloggers yet</div>}
      </div>
    </div>
  );
};

export default BloggersList;
