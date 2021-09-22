import { GridColDef } from '@material-ui/data-grid';

export const columnsCart: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 100 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'category', headerName: 'Category', width: 140 },
    { field: 'description', headerName: 'Description', width: 150 },
    { field: 'price', headerName: 'Price', width: 110 },
    { field: 'count', headerName: 'Count', width: 120 }
];