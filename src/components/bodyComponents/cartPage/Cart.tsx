import { GridColDef, DataGrid, GridRowsProp } from '@material-ui/data-grid';
import { connect, useSelector } from "react-redux";
import { StateType } from '../../../reducers/stateReducerTypes';

const Cart = () => {

    const cartSelector = useSelector((state: StateType) => state.cartReducer);

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'category', headerName: 'Category', width: 140 },
        { field: 'description', headerName: 'Description', width: 150 },
        { field: 'price', headerName: 'Price', width: 110 },
        { field: 'count', headerName: 'Count', width: 120 }
    ];

    return (
        <div className="div-articles-wrapper">
            <DataGrid rows={cartSelector as GridRowsProp} columns={columns} />
        </div>
    )

}
export default connect()(Cart);