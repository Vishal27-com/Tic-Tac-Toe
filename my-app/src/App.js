import { Box, Button, Heading } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import Board from './Components/Board/Board';
import Player from './Components/Player/Player';

function App() {
  const [board,setBoard]=useState(new Array(9).fill(null));
  const [xPlaying,setXPlaying]=useState(true);
  const [score,setScore]=useState({oScore:0,xScore:0});
  const [gameOver,setGameOver]=useState(false);
  const win_con=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
    [0,3,6]
  ]

const handelBox=(ind)=>{
let updatedBox=board.map((val,id)=>{
  if(id===ind)return xPlaying?'X':'O';
  else return val ;
})
setBoard(updatedBox)
let player=winner(updatedBox);
if(player==='O'){
  let {oScore}=score;
  oScore+=1;
  setScore({...score,oScore});
}
else if(player==='X'){
  let {xScore}=score;
  xScore+=1;
  setScore({...score,xScore})
}
setXPlaying(!xPlaying)
}


const winner=(board)=>{
  for(let i=0;i<win_con.length;i++){
    const [x,y,z]=win_con[i];
    if(board[x] && board[x]===board[y] && board[y]===board[z]){
      setGameOver(true);
      return board[x];
    }
  }
}

const reset=()=>{
  setGameOver(false)
  setBoard(Array(9).fill(null))
}


  return (
    <Box className="App" >
     <Heading pb='20px' fontFamily='Poppins'>TIC TAC TOE</Heading>
     <Box>
     <Player xPlaying={xPlaying} score={score}/>
     <Board board={board} onclick={gameOver ? reset : handelBox}/>
     <Button mt='20px' display='block'  onClick={reset}>Reset</Button>
     </Box>
    </Box>
  );
}

export default App;
