import React, { useState, useContext } from 'react';
import axios from 'axios';
import AuthContext from '../../context/AuthContext'; // Adjust path as needed
import './AddRecipeForm.css'; // Import the CSS file

const AddRecipeForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [images, setImages] = useState([]);
  const { user } = useContext(AuthContext); // Use user from context

  const handleImageChange = (e) => {
    setImages(e.target.files); // Set the files from input
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a new FormData instance
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('ingredients', ingredients);
    formData.append('steps', steps);
    formData.append('authorId', user?._id); // Make sure this is correctly retrieved and not null

    // Append each image file to the form data
    Array.from(images).forEach(image => {
      formData.append('images', image);
    });

    // Log the FormData entries for debugging
    const formDataEntries = Array.from(formData.entries());
    console.log('Form Data Entries:', formDataEntries);

    try {
      const token = localStorage.getItem('authToken'); // Retrieve token from localStorage
      if (!token) throw new Error('Not authenticated');

      const response = await axios.post('http://localhost:4000/api/recipes/add_new_recipe', formData, {
        headers: {
          'Authorization': `Bearer ${token}`, // Include token
          // 'Content-Type': 'multipart/form-data', // axios handles this automatically
        },
      });

      console.log('Recipe added successfully:', response.data);
      // Optionally, you could reset the form fields here
      setTitle('');
      setDescription('');
      setIngredients('');
      setSteps('');
      setImages([]);
    } catch (error) {
      console.error('Error adding recipe:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <h2>Add New Recipe</h2>
      <div>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="ingredients">Ingredients (comma-separated):</label>
        <input
          type="text"
          id="ingredients"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="steps">Steps (comma-separated):</label>
        <input
          type="text"
          id="steps"
          value={steps}
          onChange={(e) => setSteps(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="images">Images:</label>
        <input
          type="file"
          id="images"
          multiple
          onChange={handleImageChange}
        />
      </div>
      <button type="submit">Add Recipe</button>
    </form>
  );
};

export default AddRecipeForm;
