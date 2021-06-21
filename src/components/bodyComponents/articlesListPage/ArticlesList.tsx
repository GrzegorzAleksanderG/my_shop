import { useEffect } from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import './ArticlesList.css'
import { connect } from "react-redux";

const ArticlesList = () => {

    useEffect(() => {
        //TODO
    }, [])

    const rows: GridRowsProp = [ //tmp
        { id: 1, name: 'Katana', description: 'xxxxx', price: 150 },
        { id: 2, name: 'Baton', description: 'yyyyyyy', price: 150 },
        { id: 3, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 4, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 5, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 6, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 7, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 8, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 9, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 10, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 11, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 12, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 13, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 14, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 15, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 16, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 17, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 18, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 19, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 20, name: 'Material-UI', description: 'is Amazing', price: 150 },
        { id: 21, name: 'Material-UI', description: 'is Amazing', price: 150 },

      ];
      
      const columns: GridColDef[] = [
        { field: 'name', headerName: 'Name', width: 150 },
        { field: 'description', headerName: 'Description', width: 150 },
        { field: 'price', headerName: 'Price', width: 150 },
      ];
    
    return (
        <div className="div-articles-wrapper">
            <DataGrid rows={rows} columns={columns} />
        </div>
    )
}

///

export default connect()(ArticlesList);