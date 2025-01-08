export default function NotFound() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Página Não Encontrada</h2>
        <p className="text-gray-600 mb-6">
          Desculpe, a página que você está procurando não existe ou foi movida.
        </p>
        <a
          href="/"
          className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Voltar para a Página Inicial
        </a>
      </div>
    );
  }
  