import React, { useEffect, useState } from "react";
import img from "../images/services.jpg";
import Back from "../common/Back";
import "../home/featured/Featured.css";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { ReactComponent as Star } from "../../assets/star.svg";
import { toast } from "react-toastify";

// import FeaturedCard from "../home/featured/FeaturedCard";

const Services = () => {
  const { id } = useParams();
  const starsArray = [1, 2, 3, 4, 5];
  const [isLoading, setIsLoading] = useState(false);
  const [book, setBook] = useState({
    about: "",
    author: [],
    cover_url: "",
    genre: [],
    language: "",
    no_of_page: "",
    title: "",
  });

  const [author, setAuthor] = useState({
    picture_url: "",
    full_name: "",
    followers: [],
    birth_date: "",
    amazon_url: "",
    about: "",
    _id: "",
  });

  const fetchBook = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get(`/book/${id}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setBook(response.data.data.book);
      // console.log(response.data.data.book);

      // console.log(response.data.data.books);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  const fetchAuthor = async () => {
    if (book.author.length !== 0) {
      setIsLoading(true);
      try {
        const response = await axios.get(`/author/${book.author[0]._id}`, {
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
    }
  };
  useEffect(() => {
    fetchBook();
  }, []);

  useEffect(() => {
    fetchAuthor();
  }, [book.author]);

  const followAuthor = async () => {
    setIsLoading(true);

    try {
      const response = await axios.patch(
        `/user/followauthor`,
        { id: author._id },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      /*error*/
      /*error*/
      /*error*/
      /*error*/
      /*error*/

      // setBook(response.data.data.book);
      toast.success(response?.data?.message);
      console.log(response, "r");

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <>
      <section className="services mb">
        <Back name="Book" title="Detail" cover={img} />
        <div className="featured container">
          <div className="book-detail">
            <div className="aa">
              <img
                src="img"
                className="img_b"
                src={book.cover_url}
                alt={book.title}
              />
            </div>
            <div>
              <h3 className="aa f3">{book.title}</h3>
              {book.author.length !== 0 &&
                book.author.map((aut) => (
                  <Link className="links" to={`/author/${aut._id}`}>
                    {aut.full_name}
                  </Link>
                ))}

              <p>{book.about}</p>
              {book.no_of_page && (
                <>
                  <p className="pud">{book.no_of_page} ,Paperback</p>
                  <p className="pud">language : {book.language}</p>
                </>
              )}

              <div>
                <h2>Ratings</h2>
                <h3>What do you think?</h3>
                {starsArray.map((star) => (
                  <Star className="star" />
                ))}
              </div>

              <div>
                <h2>About the author</h2>
                <div className="con">
                  <img
                    src="img"
                    className="img_c"
                    src={author.picture_url}
                    alt={author.title}
                  />
                  <div>
                    <Link className="links" to={`/author/${author._id}`}>
                      {author.full_name}
                    </Link>
                    {
                      <div className="grid2">
                        <p className="pud">
                          Followers : {author.followers.length}
                        </p>
                        <button
                          className="btn33"
                          disabled={isLoading}
                          onClick={followAuthor}
                        >
                          Follow
                        </button>
                      </div>
                    }
                    <p className="pud">{author.about}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
