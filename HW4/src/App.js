import * as React from 'react';
import './style.css';
import { DataGrid } from '@mui/x-data-grid';
import { Container, Box, Typography, Avatar, Grid, Link, Button } from '@mui/material';

const columns = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'skill', headerName: '技能', width: 130 },
  { field: 'level', headerName: '熟練度', width: 130 },
];

function App() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    // 假設你的 API 回傳格式為 [{ id, skill, level }, ...]
    fetch('https://your-api-url.com/skills')
      .then(res => res.json())
      .then(data => setRows(data))
      .catch(() => {
        // 若 API 失敗可用預設資料
        setRows([
          { id: 1, skill: 'HTML', level: '30%' },
          { id: 2, skill: 'CSS', level: '20%' },
          { id: 3, skill: 'JavaScript', level: '10%' },
        ]);
      });
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 5, mb: 5, bgcolor: 'white', borderRadius: 2, boxShadow: 3, p: 3 }}>
      {/* ...existing code... */}
      <Box mt={5}>
        <Typography variant="h5" color="primary" gutterBottom>技能表格（MUI DataGrid）</Typography>
        <Box sx={{ height: 300, width: '100%', bgcolor: '#fafbfc', borderRadius: 2, boxShadow: 1 }}>
          <DataGrid rows={rows} columns={columns} pageSize={5} rowsPerPageOptions={[5]} disableSelectionOnClick />
        </Box>
      </Box>
      {/* ...existing code... */}
    </Container>
  );
}

export default App;