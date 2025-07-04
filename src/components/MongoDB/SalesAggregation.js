import React from 'react';

function SalesAggregation() {
    const aggregationPipeline = [
        { $unwind: "$items" },
        {
            $addFields: {
                "itemRevenue": { $multiply: ["$items.quantity", "$items.price"] }
            }
        },
        {
            $group: {
                _id: {
                    store: "$store",
                    month: { $dateToString: { format: "%Y-%m", date: "$date" } }
                },
                totalRevenue: { $sum: "$itemRevenue" },
                totalItems: { $sum: "$items.quantity" },
                totalValue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } }
            }
        },
        {
            $addFields: {
                averagePrice: { $divide: ["$totalValue", "$totalItems"] }
            }
        },
        {
            $project: {
                _id: 0,
                store: "$_id.store",
                month: "$_id.month",
                totalRevenue: 1,
                averagePrice: 1
            }
        },
        {
            $sort: {
                store: 1,
                month: 1
            }
        }
    ];

    return (
        <section className="sales-aggregation">
            <h2>📊 Sales Aggregation Example</h2>

            <div className="aggregation-section">
                <h3>📄 Example Document Structure:</h3>
                <pre className="code-block">
                    {JSON.stringify({
                        "_id": "ObjectId(...)",
                        "date": "ISODate('2024-06-15T00:00:00Z')",
                        "store": "Store A",
                        "items": [
                            { "name": "item1", "quantity": 5, "price": 10.0 },
                            { "name": "item2", "quantity": 3, "price": 20.0 }
                        ]
                    }, null, 2)}
                </pre>
            </div>

            <div className="aggregation-section">
                <h3>⚙️ Aggregation Pipeline:</h3>
                <pre className="code-block">
                    {JSON.stringify(aggregationPipeline, null, 2)}
                </pre>
            </div>

            <div className="aggregation-section">
                <h3>✅ Expected Output:</h3>
                <pre className="code-block">
                    {JSON.stringify([
                        {
                            "store": "Store A",
                            "month": "2024-06",
                            "totalRevenue": 110.0,
                            "averagePrice": 15.0
                        }
                    ], null, 2)}
                </pre>
            </div>
        </section>
    );
}

export default SalesAggregation;
