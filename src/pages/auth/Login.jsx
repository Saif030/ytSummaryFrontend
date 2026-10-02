import { Link, useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema } from '../../utils/Validations';
import { useAuth } from '../../store/DataStore.js';
import Loading from '../../components/Loading.jsx';
import ErrorPage from '../../components/ErrorPage.jsx';

export default function Login() {
  const navigate = useNavigate();
  const login = useAuth((state) => state.login);
  const { success, error, isloading } = useAuth();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data) => {
    console.log('Login data:', data);
    await login(data);
    if (success) {
      navigate('/');
    }
  };

  if (isloading) {
    return (
      <Loading />
    );
  }

  if(error) {
    return (
      <ErrorPage title="Login Error" message={error} />
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <FileText className="w-10 h-10 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Welcome back</h2>
            <p className="text-gray-500 mt-1">Sign in to your NoteTube account</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                { ...register('email') }
                type="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="you@example.com"
              />
              {errors.email && <p style={{ color: 'red' }}>{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input
                { ...register('password') }
                type="password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition"
                placeholder="••••••••"
              />
              {errors.password && <p style={{ color: 'red' }}>{errors.password.message}</p>}
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="rounded text-indigo-600 focus:ring-indigo-500" />
                <span className="ml-2 text-gray-600">Remember me</span>
              </label>
              <button type="button" className="text-indigo-600 hover:text-indigo-500 font-medium">Forgot password?</button>
            </div>
            <button type="submit" className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-indigo-600'} text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition`} disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Sign In'}
            </button>
          </form>
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">Don't have an account? </span>
            <Link to="/signup" className="text-indigo-600 font-semibold hover:text-indigo-500">Sign up</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
