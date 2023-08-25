import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecentCard = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resentBooks, setResentBooks] = useState([]);

  // const navigate = useNavigate();

  const fetchResentBook = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("/book/new", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResentBooks(response.data.data.books);
      // console.log(response.data.data.books);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchResentBook();
  }, []);

  return (
    <>
      <div className="content grid4 mtop">
        {resentBooks.map((book, index) => {
          const { cover_url, author, genre, title, no_of_page, language, _id } =
            book;
          return (
            <Link className="box shadow" key={index} to={`/book/${_id}`}>
              <div className="img">
                <img src={cover_url} alt={title} />
              </div>
              <div className="text">
                <div className="category flex">
                  {author.map((aut) => {
                    console.log(aut.full_name);
                    return <p>{aut.full_name}</p>;
                  })}
                </div>
                <h4>{title}</h4>
                <p>lang: {language}</p>
              </div>
              <div className="button flex">
                <div>
                  <button className="btn2">{no_of_page}</button>{" "}
                  <label htmlFor="">pages</label>
                </div>
                {genre.map((gen) => {
                  return <p>{gen.title}</p>;
                })}
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default RecentCard;
