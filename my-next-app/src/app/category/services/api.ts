export async function getCategories() {
    try {
        const res = await fetch("http://localhost:3000/api/category");
        const data = await res.json();
        return data;

    } catch (error) {
        console.error('Error fetching categories:', error);
        return [];
    }
}
