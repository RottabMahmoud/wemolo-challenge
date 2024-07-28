# Wemolo Case Study Description

## What the Application does

The application is a Tinder-like interface for rating parking lots, built with ReactJS and TypeScript for type safety. It fetches a list of parking lots from a GraphQL API and displays them one at a time to the user, allowing them to rate each parking lot as "good" or "bad" using intuitive buttons. The UI is designed to be clean and responsive, ensuring a smooth user experience across different devices. Upon completing the rating process, users are presented with a summary view that lists the parking lots they rated as good or bad, with filtering and sorting capabilities for easy navigation. The application also includes effective tests to ensure functionality and reliability.

## Technologies

- React
- Vite
- Tailwind CSS
- TypeScript
- React Testing Library/ jest

## Some of the challenges I've faced and how I've tackled them

Fetching Data from GraphQL API
Challenge: Fetching parking lot data from a GraphQL API and handling asynchronous data loading efficiently.

Solution: I utilized Apollo Client to manage GraphQL queries and data fetching. By leveraging Apollo's useQuery hook, I was able to fetch data asynchronously and update the component state accordingly. Additionally, I implemented pagination using the fetchMore function to load more parking lots as the user rated them.

## Project Installation

```bash
git clone https://github.com/RottabMahmoud/wemolo-challenge
cd wemolo-challenge
yarn 
```

## To Start the App

```bash
npm run dev
```

## For Running the Tests

```bash
npm test
```

## For Building

```bash
npm build
```


## Project Hierarchy
```bash
  wemolo-challenge    
    ├─ public
    │  ├─ vite.svg
    ├─ src                   
    │  ├─ components         
    │  │  ├─ ParkingLotCard.tsx      
    │  │  ├─ SummaryView.tsx
    │  │  ├─ TinderView.tsx
    │  ├─ graphql         
    │  │  ├─ cleint.ts      
    │  │  ├─ queries.ts
    │  ├─ tests              
    │  │  └─ ParkingLotCard.test.tsx 
    │  │─ App.tsx
    │  │─ index.css
    │  │─ main.tsx
    │  │─ vite-env.d.ts
    ├─ .gitignore 
    ├─ node_modules
    ├─ package.json
    ├─ package-lock.json
    ├─ README.md
    ├─ jest.config.cjs
    ├─ jest.setup.ts
    ├─ tsconfig.json
    ├─ tsconfig.node.json
    ├─ tsconfig.app.json
    ├─ tailwind.config.js
    ├─ postcss.config.js
    └─ yarn.lock
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Badge

<a href="https://rottab.vercel.app"> <img src="https://img.shields.io/badge/Mahmoud%20Rottab-Porfolio" alt="Mahmoud Rottab" /> </a>
