import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PostDetails from './pages/postDetails/postDetails';
import { HomePage } from './pages/homePage/homePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/post/:postId" element={<PostDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
