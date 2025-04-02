
// Mock user data
export const users = [
  { email: "password@password.com", password: "Password1!" },
  { email: "test@test.com", password: "Password1!" },
];

// Sign up function
export const signUp = (email, password) => {
  const userExists = users.some(user => user.email === email);
  if (userExists) {
    return "email already exists. Please choose another.";
  }
  users.push({ email, password });
  return "Sign up successful!";
};

// Sign in function
export const signIn = (email, password) => {
  const user = users.find(user => user.email === email && user.password === password);
  return user ? "Login successful!" : "Invalid email or password.";
};

// Example usage
// console.log(signUp("newUser", "newPass123")); // Output: Sign up successful!
// console.log(signUp("johnDoe", "anotherPass")); // Output: email already exists. Please choose another.
// console.log(signIn("newUser", "newPass123")); // Output: Login successful!