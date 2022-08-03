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
        href: 'features/actions',
      },
      {
        title: 'Codespaces',
        href: 'features/codespaces',
      },
      {
        title: 'Copilot',
        href: 'features/copilot',
      },
      {
        title: 'Packages',
        href: 'features/packages',
      },
      {
        title: 'Security',
        href: 'features/security',
      },
      {
        title: 'Code review',
        href: 'features/code-review',
      },
      {
        title: 'Issues',
        href: 'features/issues',
      },
      {
        title: 'Discussions',
        href: 'features/discussions',
      },
      {
        title: 'Integrations',
        href: 'features/integrations',
        borderBottom: true,
      },
      {
        title: 'GitHub Sponsors',
        href: 'sponsors',
        bold: true,
      },
      {
        title: 'Customer stories',
        href: 'customer-stories',
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
        href: 'explore',
        bold: true,
        borderBottom: true,
      },
      {
        title: 'Learn and contribute',
        href: '',
      },
      {
        title: 'Topics',
        href: 'topics',
      },
      {
        title: 'Collections',
        href: 'collections',
      },
      {
        title: 'Trending',
        href: 'trending',
      },
      {
        title: 'Skills',
        href: 'skills',
      },
      {
        title: 'GitHub Sponsors',
        href: 'sponsors/explore',
      },
      {
        title: 'Open source guides',
        href: 'opensource',
      },
      {
        title: 'Connect with others',
        href: '',
      },
      {
        title: 'The ReadME Project',
        href: 'readme',
      },
      {
        title: 'Events',
        href: 'events',
      },
      {
        title: 'Community forum',
        href: 'community',
      },
      {
        title: 'GitHub Education',
        href: 'education',
      },
      {
        title: 'GitHub Stars program',
        href: 'stars',
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
        href: 'pricing',
        bold: true,
        borderBottom: true,
      },
      {
        title: 'Compare plans',
        href: 'pricing#compare-features',
      },
      {
        title: 'Contact Sales',
        href: 'enterprise/contact',
      },
      {
        title: 'Education',
        href: 'education',
        bold: true,
        borderTop: true,
      },
    ],
  },
]
