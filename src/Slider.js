// import React from 'react'
// import img1 from './images/img1.jpg';
// import img2 from './images/img2.jpg';
// import img3 from './images/img3.jpg';
// import img4 from './images/img4.jpg';
// import img5 from './images/img5.jpg';

// export default function Slider() {
//   return (
//     <div className='container '>
//       <div className='slider active' style={{backgroundImage:`url(${img1})`}}>
//         <h2 className='h2'>Explore the world</h2>
//       </div>
//       <div className='slider' style={{backgroundImage:`url(${img2})`}}>
//         <h2 className='h2'>Mountains- clouds</h2>
//       </div>
//       <div className='slider' style={{backgroundImage:`url(${img3})`}}>
//         <h2 className='h2'>City on winter</h2>
//       </div>
//       <div className='slider' style={{backgroundImage:`url(${img4})`}}>
//         <h2 className='h2'>sunny on beach</h2>
//       </div>
//       <div className='slider' style={{backgroundImage:`url(${img5})`}}>
//         <h2 className='h2'>wild forest</h2>
//       </div>
//     </div>
//   )
// }
import React from 'react'
import img1 from './images/img1.jpg'
import img2 from './images/img2.jpg'
import img3 from './images/img3.jpg'
import img4 from './images/img4.jpg'
import img5 from './images/img5.jpg'

export default function Slider() {
let moveslidefun=(e)=>{
  let sl1=document.getElementById('slider1');
  let sl2=document.getElementById('slider2');
  let sl3=document.getElementById('slider3');
  let sl4=document.getElementById('slider4');
  let sl5=document.getElementById('slider5');
  let sh1=document.getElementById('slide1h');
  let sh2=document.getElementById('slide2h');
  let sh3=document.getElementById('slide3h');
  let sh4=document.getElementById('slide4h');
  let sh5=document.getElementById('slide5h');
  console.log(e.target.id);
  if(e.target.id=='slider1'){
    sl1.style.transition= 'width 1s linear';
    sl1.style.width='900px';
    sh1.style.opacity='1.0';
    sl2.style.width='100px';
    sl3.style.width='100px';
    sl4.style.width='100px';
    sl5.style.width='100px';
    sh2.style.opacity='0.0';
    sh3.style.opacity='0.0';
    sh4.style.opacity='0.0';
    sh5.style.opacity='0.0';

  }
  else{
    if(e.target.id=='slider2'){
      sl2.style.transition= 'width 1s linear';
      sl2.style.width='900px';
      sh2.style.opacity='1.0';
      sl1.style.width='100px';
      sl3.style.width='100px';
      sl4.style.width='100px';
      sl5.style.width='100px';
      sh1.style.opacity='0.0';
      sh3.style.opacity='0.0';
      sh4.style.opacity='0.0';
      sh5.style.opacity='0.0';
    }
    else{
        if(e.target.id=='slider3'){
          sl3.style.transition= 'width 1s linear';
          sl3.style.width='900px';
          sh3.style.opacity='1.0';
          sl1.style.width='100px';
          sl2.style.width='100px';
          sl4.style.width='100px';
          sl5.style.width='100px';
          sh2.style.opacity='0.0';
          sh1.style.opacity='0.0';
          sh4.style.opacity='0.0';
          sh5.style.opacity='0.0';
        }
        else{
          if(e.target.id=='slider4'){
            sl4.style.transition= 'width 1s linear';
            sl4.style.width='900px';
            sh4.style.opacity='1.0';
            sl1.style.width='100px';
            sl2.style.width='100px';
            sl3.style.width='100px';
            sl5.style.width='100px';
            sh2.style.opacity='0.0';
            sh3.style.opacity='0.0';
            sh1.style.opacity='0.0';
            sh5.style.opacity='0.0';
          }
          else{
            if(e.target.id=='slider5'){
              sl5.style.transition= 'width 1s linear';
              sl5.style.width='900px';
              sh5.style.opacity='1.0';
              sl1.style.width='100px';
              sl2.style.width='100px';
              sl3.style.width='100px';
              sl4.style.width='100px';
              sh2.style.opacity='0.0';
              sh3.style.opacity='0.0';
              sh4.style.opacity='0.0';
              sh1.style.opacity='0.0';
            }
          }
        }
    }
  }

}

  return (
    <div className='container'>
      <div id='slider1'  className='slider' onClick={(e)=>moveslidefun(e)} style={{ backgroundImage: `url(${img1})`,width:'900px' }}>
        <h1 id='slide1h'>Explore the world</h1>
      </div>
      <div id='slider2' className='slider' onClick={(e)=>moveslidefun(e)} style={{ backgroundImage: `url(${img2})` }}>
        <h1 id='slide2h'>Mountain-clouds</h1>
      </div>
      <div id='slider3' className='slider' onClick={(e)=>moveslidefun(e)} style={{ backgroundImage: `url(${img3})` }}>
        <h1 id='slide3h'>City on winter</h1>
      </div>
      <div id='slider4' className='slider' onClick={(e)=>moveslidefun(e)} style={{ backgroundImage: `url(${img4})` }}>
        <h1 id='slide4h'>Sunny on beach</h1>
      </div>
      <div id='slider5' className='slider' onClick={(e)=>moveslidefun(e)} style={{ backgroundImage: `url(${img5})` }}>
        <h1 id='slide5h'>Wild forest</h1>
      </div>
    </div>
  )
}
