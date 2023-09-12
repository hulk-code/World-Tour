
import { useState } from 'react';
import './style.css'

const Country = ({info , handleVisited,handleVisitedFlag }) => {
    // console.log(info);
    // console.log(handleVisited);
    const {name ,flags , population,area,region }=info;
    const [visited ,setVisited]=useState(false)
  const handeler=()=>{
    setVisited(!visited)

  }
  

    return (
        <div className={`box ${visited ? 'visited' : 'non-vosited'}`}>
            <p>{name.common}</p>
            <img className='img' src={flags.png} alt="" />
            <p>population:{population} </p>
            <p>Area{area}</p>
            <p>region{region}</p>
            <button onClick={() =>handleVisited(info)}>mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlag(info.flags.png)}>Flag</button>

            <button onClick={handeler} className='btn'>{visited? 'visited' : 'going'}</button>
            {
                visited?'I visited there' : 'want to go there'
            }
        </div>
    );
};

export default Country;