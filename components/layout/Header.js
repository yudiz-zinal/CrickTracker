import Image from "next/image";
export default function Header() {
  return (
    <div className="bg-primary-700">
      <nav className="container mx-auto px-4 md:px-6 max-w-screen-xl border-gray-200 dark:bg-gray-900 py-[14px]">
        <div className="grid grid-cols-2 justify-between items-center   ">
          <div className=" flex items-center gap-4">
            <a>
              <Image src="/logo.svg" alt="Logo" width={150} height={25} />
            </a>
          </div>

          <div className=" flex items-center  justify-end gap-4 ">
            <div
              role={"button"}
              className="text-primary-500 bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-bold  rounded-full text-sm px-2 shadow py-1 text-center  dark:bg-blue-600 dark:hover:bg-blue-500 dark:focus:ring-blue-500"
            >
              Sign In
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
