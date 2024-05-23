// src/__tests__/NavBar.test.js

import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'; // for the matchers
import NavBar from '../components/NavBar'; // Adjust the import path as needed

test("renders three <a> elements", () => {
  const { container } = render(<NavBar />);
  console.log(container.innerHTML); // Debug: Log the inner HTML
  expect(container.querySelectorAll("a")).toHaveLength(3);
});

test("displays the correct text for each <a> element", () => {
  render(<NavBar />);
  expect(screen.getByText(/home/i)).toBeInTheDocument();
  expect(screen.getByText(/about/i)).toBeInTheDocument();
  expect(screen.getByText(/projects/i)).toBeInTheDocument();
});

test("each <a> element has the correct href attribute", () => {
  render(<NavBar />);
  expect(screen.getByText(/home/i).getAttribute('href')).toBe('#home');
  expect(screen.getByText(/about/i).getAttribute('href')).toBe('#about');
  expect(screen.getByText(/projects/i).getAttribute('href')).toBe('#projects');
});

