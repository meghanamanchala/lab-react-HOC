import './App.css';
import LikeImage2 from './Project/LikeImage2';
import LikePost2 from './Project/LikePost2';

function App() {
  return (
    <div>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost2 />
        <LikeImage2 />
      </div>
    </div>
  );
}

export default App;
