## Notes

The relevant urls, where you can see my actual work, once running locally:

- http://localhost:3000/provider/schedule

- http://localhost:3000/client/slots

Required to run:

- Node v16.19.1
- Npm v8.19.3
- Next v14.1.1

Off the bat: the 15m time slot was not accounted for, instead just the entire available time slots were implemented to book. Nor was the expire after 30 minute functionality or the 24 hours in advance rule. It would have taken up more time, and required more precise and refined checks and functionality. But the overall general design and expectation is there, just not to that micro level, in this initial iteration, but in theory it could be more refined and accounted for. Just kept things simple, for a limited timed implementation.

In a real use case project, there would be authentication and all that jazz like permissions and roles etc. There would be persistent state, calls to API, some type of database that would be used as the source of truth. A lot more data checks etc You get the general idea. Just pointing out the obvious.

UI was only developed for mobile. I did not account for desktop in any way (so if it looks decent it's by accident not on purpose or if it looks horrible, that's why). I chose Next.js because it's the easiest to set up and what is generally recommended by the React dev team these days. Would have used React Native, but it requires more things to setup, and time was limited. So I went for the quickest setup.

It's written in Typescript, perhaps an overkill for a small project but since Typescript really is the standard these days, I went with it.

Total of 2 screens, one for scheduling availability by a provider and one for reserving available times by a client (at least in concept).

Again, all data is mocked, there are no actual API calls (not even faked calls).

Nothing is persistently stored, except for default data (mockData.ts).

Dynamic data is only stored via useState. Technically any added dynamic data entered is saved into memory, but it is not persisted (no context or global state is used, just to save time, simplify, and limit the project -- didn't want to over-complicate the whole thing) and thus the data is not actually connected or related relative to each screen. Really it's just mimicking functionality, so basically what a user would expect in terms of interacting with the UI state, is all. The basics.

I would have liked to created re-usable components, but again to save time, I just limited to what appears in each page. But in a real world project, you want to use re-usable components, in order to really take advantage of the power of react or react-native.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
