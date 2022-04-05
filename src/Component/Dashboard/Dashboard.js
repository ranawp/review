import React from 'react';
import Chart from '../Chart/Chart';
import PieCharts from '../Chart/PieCharts';

const Dashboard = () => {
    return (
        <div>
            <h4>this is Dashboard page</h4>
            <Chart></Chart>
            <PieCharts></PieCharts>
        </div>
    );
};

export default Dashboard;