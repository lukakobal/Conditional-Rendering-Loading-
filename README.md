# React 32: Auto-refresh Quotes App 🌀

A simple React app that fetches a random quote from an API every 5 seconds, with **loading**, **error handling**, and **manual refresh**.

## Features
- Fetches a new quote automatically every 5 seconds
- Shows a loading state while fetching
- Displays an error message if the API call fails
- Manual refresh button to fetch a quote on demand
- Clean and responsive UI

## How it works
1. **useState** manages three states: `quote`, `loading`, `error`
2. **useEffect** runs `fetchQuote` on component mount and sets an interval
3. **fetchQuote** handles:
   - API request
   - Error handling
   - Updating loading and quote states
4. Interval is cleaned up with `clearInterval` to avoid memory leaks

## Usage
1. Clone the repo
2. Run `npm install` (if local project)
3. Run `npm start`
4. Enjoy random quotes updating automatically

## Skills Practiced
- React `useState` & `useEffect`
- Async API fetching
- Conditional rendering
- Error handling
- Interval management in React
