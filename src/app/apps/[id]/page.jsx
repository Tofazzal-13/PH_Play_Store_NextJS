import React from 'react';

const AppsDetails = async ({params}) => {
    
    const {id} = await params;
    console.log(id, "params");

    
    return (
        <div>
            this is apps details page
        </div>
    );
};

export default AppsDetails;