import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Contact from '.';

test('Name input should be rendered', () => {
  render(<Contact />);
  const nameInput = screen.getByPlaceholderText('Name');
  expect(nameInput).toBeInTheDocument();
});

test('Email input should be rendered', () => {
  render(<Contact />);
  const emailInput = screen.getByPlaceholderText('Email');
  expect(emailInput).toBeInTheDocument();
});

test('Subject input should be rendered', () => {
  render(<Contact />);
  const subjectInput = screen.getByPlaceholderText('Subject');
  expect(subjectInput).toBeInTheDocument();
});

test('message input should be rendered', () => {
  render(<Contact />);
  const messageField = screen.getByPlaceholderText('Message');
  expect(messageField).toBeInTheDocument();
});

test('Send button should be rendered', () => {
  render(<Contact />);
  const sendBtn = screen.getByRole('button');
  expect(sendBtn).toBeInTheDocument();
});

test('Send button should be disabled', () => {
  render(<Contact />);
  const sendBtn = screen.getByRole('button');
  expect(sendBtn).toBeDisabled();
});

test('Send button should be enabled', () => {
  render(<Contact />);
  const sendBtn = screen.getByRole('button');
  const nameInput = screen.getByPlaceholderText('Name');
  const subjectInput = screen.getByPlaceholderText('Subject');
  const emailInput = screen.getByPlaceholderText('Email');
  const messageInput = screen.getByPlaceholderText('Message');

  const testValue = 'test';

  fireEvent.change(nameInput, { target: { value: testValue } });
  fireEvent.change(subjectInput, { target: { value: testValue } });
  fireEvent.change(emailInput, { target: { value: testValue } });
  fireEvent.change(messageInput, { target: { value: testValue } });

  expect(sendBtn).toBeEnabled();
});
