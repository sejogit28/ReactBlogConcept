import React from 'react'
import { Stack, Chip, Typography } from '@mui/material';

interface ChipSectionProps {
    
}

const ChipSection = (props: ChipSectionProps) => {
    return (
        <Stack sx={{p: 4}}>
            <Typography variant="h4" gutterBottom>
                Topics
            </Typography>
            <Chip label="Chip Filled" />
            <Chip label="Chip Outlined" variant="outlined" />     
        </Stack>
    )
}

export default ChipSection
