# Steps to follow for prisma adaptor to work

1.) get `DATABASE_URL` from planetScale

2.) Configure the scheme for prisma 

3.) run `npx prisma db push` to push the schema to planetScale

4.) run `npx prisma studio` see if the data has been added and if the schema has been pushed



# Steps to follow for Auth to work

- Have a `secret`
- Have a `JWT secret`
- As well as the `id` and `url` for your `auth` provider

# Steps to follow for SEO to work

- `next-sitemap` add url to website
- `/public/site.webmanifest` add the necessary names
- In the `SEO` component fill in the fields for your website

# What this project contains:

- Next Auth
- Prisma
- Tailwind
- Recoil
- Next SEO
- Next themes
- React skeleton
- react-spinners

# Mentions

- [redirect feat](https://www.youtube.com/watch?v=VP-RCddbjrc)
- [Favicon cheat sheet](https://github.com/UmbrellaCrow612/favicon-cheat-sheet)
- [Used favicon](https://www.iconfinder.com/icons/291716/github_logo_social_network_social_icon)
- [Darker color maker](https://pinetools.com/darken-color)

# How to push changes

- Push changes to development
- Once a feature in dev in done push it to feature
- Then from feature push to main
