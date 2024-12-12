# Unexpected Route Matching with useParams in Nested Routes (React Router v6)

This repository demonstrates a subtle bug in React Router v6 when using nested routes with the `useParams` hook. The bug occurs when a parent route parameter is also used in a child route's path, and the parent parameter is missing. This can lead to unexpected route matching or rendering failures.

## Bug Description
The issue arises from ambiguity in how React Router interprets paths when parent route parameters are absent.  The provided example shows how this can manifest in unexpected behavior.

## Solution
The solution involves careful path structuring to avoid ambiguity in route definitions. The updated example provides a solution demonstrating correct parameter handling, ensuring proper rendering in all scenarios.

## Setup
Clone the repo and run `npm install` to install dependencies. Then, run `npm start` to start the development server.