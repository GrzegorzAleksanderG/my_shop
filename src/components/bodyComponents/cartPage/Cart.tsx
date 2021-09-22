import { DataGrid, GridRowsProp } from '@material-ui/data-grid';
import { connect, useSelector } from "react-redux";
import { StateType } from '../../../reducers/stateReducerTypes';
import BuyButton from './BuyButton';
import { columnsCart } from './columns';

const Cart = () => {

    const cartSelector = useSelector((state: StateType) => state.cartReducer);

    return (
        <>
            <BuyButton />
            <div className="div-articles-wrapper">
                <DataGrid rows={cartSelector as GridRowsProp} columns={columnsCart} />
            </div>
        </>
    )

}
export default connect()(Cart);