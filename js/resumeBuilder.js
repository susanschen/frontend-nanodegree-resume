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
    ],
    "display": function(){
            var i;

            if (bio.name){
                $("#header").append(HTMLheaderName.replace("%data%", bio.name));
            }
            if (bio.role){
                $("#header").append(HTMLheaderRole.replace("%data%", bio.role));
            }
            if (bio.welcomeMessage){
                $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));
            }
            if (bio.biopic){
                $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));
            }
            if (bio.contacts){
                if (bio.contacts.mobile){
                     $("#header").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
                }
                if (bio.contacts.email){
                    $("#header").append(HTMLemail.replace("%data%", bio.contacts.email));
                }
                if (bio.contacts.github){
                    $("#header").append(HTMLgithub.replace("%data%", bio.contacts.github));
                }
                if (bio.contacts.twitter){
                    $("#header").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
                }
                if (bio.contacts.location){
                    $("#header").append(HTMLlocation.replace("%data%", bio.contacts.location));
                }
            }
            if (bio.skills.length > 0) {
                $("#header").append(HTMLskillsStart);
                for (i = 0; i < bio.skills.length; i++){
                    $("#skills").append(HTMLskills.replace("%data%", bio.skills[i]));
                }
            }
        }
}
bio.display();

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
    ],
    "display": function(){
        var i, j;
        if (education.schools.length > 0) {
            $("#education").append(HTMLschoolStart);
            for (i = 0; i < education.schools.length; i++) {
                $(".education-entry").append(HTMLschoolName.replace("%data%", education.schools[i].name));
                $(".education-entry").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
                $(".education-entry").append(HTMLschoolDegree.replace("%data%", education.schools[i].degree));
                if (education.schools[i].majors){
                     for (j = 0; j < education.schools[i].majors.length; j++){
                         $(".education-entry").append(HTMLschoolMajor.replace("%data%", education.schools[i].majors[j]));
                     }
                }
                $(".education-entry").append(HTMLschoolLocation.replace("%data%", education.schools[i].location));
            }
        }
        if(education.onlineCourses.length > 0){
            $("#education").append(HTMLonlineClasses);
            for (i = 0; i < education.onlineCourses.length; i++){
                $("#education").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title));
                $("#education").append(HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school));
                $("#education").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
                $("#education").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
            }
        }
    }
}
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
    ]
}

projects.display = function(){
    var i, j, formattedTitle, formattedDates, formattedDesc, formattedImages;
    if (projects.projects.length > 0){
        $("#projects").append(HTMLprojectStart);
    }
    for (i = 0; i < projects.projects.length; i++){
        formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
        formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        formattedDesc = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        $(".project-entry").append(formattedTitle + formattedDates + formattedDesc);
        if (projects.projects[i].images.length > 0){
            for (j = 0; j < projects.projects[i].images.length; j++){
                formattedImages = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
                $(".project-entry").append(formattedImages);
            }
        }
    }
}
projects.display();

function locationizer(work_obj) {
    var arrayLocations = [];
    work_obj.jobs.forEach(function(job){
    arrayLocations.push(job.location);
    })
 return arrayLocations;
}
console.log(locationizer(work));
