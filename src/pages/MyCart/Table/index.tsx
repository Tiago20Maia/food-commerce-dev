import { useEffect, useState } from 'react'
import { useCart } from '../../../hooks/useCart'

import { TableDesktop } from './TableDesktop'
import { TableMobile } from './TableMobile'
import { EmptyCart } from '../../../components/EmptyCart'

export function Table() {
  const [windowWidth, setWindowWidth] = useState(document.documentElement.clientWidth)

  const { cart } = useCart()

  useEffect(() => {
    function updateTableComponentBaseInWindowWidth() {
      const currentWidth = document.documentElement.clientWidth
      setWindowWidth(currentWidth)
    }

    window.addEventListener('resize', updateTableComponentBaseInWindowWidth)

    return () => {
      window.removeEventListener('resize', updateTableComponentBaseInWindowWidth)
    }
  }, [])

  if (cart.length === 0) return <EmptyCart title='Ops! Parece que você não tem pedidos, peça já!' />

  return windowWidth > 768 ? <TableDesktop /> : <TableMobile />
}
