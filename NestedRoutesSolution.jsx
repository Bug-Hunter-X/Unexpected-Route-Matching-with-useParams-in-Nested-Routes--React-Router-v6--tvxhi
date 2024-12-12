The solution involves restructuring the routes to avoid ambiguity. Instead of relying on a parent parameter directly in the child route's path, we can use a wildcard parameter '*' in the parent route, making the child's route definition more robust.

```javascript
// NestedRoutesSolution.jsx
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';

function ParentRoute() {
  let { parentId } = useParams();
  return (
    <div>
      <h1>Parent Route</h1>
      <p>Parent ID: {parentId}</p>
      <Routes>
        <Route path=':childId' element={<ChildRoute />} />
      </Routes>
    </div>
  );
}

function ChildRoute() {
  let { childId } = useParams();
  return (
    <div>
      <h1>Child Route</h1>
      <p>Child ID: {childId}</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/parent/:parentId/*" element={<ParentRoute />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
```