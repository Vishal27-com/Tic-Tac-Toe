import { Box, Button } from "@chakra-ui/react";
import './Box.css'
function Cell({value,onclick}){
    const styles=value==='X'?'box x':'box o'
    return <Box>
    <Button w='100px' h='100px' fontFamily='Poppins' fontSize='40px' className={styles} onClick={onclick}>{value}</Button>
    </Box>
}
export default Cell;