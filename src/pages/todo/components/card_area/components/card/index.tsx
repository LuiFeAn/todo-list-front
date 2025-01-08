import { Check, Trash } from "lucide-react";
import useCardController from "./card.controller";
import { ITodo } from "../../../../todo.service.interfaces";

interface Props {
  todo: ITodo;
  onClick(): void;
  refetch(): Promise<void>;
}
export default function Card({ todo, refetch, onClick }: Props) {
  const { handleCardColor, handleCardDel, makeDone } = useCardController({
    refetch,
  });

  return (
    <div
      onClick={onClick}
      className={`lg:w-[400px] pl-4 lg:h-[400px] rounded-lg relative cursor-pointer transform transition-transform duration-300 hover:scale-105 hover:shadow-lg bg-yellow-200 rotate-1 shadow-md shadow-gray-400 border border-gray-300`}
    >
      {todo.done && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 rounded-lg z-10">
          <p className="text-2xl font-bold animate-pulse text-black">
            ✔ Concluída!
          </p>
        </div>
      )}

      <h1 className="text-2xl text-start mt-5 font-bold break-words">
        {todo.title}
      </h1>
      <p
        className={`mt-3 font-bold pl-2 rounded-l-lg text-white ${handleCardColor(
          todo.priority
        )}`}
      >
        {todo.priority}
      </p>
      <div>
        <p className="pt-10 break-words">{todo.description}</p>
      </div>
      <div className="flex gap-2 absolute bottom-1 right-2">
        {!todo.done && (
          <>
            <Check
              onClick={() => makeDone(todo.id)}
              size={30}
              className="bg-green-600 rounded-full cursor-pointer text-white p-2"
            />
            <Trash
              size={30}
              onClick={() => handleCardDel(todo.id)}
              className="bg-red-600 rounded-full cursor-pointer text-white p-2"
            />
          </>
        )}
      </div>
    </div>
  );
}
