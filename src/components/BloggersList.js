import React from "react";

export const BloggersList = () => {
  const bloggers = [
    {
      id: "1",
      name: "Juan Perez",
      website: "juanperez.io",
      picture_url: "https://placekitten.com/200/300",
      email: "conact@juanperez.io",
      friends: [],
    },
    {
      id: "2",
      name: "Amano Pikamee",
      website: "pikamee.io",
      picture_url: "https://placekitten.com/200/300",
      email: "contact@pikamee.io",
      friends: ["1"],
    },
    {
      id: "3",
      name: "Tony Stark",
      website: "tonystark.io",
      picture_url: "https://placekitten.com/200/300",
      email: "contact@tonystark.io",
      friends: ["1", "2"],
    },
  ];
  return (
    <div className="container">
      <div className="row">
        {bloggers.map((blogger, index) => (
          <div key={index} className="col-md-3">
            <div className="card-body">
              <img className="m-2" src={blogger.picture_url} alt="avatar"></img>
              <h5 className="card-title">{blogger.name}</h5>
              <p className="card-text">{blogger.email} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
