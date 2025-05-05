// src/app/category/api/route.ts
import { NextRequest, NextResponse } from 'next/server';

const categories = [
    { id: 1, name: 'Category 1' },
    { id: 2, name: 'Category 2' },
    { id: 3, name: 'Category 3' },
];

// GET: Lấy tất cả các category
export async function GET() {
    return NextResponse.json(categories);
}