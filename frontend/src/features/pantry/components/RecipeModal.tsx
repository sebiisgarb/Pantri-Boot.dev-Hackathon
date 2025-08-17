const RecipeModal = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
        <h2 className="text-xl font-semibold mb-4">Recipe Details</h2>
        {/* Recipe content goes here */}
        <button className="mt-4 px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700">
          Close
        </button>
      </div>
    </div>
  );
};

export default RecipeModal;
