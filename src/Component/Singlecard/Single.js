import React from 'react'

const Single = (props) => {
  const { meals,handleMeal} = props;
  const { idMeal,strInstructions,strCategory, strMeal,strMealThumb
  } = props.meals;
  return (
    <div>
      <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={strMealThumb
} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Name{ strMeal}</h2>
          <p>{idMeal}</p>
          <p>{strCategory}</p>
          <p>{strInstructions.length>300? strInstructions.slice(0,200)+'...': strInstructions}</p>
    <div className="card-actions justify-end">
      <button onClick={()=>handleMeal(meals)} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
      </div>
  )
}

export default Single