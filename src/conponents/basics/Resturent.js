
import React, { useState } from 'react'
import "./style.css"
import Menu from './menuApi'
import  MenuCard  from './MenuCard.js'

export const Resturent = () => {
 const [menuData, setMenuData] = useState(Menu);
//  filter opction
const filterOpction= [ ...new Set(
  Menu.map((curElement)=>{
    return curElement.category
    
    }
    
    )
   
)

,'ALL'];
console.log(filterOpction)
// filter
const filterItem=(category)=>{
  if(category === 'ALL'){
    return setMenuData(Menu);
  }
  const upDatedList=Menu.filter((crntItem)=>{   
      return crntItem.category === category
    
  })

  setMenuData(upDatedList);
  

  
}
 
  return (
  <>
  <nav className='navbar'>
<div className='btn-group'>
 {
   filterOpction.map((element)=>{
     
     return(
<>

<button className='btn-group__item' onClick={()=>filterItem(element)}>{element}</button>
</>

     )

   })
 }


</div>
  </nav>
 <MenuCard menuData={menuData} />
 
  </>
  )
}

