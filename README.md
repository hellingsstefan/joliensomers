This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Images

Testimages by [unsplash.com](https://unsplash.com/).

## Todo
- Iframes
- OEmbed or 3rd-party-media
- Glass effect on header when scrolling down
- Text Select Color


## Calculating scaler for fluid font-size
Calculating preferred value parameters based on specific starting and ending points.

clamp(min-font-size, scaler, max-font-size);

α = viewport-width
β = rem-base // idealy should be 1rem

y1 = min-font-size
y2 = max-font-size

x1 = min-screen-size (starting point)
x2 = max-screen-size (ending point)

α = (100 * (y2 - y1) / (x2 - x1)
β = ((x1 * y2) - (x2 * y1)) / (x1 - x2)

scaler = α + β

clamp([y1]rem, [α]vw + [β]rem, [y2]rem);
