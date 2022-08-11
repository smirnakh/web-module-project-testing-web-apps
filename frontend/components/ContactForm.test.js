import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import userEvent from '@testing-library/user-event';
import ContactForm from './ContactForm';

test('renders without errors', () => {
render(<ContactForm />)
});

test('renders the contact form header', () => {
 render(<ContactForm />)

 const headerElement = screen.queryByText(/Contact Form/i);
 expect(headerElement).toBeInTheDocument();
 expect(headerElement).toBeTruthy();
 expect(headerElement).toHaveTextContent(/Contact Form/i);
});

test('renders ONE error message if user enters less then 5 characters into firstname.', async () => {
 render(<ContactForm />)

 const firstNameField = screen.getByLabelText(/First Name*/i); 
 userEvent.type(firstNameField, '123');

 const errorMessage = await screen.findAllByTestId('error');
 expect(errorMessage).toHaveLength(1)
});

test('renders THREE error messages if user enters no values into any fields.', async () => {
 render(<ContactForm />)
 
    const submitButton = screen.getByRole('button');
 userEvent.click(submitButton)

 await waitFor(() => {
    const errorMessages = screen.queryAllByTestId('error'); 
    expect(errorMessages).toHaveLength(3)
 })
});

test('renders ONE error message if user enters a valid first name and last name but no email.', async () => {
  render (<ContactForm />)

  const emailField = screen.getByLabelText(/email*/i);
  userEvent.type(emailField, 'smirna@gmail');

  const errorMessage = await screen.findByText(/email must be a valid email address/)
  expect(errorMessage).toBeInTheDocument();
});

test('renders "email must be a valid email address" if an invalid email is entered', async () => {

});

test('renders "lastName is a required field" if an last name is not entered and the submit button is clicked', async () => {

});

test('renders all firstName, lastName and email text when submitted. Does NOT render message if message is not submitted.', async () => {

});

test('renders all fields text when all fields are submitted.', async () => {

});
