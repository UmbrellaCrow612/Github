export interface DropDownOptions {
  title: string
  href: string
  bold?: boolean
  borderBottom?: boolean
}

export const UnAuthMenuListOptions: {
  title: string
  href: string
  isDropDown?: boolean
  DropDownOptions?: Array<DropDownOptions>
}[] = [
  {
    title: 'Product',
    href: '',
    isDropDown: true,
    DropDownOptions: [
      {
        title: 'Features',
        href: 'features',
        bold: true,
      },
      {
        title: 'Mobile',
        href: 'mobile',
      },
      {
        title: 'Actions',
        href: 'actions',
      },
      {
        title: 'Codespaces',
        href: 'codespaces',
      },
      {
        title: 'Copilot',
        href: 'copilot',
      },
      {
        title: 'Packages',
        href: 'packages',
      },
      {
        title: 'Security',
        href: 'security',
      },
      {
        title: 'Code review',
        href: 'review',
      },
      {
        title: 'Issues',
        href: 'Issues',
      },
      {
        title: 'Discussions',
        href: 'discussions',
      },
      {
        title: 'Integrations',
        href: 'integrations',
        borderBottom: true,
      },
      {
        title: 'GitHub Sponsors',
        href: '',
        bold: true,
      },
      {
        title: 'Customer stories',
        href: '',
        bold: true,
      },
    ],
  },
  {
    title: 'Team',
    href: 'team',
  },
  {
    title: 'Enterprise',
    href: 'enterprise',
  },
  {
    title: 'Explore',
    isDropDown: true,
    href: '',
  },
  {
    title: 'Marketplace',
    href: 'marketplace',
  },
  {
    title: 'Pricing',
    isDropDown: true,
    href: '',
  },
]
