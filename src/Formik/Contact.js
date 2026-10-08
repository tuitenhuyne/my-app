import { useFormik } from 'formik';
import * as Yup from 'yup';

import {
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormControlLabel,
  Switch,
  Button
} from '@mui/material';

function Contact() {

  // Import useFormik and create initial values
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      program: 0,
      message: "",
      agree: false
    },

    // Submit form when all data had validated
    onSubmit: (values) => {
      alert(JSON.stringify(formik.values));
    },

    // Validate to form values by Yup
    validationSchema: Yup.object({
      name: Yup.string()
        .required("Required.")
        .min(2, "Must be 2 characters or more"),

      email: Yup.string()
        .required("Required.")
        .email("Invalid email"),

      phone: Yup.number()
        .integer()
        .typeError("Please enter a valid number"),

      program: Yup.number()
        .integer()
        .typeError("Please select a program."),

      message: Yup.string()
        .required("Required.")
        .min(10, "Must be 10 characters or more"),

      agree: Yup.boolean()
        .oneOf(
          [true],
          "The terms and conditions must be accepted."
        )
    })
  });

  return (
    <div>
      <h1>Contact Form</h1>

      {/* Update the initial values and get the values of controls */}
      <form onSubmit={formik.handleSubmit}>

        {/* Name */}
        <TextField
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />

        {formik.errors.name && (
          <Typography variant="caption" color="red">
            {formik.errors.name}
          </Typography>
        )}

        <br />
        <br />

        {/* Email */}
        <TextField
          label="Email"
          name="email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

        {formik.errors.email && (
          <Typography variant="caption" color="red">
            {formik.errors.email}
          </Typography>
        )}

        <br />
        <br />

        {/* Phone */}
        <TextField
          label="phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
        />

        {formik.errors.phone && (
          <Typography variant="caption" color="red">
            {formik.errors.phone}
          </Typography>
        )}

        <br />
        <br />

        {/* Program */}
        <FormControl sx={{ m: 1, minWidth: 600 }}>
          <InputLabel id="demo-simple-select-autowidth-label">
            Program of Study
          </InputLabel>

          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            label="Program of Study"
            name="program"
            value={formik.values.program}
            onChange={formik.handleChange}
          >
            <MenuItem value={0}>
              <em>Please select</em>
            </MenuItem>

            <MenuItem value={1}>
              Software Engineering
            </MenuItem>

            <MenuItem value={2}>
              Information System
            </MenuItem>

            <MenuItem value={3}>
              Information Assurance
            </MenuItem>

            <MenuItem value={4}>
              Internet of Things
            </MenuItem>

            <MenuItem value={5}>
              Artificial Intelligence
            </MenuItem>

            <MenuItem value={6}>
              Digital Art & Design
            </MenuItem>
          </Select>

          {formik.errors.program && (
            <Typography variant="caption" color="red">
              {formik.errors.program}
            </Typography>
          )}
        </FormControl>

        <br />
        <br />

        {/* Message */}
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          name="message"
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
        />

        {formik.errors.message && (
          <Typography variant="caption" color="red">
            {formik.errors.message}
          </Typography>
        )}

        <br />
        <br />

        {/* Agree */}
        <FormControlLabel
          control={
            <Switch
              name="agree"
              checked={formik.values.agree}
              onChange={formik.handleChange}
            />
          }
          label="Agree to terms and conditions."
        />

        {formik.errors.agree && (
          <Typography variant="caption" color="red">
            {formik.errors.agree}
          </Typography>
        )}

        <br />
        <br />

        {/* Send */}
        <Button type="submit">
          Send
        </Button>

      </form>
    </div>
  );
}

export default Contact;