import './App.css';
import ImageCard from './components/imageCard';
import { useEffect, useState } from 'react';
import { getImages } from './api';

function App() {

  const [ImgData, setImgData] = useState([])


  useEffect(() => {

    const loadImgs = async () => setImgData(await getImages())
    loadImgs()

  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Random cats generator :D</h1>
      </header>
      <div className='App-body'>


        {
          ImgData.map((photo) => <ImageCard imageData={photo} />)
        }


      </div>
      <footer className='App-footer'>
        <a href='https://github.com/chemokita13'> @chemokita13 on github </a> 
      </footer>
    </div>
  );
}

export default App;
