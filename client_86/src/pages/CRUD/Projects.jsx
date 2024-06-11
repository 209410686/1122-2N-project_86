import React, { useState, useEffect } from 'react';
import { supabase } from '../../db/clientSupabase';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [form, setForm] = useState({ title: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);
  const [currentProject, setCurrentProject] = useState(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    const { data } = await supabase.from('projects').select();
    setProjects(data);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isEditing) {
      await supabase
        .from('projects')
        .update({ title: form.title, description: form.description })
        .eq('id', currentProject.id);
    } else {
      await supabase
        .from('projects')
        .insert([{ title: form.title, description: form.description }]);
    }
    setForm({ title: '', description: '' });
    setIsEditing(false);
    setCurrentProject(null);
    fetchProjects();
  };

  const handleEdit = (project) => {
    setForm({ title: project.title, description: project.description });
    setIsEditing(true);
    setCurrentProject(project);
  };

  const handleDelete = async (id) => {
    await supabase.from('projects').delete().eq('id', id);
    fetchProjects();
  };

  return (
    <div className="projects-container">
      <h2>我的大學畢業前行事曆</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleInputChange}
          placeholder="Date"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleInputChange}
          placeholder="To do something"
          required
        ></textarea>
        <button type="submit">{isEditing ? 'Update' : 'Create'} schedule</button>
      </form>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <button onClick={() => handleEdit(project)}>Edit</button>
            <button onClick={() => handleDelete(project.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
