import React, { useEffect } from "react";
import { fetchAllBloggers } from "../store/slices";
import { useDispatch, useSelector } from "react-redux";

const BloggersList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.bloggers);

  useEffect(() => {
    dispatch(fetchAllBloggers());
  }, [dispatch]);

  return (
    <div className="container mt-4">
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
    </div>
  );
};

export default BloggersList;
