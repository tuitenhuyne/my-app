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
  FormHelperText,
  Button
} from '@mui/material';

const topics = [
  'Payment & billing',
  'Order & delivery',
  'Orchid care advice',
  'Other'
];

function Contact() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      topic: '',
      message: ''
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

      topic: Yup.string()
        .required('Please select a topic.')
        .oneOf(topics, 'Please select a valid topic.'),

      message: Yup.string()
        .required('Message is required.')
        .min(10, 'Message must have at least 10 characters.')
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

        {/* Topic */}
        <FormControl
          fullWidth
          margin="normal"
          error={formik.touched.topic && Boolean(formik.errors.topic)}
        >
          <InputLabel id="topic-label">Topic</InputLabel>

          <Select
            labelId="topic-label"
            id="topic"
            name="topic"
            label="Topic"
            value={formik.values.topic}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          >
            {topics.map((topic) => (
              <MenuItem key={topic} value={topic}>
                {topic}
              </MenuItem>
            ))}
          </Select>

          {formik.touched.topic && formik.errors.topic && (
            <FormHelperText>{formik.errors.topic}</FormHelperText>
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