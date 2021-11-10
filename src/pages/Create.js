import React, { useState } from "react";
import {
  Typography,
  Button,
  Container,
  TextField,
  Radio,
  FormControlLabel,
  RadioGroup,
  FormControl,
  FormLabel,
} from "@material-ui/core";
// import AcUnitTwoToneIcon from "@material-ui/icons/AcUnitTwoTone";
import { makeStyles } from "@material-ui/core/styles";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import SendIcon from "@material-ui/icons/Send";
import { useHistory } from "react-router";
import ClearAllIcon from "@material-ui/icons/ClearAll";
const useStyles = makeStyles({
  //   btn: {
  //     fontSize: 60,
  //     backgroundColor: "violet",
  //     "&:hover": {
  //       backgroundColor: "blue",
  //     },
  //   },
  //   title: {
  //     textDecoration: "underline",
  //     marginBottom: "20",
  //   },
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },
  btn: {
    backgroundColor: "#aed581",
    marginLeft: 25,
    marginTop: 20,
    marginBottom: 20,
  },
});

const Create = () => {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");
  const history = useHistory();
  const classes = useStyles();

  const handleContent = () => {
    setTitle("");
    setDetails("");
    setCategory("todos");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setTitleError(false);
    setDetailsError(false);
    if (title === "") {
      setTitleError(true);
    }
    if (details === "") {
      setDetailsError(true);
    }
    if (title && details) {
      // console.log(title, details, category);
      fetch("http://localhost:8000/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    }
  };

  return (
    <Container>
      <Typography
        // className={classes.title}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Create a New Note
      </Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          onChange={(e) => setTitle(e.target.value)}
          className={classes.field}
          label="Note Title"
          variant="outlined"
          fullWidth
          required
          error={titleError}
          color="secondary"
        ></TextField>
        <TextField
          onChange={(e) => setDetails(e.target.value)}
          className={classes.field}
          label="Details"
          variant="outlined"
          fullWidth
          required
          multiline
          rows={4}
          error={detailsError}
          color="secondary"
        ></TextField>
        <FormControl className={classes.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={(e) => {
              setCategory(e.target.value);
            }}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel
              value="reminders"
              control={<Radio />}
              label="Reminders"
            />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <Button
          type="submit"
          color="secondary"
          variant="contained"
          startIcon={<SendIcon />}
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
        <Button
          type="reset"
          variant="contained"
          className={classes.btn}
          startIcon={<ClearAllIcon />}
          onClick={handleContent}
        >
          Reset
        </Button>
      </form>
    </Container>
  );
};

export default Create;
