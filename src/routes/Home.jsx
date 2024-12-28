import React, { useState } from "react";
import axios from "axios";
import Logo from "../images/logo.webp";

const cuisineOptions = [
  "Greek",
  "South Indian Recipes",
  "Konkan",
  "Thai",
  "Indian",
  "Goan Recipes",
  "Italian Recipes",
  "Coastal Karnataka",
  "North Indian Recipes",
  "Mangalorean",
  "Sichuan",
  "Andhra",
  "Mexican",
  "Asian",
  "Continental",
  "Oriya Recipes",
  "Indo Chinese",
  "French",
  "Mughlai",
  "Japanese",
  "Kerala Recipes",
  "Chettinad",
  "African",
  "Hyderabadi",
  "Parsi Recipes",
  "Karnataka",
  "Bengali Recipes",
  "Sri Lanka",
  "Sindhi",
  "Mediterranean",
  "Tamil Nadu",
  "Uttar Pradesh",
  "Udupi",
  "Fusion",
  "Maharashtrian Recipes",
  "Rajasthani",
  "Indonesian",
  "Middle Eastern",
  "Gujarati Recipes",
  "Punjabi",
  "European",
  "Malaysian",
  "Awadhi",
  "Malvani",
  "South Karnataka",
  "Bihari",
  "Sri Lankan",
  "Chinese",
  "Arab",
  "Korean",
  "Kashmiri",
  "Pakistani",
  "Himachal",
  "North Karnataka",
  "North East India Recipes",
  "Coorg",
  "Lucknowi",
  "Cantonese",
  "Nepalese",
  "Vietnamese",
  "Haryana",
  "Malabar",
  "Uttarakhand-North Kumaon ",
  "Jewish",
  "Hunan",
  "Jharkhand",
  "Assamese",
  "Caribbean ",
  "Uttarakhand - North Kumaon",
  "American",
  "Karnataka Coastal",
  "Afghan",
  "Kongunadu",
  "Burmese",
  "British",
  "Caribbean",
  "Nagaland",
  "Bangladeshi",
  "Singapore",
  "Swedish",
];

const courseOptions = [
  "World Breakfast",
  "Lunch",
  "Dinner",
  "Side Dish",
  "Snack",
  "Main Course",
  "Appetizer",
  "Dessert",
  "Indian Breakfast",
  "North Indian Breakfast",
  "One Pot Dish",
  "South Indian Breakfast",
  "Brunch",
];

const dietOptions = [
  "Diabetic Friendly",
  "Gluten Free",
  "Vegetarian",
  "High Protein Vegetarian",
  "No Onion No Garlic (Sattvic)",
  "Non Vegeterian",
  "High Protein Non Vegetarian",
  "Eggetarian",
  "Vegan",
  "Sugar Free Diet",
];

const Home = () => {
  const [formData, setFormData] = useState({
    cuisine: "",
    course: "",
    diet: "",
    prepTime: "",
    cookTime: "",
  });

  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setResult(null);

    try {
      const response = await axios.post(process.env.REACT_APP_API, {
        cuisine: formData.cuisine,
        course: formData.course,
        diet: formData.diet,
        prep_time: formData.prepTime,
        cook_time: formData.cookTime,
      });
      setResult(response.data);
    } catch (err) {
      setError("Failed to fetch prediction. Check API connection.");
      console.error("Axios Error:", err.message);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="bg-light text-center py-5">
        <div className="container">
          <img
            src={Logo}
            alt="SavorAI Logo"
            className="mb-3"
            style={{ width: "150px", height: "150px", borderRadius: "50%" }}
          />
          <h1 className="fw-bold mb-3">Welcome to SavorAI</h1>
          <p className="lead">
            Discover the perfect dish with our AI-powered food recommendation
            system.
          </p>
          <a href="#form-section" className="btn btn-primary mt-3">
            Get Started
          </a>
        </div>
      </div>

      {/* Form Section */}
      <div id="form-section" className="container py-5 bg-light rounded shadow">
        <h2 className="text-center mb-4">Find Your Perfect Dish</h2>
        <form onSubmit={handleSubmit}>
          <div className="row g-3">
            {/* Cuisine Dropdown */}
            <div className="col-md-6">
              <label htmlFor="cuisine" className="form-label">
                Cuisine
              </label>
              <select
                id="cuisine"
                className="form-select"
                onChange={handleChange}
              >
                <option defaultValue>Select Cuisine</option>
                {cuisineOptions.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
            </div>

            {/* Course Dropdown */}
            <div className="col-md-6">
              <label htmlFor="course" className="form-label">
                Course
              </label>
              <select
                id="course"
                className="form-select"
                onChange={handleChange}
              >
                <option defaultValue>Select Course</option>
                {courseOptions.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>
            </div>

            {/* Diet Dropdown */}
            <div className="col-md-6">
              <label htmlFor="diet" className="form-label">
                Diet
              </label>
              <select id="diet" className="form-select" onChange={handleChange}>
                <option defaultValue>Select Diet</option>
                {dietOptions.map((diet) => (
                  <option key={diet} value={diet}>
                    {diet}
                  </option>
                ))}
              </select>
            </div>

            {/* Prep Time */}
            <div className="col-md-3">
              <label htmlFor="prepTime" className="form-label">
                Prep Time (mins)
              </label>
              <input
                type="number"
                id="prepTime"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            {/* Cook Time */}
            <div className="col-md-3">
              <label htmlFor="cookTime" className="form-label">
                Cook Time (mins)
              </label>
              <input
                type="number"
                id="cookTime"
                className="form-control"
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="text-center mt-4">
            <button type="submit" className="btn btn-success">
              Get Suggestions
            </button>
          </div>
        </form>
      </div>

      {/* Display Results */}
      {error && (
        <div className="alert alert-danger mt-4 text-center">{error}</div>
      )}
      {result && (
        <div className="container mt-5">
          <div className="card shadow-lg border-0">
            <img
              src={result.image_url}
              alt={result.name}
              className="card-img-top"
              style={{ maxHeight: "400px", objectFit: "cover" }}
            />
            <div className="card-body">
              <h2 className="card-title text-center fw-bold">{result.name}</h2>
              <p className="text-muted text-center fst-italic">
                {result.cuisine} | {result.course} | {result.diet}
              </p>
              <p className="card-text text-center">{result.description}</p>

              <hr />

              <div className="row">
                <div className="col-md-6 text-center">
                  <h5>⏱️ Prep Time</h5>
                  <p>{result.prep_time__in_mins_} mins</p>
                </div>
                <div className="col-md-6 text-center">
                  <h5>🍳 Cook Time</h5>
                  <p>{result.cook_time__in_mins_} mins</p>
                </div>
              </div>

              <hr />

              <h4>🛒 Ingredients</h4>
              <ul className="list-group list-group-flush mb-3">
                {result.ingredients_name
                  .split(", ")
                  .map((ingredient, index) => (
                    <li key={index} className="list-group-item">
                      {ingredient}
                    </li>
                  ))}
              </ul>

              <h4>📋 Instructions</h4>
              <p className="card-text">{result.instructions}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
