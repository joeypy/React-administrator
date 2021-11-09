import React from 'react'
import Table from '../components/table/Table'

import customerList from '../assets/JsonData/customers-list.json'

/******************************* INTERFACES ********************************/
interface CustomersListProps {
    id:           number;
    name:         string;
    email:        string;
    location:     string;
    phone:        string;
    total_spend:  string;
    total_orders: number;
}


const customerTableHead = [
    '',
    'name',
    'email',
    'phone',
    'total orders',
    'total spend',
    'location',
]

const renderBody = ( item: CustomersListProps, index: number ) => (
    <tr key={index}>
        <th>{ item.id }</th>
        <th>{ item.name }</th>
        <th>{ item.email }</th>
        <th>{ item.phone }</th>
        <th>{ item.total_orders }</th>
        <th>{ item.total_spend }</th>
        <th>{ item.location }</th>
    </tr>
)

const Customers = () => {
    return (
        <div>
            <h2 className="page-header">
                Customers
            </h2>
            <div className="row">
                <div className="col-12">
                    <div className="card">
                        <div className="card__body">
                            <Table 
                                limit='10'
                                headData={customerTableHead}
                                bodyData={customerList}
                                renderBody={ (item: CustomersListProps, index: number) => renderBody(item, index) }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers
