"use client"
import React, { useState } from 'react';
import { User, Lock, Chrome } from 'lucide-react';

interface InputFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  Icon: React.ElementType;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ id, label, type, placeholder, value, onChange, Icon, error }) => {
  return (
    <div className="mb-5">
      <label htmlFor={id} className="block text-gray-400 text-sm font-medium mb-2">
        {label}
      </label>
      <div className="relative">
        <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 w-5 h-5" />
        <input
          id={id}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className="w-full pl-10 pr-4 py-3 bg-gray-700 text-white rounded border border-gray-600 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition duration-200 placeholder-gray-500"
        />
      </div>
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

interface CheckboxFieldProps {
  id: string;
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, label, checked, onChange }) => {
  return (
    <div className="mb-6 flex items-center">
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="form-checkbox h-4 w-4 text-blue-600 bg-gray-700 border-gray-600 rounded focus:ring-blue-500 cursor-pointer"
      />
      <label htmlFor={id} className="ml-2 text-gray-400 text-sm cursor-pointer">
        {label}
      </label>
    </div>
  );
};

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [errors, setErrors] = useState<{ username?: string; password?: string }>({});

  const validate = () => {
    const newErrors: { username?: string; password?: string } = {};
    if (!username) {
      newErrors.username = 'Username is required';
    } else if (username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form submitted:', { username, password, rememberMe });
    }
  };

  return (
    <div className="min-h-screen bg-[gray-900] flex flex-col items-center justify-center p-4 font-inter">
      <h1 className="text-white text-3xl font-bold text-center mb-2">Login</h1>
      <p className="text-gray-400 text-lg text-center mb-8">Welcome back</p>

      <div className="bg-[#161B22] p-8 rounded shadow-2xl w-full max-w-md mx-auto mb-8">
        <button
          className="w-full bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-4 rounded flex items-center justify-center gap-2 mb-6 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          onClick={() => console.log('Login with Google clicked!')}
        >
          <img src="/google.png" alt="" className="w-6"/>
          Login with Google
        </button>

        <div className="flex items-center justify-center text-[#DDE7EEF7] my-6">
          <div className="flex-grow border-t border-[#DDE7EEF7]"></div>
          <span className="mx-4 text-sm">OR</span>
          <div className="flex-grow border-t border-[#DDE7EEF7]"></div>
        </div>

        <form onSubmit={handleSubmit}>
          <InputField
            id="username"
            label="Username"
            type="text"
            placeholder="Enter your username here"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, username: undefined }));
            }}
            Icon={User}
            error={errors.username}
          />

          <InputField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setErrors((prevErrors) => ({ ...prevErrors, password: undefined }));
            }}
            Icon={Lock}
            error={errors.password}
          />

          <CheckboxField
            id="rememberMe"
            label="Remember me"
            checked={rememberMe}
            onChange={(e) => setRememberMe(e.target.checked)}
          />

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
        </form>

        <p className="text-center text-gray-400 text-sm mt-6">
          You don't have an account ?{' '}
          <a
            href="/register"
            className="text-blue-500 hover:underline font-semibold"
            onClick={() => console.log('Register link clicked!')}
          >
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
