--References--
Non-original images:
Adobe Stock. (n.d.). https://stock.adobe.com/au 

Code I wasn't 100% sure on how to add was sourced from: 
W3Schools. (n.d.). https://www.w3schools.com 
I looked at HTML, CSS, and JavaScript information from this website.


--Disclaimer--
Restaurants aren't real, they have been made up for the purpose of this assignment.


--Explanation of JavaScript Validation Logic--
The JavaScript validation logic is designed to check user input in forms and stop submission if anything is incorrect or missing. It works by going through each field one by one and testing whether the data entered meets certain rules.

For the registration form, the script checks that the username is at least five characters long and only contains letters, numbers, or underscores. It then checks the email to make sure it includes an '@' symbol and doesn't start with one. The phone number is cleaned to remove any spaces or symbols, and it must end up as exactly 10 digits. THe password is checked for strength (it must be at least 10 characters long and include an uppercase letter, a lowercase letter, a number, and a special character). It also comfirms that both password fields match. In addition, the user must select a gender and enter a country. If any of these conditions fail, the program collects all the error messages and shows them in one alert box, it also prevents the form from being submitted.

For the reservation form, the logic checks that all booking details are valid. It ensures that the first and last names are filled in, the email is properly formatted, and the phone number has exactly 10 digits. It also makes sure a restaurant is selected, the reservation date is chosen and not in the past, and that at least one guest is included. The user must also choose a deposit method. If a voucher is selected, the code must be exactly 12 digits. If online payment is chosen, the script checks that a card type is selected and verifies the card number (16 digits for Visa/Mastercard or 15 for Amex) and that the expiry date is not in the past. If the billing email is different from the main email, it must also be valid.

Overall, the logic works by detecting errors before submission, displaying clear messages to the user, and blocking the form submission until everything is correct. This ensures that all submitted data is complete, accurate, and properly formatted.


--Website Structure--
The website is organised into five pages, each with a specific role that contributees to the overall experience.

The home page acts as the entry point, introducing users to the website and guiding them to other sections. It provides and overview of what the site offers, such as restaurant browsing, recommendations, and reservations.

The restaurants page is where users can explore the available dining options. It presents information about each restaurant, such as cuisine, signature dishes, pricing, and description, allowing users to learn more about their choices before making a booking. This page is mainly focused on displaying structured data in an easy-to-read format.

The recommendations page adds a personalised element to the website. Here, users can select preferences such as dietary requirements, budget, and dining purpose. The system then filters the restaurant data and displays suitable matches, helping users quickly find options that meet their needs.

The register page is designed for creating user accounts. It includes a form that collects user details like username, email, phone number, password, gender, and country. The JavaScript ensures all inputs are validated properly before submission, improving data accuracy and security.

Finally, the reservation page is where users can book reservations. It allows them to enter personal details, choose a restaurant, select a date and number of guests, and provide payment information. The page is interactive, showing or hiding relevant fields depending on the selected payment method and ensuring all details are valid before allows the form to be submitted.

Overall, the website follows a simple structure allowing users to discover restaurants, receive recommendations, register and account, and then make reservations, with each page serving a distinct purpose while working together as a cohesive system.


--GitHub Repository Link--
https://github.com/ririlbee/Assignment-2 