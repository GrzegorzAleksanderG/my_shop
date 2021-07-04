import { useEffect } from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import './ArticlesList.css'
import { connect, useDispatch, useSelector } from "react-redux";
import { getArticlesAction } from '../../../actions/getDataActions';
import getArticles from "../../../data/getArticles";
import { getDataReducer } from '../../../reducers/getDataReducer';

const ArticlesList = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        getArticles(dispatch);
    }, [dispatch]);

    const rows = useSelector((state:any)=>{
        return state.getDataReducer.articles ?? []; //to repair TODO
    });

    console.log(rows, "rows");
      
      const columns: GridColDef[] = [
        { field: 'id', headerName: 'ID', width: 30 },
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'category', headerName: 'Category', width: 100 },
        { field: 'description', headerName: 'Description', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
      ];
    
    return (
        <div className="div-articles-wrapper">
            <DataGrid rows={rows} columns={columns} />
        </div>
    )
}

const mapStateToProps = (state:any) => {
    return {
        getDataReducer: state.getDataReducer
    }
}

const mapDispatchToProps = {getArticlesAction}

export default connect(mapStateToProps, mapDispatchToProps)(ArticlesList);