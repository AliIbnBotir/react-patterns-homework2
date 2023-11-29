'use client'

import {useEffect, useReducer} from "react";

const dataTableReducer = (state, action) => {
    switch (action.type) {
        case "SET_DATA":
            return {
                ...state,
                data: action.payload
            }
        case "SET_TABLE_DATA":
            return {
                ...state,
                data: action.payload.data,
                columns: action.payload.columns
            }
        case "SHOW_HIDE_COLUMNS":
            return {
                ...state,
                columns: action.payload
            }
        default:
            return state;
    }
}

function useDataTable({tableData}) {
    const [{data, columns}, dispatch] = useReducer(dataTableReducer, tableData)

    function handleSortData(column) {
        const sortedData = data.sort((a, b) => {
            if (a[column] < b[column]) {
                return -1;
            }
            if (a[column] > b[column]) {
                return 1;
            }
            return 0;
        })
        dispatch({type: "SHOW_HIDE_COLUMNS", payload: sortedData})
    }

    function handleShowHideColumns(column) {
        const computedData = columns.map((col) => ({
            ...col,
            show: !col.show
        }))
        dispatch({type: "SET_DATA", payload: computedData})
    }


    useEffect(() => {
        dispatch({
            type: "SET_TABLE_DATA", payload: {
                columns: tableData.columns.map((col) => ({
                    ...col,
                    show: col.show === undefined ? true : col.show
                })),
                data: tableData.data
            }
        })
    }, [tableData]);


    // function handleOrderColumns(column){
    // // write code for change the order of columns
    //     const orderedColumsn = columns.map()
    // }


    return {
        data,
        columns,
        handleSortData,
        handleShowHideColumns
    }
}

export default useDataTable;