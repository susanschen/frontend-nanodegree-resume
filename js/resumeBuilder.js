var bio = {
    "name": "Shu (Susan) Chen",
    "role": "Web Developer",
    "contacts": {
        "mobile": "(917)111-2222",
        "email": "username@email.com",
        "github": "susanschen",
        "twitter": "",
        "location": "Elmhurst, New York"
    },
    "welcomeMessage": "Hello! Thank you for viewing my online resume.",
    "skills": [
        "HTML & CSS", "GitHub", "JavaScript", "WordPress", "Adobe Photoshop & Illustrator"
    ],
    "biopic": "images/fry.jpg",
    "display": function() {
            var i;
            if (bio.role) {
                $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
            }
            if (bio.name) {
                $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
            }
            if (bio.welcomeMessage) {
                $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
            }
            if (bio.biopic) {
                $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
            }
            if (bio.contacts.mobile) {
                $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
                $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
            }
            if (bio.contacts.email) {
                $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
                $("#footerContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
            }
            if (bio.contacts.github) {
                $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
                $("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
            }
            if (bio.contacts.twitter) {
                $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
                $("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
            }
            if (bio.contacts.location) {
                $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
                $("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));
            }
            if (bio.skills.length > 0) {
                $("#header").append(HTMLskillsStart);
                for (i = 0; i < bio.skills.length; i++) {
                    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
                }
            }
        }
};
bio.display();

var education = {
    "schools": [
        {
            "name": "Pace Universtiy",
            "location": "1 Pace Plaza, New York City",
            "degree": "BS",
            "majors": ["Computer Science"],
            "dates": "2001",
            "url": "https://www.pace.edu"
        }
    ],
    "onlineCourses": [
        {
            "title": "JavaScript Basics",
            "school": "Udacity",
            "dates": "August 2017",
            "url": "https://www.udacity.com/"
        }
    ],
    "display": function() {
        var i, j, formattedName, formattedDegree, formattedDates, formattedMajors, formattedLoc, formattedOTitle, formattedOSchool, formattedODates, formattedOUrl;

        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
            for (i = 0; i < education.schools.length; i++) {
                formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
                formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
                formattedDates = HTMLschoolDates.replace("%data%", education.schools[i].dates);
                $(".education-entry").append(formattedName + formattedDegree + formattedDates);
                if (education.schools[i].majors) {
                    for (j = 0; j < education.schools[i].majors.length; j++) {
                        formattedMajors = HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]);
                        $(".education-entry").append(formattedMajors);
                    }
                }
                formattedLoc = HTMLschoolLocation.replace("%data%", education.schools[i].location);
                $(".education-entry").append(formattedLoc);
            }
        }
        if(education.onlineCourses.length > 0) {
            $("#education").append(HTMLonlineClasses + HTMLschoolStart);
            for (i = 0; i < education.onlineCourses.length; i++) {
                formattedOTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
                formattedOSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
                formattedODates = HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates);
                formattedOUrl = HTMLonlineURL.replace("%data%", education.onlineCourses[i].url);
                $(".education-entry:last").append(formattedOTitle + formattedOSchool + formattedODates + formattedOUrl);
            }
        }
    }
};
education.display();

var work = {
    "jobs": [
        {
            "employer": "Country-Wide Insurance",
            "title": "Customer Service Representative",
            "location": "40 Wall St, New York City",
            "dates": "Dec 2002 - Jun 2017",
            "description": "I provide phone and email support for new and existing customers, resolve complaints about accounts directly over the phone with irate customers and brokers in a professional manner, evaluate documents for fraud and inaccurate statements by verifying against a national database, and liaise with the New York State Department of Motor Vehicle to assist current customers with suspensions in their accounts."
        }
    ],
    "display": function(){
        var i, formattedEmployer, formattedTitle, formattedDates, formattedDesc, formattedLoc;
        if (work.jobs.length > 0) {
            $("#workExperience").append(HTMLworkStart);
        }
        for (i = 0; i < work.jobs.length; i++) {
            formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
            formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
            formattedDates = HTMLworkDates.replace("%data%", work.jobs[i].dates);
            formattedDesc = HTMLworkDescription.replace("%data%", work.jobs[i].description);
            formattedLoc = HTMLworkLocation.replace("%data%", work.jobs[i].location);
            $(".work-entry").append(formattedEmployer + formattedTitle + formattedDates + formattedLoc + formattedDesc);
        }
    }
};
work.display();

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
    ],
    "display":function(){
        var i, j, formattedTitle, formattedDates, formattedDesc, formattedImages;
        if (projects.projects.length > 0) {
            $("#projects").append(HTMLprojectStart);
        }
        for (i = 0; i < projects.projects.length; i++) {
            formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
            formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
            formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
            $(".project-entry").append(formattedTitle + formattedDates + formattedDesc);
            if (projects.projects[i].images.length > 0) {
                for (j = 0; j < projects.projects[i].images.length; j++) {
                    formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                    $(".project-entry").append(formattedImages);
                }
            }
        }
    }
};
projects.display();

/* to display google Map */
$("#mapDiv").append(googleMap);

function locationizer(work_obj) {
    var arrayLocations = [];
    work_obj.jobs.forEach(function(job) {
        arrayLocations.push(job.location);
    });
 return arrayLocations;
}
console.log(locationizer(work));
