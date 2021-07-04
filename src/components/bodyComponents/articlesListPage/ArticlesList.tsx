import { useEffect } from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import './ArticlesList.css'
import { connect, useDispatch, useSelector } from "react-redux";
import { getArticlesAction } from '../../../actions/getDataActions';
import getArticles from "../../../data/getArticles";
import { Button } from "@material-ui/core";
import { addToCartAction } from '../../../actions/cartActions';

const ArticlesList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getArticles(dispatch);
    }, [dispatch]);

    const rows = useSelector((state: any) => {
        return state.getDataReducer.articles;
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
                    dispatch(addToCartAction(params.row));
                }
                return <Button className="button-articles" onClick={onClick}>BUY</Button>;
            }
        }
    ];

    return (
        <div className="div-articles-wrapper">
            {rows && <DataGrid rows={Array.from(rows) as GridRowsProp} columns={columns} />}
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        getDataReducer: state.getDataReducer,
        cartReducer: state.cartReducer
    }
}

const mapDispatchToProps = { getArticlesAction, addToCartAction }

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);