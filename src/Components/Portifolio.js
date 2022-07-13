import React from 'react';
import '../Style/Portifolio.css';
import {useEffect} from 'react';
import {useState} from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
const Portifolio = () =>{
  const [dadosVideo, setDadosVideo] = useState(null);
  const [dados360, setdados360] = useState(null);
  const [dadosImg, setDadosImg] = useState(null);

  const [idVideo, setIdVideo] = useState(0);
  const [idImg, setIdImg] = useState(0);
  const [id360, setId360] = useState(0);
  useEffect(() => {
    setDadosVideo([
      'https://www.youtube.com/embed/NCbn4ATvtDQ',
      'https://www.youtube.com/embed/M7KC0RBF3ik',
      'https://www.youtube.com/embed/abG8Rpt9_Dk',
      'https://www.youtube.com/embed/VGk1RnIhoT8',
      'https://www.youtube.com/embed/larM8-yZYbw',
      'https://www.youtube.com/embed/7LSylHorKAk',
      'https://www.youtube.com/embed/f298ZTZgHiA',
      'https://www.youtube.com/embed/7_peP3YcVcI',
    ]);
    setdados360([
      '646bf2130a25489681284dc98ec947e9',
      '6757b186c0fe44838ef275c12594b41a',
      '6aa7ee3fcf754e0ea5a19ee88a6dd51b',
      'e3b81faf00f041b7ac88cdda2f25b460',
    ]);
    const list = [];
    for (let i = 1; i<=88; i++) {
      let caminho = '';
      if (i>9) {
        caminho = {id: `img${i}`, url: `./img/normal/img${i}.jpg`};
      } else {
        caminho = {id: `img0${i}`, url: `./img/normal/img0${i}.jpg`};
      }
      list.push(caminho);
    }
    setDadosImg(list);
  }, []);
  const handleLeftArrow = (props) =>{
    let a = props[0] + props[1];
    if (a<0) {
      a=0;
    }
    if (props[3]==='img') {
      setIdImg(a);
    } else if (props[3]==='video') {
      setIdVideo(a);
    } else if (props[3]==='360') {
      setId360(a);
    }
  };
  const handleRightArrow= (props) =>{
    let a = props[0] + props[1];
    if (a>props[2].length-1) {
      a=props[2].length-1;
    }
    if (props[3]==='img') {
      setIdImg(a);
    } else if (props[3]==='video') {
      setIdVideo(a);
    } else if (props[3]==='360') {
      setId360(a);
    }
  };

  return (
    <div className='Protifolio'>
      <div className='card--conteriner'>
        <div className='card'>
          {dadosImg && <img src={dadosImg[idImg].url} alt={dadosImg[idImg].id}/>}
          <div className='card--seta--left' onClick={()=>{
            handleLeftArrow( [idImg, -1, dadosImg, 'img'] );
          }} >
            <ArrowBackIosIcon className='arrow-left'/>
          </div>
          <div className='card--seta--right' onClick={()=>{
            handleRightArrow( [idImg, 1, dadosImg, 'img'] );
          }} >
            <ArrowForwardIosIcon className='arrow-right'/>
          </div>
        </div>
      </div>

      <div className='card--conteriner'>
        <div className='card'>
          {dados360 && <iframe title='360' className='iframe360' sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads" frameBorder="0" scrolling='no' src={`https://momento360.com/e/u/${dados360[id360]}?wheel=false&display-mode=clean&pan-speed=0.01&utm_campaign=embed&utm_source=other&heading=150&pitch=-0&field-of-view=90.5&size=medium`} allowFullScreen>
          </iframe>}
          <div className='card--seta--left' onClick={()=>{
            handleLeftArrow( [id360, -1, dados360, '360'] );
          }} >
            <ArrowBackIosIcon className='arrow-left'/>
          </div>
          <div className='card--seta--right' onClick={()=>{
            handleRightArrow( [id360, 1, dados360, '360'] );
          }} >
            <ArrowForwardIosIcon className='arrow-right'/>
          </div>
        </div>
      </div>
      <div className='card--conteriner'>
        <div className='card'>
          {dadosVideo &&
          <iframe src={dadosVideo[idVideo]+'?autoplay=0&controls=0&rel=0&mute=0&showinfo=1&modestbranding=0'} key={dadosVideo[idVideo]} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" allowFullScreen></iframe>
          }
          <div className='card--seta--left' onClick={()=>{
            handleLeftArrow( [idVideo, -1, dadosVideo, 'video'] );
          }} >
            <ArrowBackIosIcon className='arrow-left'/>
          </div>
          <div className='card--seta--right' onClick={()=>{
            handleRightArrow( [idVideo, 1, dadosVideo, 'video'] );
          }} >
            <ArrowForwardIosIcon className='arrow-right'/>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Portifolio;
