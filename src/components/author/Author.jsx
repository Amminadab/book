import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import img from "../images/services.jpg";
import Back from "../common/Back";

const Author = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const [author, setAuthor] = useState({
    picture_url: "",
    full_name: "",
    followers: [],
    birth_date: "",
    amazon_url: "",
    about: "",
  });

  const fetchAuthor = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(`/author/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      // setBook(response.data.data);
      // console.log(response.data.data.author);
      setAuthor(response.data.data.author);
      // console.log(response.data.data.books);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAuthor();
  }, []);

  return (
    <section className="services mb">
      <Back name="Book" title="Author" cover={img} />
      <div className="featured container">
        <div className="author-detail">
          <div className="aa">
            <img
              className="Author"
              src="img"
              src={author.picture_url}
              alt={author.full_name}
            />
          </div>
          <div>
            <h2>{author.full_name}</h2>
            <p>birthdate : {author.birth_date.slice(0, 10)}</p>
            <p>
              website :{" "}
              <a href={author.website} target="_blank" className="links">
                {author.website}
              </a>
            </p>
            <p>
              Amazon link:{" "}
              <a href={author.amazon_url} target="_blank" className="links">
                Amazon
              </a>
            </p>
            {/* <p>amazon link : {author.amazon_url}</p> */}
            <p>followers : {author.followers.length}</p>
            <p className="pud">{author.about}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Author;
