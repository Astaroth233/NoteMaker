import { Link } from "react-router";
import { PlusIcon } from "lucide-react";

const Navbar = () => {
  return (
    <header className="bg-gray-900 border-b border-gray-700">
      <div className="mx-auto max-w-6xl p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-white font-mono tracking-tight">
            ThinkBoard
          </h1>
          <div className="flex items-center gap-4">
            <Link to={"/create"} className="btn btn-primary">
              <PlusIcon className="size-5 text-white" />
              <span>New Note</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;