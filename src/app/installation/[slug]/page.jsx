import React from 'react';

const InstallationDetails = async ({ params }) => {
  
    const { id } = await params;

    return (
        <div>
            <h1>Installation ID: {id}</h1>
            <p>Installation details page working!</p>
        </div>
    );
};

export default InstallationDetails;