import { Link, useNavigate } from 'react-router-dom';
import { FileText } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../../utils/Validations';
import { useAuth } from '../../store/DataStore.js';
import Loading from '../../components/Loading.jsx';
import ErrorPage from '../../components/ErrorPage.jsx';

export default function Signup() {
  const navigate = useNavigate();

  const signup = useAuth((state) => state.signup);
  const { success, error, isloading } = useAuth();

  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit = async (data) => {
    console.log('Signup data:', data);
    await signup(data);
    if (success) {
      navigate('/');
    }
  };

  if (isloading) {
    return <Loading />;
  }

  if (error) {
    return <ErrorPage title="Signup Error" message={error} />;
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <FileText className="w-10 h-10 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">Create account</h2>
            <p className="text-gray-500 mt-1">Start converting videos to notes today</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">username</label>
                <input {...register('username')} type="text" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="John" />
              </div>
              {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input {...register('email')} type="email" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="you@example.com" />
              {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input {...register('password')} type="password" required className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none" placeholder="Min 8 characters" />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            <button type="submit" className={`w-full ${isSubmitting ? 'bg-gray-400' : 'bg-indigo-600'} text-white py-2.5 rounded-lg font-semibold hover:bg-indigo-700 transition`} disabled={isSubmitting}>
              {isSubmitting ? 'Creating account...' : 'Create Account'}
            </button>
          </form>
          <div className="mt-6 text-center text-sm">
            <span className="text-gray-500">Already have an account? </span>
            <Link to="/login" className="text-indigo-600 font-semibold hover:text-indigo-500">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
