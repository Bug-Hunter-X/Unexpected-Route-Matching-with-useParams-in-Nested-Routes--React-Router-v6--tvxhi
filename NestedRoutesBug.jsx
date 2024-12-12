In React Router Dom v6, when using nested routes with `useParams` hook, an unexpected behavior might occur if a parent route's parameter is also used in a child route's path.  If the parent route parameter is not provided, the child route might fail to render or cause unexpected route matching. This is because the child route's path interpretation becomes ambiguous in the absence of the parent's parameter.