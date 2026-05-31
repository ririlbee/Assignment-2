// Get restaurant data for recommendations
function getRestaurantData() {
    return [
        {
            name: "The Dough House",
            cuisine: "Italian",
            link: "reservation.html?rest=The%20Dough%20House",
            description: "A cozy Italian restaurant known for its authentic flavors and warm atmosphere. Perfect for a romantic dinner or a family gathering.",
            signature: "Spaghetti Carbonara ($15), Margherita Pizza ($12)",
            deposit: "$20 per person",
            avgPriceMin: 25,
            avgPriceMax: 40,
            dietary: ["GF", "DF", "K", "NA", "SA"],
            purposes: ["date", "family", "business", "casual"]
        },
        {
            name: "Sushi World",
            cuisine: "Japanese",
            link: "reservation.html?rest=Sushi%20World",
            description: "A modern sushi bar offering a wide variety of fresh sushi and sashimi. Ideal for sushi lovers and those looking for a trendy dining experience.",
            signature: "Salmon Nigiri ($5), Tuna Roll ($8)",
            deposit: "$15 per person",
            avgPriceMin: 20,
            avgPriceMax: 35,
            dietary: ["GF", "DF", "H", "NA", "SA"],
            purposes: ["date", "business", "casual", "friend"]
        },
        {
            name: "Spice Garden",
            cuisine: "Indian",
            link: "reservation.html?rest=Spice%20Garden",
            description: "A vibrant Indian restaurant that offers a rich variety of traditional dishes with a modern twist. Great for family dinners and group outings.",
            signature: "Butter Chicken ($18), Paneer Tikka ($14)",
            deposit: "$10 per person",
            avgPriceMin: 15,
            avgPriceMax: 30,
            dietary: ["V", "GF", "DF", "H", "K", "NA", "SA"],
            purposes: ["family", "friend", "casual"]
        },
        {
            name: "Green Delight",
            cuisine: "Vegan",
            link: "reservation.html?rest=Green%20Delight",
            description: "A trendy vegan restaurant that serves delicious plant-based dishes made from fresh, locally sourced ingredients. Perfect for health-conscious diners and vegans.",
            signature: "Vegan Burger ($12), Quinoa Salad ($10)",
            deposit: "$15 per person",
            avgPriceMin: 15,
            avgPriceMax: 25,
            dietary: ["V", "GF", "DF", "K", "NA", "SA"],
            purposes: ["family", "friend", "casual"]
        },
        {
            name: "BBQ Haven",
            cuisine: "American BBQ",
            link: "reservation.html?rest=BBQ%20Haven",
            description: "A rustic BBQ joint that offers mouth-watering smoked meats and classic sides. Ideal for casual dining and meat lovers.",
            signature: "Smoked Brisket ($20), Pulled Pork Sandwich ($15)",
            deposit: "$25 per person",
            avgPriceMin: 20,
            avgPriceMax: 35,
            dietary: ["GF", "DF", "NA", "SA"],
            purposes: ["family", "friend", "casual"]
        },
        {
            name: "Seafood Paradise",
            cuisine: "Seafood",
            link: "reservation.html?rest=Seafood%20Paradise",
            description: "A coastal-inspired restaurant that serves fresh seafood dishes in a relaxed setting. Perfect for seafood enthusiasts and special occasions.",
            signature: "Grilled Lobster ($30), Fish Tacos ($18)",
            deposit: "$30 per person",
            avgPriceMin: 25,
            avgPriceMax: 50,
            dietary: ["GF", "DF", "H", "NA", "SA"],
            purposes: ["date", "business", "casual"]
        }
    ];
}

// Registration Form Validation
function regformValidate(event) {
    // Store error messages
    var errMsg = "";

    // Get form fields
    var unameInput = document.getElementById("user");
    var emailInput = document.getElementById("regemail");
    var phoneInput = document.getElementById("regphone");
    var pwd1Input = document.getElementById("pwd1");
    var pwd2Input = document.getElementById("pwd2");
    var genderSelected = document.querySelector('input[name="gender"]:checked');
    var countryInput = document.getElementById("ctry");

    // Validate username
    var username = unameInput.value.trim(); // Adding the .trim() removes excess spaces from the entered username.
    var unameValid = /^[A-Za-z0-9_]+$/.test(username)

    if (username.length < 5 || !unameValid) { // || means "or"
        errMsg += "∙ Enter a valid username (at least 5 characters, letters/numbers/underscores only).\n"; // += adds to the end of the error message without removing the present errors. \n adds a new line after the error message so that multiple errors will be displayed on separate lines.
    }

    // Validate email
    var email = emailInput.value.trim();
    
    if (email.indexOf('@') <= 0) {
        errMsg += "∙ Email must contain an @ symbol but cannot start with one.\n";
    }

    // Validate Phone Number
    var phoneDigits = phoneInput.value.replace(/\D/g, ""); // This removes all non-digit characters from the phone number input.
    if (phoneDigits.length !== 10) {
        errMsg += "∙ Enter a valid phone number with exactly 10 digits.\n";
    }

    // Validate Password
    var pwd1 = pwd1Input.value;
    var pwd2 = pwd2Input.value;

    var hasUpper = /[A-Z]/.test(pwd1);
    var hasLower = /[a-z]/.test(pwd1);
    var hasNumber = /[0-9]/.test(pwd1);
    var hasSpecial = /[^A-Za-z0-9]/.test(pwd1);

    if (pwd1.length < 10 || !hasUpper || !hasLower || !hasNumber || !hasSpecial) {
        errMsg += "∙ Password must be at least 10 characters and include uppercase, lowercase, a number, and a special character.\n";
    }

    if (pwd1 !== pwd2) {
        errMsg += "∙ Passwords do not match.\n";
    }

    // Validate Gender
    if (!genderSelected) {
        errMsg += "∙ Please select a gender.\n";
    }

    // Validate Country
    var country = countryInput.value.trim();
    if (!country) {
        errMsg += "∙ Country/Region is required.\n";
    }

    // Display error messages if any
    if (errMsg.length > 0) {
        alert("Fix these issues: \n\n" + errMsg);
        event.preventDefault();
        return false; // Prevent form submission
    }

    // If no errors, submit the form
    return true;
}

// Reservation Form Validation
function validateReservation(event) {
    // Store error messages
    var errMsg = "";

    // Get form fields
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var email = document.getElementById("resemail");
    var phone = document.getElementById("resphone");
    var restSelect = document.getElementById("restSelect");
    var date = document.getElementById("date");
    var numGuests = document.getElementById("numguests");
    var depMethod = document.querySelector('input[name="depmethod"]:checked');
    var voucherCode = document.getElementById("vcode");
    var cardType = document.querySelector('input[name="cardtype"]:checked');
    var visamcCardNum = document.getElementById("visamcCardNum");
    var visamcExpiry = document.getElementById("visamcExpiry");
    var amexCardNum = document.getElementById("amexCardNum");
    var amexExpiry = document.getElementById("amexExpiry");
    var billingEmail = document.getElementById("billingemail");
    var sameEmail = document.getElementById("sameemail");

    // Remove non-digit characters from phone number for validation
    var phoneDigits = phone.value.replace(/\D/g,"");

    // Validate name
    if (!fname.value.trim()) {
        errMsg += "∙ First name is required.\n";
    }
    if (!lname.value.trim()) {
        errMsg += "∙ Last name is required.\n";
    }

    // Validate email
    email = email.value.trim();
    if (email.indexOf('@') <= 0) {
        errMsg += "∙ Email must contain an @ symbol but cannot start with one.\n";
    }

    // Validate phone number
    if (phoneDigits.length !== 10) {
        errMsg += "∙ Enter a valid phone number with exactly 10 digits.\n";
    }

    // Validate restaurant selection
    if (!restSelect.value) {
        errMsg += "∙ Please select a restaurant.\n";
    }

    // Validate reservation date
    if (!date.value) {
        errMsg += "∙ Reservation date is required.\n";
    } else {
        var selectedDate = new Date(date.value);
        var today = new Date();
        today.setHours(0, 0, 0, 0); // Set to the start of the day for accurate comparison
        if (selectedDate < today) {
            errMsg += "∙ Reservation date cannot be in the past.\n";
        }
    }

    // Validate number of guests
    if (Number(numGuests.value) < 1) {
        errMsg += "∙ At least 1 guest is required.\n";
    }

    // Validate deposit method
    if (!depMethod) {
        errMsg += "∙ Please choose a deposit method.\n";
    }

    // Validate voucher code if voucher is selected
    if (depMethod && depMethod.value === "voucher") {
        if (!voucherCode.value.trim() || !/^\d{12}$/.test(voucherCode.value.trim())) {
            errMsg += "∙ Voucher code must be 12 digits.\n";
        }
    }

    // Validate online payment details if online payment is selected
    if (depMethod && depMethod.value === "onlinepayment") {
        if (!cardType) {
            errMsg += "∙ Please select an online payment card type.\n";
        } else if (cardType.value === "visamc") {
            if (!visamcCardNum.value.replace(/\D/g, "").length || !/^\d{16}$/.test(visamcCardNum.value.replace(/\D/g, ""))) {
                errMsg += "∙ Visa/Mastercard number must be 16 digits.\n";
            }
            if (!visamcExpiry.value) {
                errMsg += "∙ Visa/Mastercard expiry date is required.\n";
            } else {
                var expiryDate = new Date(visamcExpiry.value + "-01");
                var now = new Date();
                now.setDate(1);
                now.setHours(0, 0, 0, 0);
                if (expiryDate < now) {
                    errMsg += "∙ Visa/Mastercard expiry date cannot be in the past.\n";
                }
            }
        } else if (cardType.value === "amex") {
            if (!amexCardNum.value.replace(/\D/g, "").length || !/^\d{15}$/.test(amexCardNum.value.replace(/\D/g, ""))) {
                errMsg += "∙ Amex number must be 15 digits.\n";
            }
            if (!amexExpiry.value) {
                errMsg += "∙ Amex expiry date is required.\n";
            } else {
                var expiryDate = new Date(amexExpiry.value + "-01");
                var now = new Date();
                now.setDate(1);
                now.setHours(0, 0, 0, 0);
                if (expiryDate < now) {
                    errMsg += "∙ Amex expiry date cannot be in the past.\n";
                }
            }
        }
    }

    // Validate billing email if different from reservation email
    if (billingEmail && !sameEmail.checked && billingEmail.value.trim() && billingEmail.value.trim().indexOf('@') <= 0) { // This checks if the billing email is not empty, not the same as the reservation email, and contains an @ symbol that is not at the start of the string.
        errMsg += "∙ Enter a valid billing email address.\n";
    }

    // Display error messages if any
    if (errMsg.length > 0) {
        alert("Please fix the following errors:\n\n" + errMsg);
        event.preventDefault();
        return false; // Prevent form submission
    }

    // If no errors, submit the form
    return true;
}

// Show/hide voucher and online payment fields based on deposit method selection
function updateDepositFields() {
    // Get the radio buttons and info sections
    var voucher = document.getElementById("voucher");
    var onlinepayment = document.getElementById("onlinepayment");
    var voucherInfo = document.getElementById("voucherInfo");
    var onlineInfo = document.getElementById("onlineInfo");

    if (voucher.checked) {
        voucherInfo.style.display = "block";
        onlineInfo.style.display = "none";
    } else if (onlinepayment.checked) {
        onlineInfo.style.display = "block";
        voucherInfo.style.display = "none";
    }
}

// Show/hide Visa/Mastercard and Amex fields based on card type selection
function updateOnlinePaymentFields() {
    var visamc = document.getElementById("visamc");
    var amex = document.getElementById("amex");
    var visamcInfo = document.getElementById("visamcInfo");
    var amexInfo = document.getElementById("amexInfo");

    if (visamc.checked) {
        visamcInfo.style.display = "block";
        amexInfo.style.display = "none";
    } else if (amex.checked) {
        amexInfo.style.display = "block";
        visamcInfo.style.display = "none";
    }
}

// Format card number with spaces as the user types
function formatCardNumber(input, type) {
    var digits = input.value.replace(/\D/g, ""); // Remove all non-digit characters from the input
    var formatted = "";

    if (type === "visamc") {
        var groups = digits.match(/.{1,4}/g) || []; // Format the digits into groups of 4 for Visa/Mastercard
        formatted = groups.join(" ");
    }   else if (type === "amex") {
        digits = digits.substring(0, 15); // Limit to 15 digits for Amex
        if (digits.length > 0) {
            formatted = digits.substring(0, 4); // First 4 digits
        }
        if (digits.length > 4) {
            formatted += " " + digits.substring(4, 10); // Next 6 digits
        }
        if (digits.length > 10) {
            formatted += " " + digits.substring(10, 15); // Last 5 digits
        }
    }
    input.value = formatted;
}

// Format Phone Number with spaces as the user types
function formatPhoneNumber(input) {
    var digits = input.value.replace(/\D/g, "");
    digits = digits.substring(0, 10); // Limit to 10 digits for Australian phone numbers

    var formatted = "";

    if (digits.length > 0) {
        formatted = digits.substring(0, 4); // First 4 digits (e.g. 0412)
    }
    if (digits.length > 4) {
        formatted += " " + digits.substring(4, 7); // Next 3 digits (e.g. 345)
    }
    if (digits.length > 7) {
        formatted += " " + digits.substring(7, 10); // Last 3 digits (e.g. 678)
    }

    input.value = formatted;
}

// Sync billing email with reservation email if "Same as reservation email" is checked
function initEmailSync() {
    // Get elements
    var email = document.getElementById('email');
    var billingEmail = document.getElementById('billingemail');
    var sameEmail = document.getElementById('sameemail');

    function sync() {
        if (sameEmail.checked) {
            billingEmail.value = email.value;
            billingEmail.readOnly = true; // Prevent user from editing the billing email if it's the same as the reservation email
        } else {
            billingEmail.readOnly = false;
        }
    }

    // Update when checkbox changes
    sameEmail.onchange = sync;

    // Update when reservation email changes
    email.oninput = function() {
        if (sameEmail.checked) {
            billingEmail.value = email.value;
        }
    };
    
    sync(); // Run once on page load
}

// Filtering functions

// Check if restaurant matches selected dietary preferences
function matchesDietary(restaurant, selectedDietary) {
    if (!selectedDietary.length || selectedDietary.includes("O")) {
        return true; // If no preferences selected or "No dietary restrictions" is selected, match all restaurants
    }
    return selectedDietary.every(function(pref) {
        return restaurant.dietary.includes(pref);
    });
}

// Get budget rank based on user selection
function getBudgetRank(budget) {
    if (budget === "low") {
        return 1;
    }
    if (budget === "medium") {
        return 2;
    }
    if (budget === "high") {
        return 3;
    }
    return 0;
}

// Get restaurant budget rank based on its average price range
function getRestaurantBudgetRank(restaurant) {
    if (restaurant.avgPriceMax <= 25) {
        return 1;
    }
    if (restaurant.avgPriceMax <= 35) {
        return 2;
    }
    return 3;
}

// Match budget levels to restaurant price ranges
function matchesBudget(restaurant, budget) {
    var selectedRank = getBudgetRank(budget);
    var restaurantRank = getRestaurantBudgetRank(restaurant);
    return restaurantRank <= selectedRank; // Match if restaurant is within the selected budget level or cheaper
}

// Check if restaurant matches selected dining purpose
function matchesPurpose(restaurant, purpose) {
    if (purpose === "other") {
        return true; // If "Other" is selected, match all restaurants
    }
    return restaurant.purposes.includes(purpose);
}

// Create HTML card for a restaurant recommendation
function createRestaurantCard(restaurant) {
    return '<a href = " ' + restaurant.link + '" class = "restaurant-link">'
        + '<article class="restaurant">'
        + '<h2>' + restaurant.name + '</h2>'
        + '<p><strong>Cuisine Type:</strong> ' + restaurant.cuisine + '</p>'
        + '<p><strong>Signature Dishes:</strong> ' + restaurant.signature + '</p>'
        + '<p><strong>Deposit Amount:</strong> ' + restaurant.deposit + '</p>'
        + '<p><strong>Description:</strong> ' + restaurant.description + '</p>'
        + '<p><strong>Average Price:</strong> $' + restaurant.avgPriceMin + '-$' + restaurant.avgPriceMax + ' per person</p>'
        + '</article>'
        + '</a>'; 
}

// Display restaurant recommendations based on user selections
function showRecommendations(event) {
    event = event || window.event;
    event.preventDefault();

    // Get selected dietary preferences
    var selectedDietary = Array.from(document.querySelectorAll('#recommendationform input[name="dietary"]:checked')).map(function(input) {
        return input.value;
    });

    var budget = document.getElementById("budget").value;
    var purpose = document.getElementById("purpose").value;

    var restaurants = getRestaurantData();

    // Filter restaurants
    var matches = restaurants.filter(function(restaurant) {
        return matchesDietary(restaurant, selectedDietary) && matchesBudget(restaurant, budget) && matchesPurpose(restaurant, purpose);
    });

    // Show results
    var recommendations = document.getElementById("recommendations");

    if (!matches.length) {
        recommendations.innerHTML = '<p>No restaurants match your selections. Try a different budget or dining purpose.</p>';
        return false;
    }

    recommendations.innerHTML = matches.map(createRestaurantCard).join('');
    console.log(matches);
}

// Autofill restaurant selection from URL parameter
function autofillRestaurantFromURL() {
    var params = new URLSearchParams(window.location.search);
    var restaurantName = params.get("rest");

    if (restSelect && restaurantName) {
        restSelect.value = restaurantName;
    }
}

// Update deposit amount based on selected restaurant
function updateDepositAmount() {
    var selectedName = restSelect.value;
    var restaurants = getRestaurantData();
    var selected = restaurants.find(function(r) {
        return r.name === selectedName;
    });
    if (selected) {
        depamount.value = selected.deposit;
    } else {
        depamount.value = "";
    }
}

// Initialisation
function init() {
    // Get form and relevant elements
    var regform = document.getElementById("regform");
    var reservationForm = document.getElementById("reservationform");
    var voucher = document.getElementById("voucher");
    var onlinepayment = document.getElementById("onlinepayment");
    var visamc = document.getElementById("visamc");
    var amex = document.getElementById("amex");
    var visamcCardNum = document.getElementById("visamcCardNum");
    var amexCardNum = document.getElementById("amexCardNum");
    var restSelect = document.getElementById("restSelect");
    var billingEmail = document.getElementById("billingemail");
    var sameEmail = document.getElementById("sameemail");

    // Attach validation functions
    if (regform) {
        regform.onsubmit = regformValidate;
    }
    if (reservationForm) {
        reservationForm.onsubmit = validateReservation;
    }

    // Deposit radio buttons
    if (voucher) {
        voucher.onclick = updateDepositFields;
    }
    if (onlinepayment) {
        onlinepayment.onclick = updateDepositFields;
    }

    // Online payment card type radio buttons
    if (visamc) {
        visamc.onclick = updateOnlinePaymentFields;
    }
    if (amex) {
        amex.onclick = updateOnlinePaymentFields;
    }

    // Card number formatting
    if (visamcCardNum) {
        visamcCardNum.oninput = function()  {
            formatCardNumber(this, "visamc");
        };
    }

    if (amexCardNum) {
        amexCardNum.oninput = function() {
            formatCardNumber(this, "amex");
        };
    }

    // Recommendation Form
    var recommendationForm = document.getElementById("recommendationform");
    if (recommendationForm) {
        recommendationForm.onsubmit = showRecommendations;
    }

    // Update deposit amount when restaurant selection changes
    if (restSelect) {
        restSelect.onchange = updateDepositAmount;
    }

    // Phone number formatting
    var regPhone = document.getElementById("regphone");
    var resPhone = document.getElementById("resphone");

    if (regPhone) {
        regPhone.oninput = function() {
            formatPhoneNumber(this);
        };
    }
    if (resPhone) {
        resPhone.oninput = function() {
            formatPhoneNumber(this);
        };
    }

    // Initialise extra features
    initEmailSync();
    autofillRestaurantFromURL();
    updateDepositAmount();
}

// execute function init() once the window is loaded
window.onload = init;