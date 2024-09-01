import { Request, Response, NextFunction } from "express";

export function asyncHandler(fn: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function sanitizeInput(input: string): string {
  return input.replace(/[&<>"']/g, (match) => {
    const replacements: { [key: string]: string } = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#x27;",
    };
    return replacements[match];
  });
}

export function getCurrentDate(): Date {
  const currentDate = new Date();
  return currentDate;
}

// Add more utility functions as needed
