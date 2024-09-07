'use client'; // Required due to the need of use client-side actions 

import { useSession, signIn, signOut } from 'next-auth/react';
import { useEffect, useState } from "react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from '@/components/ui/button';

export default function HomePage() {
  // Retrieve data from the session
  const { data: session } = useSession();
  const [groups, setGroups] = useState<any[]>([]);

  // Grab the data from the Azure API using the client-side action
  useEffect(() => {
    const fetchData = async () => {
      const reponse = await fetch('/api/groups');
      const data = await reponse.json();
      setGroups(data.value || []);
    }

    if (session) {
      fetchData();
    }
  }, [session]);

  if (!session) {
    return (
      <div>
        <p>You are not signed in</p>
        <Button onClick={() => signIn()}>Sign in</Button>
      </div>
    );
  }

  return (
    <div className="p-20">
      <h1>Welcome, {session.user?.name}</h1>

      <h2 className="pt-10 font-semibold">Your Groups:</h2>

      <Select>
        <SelectTrigger className="w-[250px]">
          <SelectValue placeholder="" />
        </SelectTrigger>
        <SelectContent>
          {groups && groups.map((group: any) => (
            <SelectItem key={group.id} value={group.displayName}>{group.displayName}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )

}