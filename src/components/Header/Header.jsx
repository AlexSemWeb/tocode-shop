import React from 'react'
import propTypes from 'prop-types'
import classNames from 'classnames'
import { NavLink } from 'react-router-dom'
import { app } from '_config'

// store
import { ProductsContext } from 'Store'

import { Container } from 'layouts'

import './Header.scss'

// icons:
import { ReactComponent as LogoIcon } from 'assets/img/logo.svg'
import SvgIconBag from 'js/icons/bagIcon'

const BagLink = () => {
  const [products] = React.useContext(ProductsContext)

  return (
    <>
      {products && products.length && products.length > 0 ? (
        <div className='ui-badge'>
          {products.length > 9 ? '9+' : products.length}
        </div>
      ) : null}
      <SvgIconBag />
    </>
  )
}

const menuLinks = [
  {
    title: 'Home',
    alias: '/',
  },
  {
    title: 'About',
    alias: '/about',
  },
  {
    title: <BagLink />,
    alias: '/checkout',
  },
]

const menuItem = menuLinks.map((item) => (
  <li key={item.alias}>
    <NavLink to={item.alias}>
      <div className='ui-button isLink'>{item.title}</div>
    </NavLink>
  </li>
))

const menuList = <ul className='HeaderList'>{menuItem}</ul>

const Header = ({ isLogo, isFixed, className, ...attrs }) => {
  const classes = classNames('Header', className, {
    isFixed,
  })

  return (
    <header className={classes} {...attrs}>
      <Container>
        <div className='flex justify-between py-2 mb-4'>
          <div className='Logo'>
            {isLogo && <LogoIcon />}
            <span>{app.name}</span>
          </div>
          {menuList}
        </div>
      </Container>
    </header>
  )
}

Header.propTypes = {
  isLogo: propTypes.bool,
  isFixed: propTypes.bool,
  className: propTypes.string,
}

Header.defaultProps = {
  isLogo: false,
  isFixed: false,
  className: '',
}

export default Header
