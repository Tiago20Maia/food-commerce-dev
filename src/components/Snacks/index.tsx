import { FiPlus } from 'react-icons/fi'

import { Container } from './styles'
import { currencyFormat } from '../../helpes/currencyFormat'
import { SkeletonSnack } from './SkeletonSnack'
import { SnackData } from '../../interface/SnackData'
import { useCart } from '../../hooks/useCart'

interface SnacksProps {
  snacks: SnackData[]
}

export function Snacks({ snacks }: SnacksProps) {
  const { cart, addSnackIntoCart } = useCart()

  return (
    <Container>
      {!snacks.length
        ? [1, 2, 3, 4].map((n) => <SkeletonSnack key={n} />)
        : snacks.map((snack) => {
            const snackExixtent = cart.find(
              (item) => item.snack === snack.snack && item.id === snack.id,
            )
            return (
              <div key={snack.id} className='snack'>
                {snackExixtent && <span>{snackExixtent.quantity}</span>}
                <h2>{snack.name}</h2>
                <img src={snack.image} alt={snack.name} />
                <p>{snack.description}</p>
                <div>
                  <strong>{currencyFormat(snack.price)}</strong>
                  <button type='button' onClick={() => addSnackIntoCart(snack)}>
                    <FiPlus />
                  </button>
                </div>
              </div>
            )
          })}
    </Container>
  )
}
