import 'styled-components'
import type { Tema } from './theme'

declare module 'styled-components' {
  export interface DefaultTheme extends Tema {}
}
