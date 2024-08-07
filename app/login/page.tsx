'use client';

import { signIn } from 'next-auth/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation'



export default function Login() {
  const router = useRouter()
  const { data: session } = useSession();

  if (session) {
    // Redirect to /protected using nextjs route
    router.push('/protected');

  }

  return (
    <div className="w-100 min-h-screen bg-neutral-200">
      <div className="flex items-center justify-center h-screen flex-col">
        <div className="mb-10">
          <div className="text-center mt-2 text-5xl tracking-tighter text-gray-700">Azure Entra<span className="font-bold">ID</span></div>
          <div className="uppercase text-center text-xs text-slate-500 opacity-90">Authentication page boilerplate</div>
        </div>
        <div className="bg-white p-10 border border-gray-300 shadow rounded-md w-[400px]">
          <div className="flex flex-col items-center justify-center">
          </div>
          <h3 className="text-3xl font-bold tracking-tight text-gray-700 text-center mb-14 mt-4">Login</h3>
          <div className="cursor-pointer flex gap-5 shadow mt-5 px-5 py-2 items-center bg-blue-900 text-white hover:bg-blue-800 " onClick={() => signIn('azure-ad')}>
            <Image src="/azure-1.svg" width={30} height={30} alt="Azure" className="brightness-0 invert m-1" />
            <div className="select-none">Sign in with Azure AD</div>
          </div>
          <p className="text-sm text-gray-600 pt-2 pb-8 ">If you have problems login in, please <Link href="#" className="underline text-blue-500">contact us</Link></p>
        </div>
      </div>
    </div>
  );
}
