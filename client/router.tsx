import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import App from './components/utils/App'
import Main from './components/Main'
import Projects from './components/Projects'

export const routes = createRoutesFromElements(
  <Route path="/" element={<App />}>
    <Route index element={<Main />} />
    <Route path="projects" element={<Projects />} />
  </Route>
)

export const router = createBrowserRouter(routes)