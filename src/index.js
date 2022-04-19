import React from 'react'
import ReactDom from 'react-dom'
import App from './FormComponent/App'

// import Card from './Cards'
// import Sdata from './Sdata'

// this is for netfilx appp
// function ncard(val){
// return (
//   <Card 
//     key={val.id}
//     imgsrc={val.imgsrc}
//     title={val.title}
//     sname={val.sname}
//     link={val.link}
//   />
// )
// }

// ReactDom.render(
//   <> 
//   <h1>List of top 5 in 2022</h1>
//   {Sdata.map(ncard)}
//   </>
//   ,
//  // document.getElementById('root')
// );


// this is for form appp


ReactDom.render(
  <> 
  <App/>
  </>
  ,
 document.getElementById('root')
);



