export interface DropDownOptions {
  title: string
  href: string
  bold?: boolean
  borderBottom?: boolean
  borderTop?: boolean
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
    DropDownOptions: [
      {
        title: 'Explore GitHub',
        href: '',
        bold: true,
        borderBottom: true,
      },
      {
        title: 'Learn and contribute',
        href: '',
      },
      {
        title: 'Topics',
        href: '',
      },
      {
        title: 'Collections',
        href: '',
      },
      {
        title: 'Trending',
        href: '',
      },
      {
        title: 'Skills',
        href: '',
      },
      {
        title: 'GitHub Sponsors',
        href: '',
      },
      {
        title: 'Open source guides',
        href: '',
      },
      {
        title: 'Connect with others',
        href: '',
      },
      {
        title: 'The ReadME Project',
        href: '',
      },
      {
        title: 'Events',
        href: '',
      },
      {
        title: 'Community forum',
        href: '',
      },
      {
        title: 'GitHub Education',
        href: '',
      },
      {
        title: 'GitHub Stars program',
        href: '',
      },
    ],
  },

  {
    title: 'Marketplace',
    href: 'marketplace',
  },
  {
    title: 'Pricing',
    isDropDown: true,
    href: '',
    DropDownOptions: [
      {
        title: 'Plans',
        href: '',
        bold: true,
        borderBottom: true,
      },
      {
        title: 'Compare plans',
        href: '',
      },
      {
        title: 'Contact Sales',
        href: '',
      },
      {
        title: 'Education',
        href: '',
        bold: true,
        borderTop: true,
      },
    ],
  },
]
