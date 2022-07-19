
import React from 'react';
import '../../Style/Portifolio.css';
import {useState, useEffect} from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Imagens360() {
    const [useData, setData] = useState(null);
    const [useId, setId] = useState(0);

    useEffect(() => {
      const link = [
        '646bf2130a25489681284dc98ec947e9',
        '6757b186c0fe44838ef275c12594b41a',
        '6aa7ee3fcf754e0ea5a19ee88a6dd51b',
        'e3b81faf00f041b7ac88cdda2f25b460',
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
          (<iframe title='360' className='iframe360' frameBorder="0" scrolling='no'
          sandbox="allow-scripts allow-popups allow-forms allow-same-origin allow-popups-to-escape-sandbox allow-downloads"
          src={`https://momento360.com/e/u/${useData[useId]}?wheel=false&display-mode=clean&pan-speed=0.01&utm_campaign=embed&utm_source=other&heading=150&pitch=-0&field-of-view=90.5&size=medium`}
          allowFullScreen>
          </iframe>)
          }
          <div className='card--seta--left' onClick={handleLeftArrow} >
            <ArrowBackIosIcon className='arrow-left'/></div>
          <div className='card--seta--right' onClick={handleRightArrow} >
            <ArrowForwardIosIcon className='arrow-right'/></div>
        </div>
      </div>
    </div>
    )
}
