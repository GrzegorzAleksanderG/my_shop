import { useEffect, useState } from 'react';
import { DataGrid, GridRowsProp, GridColDef, GridRowData } from '@material-ui/data-grid';
import './ArticlesList.css'
import { connect, useDispatch, useSelector } from "react-redux";
import { getArticlesAction } from '../../../actions/getDataActions';
import getArticles from "../../../data/getArticles";
import { Box, Button, Modal, TextField } from "@material-ui/core";
import { addToCartAction } from '../../../actions/cartActions';
import { useLocation } from "react-router";
import { StateType, CartReducerType } from '../../../reducers/stateReducerTypes';
import { AddShoppingCart, Airplay } from "@material-ui/icons";
import Typography from '@material-ui/core/Typography';
import images from "../../../images/images.js";

const ArticlesList = () => {
    const [open, setOpen] = useState(false);
    const [details, setDetails] = useState({ name: '', description: '', category: '', price: '', id: 1 } as GridRowData);
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
            field: 'buy', headerName: 'Buy', width: 150,
            renderCell: (params) => {
                const onClick = () => {
                    dispatch(addToCartAction({ ...params.row, count: 1 } as CartReducerType));
                }
                return <Button className="button-articles" onClick={onClick}>BUY <AddShoppingCart /></Button>;
            }
        },
        {
            field: 'details', headerName: 'Details', width: 150,
            renderCell: (params) => {
                const onClick = () => {
                    setDetails(params.row);
                    setOpen(true);
                }
                return <Button className="button-articles" onClick={onClick}>DETAILS <Airplay /></Button>;
            }
        }
    ];

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const DialogWindow =
        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" className="details-modal">
                    Details
                </Typography>
                <div>
                    <img className="img" src={require("../../../images/" + images[details.id - 1].src).default} alt={details.name} width="100%" height="auto" />
                    <TextField
                        disabled
                        fullWidth
                        id="name"
                        name="name"
                        label="Name"
                        value={details.name}
                    />
                    <TextField
                        disabled
                        fullWidth
                        id="category"
                        name="category"
                        label="Category"
                        value={details.category}
                    />
                    <TextField
                        disabled
                        fullWidth
                        id="description"
                        name="description"
                        label="Description"
                        value={details.description}
                    />
                    <TextField
                        disabled
                        fullWidth
                        id="price"
                        name="price"
                        label="Price"
                        value={details.price}
                    />
                </div>
            </Box>
        </Modal>

    return (
        <div>
            {DialogWindow}
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