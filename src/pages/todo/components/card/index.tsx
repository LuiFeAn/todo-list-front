import { ITodo } from "../../todo.service.interfaces";
import { Trash, Check } from "lucide-react";

interface Props {
  todo: ITodo;
}

export default function Card({ todo }: Props) {
  return (
    <div className="bg-blue-300 lg:w-[400px] pl-4 lg:h-[400px] rounded-lg relative">
      <h1 className="text-2xl text-start mt-5 font-bold">{todo.title}</h1>
      <p className="mt-3 font-bold">{todo.priority}</p>
      <div>
        <p className="pt-10 break-words">{todo.description}</p>
      </div>
      <div className="flex gap-2 absolute bottom-10 right-5">
        <Check
          size={30}
          className="bg-green-500 rounded-full cursor-pointer animate-pulse text-white p-2"
        />
        <Trash
          size={30}
          className="bg-red-600 rounded-full animate-pulse cursor-pointer text-white p-2"
        />
      </div>
    </div>
  );
}
