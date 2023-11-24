import React, { useState } from "react";
import Sidebar from "./Sidebar";
import "./Surfebooks.css";
import halfBlood from "../images/halfBlood.jpg";
import harrypotter from "../images/harrypotter.jpg";
import fifty1 from "../images/fifty1.jpg";
import Header from "./Header";
import addie from "../images/addie.jpg";
import lord from "../images/lord.png";
import time from "../images/time.jpg";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import SubscriptionForm from "./SubscriptionForm";



const SurfEBooks = () => {
  const [showForm, setShowForm] = useState(false);
  const [content1, setContent1] = useState("");
  const [content2, setContent2] = useState("");
  const [ebooks, setEbooks] = useState([
    {
      id: 1,

      title: "The Time Traveler's Wife ",

      author: "Audrey Niffenegger",

      category: "Romance",
      image: time,
    },

    {
      id: 2,

      title: "The Lord of the Rings",

      author: "John Ronald Reuel Tolkien",

      category: "Fantasy",
      image: lord,
    },
    {
      id: 3,

      title: "The Invisible Life of Addie LaRue",

      author: "V. E. Schwab",

      category: "Fantasy",
      image: addie,
    },
    {
      id: 4,

      title: "Fifty Shades Of Grey ",

      author: "E. L. James",

      category: "Romance",
      image: fifty1,
    },
    {
      id: 5,

      title: "Harry Potter and the Prisoner of Azkaban",

      author: "J.K. Rowling",

      category: "Fantasy",
      image: harrypotter,
    },
    {
      id: 6,

      title: "Harry Potter and the Half-Blood Prince",

      author: "J.K. Rowling",

      category: "Fantasy",
      image: halfBlood,
    },
  ]);

  const [selectedCategory, setSelectedCategory] = useState("All");

  const [searchTerm, setSearchTerm] = useState("");

  const filterEbooks = () => {
    let filteredEbooks = [...ebooks];

    if (selectedCategory !== "All") {
      filteredEbooks = filteredEbooks.filter(
        (ebook) => ebook.category === selectedCategory
      );
    }

    if (searchTerm) {
      const searchTermLower = searchTerm.toLowerCase();

      filteredEbooks = filteredEbooks.filter(
        (ebook) =>
          ebook.title.toLowerCase().includes(searchTermLower) ||
          ebook.author.toLowerCase().includes(searchTermLower)
      );
    }

    return filteredEbooks.slice(0, 6);
  };

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const getPreviewPath = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, "")
      .replace(/^-+|-+$/g, "");
  };

  const saveSubscribeCountToLocalStorage = (newCount) => {
    localStorage.setItem("subscribeCount", newCount);
  };

  const [totalSubscribeCount, setTotalSubscribeCount] = useState(0);

  const SubsCount = () => {
    // Increment the total subscribe count when the "Subscribe" button is clicked

    const newCount = totalSubscribeCount + 1;

    setTotalSubscribeCount(newCount);

    // Save the updated count to local storage

    saveSubscribeCountToLocalStorage(newCount);
  };

  

  const openForm = () => {
    console.log("Opening form"); // Add this for debugging
    setShowForm(true);
  };

  const closeForm = () => {
    console.log("Closing form"); // Add this for debugging
    setShowForm(false);
  };

  const saveSubscription = (input1, input2) => {
    setContent1(input1);
    setContent2(input2);
    closeForm();
  };

  return (
    <>
      <div className="ebook">
        <div className="ebook-container">
          <div className="ebook-container-border">
            <h2>E-Book Filters</h2>

            <div className="filters">
              <div className="filter">
                <label>Search by Category :</label>

                <select
                  value={selectedCategory}
                  onChange={handleCategoryChange}
                >
                  <option value="All">All</option>

                  <option value="Fantasy">Fantasy</option>

                  <option value="Romance">Romance</option>

                  {/* Add more category options as needed */}
                </select>
              </div>

              <div className="filter">
                <label>Search by Name/Author :</label>

                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={handleSearchChange}
                />
              </div>
            </div>
          </div>

          <div className="ebook-list">
            {filterEbooks().map((ebook) => (
              <div className="ebook-card" key={ebook.id}>
                <h3>{ebook.title}</h3>

                <p>Author: {ebook.author}</p>

                <p>Category: {ebook.category}</p>

                <img
                  src={ebook.image}
                  alt={ebook.title} // You can specify an alt text for accessibility
                  style={{ maxWidth: "200px" }} // Adjust the image size as needed
                />

                <div className="card-actions">
                  <Link
                    class="btn btn-primary m-1"
                    to={`/previews/${getPreviewPath(ebook.title)}`}
                  >
                    Preview
                  </Link>
                  <button
                    className="btn btn-success m-1"
                    onClick={() => {
                      openForm(); // Call openForm function
                      SubsCount(); // Call SubsCount function
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <div className="popup">
          <div className="popup-inner">
            <SubscriptionForm onSave={saveSubscription} onCancel={closeForm} />
          </div>
        </div>
      )}
      

      <Sidebar />
    </>
  );
};

export default SurfEBooks;
