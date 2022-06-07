import React from 'react'
import { Link } from 'react-router-dom'

// helpers
import { declOfProduct, clearPrice } from 'helpers'

// store
import { ProductsContext } from 'Store'

// components:
import { Container } from 'layouts'

const productStyles = {
  width: '100%',
  padding: '10px',
  backgroundColor: 'var(--ui-g-100)',
  borderRadius: '16px',
}

const CheckoutPage = () => {
  const [products, setProducts] = React.useContext(ProductsContext)

  const reducedProducts = React.useMemo(() => {
    return products.reduce(
      (acc, item) => {
        if (!products.length) return acc

        let indexInAcc = acc.products.findIndex(
          (accItem) => accItem.id === item.id
        )

        if (indexInAcc === -1) {
          item.count = 1
          acc.products.push(item)
        } else {
          acc.products[indexInAcc].count += 1
        }

        acc.totalPrice += clearPrice(item.price)
        acc.totalCount += 1

        return acc
      },
      { products: [], totalPrice: 0, totalCount: 0 }
    )
  }, [products])

  // content
  const renderContent =
    reducedProducts.products &&
    reducedProducts.products.length &&
    reducedProducts.products.length > 0
      ? reducedProducts.products.map((item, i) => {
          let price = clearPrice(item.price) * item.count

          return (
            <div
              key={i}
              className='flex items-center mb-8'
              style={productStyles}
            >
              <img
                src={item.img}
                alt={item.title}
                style={{ maxWidth: '140px' }}
              />
              <div className='flex flex-col items-start'>
                <p className='ui-title-3 mb-2'>{item.title}</p>
                <p>Цена одного товара: {item.price}</p>
                <p className='mb-4'>
                  Цена всех товаров: ${price.toLocaleString('de-DE')}
                </p>
                <p className='ui-title-5'>
                  {declOfProduct(item.count)}: {item.count}
                </p>
                <Link to={`/products/${item.alias}`}>
                  <span className='ui-link isPrimary'>See more</span>
                </Link>
              </div>
            </div>
          )
        })
      : 'Cart is empty'

  // controls
  const renderControls = (
    <div className='flex flex-col mt-4'>
      <span className='ui-title-5'>
        Общее количество товаров: {reducedProducts.totalCount}
      </span>
      <span className='ui-title-5'>
        Общая цена: ${reducedProducts.totalPrice.toLocaleString('de-DE')}
      </span>
      <div className='flex mt-4'>
        <Link className='ui-button isLink' to='/'>
          Back to home
        </Link>
        {reducedProducts.products && reducedProducts.products.length > 0 && (
          <div className='ui-button isPrimary' onClick={() => setProducts([])}>
            Refresh the cart
          </div>
        )}
      </div>
    </div>
  )

  return (
    <Container>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h1 className='ui-title-1 text-center'>Checkout</h1>
        <div className='flex flex-col items-center'>
          {renderContent}
          {renderControls}
        </div>
      </div>
    </Container>
  )
}

export default CheckoutPage
