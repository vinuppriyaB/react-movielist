import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbDownAltIcon from '@mui/icons-material/ThumbDownAlt';
import Badge from '@mui/material/Badge';



export function Counter(){
  // const like=1;
  const [like,setLike] =useState(0);
  const [dislike,setdisLike]=useState(0);
   return (
     <div className="like_dislike">
       <IconButton className="like_dislike" onClick={()=>setLike(like + 1)}
       color="primary" aria-label="upload picture" component="span">
       <Badge badgeContent={like} color="success">
       <ThumbUpAltIcon />
       </Badge>
      </IconButton>
      <IconButton className="like_dislike" onClick={()=>setdisLike(dislike+1)}
      color="primary" aria-label="upload picture" component="span">
       <Badge badgeContent={dislike} color="warning">
       <ThumbDownAltIcon />
       </Badge>
      </IconButton>
       {/* <Button variant="text" className="like_dislike" onClick={()=>setLike(like + 1)}>👍{like}</Button>
       <Button variant="text" className="like_dislike" onClick={()=>setdisLike(dislike+1)}>👎{dislike}</Button> */}
     
     </div>
   )
 }