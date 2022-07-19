
import React from 'react';
import '../../Style/Portifolio.css';
import {useState, useEffect} from 'react';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

export default function Imagens() {
    const [useData, setData] = useState(null);
    const [useId, setId] = useState(0);

    useEffect(() => {
        const list = [];
        for (let i = 1; i<=71; i++) {
          const caminho = `./img/img_${i}.jpg`;
          list.push(caminho);
        }
        setData(list);
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
                {useData && <img src={useData[useId]} alt={useData[useId]}/>}
                <div className='card--seta--left' onClick={handleLeftArrow} >
                    <ArrowBackIosIcon className='arrow-left'/>
                </div>
                <div className='card--seta--right' onClick={handleRightArrow} >
                    <ArrowForwardIosIcon className='arrow-right'/>
                </div>
                </div>
            </div>
      </div>
    )
}

