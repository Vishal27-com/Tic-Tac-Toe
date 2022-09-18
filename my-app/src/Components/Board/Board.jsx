import React from 'react';
import { Box} from "@chakra-ui/react";
import Cell from '../Box/Box';
import './Board.css';

const Board = ({board,onclick}) => {
    return (
        <Box className='board'>
          {
          board.map((el,ind)=><Cell key={ind}
           value={el} 
           onclick={()=>el==null && onclick(ind)} />) 
          } 
        </Box>
    );
};

export default Board;