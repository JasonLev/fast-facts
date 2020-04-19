import React, { useState } from 'react'
import {
  Paper,
  Checkbox,
  TextField,
  Button,
  FormGroup,
  FormControlLabel
} from "@material-ui/core"
import { makeStyles } from "@material-ui/styles"
import { green } from '@material-ui/core/colors'

const useStyles = makeStyles({
  root: {
    margin: 30,
    padding: 30,
  },
})
const EpisodeForm = (green) => {
    const [episodeName, setEpisodeName] = useState("");
    const [question1Text, setQuestion1Text] = useState("");
    const [answer1, setAnswer1] = useState(true);

    const classes = useStyles()

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`episode name is ${episodeName}
        question 1 is: ${question1Text}
        answer is: ${answer1}
        `);
        
    }
    return (
      <form onSubmit={handleSubmit}>
        <Paper className={classes.root}>
          <TextField
            id="episode-name"
            style={{ margin: 8 }}
            fullWidth
            label="Episode Name"
            onChange={e => setEpisodeName(e.target.value)}
          />
        </Paper>
        <Paper className={classes.root}>
          <h2>Get started with your first question...</h2>
          <FormGroup row>
            <TextField
              id="question1"
              label="Question 1"
              fullWidth
              onChange={e => setQuestion1Text(e.target.value)}
            />
            <FormControlLabel
              control={
                <Checkbox
                  id="answer1"
                  checked={answer1}
                  onChange={event => setAnswer1(event.target.checked)}
                  inputProps={{ "aria-label": "answer1 checkbox" }}
                />
              }
              label={`Answer: ${answer1}`}
            />
          </FormGroup>
        </Paper>

        <Button variant="contained" size="large" type="submit" color="primary">
          Create Episode
        </Button>
      </form>
    )
}
export default EpisodeForm