import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Popper from '@mui/material/Popper';
import { DataGrid } from '@mui/x-data-grid';
import {useEffect, useState} from 'react'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { renderDetailsButton, renderDeleteButton } from './Players/PlayersServer';




function isOverflown(element) {
  return (
    element.scrollHeight > element.clientHeight ||
    element.scrollWidth > element.clientWidth
  );
}

const GridCellExpand = React.memo(function GridCellExpand(props) {
  const { width, value } = props;
  const wrapper = React.useRef(null);
  const cellDiv = React.useRef(null);
  const cellValue = React.useRef(null);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [showFullCell, setShowFullCell] = React.useState(false);
  const [showPopper, setShowPopper] = React.useState(false);

  const handleMouseEnter = () => {
    const isCurrentlyOverflown = isOverflown(cellValue.current);
    setShowPopper(isCurrentlyOverflown);
    setAnchorEl(cellDiv.current);
    setShowFullCell(true);
  };

  const handleMouseLeave = () => {
    setShowFullCell(false);
  };

  React.useEffect(() => {
    if (!showFullCell) {
      return undefined;
    }

    function handleKeyDown(nativeEvent) {
      // IE11, Edge (prior to using Bink?) use 'Esc'
      if (nativeEvent.key === 'Escape' || nativeEvent.key === 'Esc') {
        setShowFullCell(false);
      }
    }

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [setShowFullCell, showFullCell]);

  return (
    <Box
      ref={wrapper}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      
      
      sx={{
        alignItems: 'center',
        lineHeight: '24px',
        width: '100%',
        height: '100%',
        position: 'relative',
        display: 'flex',
      }}
    >
      <Box
        ref={cellDiv}
        sx={{
          height: '100%',
          width: '100%',
          display: 'block',
          position: 'absolute',
          top: 0,
        }}
      />
      <Box
        ref={cellValue}
        sx={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}
      >
        {value}
      </Box>
      {showPopper && (
        <Popper
          open={showFullCell && anchorEl !== null}
          anchorEl={anchorEl}
          style={{ width, marginLeft: -17 }}
        >
          <Paper
            elevation={1}
            style={{ minHeight: wrapper.current.offsetHeight - 3 }}
          >
            <Typography variant="body2" style={{ padding: 8 }}>
              {value}
            </Typography>
          </Paper>
        </Popper>
      )}
    </Box>
  );
});

GridCellExpand.propTypes = {
  value: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

function renderCellExpand(params) {
  return (
    <GridCellExpand value={params.value || ''} width={params.colDef.computedWidth} />
  );
}

renderCellExpand.propTypes = {
  /**
   * The column of the row that the current cell belongs to.
   */
  colDef: PropTypes.object.isRequired,
  /**
   * The cell value.
   * If the column has `valueGetter`, use `params.row` to directly access the fields.
   */
  value: PropTypes.string,
};



// const rows = [
//   {
//     id: 1,
//     col1: 'Hello',
//     col2: 'World',
//     col3: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used.',
//   },
//   {
//     id: 2,
//     col1: 'DataGridPro',
//     col2: 'is Awesome',
//     col3: 'In publishing and graphic design, Lorem ipsum is a placeholder text or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
//   },
//   {
//     id: 3,
//     col1: 'MUI',
//     col2: 'is Amazing',
//     col3: 'Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
//   },
//   {
//     id: 4,
//     col1: 'Hello',
//     col2: 'World',
//     col3: 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form.',
//   },
//   {
//     id: 5,
//     col1: 'DataGridPro',
//     col2: 'is Awesome',
//     col3: 'Typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.',
//   },
//   {
//     id: 6,
//     col1: 'MUI',
//     col2: 'is Amazing',
//     col3: 'Lorem ipsum may be used as a placeholder before final copy is available.',
//   },
// ];

const columns = [
  {
    field: 'id',
    headerName: 'ID',
    width: 50,
    renderCell: renderCellExpand
  },
  {
    field: 'first_name',
  headerName: 'First Name',
  width: 250,
  renderCell: renderCellExpand
  },
  {
    field: 'last_name',
    headerName: 'Last Name',
    width: 250,
    renderCell: renderCellExpand,
  },
  {
    field: 'coins',
    headerName: 'Coins',
    width: 150,
    renderCell: renderCellExpand,
  },
  {
    field: 'col5',
    headerName: 'Update',
    width: 150,
    renderCell: renderDetailsButton,
  },

  {
    field: 'col6',
    headerName: 'Delete',
    width: 150,
    renderCell: renderDeleteButton,
  },
  
];



export default function RenderExpandCellGrid() {
  

const [rows, setRows] = useState(null)

useEffect(() => {
  if (rows== null){
    obtenerDatos()
  }
}, [rows])


const obtenerDatos= async () => {
  const api = await fetch("http://127.0.0.1:8000/player/players/");
  const characterApi = await api.json();
  console.log(characterApi)
  setRows(characterApi)
}




  
  
  // const resetRows = () => {
  //   setRows(null)
  // }
  
  return (

    <>
      {/* <button className='back-home' onClick={resetRows}>Volver a Home</button> */}
      <p></p>
      { rows
      ?
      (<div style={{ height: 400, width: '70%', backgroundColor:'white' }}>
          <DataGrid rows={rows} columns={columns} />
        </div>
      ) : 
      (<p></p>)}
        
    </>
  );
}
