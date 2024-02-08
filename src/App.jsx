import './App.css';
import LikeImage3 from './Project-Render/LikeImage3';
import LikePost3 from './Project-Render/LikePost3';
import RenderProps from './Project-Render/RenderProps';
import LikeImage2 from './Project/LikeImage2';
import LikePost2 from './Project/LikePost2';

function App() {
  return (
    <div className='HOC'>
      <h3>Some Blog</h3>
      <div className='buttons'>
        <LikePost2 />
        <LikeImage2 />
      </div>
      {/* PROJECT RENDER */}
      <h3>Some more Blogs</h3>
      <RenderProps 
      render = {(count,handleCount)=>(
        <LikePost3 count={count}
        handleCount={handleCount} />
      )}
      />
      <RenderProps 
      render = {(count,handleCount)=>(
        <LikeImage3 count={count}
        handleCount={handleCount} />
      )}
      />

    </div>
  );
}

export default App;
