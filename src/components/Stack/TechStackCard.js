import React from 'react';


const TechStackCard = ({ item }) => {
  return (
    <div className='techstack__card'>
      <h3>{ item.name }</h3>
      <img src={item.iconUrl} />
    </div>
  )
}


export default TechStackCard;