'use client';

import { Session } from 'next-auth';
import { useSession, signOut } from 'next-auth/react';
import Link from 'next/link';

const Protected = () => {
  const { data, status }: { data: Session | null, status: any } = useSession();
  const session = data;





  if (status === 'loading') return (
    <div>
      <div className="w-100 min-h-screen bg-neutral-200">
        <div className="flex items-center justify-center h-screen flex-col">
          <div className="mb-10">
            <div className="text-center mt-2 text-5xl tracking-tighter text-gray-700">Azure Entra<span className="font-bold">ID</span></div>
            <div className="uppercase text-center text-xs text-slate-500 opacity-90">Authentication page boilerplate</div>
          </div>
          <div className="bg-white p-10 border border-gray-300 shadow rounded-md w-6/12 text-gray-600">
            <div className="flex flex-col items-center justify-center">
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-gray-700 text-center  mt-4">Loading</h3>
          </div>
        </div>
      </div>
    </div>
  );

  if (!session) return (
    <div>
      <div className="w-100 min-h-screen bg-neutral-200">
        <div className="flex items-center justify-center h-screen flex-col">
          <div className="mb-10">
            <div className="text-center mt-2 text-5xl tracking-tighter text-gray-700">Azure Entra<span className="font-bold">ID</span></div>
            <div className="uppercase text-center text-xs text-slate-500 opacity-90">Authentication page boilerplate</div>
          </div>
          <div className="bg-white p-10 border border-gray-300 shadow rounded-md w-6/12  text-gray-600">
            <div className="flex flex-col items-center justify-center">
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-gray-700 text-center  mt-4">Authorization Error</h3>
            <h1 className="text-sm text-gray-500 mb-14 text-center ">Not-Protected Page</h1>
            <p className="">You are not authenticated. In order to access to any protected page you MUST login first.</p>
            <div className="mt-5">
              <Link href="/login"><div className="select-none text-center bg-black text-white px-5 py-2 mt-24 rounded-md hover:bg-gray-900 cursor-pointer" >Go to Login Page</div></Link>
            </div>

          </div>
        </div>
      </div>
    </div>

  )

  return (
    <div>
      <div className="w-100 min-h-screen bg-neutral-200">
        <div className="flex items-center justify-center h-screen flex-col">
          <div className="mb-10">
            <div className="text-center mt-2 text-5xl tracking-tighter text-gray-700">Azure Entra<span className="font-bold">ID</span></div>
            <div className="uppercase text-center text-xs text-slate-500 opacity-90">Authentication page boilerplate</div>
          </div>
          <div className="bg-white p-10 border border-gray-300 shadow rounded-md w-6/12 text-gray-600">
            <div className="flex flex-col items-center justify-center">
            </div>
            <h3 className="text-3xl font-bold tracking-tight text-gray-700 text-center  mt-4">Welcome!</h3>
            <h1 className="text-sm text-gray-500 mb-14 text-center ">Protected Page</h1>
            <p className="">Welcome, {session.user?.name}!</p>
            <div className="mt-5">
              <h2 className="text-xl text-gray-900">Session information</h2>
              <div>Session email: {session.user?.email}</div>
              <div>Session expiration: {session.expires}</div>
            </div>
            <div className="select-none text-center bg-black text-white px-5 py-2 mt-24 rounded-md hover:bg-gray-900 cursor-pointer" onClick={() => signOut()}>Sign out</div>
          </div>
        </div>
      </div>
    </div>
  );

}

export default Protected;