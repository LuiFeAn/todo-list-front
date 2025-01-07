import { ITodo } from "../../todo.service.interfaces";

interface Props {
  todo: ITodo;
}

export default function Card({ todo }: Props) {
  return (
    <div className="bg-blue-300 lg:w-[400px] pl-4 lg:h-[400px] rounded-lg">
      <h1 className="text-2xl text-start mt-5 font-bold">{todo.title}</h1>
      <p className="mt-3 font-bold">{todo.priority}</p>
      <div>
        <p className="pt-10 break-words">{todo.description}</p>
      </div>
    </div>
  );
}
