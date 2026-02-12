# LDU Factorization Calculator

## Project Overview

The **LDU Factorization Calculator** is an interactive website that calculates the **LDU decomposition** of a given matrix.  
It also shows the **full step-by-step process**, making it useful for learning and understanding how matrix factorization works.

This tool is mainly designed for students and anyone who wants to explore the elimination method used in LDU factorization.

---

## Features

- **Custom Matrix Input**  
  Users can enter matrices of any dimension.

- **Step-by-Step Factorization**  
  Each step is shown clearly using the **elimination matrix method**.

- **Final Output Matrices**  
  Displays the resulting:

  - **L** (Lower Triangular Matrix)  
  - **D** (Diagonal Matrix)  
  - **U** (Upper Triangular Matrix with 1s on the diagonal)

- **Simple and User-Friendly Interface**  
  Easy input fields and a clear "Calculate" button.

- **Responsive Design**  
  Works well on different screen sizes and devices.

---

## Technologies Used

- **HTML** – Structure of the website  
- **CSS** – Styling and layout  
- **JavaScript** – Matrix calculations and step generation  
- **Git** – Version control and collaboration  

---

## How to Use

1. Enter the matrix dimensions and values.
2. Click the **Calculate** button.
3. View the step-by-step elimination process.
4. Get the final **L, D, and U matrices**.

---

## Method Used (Elimination Matrix Approach)

We use the elimination matrix method to perform LDU factorization:

- The matrix **A** is converted into an upper triangular form using elimination matrices.
- The elimination matrix **E** transforms the matrix:

\[
E \cdot A = D \cdot U
\]

- The lower triangular matrix **L** is the inverse of elimination matrix:

\[
L = E^{-1}
\]

So finally:

\[
A = L \cdot D \cdot U
\]

This confirms the successful decomposition of the matrix.

---

## Purpose of This Project

The goal of this project is to provide an easy and interactive way to understand **LDU factorization**, especially through elimination steps, which are often confusing in textbooks.

---

## Team Members

1. **Manish Kumar Tiwari**  
2. **Pinky Rana**  
3. **Sunny Kumar**  
4. **Ompal Yadav**  
5. **Challa Trivedh Kumar**

---

