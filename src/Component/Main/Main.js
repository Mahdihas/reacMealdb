import React, { useEffect, useState } from 'react'
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Left from '../Left/Left';
import Single from '../Singlecard/Single';

const Main = () => {
 
    const [data, setMeals] = useState([]);
    const [count, setCount]=useState([])
    useEffect(() => {
        
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, []);



    useEffect(() => {
        const storedCart = getStoredCard();
        const saveCart = [];
        for (const id in storedCart) {
         
          const addedProduct = data.find(meal => meal.idMeal === id);
          if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            //  console.log(addedProduct);
            saveCart.push(addedProduct);
            // console.log(saveCart);
          }
        }
        setCount(saveCart);
    
      }, [data]);


    
    const handleMeal=(meal) => {
       
        // const newCard = [...count,meal];
        const newCard = [...count, meal];
      setCount(newCard);
        addToDb(meal.idMeal)


     

   }


  return (
      <div className='sm:flex py-5 px-2'>
          
          <div className="w-[100%] mr-1 sm:w-[75%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
              {
                  data.map(meal=><Single key={meal.idMeal} meals={meal} handleMeal={handleMeal}></Single>)
              }
          </div>
          <div className=":w-[100%] sm:w-[25%] ml-1">
              <Left count={count}></Left>
          </div>
    </div>
  )
}

export default Main