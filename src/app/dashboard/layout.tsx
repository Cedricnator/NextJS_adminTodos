import Sidebar from '@/components/Sidebar';
import SidebarItem from '@/components/SidebarItem';
import { CiLogout } from 'react-icons/ci';
import Image from "next/image"
import TopMenu from '@/components/TopMenu';
import Link from 'next/link';

export default function DashboardLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Sidebar>
        <div>
          <div className="-mx-6 px-6 py-4">
            <Link href="/dashboard" title="home">              
                <Image 
                    height={30}
                    width={30}
                    src="https://tailus.io/sources/blocks/stats-cards/preview/images/logo.svg" 
                    className="w-32" 
                    alt="tailus logo"
                />
            </Link>
        </div>

        <div className="mt-8 text-center">
                <Image 
                    height={30}
                    width={30}
                    src="https://tailus.io/sources/blocks/stats-cards/preview/images/second_user.webp" 
                    alt="" 
                    className="w-10 h-10 m-auto rounded-full object-cover lg:w-28 lg:h-28"

                />
                <h5 className="hidden mt-4 text-xl font-semibold text-gray-600 lg:block">Cynthia J. Watts</h5>
                <span className="hidden text-gray-400 lg:block">Admin</span>
          </div>

            <ul className="space-y-2 tracking-wide mt-8">
                <SidebarItem />
            </ul>
        </div>

        <div className="px-6 -mx-6 pt-4 flex justify-between items-center border-t">
          <button className="px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group">
            <CiLogout />
            <span className="group-hover:text-gray-700">Logout</span>
          </button>
        </div>
      </Sidebar>
      
      {/* Main Layout content - Contenido principal del Layout */}
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">

        <TopMenu />

        <div className="px-6 pt-6">
          {children}
        </div>

      </div>
    </>
  );
}