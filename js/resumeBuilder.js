var formattedName = HTMLheaderName.replace("%data%", name);
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

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

var education = {
    "schools": [
        {
            "name": "Pace Universtiy",
            "location": "1 Pace Plaza, New York City",
            "degree": "BS",
            "dates": "2001",
            "majors": ["Computer Science"]
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "August 2017",
            "url": "https://www.udacity.com/"
        }
    ]
}

var work = {
        "jobs": [
            {
                "employer": "Country-Wide Insurance",
                "title": "Customer Service Representative",
                "location": "40 Wall St, New York City",
                "dates": "Dec 2002 - Jun 2017",
                "description": "I provide phone and email support for new and existing customers, resolve complaints about accounts directly over the phone with irate customers and brokers in a professional manner, evaluate documents for fraud and inaccurate statements by verifying against a national database, and liaise with the New York State Department of Motor Vehicle to assist current customers with suspensions in their accounts."
            }
        ]
}

var projects = {
    "projects": [
        {
            "title": "Project Title",
            "dates": "project dates 2017 ",
            "description": "Project description",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        },
        {
            "title": "Project Title 2",
            "dates": "project dates 2016 ",
            "description": "Project description 2",
            "images": ["images/197x148.gif", "images/197x148.gif"]
        }
    ]
}

function displayWork(){
    var i, formattedEmployer, formattedTitle, formattedDates, formattedDesc, formattedLoc;
    if (work.jobs.length > 0){
        $("#workExperience").append(HTMLworkStart);
    }
    for (i = 0; i < work.jobs.length; i++){
        formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
        formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
        $(".work-entry").append(formattedEmployer + formattedTitle + formattedDates + formattedLoc + formattedDesc);
    }
}
displayWork();

function locationizer(work_obj) {
    var arrayLocations = [];
    work_obj.jobs.forEach(function(job){
    arrayLocations.push(job.location);
    })
 return arrayLocations;
}
console.log(locationizer(work));
