import React from 'react'

export default function productUpdate() {

    
    const products = [
        { name: "Chicken", category: "Fast Food", offerPrice: 3200, inStock: true, image: "https://www.kfc.lk/images/KFC-Home.jpg", },
        { name: "Chicken", category: "Fast Food", offerPrice: 3200, inStock: true, image: "https://www.kfc.lk/images/KFC-Home.jpg", },
        { name: "Chicken", category: "Fast Food", offerPrice: 3200, inStock: true, image: "https://www.kfc.lk/images/KFC-Home.jpg", },
        { name: "Chicken", category: "Fast Food", offerPrice: 3200, inStock: true, image: "https://www.kfc.lk/images/KFC-Home.jpg", },
        { name: "Chicken", category: "Fast Food", offerPrice: 3200, inStock: true, image: "https://www.kfc.lk/images/KFC-Home.jpg", },
        { name: "Chicken", category: "Fast Food", offerPrice: 3200, inStock: true, image: "https://www.kfc.lk/images/KFC-Home.jpg", },
        
    ];

  return (
    <div>
      <div className="flex-1 py-10 flex flex-col justify-between">
            <div className="w-full md:p-10 p-4">
                <h2 className="pb-4 text-lg font-medium">All Products</h2>
                <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/20">
                    <table className="md:table-auto table-fixed w-full overflow-hidden">
                        <thead className="text-white bg-emerald-700 items-center text-sm text-left">
                            <tr>
                                <th className="px-4 py-3 font-semibold truncate">Product</th>
                                <th className="px-4 py-3 font-semibold truncate">Category</th>
                                <th className="px-4 py-3 font-semibold truncate">Selling Price</th>
                                <th className="px-4 py-3 font-semibold truncate">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-500">
                            {products.map((product, index) => (
                                <tr key={index} className="border-t border-gray-500/20 bg-emerald-50">
                                    <td className="md:px-4 pl-2 md:pl-4 py-3 flex items-center space-x-3 truncate">
                                        <div className="border border-gray-300 rounded p-2">
                                            <img src={product.image} alt="Product" className="w-16" />
                                        </div>
                                        <span className="truncate max-sm:hidden w-full">{product.name}</span>
                                    </td>
                                    <td className="px-4 py-3">{product.category}</td>
                                    <td className="px-4 py-3 max-sm:hidden">LKR {product.offerPrice}</td>
                                    <td className="px-4 py-3">
                                        <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
                                        <button className='px-3 py-2.5 bg-green-800 text-white font-medium rounded'>Edit</button>  
                                        <button className='px-3 py-2.5 bg-red-600 text-white font-medium rounded'>Delete</button>  
                                        </label>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
  )
}
