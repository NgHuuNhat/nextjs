import { NextRequest, NextResponse } from 'next/server';

const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
];

export async function GET() {
    return NextResponse.json(categories);
}