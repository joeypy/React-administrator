import React, { useState } from 'react'
import './table.css'

interface TableProps {
    limit?: string,
    headData: string[],
    bodyData: Object[],
    renderBody: (item: any, index: number) => JSX.Element   
}


const Table = ( {limit, bodyData, headData, renderBody }: TableProps ) => {

    const initDataShow = limit && bodyData 
        ? bodyData.slice(0, Number(limit)) 
        : bodyData

    const [dataShow, setDataShow] = useState(initDataShow)
    const [currentPage, setCurrentPage] = useState(0)

    let pages: number = 1
    let range: any[] = []

    if (limit !== undefined ) {
        let page = Math.floor(bodyData.length / Number(limit))
        pages = bodyData.length % Number(limit) === 0 ? page : page + 1
        range = [...Array(pages).keys()]
    }

    const selectPage = ( page: number ) => {
        setCurrentPage(page)
        const start = Number(limit) * page
        const end = start + Number(limit)
        setDataShow(bodyData.slice(start, end))
    }

    const renderHead = (item: any, index: any) => (
        <th key={index}>{item}</th>
    )
    
    return (
        <div>
            <div className="table-wrapper">
                <table>
                    { 
                        headData ? (
                            <thead>
                                <tr>
                                    {
                                        headData.map( ( item: any, index: number ) => renderHead(item, index))
                                    }
                                </tr>
                            </thead>
                        ) : null
                    }
                    {
                        bodyData ? (
                            <tbody>
                                {
                                    dataShow.map( (item: any, index: number) => renderBody( item, index )) 
                                }
                            </tbody>
                        ) : null
                    }
                </table>
            </div>
            {
                pages > 1 ? (
                    <div className="table__pagination">
                        {
                            range.map((item, index) => (
                                <div 
                                    key={index} 
                                    className={`table__pagination-item ${currentPage === index ? 'active' : '' }`}
                                    onClick={ () => selectPage(index) }    
                                >
                                    {item + 1}
                                </div>
                            ))
                        }
                    </div>
                ) : null
            }
        </div>
    )
}

export default Table
