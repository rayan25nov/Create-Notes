import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@material-ui/core";
import { blue, green, pink, yellow } from "@material-ui/core/colors";
import { DeleteOutlined } from "@material-ui/icons";
import { makeStyles } from "@material-ui/styles";
import React from "react";
const useStyles = makeStyles({
  avatar: {
    backgroundColor: (note) => {
      if (note.category === "work") {
        return yellow[700];
      }
      if (note.category === "money") {
        return green[500];
      }
      if (note.category === "todos") {
        return pink[500];
      }
      return blue[500];
    },
  },
});
const NoteCard = (props) => {
  const classes = useStyles(props.note);
  return (
    <div>
      <Card elevation={1}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>
              {props.note.category[0].toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton onClick={() => props.handleDelete(props.note._id)}>
              <DeleteOutlined></DeleteOutlined>
            </IconButton>
          }
          title={props.note.title}
          subheader={props.note.category}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary">
            {props.note.details}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default NoteCard;
