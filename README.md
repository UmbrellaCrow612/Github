# Steps to follow for prisma adaptor to work

1.) In `.env` paste the `DATABASE_URL=` from `railway` or `PlanetScale`

2.) Run:

```bash
npx prisma migrate dev
```

This will create an SQL migration file and execute it.

3.) Generate Client

```bash
npx prisma generate
```

4.) To configure your database to use the new schema (i.e. create tables and columns) use the prisma migrate command:

```bash
npx prisma migrate dev
```

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
