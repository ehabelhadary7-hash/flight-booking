import React from 'react'

const Dashboard = () => {
    return (
        <>
        <h1 className= "text-4xl font-bold mb-10">
            Dashboard
        </h1>
        <div className= "grid md:grid-cols-2 lg:grid-clos-4 gap-6">
            <div className= "stats shadow bg-base-100 p-6 rounded-lg">
                <div className= "stat">
                    <div className= "stat-title">
                        Products
                    </div>
                    <div className= "stat-value text-primary">
                        120
                    </div>
                </div>
            </div>
            <div className= "stats shadow bg-base-100 p-6 rounded-lg">
                <div className= "stat">
                    <div className= "stat-title">
                        Orders
                    </div>
                    <div className= "stat-value text-secondary">
                        340
                    </div>
                </div>
            </div>
            <div className= "stats shadow bg-base-100 p-6 rounded-lg">
                <div className= "stat">
                    <div className= "stat-title">
                        Users
                    </div>
                    <div className= "stat-value text-success">
                        980
                    </div>
                </div>
            </div>
            <div className= "stats shadow bg-base-100 p-6 rounded-lg">
                <div className= "stat">
                    <div className= "stat-title">
                        Revenue
                    </div>
                    <div className= "stat-value text-success">
                        $24k
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Dashboard