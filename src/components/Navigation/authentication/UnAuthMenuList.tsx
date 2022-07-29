import { MenuDropDown } from './MenuDropDown'

interface UnAuthMenuListProps {}

export interface DropDownOptions {
  title: string
  href: string
}
export const UnAuthMenuList: React.FC<UnAuthMenuListProps> = () => {
  return (
    <div className="flex items-center justify-between p-1 ml-2 w-[520px]">
      {UnAuthMenuListOptions.map((Option) => (
        <MenuDropDown
          title={Option.title}
          href={Option.href}
          key={Option.title}
          DropDownOptions={Option.DropDownOptions}
          isDropDown={Option.isDropDown}
        />
      ))}
    </div>
  )
}

const UnAuthMenuListOptions: {
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
