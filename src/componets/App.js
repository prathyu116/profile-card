import './App.css'
import imgVector from './Imgs/image-victor.jpg'
function App() {
  return (
    <div className="card">
      <div className="top">
      <img src={imgVector} alt="IMAGES" srcset="" />
      </div>
      <div className="info">
        <div className="main_info">
        <p className="name">Victor Crest <span>26</span></p> 
                <address>London</address>
        </div>
        <div className="foot_info">
                <ul>
                    <li>
                        <p className="num">80K</p>
                        <p className="noun">Followers</p>
                    </li>
                    <li>
                        <p className="num">803K</p>
                        <p className="noun">Likes</p>
                    </li>
                    <li>
                        <p className="num">1.4k</p>
                        <p className="noun">Photos</p>
                    </li>
                </ul>
            </div>
      </div>
      
    
    </div>
  );
}

export default App;
