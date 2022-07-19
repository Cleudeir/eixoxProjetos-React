
import React from 'react';
import '../../Style/Portifolio.css';
import {useState, useEffect} from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Videos() {
    const [useData, setData] = useState(null);
    const [useId, setId] = useState(0);

    useEffect(() => {
      const link = [
        'https://www.youtube.com/embed/NCbn4ATvtDQ',
        'https://www.youtube.com/embed/M7KC0RBF3ik',
        'https://www.youtube.com/embed/abG8Rpt9_Dk',
        'https://www.youtube.com/embed/VGk1RnIhoT8',
        'https://www.youtube.com/embed/larM8-yZYbw',
        'https://www.youtube.com/embed/7LSylHorKAk',
        'https://www.youtube.com/embed/f298ZTZgHiA',
        'https://www.youtube.com/embed/7_peP3YcVcI',
      ]
      setData(link);
      }, []);

    const handleLeftArrow = () =>{
        let a = useId - 1;
        if (a<0) {
          a=0;
        }
          setId(a);
      };

      const handleRightArrow= () =>{
        let a = useId + 1;
        if (a>useData.length-1) {
          a = useData.length-1;
        }
          setId(a);
      };

    return (
    <div className='Protifolio'>
      <div className='card--conteriner'>
        <div className='card'>
          {useData &&
          <iframe src={useData[useId]+'?autoplay=0&controls=0&rel=0&mute=0&showinfo=1&modestbranding=0'}
          key={useData[useId]} title="YouTube video player" frameBorder="0" allowFullScreen
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope" ></iframe>
          }
          <div className='card--seta--left' onClick={handleLeftArrow} >
            <ArrowBackIosIcon className='arrow-left'/></div>
          <div className='card--seta--right' onClick={handleRightArrow} >
            <ArrowForwardIosIcon className='arrow-right'/>
          </div>
        </div>
      </div>
    </div>
    )
}
