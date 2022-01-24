import React from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'

import { Container } from 'layouts'

import products from 'seeders/products'

const ProductItemPage = () => {
  const [item, setItem] = React.useState(null)

  // alias
  const { itemAlias } = useParams()
  // redirect
  const navigate = useNavigate()

  React.useEffect(() => {
    const nextItem = products.find((el) => el.alias === itemAlias)

    if (nextItem) {
      setItem(nextItem)
    } else {
      navigate('/404')
    }
  }, [])

  // content
  const renderContent = item && (
    <div className='flex flex-col items-center'>
      <img src={item.img} alt={item.title} style={{ maxWidth: '420px' }} />
      <h1 className='ui-title-1 mb-4'>{item.title}</h1>
      <span>{item.price}</span>

      {/* controls */}
      <div className='flex mt-4'>
        <Link className='ui-button isLink' to='/'>
          Back to home
        </Link>
        <div className='ui-button isPrimary'>
          Add to cart
        </div>
      </div>
    </div>
  )

  return <Container>{renderContent}</Container>
}

export default ProductItemPage
