import { useState } from 'react';
import './App.css';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TextField from '@mui/material/TextField';
import { Grid } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { CheckBox } from '@mui/icons-material';




function App() {

  const [todo, setTodo] = useState([])
  const [todos, setTodos] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo('');
  }
  return (
<div className="App">
      <h1>Todo App</h1>
      <form>
    
      <TextField 
       id="outlined-basic"
       label="Enter a task" 
       variant="outlined" 
       color='secondary'
       size='small'
       type="text" value={todo} onChange={e => setTodo(e.target.value)}
       />
       
        <Button size='medium' 
        variant="contained" 
        color="secondary" 
        sx={{
          marginLeft: '15px'
        }}

        type="submit" onClick={handleSubmit} disabled={!todo}>
        Add
      </Button> 
      </form>

      <Grid container justifyContent="center">
         <Grid item xs={12} sm={8} md={6} lg={4} xl={3}>
     <List>
        {todos && todos.map((todo, index) => (
          <ListItem
          key={index}>
             <ListItemIcon>
                <CheckBox
                  edge="end"
                  color='secondary'
              
                />
              </ListItemIcon>
            
            
            {todo} </ListItem>
        ))}
     
     </List>
     </Grid>
   </Grid>
 </div>
  );
}

export default App;
