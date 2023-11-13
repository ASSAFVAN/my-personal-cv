## Application Overview

I've created a personal cv application using Angular framework and pure SCSS.
A demo can be seen here: https://my-personal-cv-beta.vercel.app/contact-me

**I've created 4 pages:**

1. **Homepage**: A brief review about me with option to download my cv as DOCX file.

2. **Formal Education**: A review about my formal education along the years.

3. **Practical Experience**: Option to toggle between my work experience and my personal projects in Github with
   links to demos (where there's a demo avilable).

4. **Contact Me**: A form to submit your personal details. The form was created using reactive forms including validation on all fields. When submitting a valid form, a note is present to the user using a service. There are also my personal details to connect with me.

**I've created additional components:**

1. **Header**: Header includes routing to all pages.
2. **Footer**: Very basic footer.
3. **Personal-Project**: In my practical experience page, I show my personal projects. Since they're repeating, I've created a seperate component for each component and display all the projects using ngFor direcive.
