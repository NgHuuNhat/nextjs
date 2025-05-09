type CartSummaryProps = {
    cartItems: {
        price: number;
        quantity: number;
    }[];
};

const CartSummary = ({ cartItems }: CartSummaryProps) => {
    const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

    return (
        <div className="h-[75vh] border p-6 rounded-lg space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
                <h2 className="text-m font-bold">Order Summary</h2>
                <div className="space-y-4 text-sm">
                    <div className="flex justify-between">
                        <span>ncjksdnc:</span>
                        <span>{cartItems.length}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>dcsjncksndc:</span>
                        <span>{cartItems.length}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>csdncsk:</span>
                        <span>{cartItems.length}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>cdsbcshbdjh:</span>
                        <span>{cartItems.length}</span>
                    </div>
                </div>
            </div>
            <div className="space-y-4 ">
                <div className="border border-black bg-black"></div>
                <div className="space-y-4">
                    <div className="flex justify-between">
                        <span>Total Items:</span>
                        <span>{cartItems.length}</span>
                    </div>
                    <div className="flex justify-between">
                        <span>Total Price:</span>
                        <span className="font-bold">${total.toFixed(2)}</span>
                    </div>
                </div>
                <button className="cursor-pointer w-full bg-black text-white py-2 rounded hover:bg-gray-800">
                    Checkout
                </button>
            </div>
        </div>
    );
};

export default CartSummary;
