import React from 'react'
// MUI
import { 
    CardContent,
    CardActionArea,
    CardMedia,
    Typography
} from '@mui/material'
// Styles
// move this in a general file
import { StyledCard } from '../styles/landingStyles'

interface ICard  {
    title: string
    description?: string
    subheader?: string
    img?: string
    link?: string
    lastUpdated?: string
    content?: string
}
const Card = (props: ICard) => {
    console.log(props)
    return (
      <StyledCard>
        <CardActionArea>
            {props.img ? (
            <CardMedia
                component="img"
                height="140"
                image={props.img}
                alt={props.title}
            />
            ) : (
            <></>
            )}
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
                {props.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.description}
            </Typography>
            </CardContent>
        </CardActionArea>
      </StyledCard>
    );
}

export default Card
