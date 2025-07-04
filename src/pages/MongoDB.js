import React from 'react';
import SalesAggregation from '../components/MongoDB/SalesAggregation';

function MongoDB() {
    return (
        <div className="mongodb-page">
            <header className="page-header">
                <h1>🗄️ MongoDB Aggregation Solution</h1>
                <p>Analyze sales data with a clean MongoDB aggregation pipeline.</p>
            </header>
            <main>
                <SalesAggregation />
            </main>
        </div>
    );
}

export default MongoDB;
