import { atom } from 'recoil'

export const unAuthMobileDrawerState = atom({
  key: 'unAuthMobileDrawerState', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
})
