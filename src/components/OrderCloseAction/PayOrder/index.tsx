import { currencyFormat } from '../../../helpes/currencyFormat'
import { useCart } from '../../../hooks/useCart'
import { Container } from '../styles'

export function PayOrder() {
  const { cart, payOrder } = useCart()

  const totalAmount = cart.reduce((acc, item) => (acc += item.subtotal), 0)

  return (
    <Container>
      <button type='submit'>Pagar</button>
      <span>
        Total <strong>{currencyFormat(totalAmount)}</strong>
      </span>
    </Container>
  )
}
