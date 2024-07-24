import React, { useState } from 'react';
import axios from 'axios';

const CreatePost = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [steps, setSteps] = useState('');
  const [images, setImages] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('ingredients', ingredients);
    formData.append('steps', steps);
    images.forEach((image) => {
      formData.append('images', image);
    });

    try {
      const response = await axios.post('http://localhost:4000/api/recipes/add_new_recipe', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log('Recipe created:', response.data);
    } catch (error) {
      console.error('Error creating recipe:', error);
    }
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} />
      <textarea placeholder="Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
      <textarea placeholder="Steps (comma separated)" value={steps} onChange={(e) => setSteps(e.target.value)} />
      <input type="file" multiple onChange={(e) => setImages([...images, ...e.target.files])} />
      <button type="submit">Post</button>
    </form>
  );
};

export default CreatePost;
