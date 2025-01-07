import { Plus } from "lucide-react";

export default function CreationCard() {
  return (
    <div className="bg-gray-300 lg:w-[400px] pl-4 lg:h-[400px] rounded-lg flex justify-center items-center cursor-pointer animate-pulse">
      <Plus size={100} />
    </div>
  );
}
