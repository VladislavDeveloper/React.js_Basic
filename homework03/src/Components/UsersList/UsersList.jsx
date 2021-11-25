import React from "react";
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';

import "./UsersList.css"

const UsersList = ({users}) => {
    return(
        <List dense sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      {users.map((user) => {
        return (
          <ListItem key={user.id} alignItems="flex-start">
            <ListItemButton>
              <ListItemAvatar>
                <Avatar src={user.img}/>
              </ListItemAvatar>
              <ListItemText  primary={user.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
    )
}

export default UsersList;