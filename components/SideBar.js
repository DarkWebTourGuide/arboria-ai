import { forwardRef } from "react";
import Link from "next/link";
import { CubeTransparentIcon, CpuChipIcon, PencilIcon, DocumentIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

const SideBar = forwardRef(({ showNav }, ref) => {
  const router = useRouter();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-[#202123] shadow-sm">
      <div className="flex justify-center mt-6 mb-5">
        <picture>
          <img
            className="w-32 h-auto"
            src="/yukio_labs_company_logo.png"
            alt="company logo"
          />
        </picture>
      </div>

      <div className="flex flex-col">
        <Link href="/">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/"
                ? "bg-purple-100 text-purple-500"
                : "text-gray-400 hover:bg-purple-100 hover:text-purple-500"
            }`}
          >
            <div className="mr-2">
              <HomeIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/arboria">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/arboria"
                ? "bg-green-100 text-[#10a37f]"
                : "text-gray-400 hover:bg-green-100 hover:text-[#10a37f]"
            }`}
          >
            <div className="mr-2">
              <CubeTransparentIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Arboria</p>
            </div>
          </div>
        </Link>
        <Link href="/proteus">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/proteus"
                ? "bg-blue-100 text-blue-500"
                : "text-gray-400 hover:bg-blue-100 hover:text-blue-500"
            }`}
          >
            <div className="mr-2">
              <CpuChipIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Proteus</p>
            </div>
          </div>
        </Link>
        <Link href="/loresmith">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/loresmith"
                ? "bg-red-100 text-red-500"
                : "text-gray-400 hover:bg-red-100 hover:text-red-500"
            }`}
          >
            <div className="mr-2">
              <PencilIcon className="h-5 w-5" />
            </div>
            <div>
              <p>LoreSmith</p>
            </div>
          </div>
        </Link>
        <Link href="https://beta.openai.com/docs/introduction" target={'_blank'}>
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              router.pathname == "/https://beta.openai.com/docs/introduction"
                ? "bg-gray-100 text-gray-500"
                : "text-gray-400 hover:bg-gray-100 hover:text-gray-500"
            }`}
          >
            <div className="mr-2">
              <DocumentIcon className="h-5 w-5" />
            </div>
            <div>
              <p>API info ↗</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;