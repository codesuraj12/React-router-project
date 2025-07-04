import React from 'react'
import { useState } from 'react';




const LoginForm = ({ onNavigate, formData, onInputChange,setIsLogin }) => (
    <div className="space-y-4">
        <div className="relative">
          
            <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => onInputChange('username', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
        </div>

        <div className="relative">
      
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => onInputChange('password', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
        </div>

        <button
            onClick={() => onNavigate('dashboard')}
            className="w-full bg-teal-500 text-white py-3 rounded-lg font-semibold hover:bg-teal-600 transition-colors"
        >
            Log In
        </button>

        <div className="text-center text-sm text-gray-600">
            <span
                className="cursor-pointer hover:text-teal-500"
                onClick={() => setIsLogin(false)}
            >
                Sign Up
            </span>
        </div>
    </div>
);

const SignUpForm = ({ onNavigate, formData, onInputChange,setIsLogin  }) => (
    <div className="space-y-4">
        <div className="relative">
         
            <input
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={(e) => onInputChange('username', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
        </div>

        <div className="relative">
           
            <input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) => onInputChange('password', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
        </div>

        <div className="relative">
            
            <input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) => onInputChange('email', e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent outline-none"
            />
        </div>

        <button
            onClick={() => onNavigate('dashboard')}
            className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors"
        >
            Sign Up
        </button>

        <div className="text-center text-sm text-gray-600">
            <span
                className="cursor-pointer hover:text-teal-500"
                onClick={() => setIsLogin(true)}
            >
                Sign In
            </span>
        </div>
    </div>
);

const Login = ({ onNavigate, formData, onInputChange }) => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="min-h-screen bg-gradient-to-br from-teal-400 to-teal-500 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg shadow-2xl p-8 w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">Helpdesk System</h1>
                    {!isLogin && <p className="text-gray-600 text-sm">Create new account</p>}
                    {/*!isLogin && <div className="w-16 h-1 bg-teal-500 mx-auto rounded mt-2"></div>  this is for underline */}
                </div>

                {isLogin ? (
                    <LoginForm onNavigate={onNavigate}
                        formData={formData}
                        onInputChange={onInputChange}
                        setIsLogin={setIsLogin} />
                        
                    ) : (                   
                    <SignUpForm onNavigate={onNavigate}
                        formData={formData}
                        onInputChange={onInputChange}
                        setIsLogin={setIsLogin} />)}
            </div>
        </div>
    );
};



export default Login