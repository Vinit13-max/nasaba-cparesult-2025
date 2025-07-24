
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, FileText } from 'lucide-react';

const users = [
  { id: '10638427', password: 'Gayu@123', pdf: '/10638427.pdf' },
];

export default function App() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [error, setError] = useState('');
  const [forgot, setForgot] = useState(false);

  const handleLogin = () => {
    const user = users.find((u) => u.id === id && u.password === password);
    if (user) {
      setLoggedInUser(user);
      setError('');
    } else {
      setError('Invalid ID or password');
    }
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      {!loggedInUser ? (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-sm w-full">
          <div className="flex flex-col items-center gap-4">
            <Lock className="w-12 h-12 text-blue-500" />
            <h1 className="text-xl font-bold text-center">NASABA.CPAresult.2025</h1>
            <input
              type="text"
              placeholder="Enter ID"
              value={id}
              onChange={(e) => setId(e.target.value)}
              className="border p-2 rounded w-full"
            />
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="border p-2 rounded w-full"
            />
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button onClick={handleLogin} className="bg-blue-500 text-white rounded p-2 w-full mt-2">Login</button>
            <button onClick={() => setForgot(true)} className="text-blue-500 text-sm hover:underline">Forgot Password?</button>
            {forgot && <p className="text-sm text-gray-600 text-center">Please contact admin@nasaba.edu to reset your password.</p>}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-xl shadow-md p-6 max-w-sm w-full text-center flex flex-col items-center gap-4">
          <FileText className="w-12 h-12 text-green-500" />
          <h2 className="text-lg font-semibold">Your PDF file is ready</h2>
          <a href={loggedInUser.pdf} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Open NASABA CPA Result PDF</a>
        </div>
      )}
    </motion.div>
  );
}
