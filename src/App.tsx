import { useEffect, useState } from 'react';
import './App.css';
import Post from './Components/Post';
import { BlogPost } from './types/types';

function App() {
  const [blogs, setBlogs] = useState<Array<BlogPost>>([]);

  useEffect(() => {
    const getData = async () => {
      const results = await fetch('https://dummyjson.com/posts');
      const data = await results.json();
      setBlogs(data.posts);
    }

    getData();
  }, []);


  return (
    <div className="App">
      <h1>Tiny Blog</h1>
      <div>
        {blogs.map(b => <Post blog={b} /> )}
      </div>
    </div>
  );
}

export default App;
