import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App, { preloadRoute } from './App.jsx'

const root = document.getElementById('root')
const tree = (
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)

// Preload the current route's chunk BEFORE mounting, so the lazy route renders
// synchronously on the first pass — hydration matches the SSR'd HTML with no
// fallback flash. Production hydrates the prerendered HTML; the Vite dev server
// serves an empty root, so client-render there to avoid a mismatch.
preloadRoute(window.location.pathname).then(() => {
  if (root.hasChildNodes()) {
    hydrateRoot(root, tree)
  } else {
    createRoot(root).render(tree)
  }
})
