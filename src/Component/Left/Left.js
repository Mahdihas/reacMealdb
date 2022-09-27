import React from 'react'

const Left = (props) => {
    const { count } = props;
    // console.log(count);
  
    const old = '';
    const name = count.map(food => <p>{ food.strMeal
    }</p>)
    
    // for (const meals of count) {
       
    //     const { name }=meals.strMeal
        
    // }
    return (
      
    <div><div className="card card-compact  bg-base-100 shadow-xl">
    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    <div className="card-body">
              <h2 className="card-title">Meals:{count.length}</h2>
                <div className='block py-5'>{name}</div>
      <div className="card-actions justify-end">
      </div>
    </div>
  </div></div>
  )
}

export default Left