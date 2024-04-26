import React from 'react';
import { useLoaderData } from 'react-router-dom';

const AllCrafts = () => {
    const loadedCrafts = useLoaderData();
    return (
        <div>
            {
                loadedCrafts.map((craft) => <p key={craft._id}>{craft.name}</p>)
            }
        </div>
    );
};

export default AllCrafts;