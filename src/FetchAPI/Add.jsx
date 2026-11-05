import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

const baseUrl =
  "https://6adff5228e42963c8d5e872a.mockapi.io/dpPlayers";

export default function Add() {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const handleClose = () => {
    setOpen(false);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      nation: "",
      club: "",
      cost: 0,
      clip: "",
      description: "",
      img: "",
      top: false,
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),

      nation: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),

      club: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),

      cost: Yup.number()
        .integer()
        .typeError("Please type a number."),

      description: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),

      clip: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),

      img: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),
    }),

    onSubmit: (values, { resetForm }) => {
      setError("");

      const player = {
        name: values.name,
        nation: values.nation,
        club: values.club,
        cost: Number(values.cost),
        clip: values.clip,
        img: values.img,
        info: values.description,
        famous: values.top,
      };

      return fetch(baseUrl, {
        method: "POST",
        body: JSON.stringify(player),
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "same-origin",
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP Status: ${response.status}`);
          }

          return response.json();
        })
        .then(() => {
          setOpen(true);
          resetForm();
        })
        .catch((error) => {
          setError(error.message);
        });
    },
  });

  return (
    <div style={{ padding: 20 }}>
      <Typography variant="h5" gutterBottom>
        Add a new player
      </Typography>

      {error && <Alert severity="error">{error}</Alert>}

      <form onSubmit={formik.handleSubmit}>
        <TextField
          autoFocus
          margin="dense"
          name="name"
          label="Name"
          fullWidth
          variant="standard"
          value={formik.values.name}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.name)}
          helperText={formik.errors.name}
          />

        <TextField
          margin="dense"
          name="club"
          label="Club"
          fullWidth
          variant="standard"
          value={formik.values.club}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.club)}
          helperText={formik.errors.club}
        />

        <TextField
          margin="dense"
          name="nation"
          label="Nation"
          fullWidth
          variant="standard"
          value={formik.values.nation}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.nation)}
          helperText={formik.errors.nation}
        />

        <TextField
          margin="dense"
          name="img"
          label="URL of image"
          fullWidth
          variant="standard"
          value={formik.values.img}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.img)}
          helperText={formik.errors.img}
        />

        <TextField
          margin="dense"
          name="cost"
          label="Market value"
          type="text"
          fullWidth
          variant="standard"
          value={formik.values.cost}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.cost)}
          helperText={formik.errors.cost}
        />

        <TextField
          margin="dense"
          name="clip"
          label="Intro video"
          fullWidth
          variant="standard"
          value={formik.values.clip}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.clip)}
          helperText={formik.errors.clip}
        />

        <TextField
          multiline
          rows={2}
          margin="dense"
          name="description"
          label="Information"
          fullWidth
          variant="standard"
          value={formik.values.description}
          onChange={formik.handleChange}
          error={Boolean(formik.errors.description)}
          helperText={formik.errors.description}
        />

        <FormControlLabel
          control={
            <Switch
              name="top"
              checked={formik.values.top}
              onChange={formik.handleChange}
            />
          }
          label="Top players"
        />

        <br />

        <Button
          variant="contained"
          size="small"
          type="submit"
          disabled={formik.isSubmitting}
        >
          {formik.isSubmitting ? "Adding..." : "Add"}
        </Button>
      </form>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Congratulations</DialogTitle>

        <DialogContent>
          <Alert severity="success">
            Adding successful!
          </Alert>
        </DialogContent>

        <DialogActions>
          <Button component={Link} to="/dashboard">
            Dashboard
          </Button>

          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
        </Dialog>
    </div>
  );
}