import { getCategories } from "./services/api";

export default async function CategoryPage() {
    const categories = await getCategories();
    console.log(categories)

    return (
        <div>
            <h1>Category Page</h1>
            <ul>
                {categories.map((item: any) => (
                    <li key={item.id}>
                        {item.id} - {item.name}
                    </li>
                ))}
            </ul>
        </div>
    );
}
