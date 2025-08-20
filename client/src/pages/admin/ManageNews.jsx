import React, { useState, useEffect } from 'react';
import { fetchNews, createNews, deleteNews } from '../../api/apiService';
import { Link } from 'react-router-dom';
import Pagination from '../../components/common/Pagination'; // Import the new component

function ManageNews() {
  const [newsList, setNewsList] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Show 5 news articles per page

  const loadNews = async () => {
    setIsLoading(true);
    try {
      const data = await fetchNews();
      setNewsList(data);
    } catch (error) {
      setMessage('Error loading news.');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadNews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        await createNews({ title, content });
        setMessage('News article created successfully!');
        setTitle('');
        setContent('');
        loadNews(); // Refresh the list
    } catch (error) {
        setMessage('Failed to create news article.');
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this article?')) {
        try {
            await deleteNews(id);
            setMessage('News article deleted successfully!');
            loadNews(); // Refresh the list
        } catch (error) {
            setMessage('Failed to delete news article.');
        }
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(newsList.length / itemsPerPage);
  const currentItems = newsList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="container mx-auto p-4">
      <Link to="/admin/dashboard" className="text-blue-500 hover:underline mb-4 inline-block">&larr; Back to Dashboard</Link>
      <h1 className="text-2xl font-bold mb-4">Manage News</h1>
      
      {/* Create News Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Article</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
            <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 border rounded" required />
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block text-gray-700 font-bold mb-2">Content</label>
            <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} className="w-full p-2 border rounded" rows="4" required></textarea>
          </div>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Add Article</button>
        </form>
        {message && <p className="mt-4 text-green-600">{message}</p>}
      </div>

      {/* Existing News List */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Existing Articles</h2>
        {isLoading ? <p>Loading...</p> : (
          <>
            <ul className="space-y-4">
              {currentItems.map((news) => (
                <li key={news._id} className="flex justify-between items-center p-2 border-b">
                  <span>{news.title}</span>
                  <button onClick={() => handleDelete(news._id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600">Delete</button>
                </li>
              ))}
            </ul>
            {totalPages > 1 && (
                <Pagination 
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
                />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ManageNews;
