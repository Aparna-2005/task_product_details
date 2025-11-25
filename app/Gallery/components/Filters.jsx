"use client";
export default function Filters({ category, setCategory, price, setPrice }) {
    const categories = ["smartphones", "laptops", "fragrances", "skincare", "groceries"];


    return (
        <div className="flex gap-4 mb-4 flex-wrap">
            <select
                className="p-2 border rounded"
                value={category}
                onChange={(e) => setCategory(e.target.value)}>
                <option value="">All Categories</option>
                {categories.map((c) => (
                    <option key={c} value={c}>{c}</option>
                ))}
            </select>


            <div className="flex items-center gap-2">
                <span>Price:</span>
                <input
                    type="number"
                    value={price[0]}
                    className="w-20 p-1 border rounded"
                    onChange={(e) => setPrice([Number(e.target.value), price[1]])}
                />
                {/* <span>-</span>
                <input
                    type="number"
                    value={price[1]}
                    className="w-20 p-1 border rounded"
                    onChange={(e) => setPrice([price[0], Number(e.target.value)])}
                /> */}
            </div>
        </div>
    );
}