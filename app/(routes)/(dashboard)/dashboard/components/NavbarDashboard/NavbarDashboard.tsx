'use client';

import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import SidebarRoutes from '../SidebarRoutes/SidebarRoutes';
import { signIn, useSession } from 'next-auth/react';

export function Navbardashboard() {
  const { data: session } = useSession();
  console.log(session);

  return (
    <nav className="flex items-center justify-between w-full h-20 px-2 border-b gap-x-4 md:px-6 bg-background ">
      <div className="block xl:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>
      <div className="flex items-center justify-end w-full gap-x-2">
        <button
          onClick={() => signIn('google')}
          className="bg-sky-400 px-3 py-2 rounded"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
}
