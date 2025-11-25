export default function ProductCard({ product }) {
    return (
        <div className="bg-white p-4 rounded shadow">
            <img src={product.thumbnail} className="w-full h-40 object-cover rounded" />
            <h2 className="font-semibold mt-2">{product.title}</h2>
            <p className="text-sm text-gray-600">{product.category}</p>
            <p className="text-lg font-bold mt-2">₹{product.price}</p>
        </div>
    );
}