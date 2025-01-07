import { Plus } from "lucide-react";

interface Props {
  onClick(): void;
}

export default function CardCreation({ onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="bg-gray-300 lg:w-[400px] pl-4 lg:h-[400px] rounded-lg flex justify-center items-center cursor-pointer animate-pulse transform transition-transform duration-300 hover:scale-105 hover:shadow-lg animate-floating"
    >
      <Plus size={100} />
    </div>
  );
}
