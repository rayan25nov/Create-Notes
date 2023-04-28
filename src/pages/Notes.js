import React, { useEffect, useState } from "react";
import { Container } from "@material-ui/core";
import NoteCard from "../UI/NoteCard";
import Masonry from "react-masonry-css";
const Notes = () => {
  const [notes, setNotes] = useState([]);
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setNotes(data));
  }, [notes, apiUrl]);

  const handleDelete = async (id) => {
    await fetch(apiUrl + id, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .catch((err) => console.log(err));
  };

  const breakPoints = {
    default: 3,
    1100: 2,
    700: 1,
  };
  return (
    <Container>
      {/* <Grid container>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>1</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>2</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>3</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Paper>4</Paper>
        </Grid>
      </Grid> */}
      <Masonry
        breakpointCols={breakPoints}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {notes.map((note) => (
          <div key={note.id}>
            {/* <Paper>{note.title}</Paper> */}
            <NoteCard note={note} handleDelete={handleDelete} />
          </div>
        ))}
      </Masonry>
    </Container>
  );
};

export default Notes;
