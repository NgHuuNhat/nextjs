'use client';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function ProductPagination({ currentPage, totalPages, onPageChange }: any) {

    const handlePrevious = () => {
        if (currentPage > 1) onPageChange(currentPage - 1);
    };

    const handleNext = () => {
        if (currentPage < totalPages) onPageChange(currentPage + 1);
    };

    const handlePageClick = (page: number) => {
        onPageChange(page);
    };

    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex items-center space-x-2">
            {/* Previous Button */}
            <button
                onClick={handlePrevious}
                disabled={currentPage === 1}
                className="p-2 rounded-full cursor-pointer text-gray-400 hover:text-black disabled:text-gray-100"
            >
                <ChevronLeft />
            </button>

            {/* Page Numbers */}
            {pageNumbers.map((page) => (
                <button
                    key={page}
                    onClick={() => handlePageClick(page)}
                    className={`cursor-pointer px-3 py-2 rounded-md ${currentPage === page ? 'bg-black text-white' : 'bg-gray-200 text-black hover:bg-black hover:text-white'}`}
                >
                    {page}
                </button>
            ))}

            {/* Next Button */}
            <button
                onClick={handleNext}
                disabled={currentPage === totalPages}
                className="p-2 rounded-full cursor-pointer text-gray-400 hover:text-black disabled:text-gray-100"
            >
                <ChevronRight />
            </button>
        </div>
    )
}
