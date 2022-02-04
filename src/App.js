import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ShareIcon from '@mui/icons-material/Share';
import Box from '@mui/material/Box';




const App = () => {
  return (
  
   
    <Card sx={{ maxWidth: 350,  display: 'flex', flexDirection: 'row'}}>
      <CardContent>
         
         <CardMedia
          component="img"
          alt="sad cat meme"
          height="200"
          image="https://www.meme-arsenal.com/memes/d7437d8b4e4cca9c4dfd14590798440d.jpg"
        /> 
        
      </CardContent>
      <CardActions sx= {{display: 'flex', flexDirection: 'column'}}>
        
        <IconButton aria-label="add to favorites">
          <FavoriteIcon sx={{height: 22, width: 30, ml: 1}} />
        </IconButton>
        
        <IconButton aria-label="Bookmark">
          <BookmarkIcon sx={{height: 22, width: 30 }}/>
        </IconButton>

        <IconButton aria-label="share">
          <ShareIcon sx={{height: 22, width: 30 }}/>
        </IconButton>

      </CardActions>
      
      </Card>



    
      
    
      
  )
}


export default App;

