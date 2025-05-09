import { ShoppingCart } from "lucide-react";
import CartItem from "./components/CartItem";
import CartSummary from "./components/CartSummary";


const CartPage = () => {
    // Ví dụ dữ liệu, bạn nên dùng context hoặc lấy từ backend
    const cartItems = [
        { id: 1, name: 'iPhone 14 Pro Max', price: 1399, quantity: 1, image: '/iphone-main.png' },
        { id: 2, name: 'AirPods Max Silver', price: 549, quantity: 2, image: '/airpods.png' },
        { id: 3, name: 'iPhone 14 Pro Max', price: 1399, quantity: 1, image: '/iphone-main.png' },
        { id: 4, name: 'AirPods Max Silver', price: 549, quantity: 2, image: '/airpods.png' },
        { id: 5, name: 'iPhone 14 Pro Max', price: 1399, quantity: 1, image: '/iphone-main.png' },
        { id: 6, name: 'AirPods Max Silver', price: 549, quantity: 2, image: '/airpods.png' },
        { id: 7, name: 'AirPods Max Silver', price: 549, quantity: 2, image: '/airpods.png' },
        { id: 8, name: 'iPhone 14 Pro Max', price: 1399, quantity: 1, image: '/iphone-main.png' },
        { id: 9, name: 'AirPods Max Silver', price: 549, quantity: 2, image: '/airpods.png' },
    ];

    return (
        <div className="container mx-auto">
            <div className="px-4 my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {/* Left: Product list */}
                <div className="md:h-[75vh] flex flex-col md:col-span-1 lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-center">
                        <h2 className="text-m font-bold">Your Cart</h2>
                    </div>
                    <div className="flex-1 md:overflow-y-auto flex flex-col gap-2">
                        {cartItems.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </div>
                </div>

                {/* Right: Cart Summary */}
                <CartSummary cartItems={cartItems} />
            </div>
        </div>
    );
};

export default CartPage;
