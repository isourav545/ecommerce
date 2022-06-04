import React from 'react'
import {Card} from 'react-bootstrap'
import Rating from '../components/Rating' 
import PropTypes from 'prop-types'

const Product = ({product}) => {
  return (
   <Card className="my-3 p-3 rounded">
       <a href={`/product/${product._id}`}>
       <Card.Img src={product.image} variant='top'/>
       </a>
       <Card.Body>
       <a href={`/product/${product._id}`}>
           <Card.Title as='div'>
               <strong>{product.name}</strong>
           </Card.Title>
       </a>
       <Card.Text as='div'>
           <Rating value={product.rating} text={`${product.numReviews} reviews` }
         />
       </Card.Text>
       <Card.Text as='h3'>${product.price}</Card.Text>
       </Card.Body>

   </Card>
    )
}

Rating.defaultProps = {
    color : '#f8e825'
}

Rating.propTypes ={
    value : PropTypes.number.isRequired,
    text : PropTypes.string.isRequired,
    color : PropTypes.string.isRequired
}

export default Product