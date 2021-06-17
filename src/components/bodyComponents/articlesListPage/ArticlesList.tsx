import { useEffect } from "react";
import { DataGrid, GridRowsProp, GridColDef } from '@material-ui/data-grid';
import './ArticlesList.css'

const ArticlesList = () => {

    useEffect(() => {
        //TODO
    }, [])

    const rows: GridRowsProp = [ //tmp
        { id: 1, col1: 'Hello', col2: 'World' },
        { id: 2, col1: 'XGrid', col2: 'is Awesome' },
        { id: 3, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 4, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 5, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 6, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 7, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 8, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 9, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 10, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 11, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 12, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 13, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 14, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 15, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 16, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 17, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 18, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 19, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 20, col1: 'Material-UI', col2: 'is Amazing' },
        { id: 21, col1: 'Material-UI', col2: 'is Amazing' },

      ];
      
      const columns: GridColDef[] = [
        { field: 'col1', headerName: 'Column 1', width: 150 },
        { field: 'col2', headerName: 'Column 2', width: 150 },
      ];
    
    return (
        <div className="div-articles-wrapper">
            {console.log(rows)}
            <DataGrid rows={rows} columns={columns} />
        </div>
    )
}
export default ArticlesList;