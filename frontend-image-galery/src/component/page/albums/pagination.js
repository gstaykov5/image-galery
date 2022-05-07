import { useState } from "react";

const usePagination = (album, albumsPerPage) => {
    const [currentPage, setCurrentPage] = useState(1);
    const maxPage = Math.ceil(album.length / albumsPerPage);

    const currentAlbums = () => {
        const beginning = (currentPage - 1) * albumsPerPage;
        const end = beginning + albumsPerPage;

        return album.slice(beginning, end);
    }

    const jumpToPage = (page) => {
        const pageNumber = Math.max(1, page);
        setCurrentPage(currentPage => Math.min(pageNumber, maxPage));
    }

    return { currentAlbums, jumpToPage };
}

export default usePagination;