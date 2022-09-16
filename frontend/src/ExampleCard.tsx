import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
})(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

export default function ExampleCard() {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card sx={{ maxWidth: 345 ,borderRadius:'2em',backgroundColor:"#dcab8c",margin:"1em",boxShadow:'1em 1em 1em #070f00'}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "green" }} aria-label="Vollkorn">
                        V
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title="vollkornnudeln-mit-kochkaese"
                subheader="September 16, 2022"
            />
            <CardMedia
                component="img"
                height="194"
                image="../vollkornnudeln-mit-kochkaese.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    100 g 	Vollkornnudeln
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    100 g 	Kochkäse
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    50 g 	Schinkenwurst light
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    100 g Champignons, in Scheiben geschnitten
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    100 g 	Cherrytomate(n), halbiert
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    etwas 	Kokosöl
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    etwas 	Schabziger Käse
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </ExpandMore>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography paragraph>Zubereitung</Typography>
                    <Typography paragraph>
                        Die Nudeln nach Packungsanleitung kochen,
                        Währenddessen die Schinkenwürfel in etwas Kokosöl anbraten, Kochkäse und
                        etwas Wasser dazugeben. Rühren, bis der Käse geschmolzen ist, Tomaten und Pilze dazugeben und
                        zum Schluss die Nudeln. Alles ein paar Minuten auf reduzierter Hitze ziehen lassen und anschließend genießen.
                        Eventuell mit ein bisschen geriebenem Schabziger Käse bestreuen.
                    </Typography>
                </CardContent>
            </Collapse>
        </Card>
    );
}
