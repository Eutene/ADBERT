import React, { useState } from 'react';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Box from '@mui/material/Box';


export default function GroupOrientation() {
  const initState = { count:0, }
  const [count, setCount] = useState(initState.count)

  // 讓數值+1
    const click = () => setCount (count + 1 ) 

  // 讓數值初始：initState
  const clear = () => {
    setCount(initState.count)
  }

  // 讓計數失效
  const [disabledState, setDisabledState] = useState('DISABLE');

  const able = () => {
    if(disabledState == 'DISABLE')
      {setDisabledState("ABLE")
    }else{
      setDisabledState("DISABLE")
    }
  }

  return (
    <Box
      m={{
        display: 'flex',
        '& > *': {
          m: 1,
        },
      }}
    >
      <ButtonGroup
        orientation="vertical"
        aria-label="vertical outlined button group"
      >
        <Button onClick={click} disabled={disabledState !== 'DISABLE'}>CLICK:{count}</Button>
        <Button onClick={clear}>CLEAR</Button>
        <Button onClick={able}>
            {disabledState == 'DISABLE' ? 'DISABLE' : 'ABLE'}        
        </Button>
      </ButtonGroup>
    </Box>
  );
}
