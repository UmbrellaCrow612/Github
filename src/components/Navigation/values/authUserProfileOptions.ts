export const authUserProfileOptionsOne: {
  title: string
  href: string
  borderBottom?: boolean
  borderTop?: boolean
}[] = [
  {
    title: 'Your profile',
    href: '',
  },
  {
    title: 'Your repositories',
    href: '',
  },
  {
    title: 'Your codespaces',
    href: '',
  },
  {
    title: 'Your projects',
    href: '',
  },
  {
    title: 'Your stars',
    href: '',
  },
  {
    title: 'Your gists',
    href: '',
  },
  {
    title: 'Your sponsors',
    href: '',
    borderBottom: true,
  },
]

export const UserProfileOptionsTwo: {
  title: string
  href: string
  borderBottom?: boolean
}[] = [
  {
    title: 'Upgrade',
    href: '',
  },
  {
    title: 'Feature preview',
    href: '',
  },
  {
    title: 'Help',
    href: '',
  },
  {
    title: 'Settings',
    href: '',
    borderBottom: true,
  },
]

export const UserProfileOptionsThree: {
  title: string
  href: string
  borderBottom?: boolean
}[] = [
  {
    title: 'Sign out',
    href: '/api/auth/signout',
  },
]
