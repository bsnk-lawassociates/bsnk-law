import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { createClient } from '@supabase/supabase-js';
import Head from 'next/head';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function Dashboard() {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState('');

  useEffect(() => {
    const getSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();

      if (!session?.user) {
        router.push('/login');
      } else {
        setUserEmail(session.user.email || '');
      }
    };

    getSession();
  }, [router]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/login');
  };

  return (
    <>
      <Head>
        <title>Dashboard - BSNK Law Associates</title>
      </Head>
      <main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="bg-white shadow-md p-8 rounded-lg max-w-md w-full text-center">
          <h1 className="text-2xl font-bold mb-4">Welcome Admin</h1>
          <p className="text-gray-700 mb-6">Logged in as: <strong>{userEmail}</strong></p>
          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition"
          >
            Logout
          </button>
        </div>
      </main>
    </>
  );
}

