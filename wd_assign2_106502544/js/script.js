/*
Registration form validation
    -All fields must be completed
    -Username: minimum 5 characters; letters, numbers, and underscores only
    -Email: valid email format
    -Phone number: Digits only, 8-15 digits
    -Password: minimum 10 characters, including uppercase, lowercase, numbers, and 
    special characters
    -Confirm password must match the password
    -Gender must be selected
Clear error messages must be displayed, and form submission must be blocked until all
errors are resolved.
*/

/*
Reservation form validation
    -Required fields must not be empty
    -Email must be valid (in valid format)
    -Phone number must contail at least 10 digits
    -Reservation date must not be in the past
    -The number of people must be greater than 0
    -Payment method:
        -If voucher -> no credit card fields are required or displayed; instead, a
        textbox for a 12-digit voucher code is shown, no need to validate.
        -If online payment -> Credit card number is required (digits only).
            -Visa/Mastercard: 16 digits
            -Amex: 15 digits
            -Format check only; no real processing.
*/

/*
Error Handling
    -Errors must be displayed to users clearly
    -Form submission must be blocked until all errors are fixed
*/