## .env File

Add .env file in the root of the project with this content:

```bash
NEXT_PUBLIC_API_URL = https://snappfood.ir
```

## Getting Started

First, run the package manager to install required packages:

```bash
npm i
```

Second, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

In **src/components** there are two folders. One is named common and the other is named home.<br>
In the common folder, there are all common components, hooks, functions, and common assets like images, fonts, icons, styles, and whatever use commonly in the entire app.<br>
On the other hand, the home folder, or any other folder here except the common folder, represents the styles and assets specific to a page. So home folder points to styles assets and components that are specific to the home page in the pages folder. 

In **src/pages** there are all pages that in this project we have just one page(index.tsx).

In **src/redux** there are all our redux/toolkit config and slice and store.

In **src/services** there are configs for API and define API URLS and their functions and they put them in their service folder based on their url.

In **src/stories** there are our storybook files to document components.

In **src/test** there are our test files.
