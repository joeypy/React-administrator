import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
// Redux
import { useSelector, useDispatch } from 'react-redux'
import ThemeActions from '../redux/actions/ThemeAction'

import statusCard from '../assets/JsonData/status-card-data.json'
import StatusCard from '../components/status-card/StatusCard'

import Chart from 'react-apexcharts'
import Table from '../components/table/Table'
import Badge from '../components/badge/Badge'


const chartOptions = {
    series: [{
        name: 'Online Customers',
        data: [40, 70, 20, 90, 36, 80, 30, 91, 60]
    },{
        name: 'Store Customers',
        data: [40, 30, 70, 80, 40, 16, 40, 20, 51, 10]
    }],
    options: {
        color: ['#6ab04c', '#2980b9'],
        chart: {
            id: 'basic-bar',
            background: 'transparent'
        },
        dataLabels: {
            enabled: false
        }, stroke: {
            curve: 'smooth'
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
        },
        legend: {
            position: 'top'
        },
        grid: {
            show: false
        }
    }
}

const topCustomers = {
    head: [
        'user',
        'total orders',
        'total spending'
    ],
    body: [
        {
            "username": "john doe",
            "order": "490",
            "price": "$15,870"
        },
        {
            "username": "frank iva",
            "order": "250",
            "price": "$12,251"
        },
        {
            "username": "anthony baker",
            "order": "125",
            "price": "$10,840"
        },
        {
            "username": "frank iva",
            "order": "110",
            "price": "$9,251"
        },
        {
            "username": "anthony blake",
            "order": "80",
            "price": "$8,840"
        },
    ]
}

const renderCustomerBody = ( item: any, index: number ) => (
    <tr key={ index }>
        <td>{ item.username }</td>
        <td>{ item.order }</td>
        <td>{ item.price }</td>
    </tr>
)

const latestOrders = {
    header: [
        "order id",
        "user",
        "total price",
        "date",
        "status"
    ],
    body: [
        {
            id: "#OD1711",
            user: "john doe",
            date: "17 Jun 2021",
            price: "$900",
            status: "shipping"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "pending"
        },
        {
            id: "#OD1712",
            user: "frank iva",
            date: "1 Jun 2021",
            price: "$400",
            status: "paid"
        },
        {
            id: "#OD1713",
            user: "anthony baker",
            date: "27 Jun 2021",
            price: "$200",
            status: "refund"
        }
    ]
}

const orderStatus: any = {
    "shipping": "primary",
    "pending": "warning",
    "paid": "success",
    "refund": "danger"
}

const renderOrderBody = (item: any, index: any) => (
    <tr key={index}>
        <td>{item.id}</td>
        <td>{item.user}</td>
        <td>{item.price}</td>
        <td>{item.date}</td>
        <td>
            <Badge type={orderStatus[item.status]} content={item.status}/>
        </td>
    </tr>
)

const Dashboard = () => {

    // @ts-ignore
    const themeReducer = useSelector(state => state.ThemeReducer.mode)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(ThemeActions.getTheme())
    }, [dispatch])

    return (
        <div>
            <h2 className="page-header">Dashboard</h2>
            <div className="row">
                <div className="col-6">
                    <div className="row">
                        {
                            statusCard.map( (item, index) => (
                                <div className="col-6" key={index}>
                                    <StatusCard 
                                        icon={ item.icon }
                                        count={ item.count }
                                        title={ item.title }                                    
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className="col-6">
                    <div className="card full-height">
                        {/* chart */}
                        <Chart
                            //@ts-ignore
                            options={themeReducer === 'theme-mode-dark' ? {
                                ...chartOptions.options,
                                theme: { mode: 'dark' }
                            } : {
                                ...chartOptions.options,
                                theme: { mode: 'light' }
                            }}    
                            series={chartOptions.series}
                            type='bar'
                            height='100%'
                        />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card no-mb">
                        <div className="card__header">
                            <h3>top customers</h3>
                        </div>
                        <div className="card__body">
                            <Table 
                                headData={topCustomers.head}    
                                bodyData={topCustomers.body}    
                                renderBody={ (item: any, index: number) => renderCustomerBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/customers" >view all</Link>
                        </div>
                    </div>
                </div>
                <div className="col-8">
                    <div className="card">
                        <div className="card__header">
                            <h3>latest orders</h3>
                        </div>
                        <div className="card__body">
                            <Table
                                headData={latestOrders.header}
                                bodyData={latestOrders.body}
                                renderBody={ (item: any, index: number) => renderOrderBody(item, index)}
                            />
                        </div>
                        <div className="card__footer">
                            <Link to="/">view all</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
