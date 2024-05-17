import React from 'react'
import { useEffect } from 'react'

const Map = () => {
    useEffect(()=>{
        const container = document.getElementById('map');
		const options = {
			center: new window.kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};

		const map = new window.kakao.maps.Map(container, options);
    },[])
    
  return (
    <div className='map' id='map'>
    </div>
  )
}

export default Map
