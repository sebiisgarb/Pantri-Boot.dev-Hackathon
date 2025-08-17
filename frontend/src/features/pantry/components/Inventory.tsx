import { useState, useMemo, useEffect } from "react";
import { Search } from "lucide-react";
import { mockItems } from "./inventoryMock";
import type { Item } from "./inventoryMock";

const categories: Item["category"][] = [
  "Bakery",
  "Dairy",
  "Meat",
  "Vegetables",
  "Fruits",
  "Beverages",
  "Snacks",
];
const PAGE_SIZE = 12;

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<
    Item["category"] | "All"
  >("All");

  const [page, setPage] = useState(0);

  useEffect(() => {
    setPage(0);
  }, [selectedCategory, searchTerm]);

  const filtered = useMemo(() => {
    return mockItems.filter((item) => {
      const matchesCategory =
        selectedCategory === "All" || item.category === selectedCategory;
      const matchesSearch = item.name
        .toLowerCase()
        .includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);
  const pageItems = filtered.slice(page * PAGE_SIZE, (page + 1) * PAGE_SIZE);

  return (
    <div className="container mx-auto px-4 py-8 h-[600px]">
      <div className="flex flex-col gap-8">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <h1 className="text-2xl font-bold">Inventory</h1>

          <div className="relative w-full sm:w-72">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <input
              placeholder="Search item..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-3 py-2 w-full rounded-lg border border-gray-300 focus:ring-2 focus:ring-purple-300 outline-none"
            />
          </div>
        </div>

        <div className="flex gap-2 flex-wrap">
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat as any)}
              className={`px-4 py-1 rounded-full text-sm border ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white border-purple-600"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              } transition`}
            >
              {cat}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-6 gap-4">
          {pageItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}

          {pageItems.length === 0 && (
            <p className="col-span-full text-center text-gray-500 mt-10">
              No items match your filters.
            </p>
          )}
        </div>
      </div>

      {pageCount > 1 && (
        <nav className="mt-6 flex items-center justify-center gap-6">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 0))}
            disabled={page === 0}
            className="px-4 py-1 rounded-lg bg-gray-100 disabled:opacity-50 cursor-pointer"
          >
            ‹ Prev
          </button>

          <span className="text-sm">
            Page&nbsp;<strong>{page + 1}</strong>&nbsp;/&nbsp;{pageCount}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, pageCount - 1))}
            disabled={page === pageCount - 1}
            className="px-4 py-1 rounded-lg bg-gray-100 disabled:opacity-50 cursor-pointer"
          >
            Next ›
          </button>
        </nav>
      )}
    </div>
  );
};

function ItemCard({ item }: { item: Item }) {
  return (
    <div className="flex flex-col items-center gap-2 bg-white rounded-xl shadow-sm p-3">
      <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center text-3xl">
        {item.category === "Bakery" ? (
          <span role="img" aria-label="Bakery">
            🍞
          </span>
        ) : item.category === "Dairy" ? (
          <span role="img" aria-label="Dairy">
            🥛
          </span>
        ) : item.category === "Meat" ? (
          <span role="img" aria-label="Meat">
            🍖
          </span>
        ) : item.category === "Vegetables" ? (
          <span role="img" aria-label="Vegetables">
            🥦
          </span>
        ) : item.category === "Fruits" ? (
          <span role="img" aria-label="Fruits">
            🍎{" "}
          </span>
        ) : item.category === "Beverages" ? (
          <span role="img" aria-label="Beverages">
            🥤{" "}
          </span>
        ) : item.category === "Snacks" ? (
          <span role="img" aria-label="Snacks">
            🍿{" "}
          </span>
        ) : (
          <span role="img" aria-label="Unknown">
            ❓
          </span>
        )}
      </div>
      <p className="text-sm font-semibold text-center">{item.name}</p>
      <p className="text-xs text-gray-500">
        {item.quantity} {item.unit}
      </p>
      <span
        className={`text-[10px] px-2 py-[2px] rounded-full ${
          item.category === "Bakery"
            ? "bg-yellow-100 text-yellow-800"
            : item.category === "Dairy"
            ? "bg-blue-100 text-blue-800"
            : item.category === "Meat"
            ? "bg-red-100 text-red-800"
            : item.category === "Vegetables"
            ? "bg-green-100 text-green-800"
            : item.category === "Fruits"
            ? "bg-pink-100 text-pink-800"
            : item.category === "Beverages"
            ? "bg-purple-100 text-purple-800"
            : item.category === "Snacks"
            ? "bg-orange-100 text-orange-800"
            : "bg-gray-100 text-gray-800"
        }`}
      >
        {item.category}
      </span>
    </div>
  );
}

export default Inventory;
