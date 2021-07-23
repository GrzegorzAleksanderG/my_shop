import { useEffect } from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import './ArticlesList.css'
import { connect, useDispatch, useSelector } from "react-redux";
import { getArticlesAction } from '../../../actions/getDataActions';
import getArticles from "../../../data/getArticles";
import { Button } from "@material-ui/core";
import { addToCartAction } from '../../../actions/cartActions';
import { useLocation } from "react-router";
import { GetDataReducerType, StateType } from '../../../reducers/stateReducerTypes';

const ArticlesList = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    useEffect(() => {
        getArticles(dispatch);
    }, [dispatch]);
    const locationArray = location.pathname.split("/");

    const rows = useSelector((state: StateType) => {
        return state.getDataReducer;
    });

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'category', headerName: 'Category', width: 140 },
        { field: 'description', headerName: 'Description', width: 150 },
        { field: 'price', headerName: 'Price', width: 110 },
        {
            field: '', headerName: '', width: 100, disableClickEventBubbling: true,
            renderCell: (params) => {
                const onClick = () => {
                    dispatch(addToCartAction(params.row as GetDataReducerType));
                }
                return <Button className="button-articles" onClick={onClick}>BUY</Button>;
            }
        }
    ];

    return (
        <div className="div-articles-wrapper">
            {rows && <DataGrid
                rows={Array.from(rows) as GridRowsProp}
                columns={columns}
                filterModel={{
                    items:
                        [
                            {
                                columnField: 'name',
                                operatorValue: 'contains',
                                value: locationArray[locationArray.length - 1]
                            }
                        ] //only XGrid in commercial version supports multiple filtering
                }}
            />}
        </div>
    )
}

const mapStateToProps = (state: StateType) => {
    return {
        getDataReducer: state.getDataReducer,
        cartReducer: state.cartReducer
    }
}

const mapDispatchToProps = { getArticlesAction, addToCartAction }

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);