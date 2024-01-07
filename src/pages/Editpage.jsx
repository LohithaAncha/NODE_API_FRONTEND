import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect } from "react";

const Editpage = () => {
    let { id } = useParams();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [product, setProduct] = useState({
        name: "",
        quantity: "",
        price: "",
        image: "",

    });

    const getProduct = async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`http://localhost:3000/api/products/${id}`)
            setProduct({
                name: response.data.name,
                quantity: response.data.quantity,
                price: response.data.price,
                image: response.data.image,

            });
            setIsLoading(false);
        } catch (error) {
            toast.error(error.message)
            setIsLoading(false);
        }
    };

    const updateProduct = async (e) => {
        e.preventDefault();

        try {
            setIsLoading(true);
            await axios.put(`http://localhost:3000/api/products/${id}`, product);
            toast.success("Updated product successfully")
            setIsLoading(false)
            navigate("/");
        } catch (error) {
            toast.error(error.message);
            setIsLoading(false)
        }
    }


    useEffect(() => {
        getProduct();
    }, []);
    return (

        <div className="max-w-lg bg-white shadow-lg mx-auto p-7 rounded pt-6">
            <h2 className="font-semibold text-2xl mb-4 block text-center">
                Update A Product - {product.name}
            </h2>
            {isLoading ? ("Loading") : (
                <>
                    <form onSubmit={updateProduct}>
                        <div className="space-y-2">
                            <div>
                                <label>Name</label>
                                <input type="text" value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} className="w-full block bg-pink-100 border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Name"></input>
                            </div>
                            <div>
                                <label>Quantity</label>
                                <input type="number" value={product.quantity} onChange={(e) => setProduct({ ...product, quantity: e.target.value })} className="w-full block bg-pink-100 border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Quantity"></input>
                            </div>
                            <div>
                                <label>Price</label>
                                <input type="number" value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} className="w-full block bg-pink-100 border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Price"></input>
                            </div>
                            <div>
                                <label>Image URL</label>
                                <input type="text" value={product.image} onChange={(e) => setProduct({ ...product, image: e.target.value })} className="w-full block bg-pink-100 border p-3 text-gray-600 rounded focus:outline-none focus:shadow-outline focus:border-blue-200 placeholder-gray-400" placeholder="Enter Image URL"></input>
                            </div>
                            <div>
                                {!isLoading && (<button className="block w-full mt-6 bg-blue-700 text-white rounded-sm px-4 py-2 font-bold hover:bg-blue-500 hover:cursor:pointer">Update</button>)}

                            </div>
                        </div>

                    </form>
                </>
            )}

        </div>

    );
}
export default Editpage;