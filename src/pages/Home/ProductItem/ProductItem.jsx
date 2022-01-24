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
    <>
      <h1 className='ui-title-1 mb-4'>{item.title}</h1>
    </>
  )

  // link to home
  const renderHomeLink = (
    <p>
      Go to{' '}
      <Link className='ui-link' to='/'>
        Home page
      </Link>
      ?
    </p>
  )

  return (
    <Container>
      {renderContent}
      {renderHomeLink}
    </Container>
  )
}

export default ProductItemPage
