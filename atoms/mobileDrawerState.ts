// mobileDrawerState
import { atom } from 'recoil'

export const mobileDrawerState = atom({
  key: 'mobileDrawerState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
})
