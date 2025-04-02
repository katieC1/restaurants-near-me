This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

To run the project locally:

Clone the repo

git clonehttps://github.com/katieC1/restaurants-near-me.git
cd restaurants-near-me

Install dependencies:
npm install

or

yarn

Run the development server:
npm run dev

or

yarn dev

Assumptions:
-This is designed with home customers in mind. I’ve structured the UI and data to be as helpful as possible for someone ordering food to their postcode.

-I assumed you do not want this deployed - otherwise I would have done so via vercel and provided the link

-I assumed this is to be only a simple demo of working with the data - not something for real world use. Hense the lack of testing, error handling, and fetch restaurants functions
being written as they are - where one calls another function. This should not be done in a production aplication due to added complexity - I would of instead created these all as helper functions.

-Import React left in each component because I thought I would add in testing, and have required that to be kept in components for that purpose before.

Possible Improvements:
Page refresh frequency – Consider how often the app should auto-refresh to stay up-to-date.

Error handling – Improve how errors are managed in the SearchBar component and across API calls.

Postcode validation – Integrate an address/postcode API to ensure users are ordering to real locations.

Prop-drilling – Refactor to use React Context for managing postcode state across components.

Edge cases – Handle more scenarios (e.g., invalid input, no results). This was kept light for demo purposes.

Testing – Add a testing library - I have worked with jest and react testing library previously. Suggested tests:

Component renders correctly

Search input updates state

Postcode validation triggers correctly

(leave room for more tests...)
