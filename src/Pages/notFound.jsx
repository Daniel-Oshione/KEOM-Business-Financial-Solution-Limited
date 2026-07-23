import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center py-24 px-4">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
      <p className="text-gray-600 mb-6">The page you're looking for doesn't exist.</p>
      <Link to="/" className="text-sky-600 font-semibold">← Back to Home</Link>
    </div>
  );
}