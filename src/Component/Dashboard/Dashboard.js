import React from 'react';
import Chart from '../Chart/Chart';
import PieCharts from '../Chart/PieCharts';

const Dashboard = () => {
    return (
        <div className='container mt-5'>

            <div className='row'>
                <div className='col-md-6'>
                    <Chart></Chart>
                </div>
                <div className='col-md-6'>
                    <PieCharts></PieCharts>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;