import useDataTable from "./useDataTable";
import Table from "../table";
export default function DataTable({tableData = {data: [], columns: []}}) {

    const {
        data, columns,
        handleSortData,
        handleShowHideColumns
    } = useDataTable({tableData});

    return (
        <div className={'tableWrapper'}>

        <Table>
            <Table.Head columns={columns}>
                <Table.Row>
                    <Table.Cell>No</Table.Cell>
                    {columns.map((column) => (
                        <Table.Cell show={column.show} key={column.key}>{column.title}</Table.Cell>
                    ))}
                </Table.Row>
            </Table.Head>
            <Table.Body>
                {data.map((row, index) => (
                    <Table.Row key={row.id}>
                        <Table.Row>
                            <Table.Cell>{index + 1}</Table.Cell>
                        </Table.Row>
                        {columns.map((column) => (
                            <Table.Cell show={column.show} key={column.key}>{row[column.key]}</Table.Cell>
                        ))}
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
        </div>
    )
}