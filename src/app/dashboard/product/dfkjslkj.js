import React, { useEffect, useState } from "react";

import axios from "axios";

const SearchField = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [filterData, setFilterData] = useState([]);
    const [photos, setPhotos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(
                    "https://api.unsplash.com/search/photos?page=1&query=coding&client_id=0UJyyJWVy2WKkIhq8cJ8As73CpazjUWshHZnPGhfJLI"
                );

                const arr = response.data.results;
                console.log(arr);
                setPhotos(arr);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleClick = () => {
        const filterdData = photos.filter((item) => {
            if (searchTerm === "") {
                return null;
            } else {
                return item.alt_description
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase());
            }
        });
        console.log(filterdData);
        setFilterData(filterdData);
    };

    return (
        <>
            <input
                onChange={handleSearchChange}
                type="text"

                placeholder="Enter Your Search"
            />

            <br />
            <button

                className="bg-blue-600 text-white px-3 py-1 w-fit"
                onClick={handleClick}
                type="button"
            >Search</button>
        </>
    )}

    export default SearchField;
