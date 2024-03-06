import { Link } from 'react-router-dom'

export const Custom404Page = () => {
  return (
    <div>
        <h1>Page not found</h1>
        <p>Go back to the <Link to="/">homepage</Link>.</p>
        <p>Go back to <Link to="">previous</Link> page.</p>
    </div>
  )
}
