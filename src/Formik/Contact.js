
import React from 'react';
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
  FormHelperText,
  Switch,
  Button
} from '@mui/material';

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      program: 0,
      message: '',
      agree: false
    },

    validationSchema: Yup.object({
      name: Yup.string()
        .required('Name is required.')
        .min(2, 'Name must have at least 2 characters.'),

      email: Yup.string()
        .required('Email is required.')
        .email('Invalid email address.'),

      phone: Yup.string()
        .required('Phone is required.')
        .matches(
          /^[0-9]{10,11}$/,
          'Phone must contain 10 or 11 digits.'
        ),

      program: Yup.number()
        .required('Please select a program.')
        .moreThan(0, 'Please select a program.'),

      message: Yup.string()
        .required('Message is required.')
        .min(10, 'Message must have at least 10 characters.'),

      agree: Yup.boolean()
        .oneOf([true], 'You must agree to the terms.')
    }),

    onSubmit: (values, { resetForm }) => {
      alert(
        'Contact form submitted successfully!\n\n' +
        JSON.stringify(values, null, 2)
      );

      resetForm();
    }
  });

  return (
    <div className="container my-4" style={{ maxWidth: '700px' }}>
      <Typography variant="h4" gutterBottom>
        Contact Form
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate>
        {/* Name */}
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.name && Boolean(formik.errors.name)}
          helperText={
            formik.touched.name ? formik.errors.name : ''
          }
        />

        {/* Email */}
        <TextField
          fullWidth
          margin="normal"
          label="Email"
          name="email"
          type="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helperText={
            formik.touched.email ? formik.errors.email : ''
          }
        />

        {/* Phone */}
        <TextField
          fullWidth
          margin="normal"
          label="Phone"
          name="phone"
          value={formik.values.phone}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.phone && Boolean(formik.errors.phone)}
          helperText={
            formik.touched.phone ? formik.errors.phone : ''
          }
        />

        {/* Program of Study */}
        <FormControl
          fullWidth
          margin="normal"
          error={
            formik.touched.program && Boolean(formik.errors.program)
          }
        >
          <InputLabel id="program-label">
            Program of Study
          </InputLabel>

          <Select
            labelId="program-label"
            id="program"
            name="program"
            label="Program of Study"
            value={formik.values.program}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            <MenuItem value={0}>
              <em>Please select</em>
            </MenuItem>

            <MenuItem value={1}>Software Engineering</MenuItem>
            <MenuItem value={2}>Information System</MenuItem>
            <MenuItem value={3}>Information Assurance</MenuItem>
            <MenuItem value={4}>Internet of Things</MenuItem>
            <MenuItem value={5}>Artificial Intelligence</MenuItem>
            <MenuItem value={6}>Digital Art & Design</MenuItem>
          </Select>

          {formik.touched.program && formik.errors.program && (
            <FormHelperText>
              {formik.errors.program}
            </FormHelperText>
          )}
        </FormControl>

        {/* Message */}
        <TextField
          fullWidth
          margin="normal"
          label="Message"
          name="message"
          multiline
          rows={4}
          value={formik.values.message}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={
            formik.touched.message && Boolean(formik.errors.message)
          }
          helperText={
            formik.touched.message ? formik.errors.message : ''
          }
        />

        {/* Agree to terms */}
        <FormControl
          error={formik.touched.agree && Boolean(formik.errors.agree)}
          component="fieldset"
          sx={{ display: 'block', mt: 2 }}
        >
          <FormControlLabel
            control={
              <Switch
                name="agree"
                checked={formik.values.agree}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
            }
            label="Agree to terms and conditions."
          />

          {formik.touched.agree && formik.errors.agree && (
            <FormHelperText>
              {formik.errors.agree}
            </FormHelperText>
          )}
        </FormControl>

        {/* Submit */}
        <div style={{ marginTop: '20px' }}>
          <Button
            type="submit"
            variant="contained"
            disabled={formik.isSubmitting}
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Contact;
