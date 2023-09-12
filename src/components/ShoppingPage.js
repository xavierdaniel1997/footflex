import React from 'react'
import ShoppingPageHeader from './ShoppingPageHeader'


const ShoppingPage = ({pageTitle}) => {
  
  return (
    <div className='my-28 lg:mx-20 md:mx-12 max-sm:mx-10'>
        <ShoppingPageHeader pageTitle={pageTitle}/>
    </div>
  )
}
 
export default ShoppingPage