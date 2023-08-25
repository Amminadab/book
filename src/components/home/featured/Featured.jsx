import React, { useEffect, useState } from "react";
import Heading from "../../common/Heading";
import "./Featured.css";
import FeaturedCard from "./FeaturedCard";
import axios from "axios";

const Featured = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [resentBooks, setResentBooks] = useState([]);

  const fetchResentBook = async () => {
    setIsLoading(true);

    try {
      const response = await axios.get("/book/new", {
        headers: {
          "Content-Type": "application/json",
        },
      });
      setResentBooks(response.data.data.books);
      console.log(response.data.data.books);

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
      <section className="featured background">
        <div className="container">
          <Heading
            title="Featured Property Types"
            subtitle="Find All Type of Property."
          />
          <div className="content grid5 mtop">
            {resentBooks.map((item) => (
              <FeaturedCard item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Featured;
