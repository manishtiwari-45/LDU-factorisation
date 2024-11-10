LDU Factorization Calculator********
Project Overview
LDU Factorization Calculator is an interactive website designed to calculate the LDU factorization of a given matrix, offering a detailed, step-by-step explanation of each part of the process. Built to provide insight into matrix factorization, the tool enables users to input matrix dimensions and observe how the factorization unfolds, making it ideal for both educational and practical use.

Features********
Step-by-Step Explanation Using Elimination Matrix: The LDU factorization process is presented with each step carried out using the elimination matrix method, which decomposes the original matrix in a structured manner.
User-Friendly Interface: A straightforward layout with input fields to enter matrix dimensions, ensuring easy navigation and interaction.
Clear output as L,D,U
U Matrices: Displays the resulting matrices in a clear, readable format.


Technologies Used******
HTML, CSS, JavaScript: For structuring, styling, and providing functionality to the website.
Git: Version control to manage project changes effectively.


Purpose*****
The purpose of this project is to provide an accessible and interactive platform for understanding LDU factorization, especially focusing on the elimination matrix method. This approach helps users gain a more intuitive grasp of matrix transformations and decomposition, making it a valuable resource for students, educators, and professionals alike.

Process***
We have done the project via Elimination matrix method. Here we were to generate elimination matrix so that we can tranform our matrix into upper triaangular matrix. The elimination happens to be a lower triangular matrix and L is the inverse of Elimination matrix. The upper triaangular matrix that we have got after transformation is to be divided into two maatrix D which is  a diagonal matrix and U an uppertriangular matrix with diaginal elemnts as 1. 
Suppose A is our original matrix. 
So E*A= D*U and L=E^-1
=> A= L*D*U
since D*U=E*A AND L=E^-1 So A= E^-1 * E *  A =>A
Hence we have sucessfully done the LDU factorisation of the matrix.
