import  React from 'react';
import Hotels from './Hotels';
import HotelsFilter from './HotelsFilter';

const DashboardPage = () => (
    <div className="container">
        <HotelsFilter />
        <Hotels />
    </div>
);

export default DashboardPage;