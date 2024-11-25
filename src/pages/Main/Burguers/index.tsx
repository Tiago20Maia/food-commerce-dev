import { useSnack } from '../../../hooks/useSnack'

import { Snacks } from '../../../components/Snacks'
import { Head } from '../../../components/Head'
import { SnackTitle } from '../../../components/SnackTitle'

export default function Burguers() {
  const { burgers } = useSnack()

  return (
    <>
      <Head title='Hambúrgueres' />
      <SnackTitle>Hambúgueres</SnackTitle>
      <Snacks snacks={burgers}></Snacks>
    </>
  )
}
