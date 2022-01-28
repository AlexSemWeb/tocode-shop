import React from 'react'
import classNames from 'classnames'
import { Link, useParams, useNavigate } from 'react-router-dom'

import { Container } from 'layouts'

import products from 'seeders/products'

const ProductItemPage = () => {
  const [item, setItem] = React.useState(null)
  // status
  const [loading, setLoading] = React.useState(false)
  const [success, setSuccess] = React.useState(false)

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

  const handleAddCard = () => {
    setLoading(true)

    setTimeout(() => {
      // ... logic
      setSuccess(true)
      setLoading(false)
    }, 1000)
  }

  const buttonClasses = classNames('ui-button isPrimary', {
    isLoading: loading,
  })

  // content
  const renderContent = item && (
    <div className='flex flex-col items-center'>
      <img src={item.img} alt={item.title} style={{ maxWidth: '420px' }} />
      <h1 className='ui-title-1 mb-4'>{item.title}</h1>
      <span>{item.price}</span>

      {success && (
        <p className='ui-text isSuccess mt-4'>
          Success! Product added to the cart!
        </p>
      )}

      {/* controls */}
      <div className='flex mt-2'>
        <Link className='ui-button isLink' to='/'>
          Back to home
        </Link>
        <div className={buttonClasses} onClick={handleAddCard}>
          {loading ? 'loading...' : 'Add to cart'}
        </div>
      </div>
    </div>
  )

  return <Container>{renderContent}</Container>
}

export default ProductItemPage
