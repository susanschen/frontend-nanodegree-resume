/*
This is empty on purpose! Your code to build the resume will go here.
 */
var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

// lesson 3.15
var bio = {
    "name": "Shu (Susan) Chen",
    "role": "Web Developer",
    "welcomeMessage": "Hello! Thank you for viewing my online resume.",
    "biopic": "images/fry.jpg",
    "contacts": {
        "mobile": "",
        "email": "",
        "github": "susanschen",
        "twitter": "",
        "location": "Elmhurst, New York"
    },
    "skills": [
        "HTML & CSS", "GitHub", "JavaScript", "WordPress", "Adobe Photoshop & Illustrator"
    ]
}
