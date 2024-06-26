import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Categories from "./components/Categories/Categories";
import About from "./components/About/About";
import Blog from "./components/Blog/Blog";
import ContactUs from "./components/ContactUs/ContactUs";
import BookListModal from "./components/BookListModal";
import Footer from "./components/Footer/Footer";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const handleCloseModal = () => {
    setSelectedCategory(null);
  };

  return (
    <>
      <div>
        <Navbar />
        <Hero />
        <Categories onCategoryClick={handleCategoryClick} />
        <About />
        <Blog />
        <ContactUs />
        <Footer />
        {selectedCategory && (
          <BookListModal
            category={selectedCategory}
            onClose={handleCloseModal}
          />
        )}
      </div>
    </>
  );
};

export default App;
