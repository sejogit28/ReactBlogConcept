import {useState, useEffect, useRef} from 'react';
import { Chip, Typography, Grid, Divider, Tooltip, Zoom } from '@mui/material';
import {topicOptions} from '../../services/Utils';
import AddCircleIcon from '@mui/icons-material/AddCircle';
interface ChipSectionProps 
{
    
}

const ChipSection = (props: ChipSectionProps) => 
{
    const [userTopics, setUserTopics] = useState<string[]>([]);
    const possibleUserTopics: string[] | null  = JSON.parse(localStorage.getItem('userTopics') || 'null');
    const stateRef: React.MutableRefObject<string[] | undefined> = useRef(); 
    
    useEffect(() => 
    {
        console.log(possibleUserTopics);
        console.log(userTopics);
        
        if(possibleUserTopics !== null)
        {
            setUserTopics([...possibleUserTopics]);
        }
    }, [])
    
    stateRef.current = userTopics;
    function resetsLocalStorage(userTopics: string[]) {
        localStorage.removeItem('userTopics');
        localStorage.setItem('userTopics', JSON.stringify([...userTopics]));
        console.log(...userTopics);
    }
    const addsTopicFromUserPreferences = (newTopic: string) => 
    {
        userTopics.push(newTopic);
        setUserTopics([...userTopics]);
        resetsLocalStorage(userTopics);
    }

    const removesTopicFromUserPreferences = (removedTopic: string) => 
    {
        let removedTopicIndex = userTopics.indexOf(removedTopic);
        userTopics.splice(removedTopicIndex, 1);
        setUserTopics([...userTopics]);
        resetsLocalStorage(userTopics);
    }

    return (
        <Grid sx={{p: 2}} >
            <Grid item xs={12}>
                <Tooltip title="Choose your topics"  placement="top" arrow TransitionComponent={Zoom}>

                    <Typography variant="h4" gutterBottom>
                        Topics
                    </Typography>
                </ Tooltip>
            </Grid>
            {
                userTopics.length > 0  ?
                <>
                    <Grid item xs={12} >
                        {userTopics.sort().map((topic: any, index: number) =>
                        {
                            return(
                                <Tooltip title="Remove this topic" arrow TransitionComponent={Zoom}>
                                    <Chip
                                        color="secondary"
                                        key={topicOptions.indexOf(topic) + 1}
                                        sx={{margin: ".3rem"}} 
                                        onClick={() =>{removesTopicFromUserPreferences(topic)}} 
                                        onDelete={() => {removesTopicFromUserPreferences(topic)}} 
                                        label={topic} 
                                    />
                                </ Tooltip>
                            )
                        })}                        

                    </Grid>
                    <Divider sx={{marginY: '1rem'}} />
                </>
                :
                null
                
            }
            <Grid item xs={12}>
                {topicOptions.sort().map((topic: any, index: number) =>
                {
                    return(
                        ! userTopics.includes(topic) &&
                            <Chip
                                key={topicOptions.indexOf(topic) + 1}
                                sx={{margin: ".3rem"}} 
                                deleteIcon={<AddCircleIcon />} 
                                onClick={() =>{addsTopicFromUserPreferences(topic)}} 
                                onDelete={() => {addsTopicFromUserPreferences(topic)}} 
                                label={topic} 
                            />
                    )
                })}

            </Grid>
        </Grid>
    )
}

export default ChipSection

