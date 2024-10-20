'use client';

// import { Separator } from '@/components/ui/separator';
import { SidebarItem } from './SidebarItem';
import { dataGeneralSidebar } from './SidebarRoutes.data';
// import { useAuth } from '@clerk/nextjs';

export default function SidebarRoutes() {
  //   const { userId } = useAuth();

  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="mb-2 text-zinc-500">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
