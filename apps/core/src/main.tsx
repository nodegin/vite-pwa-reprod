import './styles.css'

import * as ReactDOM from 'react-dom/client'
import { Test } from '@repro/library'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
)
root.render(<Test />)
