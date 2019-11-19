import React, {Component} from 'react';
import Customer from './components/Customer'
import './App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import {withStyles} from '@material-ui/core/styles';

const styles = theme =>({
  root:{
    width:"100%",
    marginTop: theme.spacing.unit*3,
    overflowX:"auto"
  },
  table:{
    minWidth:1080
  }
});

const customers = [
  {
    'idx':1,
    'image':'https://placeimg.com/64/64/23',
    'name':'김보람',
    'birthday':'000506',
    'gender':'남자',
    'class':'채널매니저'
  },
  {
    'idx':2,
    'image':'https://placeimg.com/64/64/24',
    'name':'이조은',
    'birthday':'000125',
    'gender':'여자',
    'class':'회사원'
  },
  {
    'idx':3,
    'image':'https://placeimg.com/64/64/22',
    'name':'임세빈',
    'birthday':'990501',
    'gender':'여자',
    'class':'회사원'
  }
]

class App extends Component{
  render(){
    const{classes} = this.props;
    return(
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {customers.map(c=>{
            return <Customer key={c.idx} idx={c.idx} image={c.image} name={c.name} birthday={c.birthday} gender={c.gender} class={c.class}/>
          })}
          </TableBody>
        </Table>
      </Paper>
    );
  }
}

export default withStyles(styles)(App);
