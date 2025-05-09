import { Trash } from "lucide-react";
import Link from "next/link";

type CartItemProps = {
    item: {
        id: number;
        name: string;
        price: number;
        quantity: number;
        image: string;
    };
};

const CartItem = ({ item }: CartItemProps) => {
    return (
        <div className="flex items-center p-2 rounded-lg border">
            <Link href='#'>
                <img src='https://cdn.tgdd.vn/Products/Images/42/329149/iphone-16-pro-max-sa-mac-thumb-1-600x600.jpg' alt={item.name} className="cursor-pointer bg-yellow-100 w-25 h-25 rounded-lg object-cover" />
            </Link>
            <div className="px-2 flex-1 flex flex-col lg:flex-row lg:items-center lg:justify-between">
                <div className="mb-1 lg:mb-0">
                    <Link href='#'><p className="font-medium text-sm">{item.name}</p></Link>
                    <p className="font-medium text-sm my-1 lg:my-2">#{item.id}</p>
                    <p className="font-medium text-sm">${item.price} * {item.quantity} = <span className="font-bold">${item.price * item.quantity}</span></p>
                </div>
                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <button className="cursor-pointer px-2 border rounded">−</button>
                        <span className="mx-2 text-sm">{item.quantity}</span>
                        <button className="cursor-pointer px-2 border rounded">+</button>
                    </div>
                    <div className="flex items-center">
                        {/* <p className="text-sm text-black">${item.price * item.quantity}</p> */}
                        <button className="cursor-pointer ml-4 text-red-500 text-sm"><Trash size={16} color="red" /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartItem;
