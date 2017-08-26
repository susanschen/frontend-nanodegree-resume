# Resume

## Project Details

This is an online resume created for a project forked from [Udacity](https://github.com/udacity/frontend-nanodegree-resume). The original files from the forked repository has an empty resumebuilder.js file, which requires a student to write the code to complete the project.

### Lessons Learned from the Project

I learned how to write in JSON, JavaScript Object Notation, by following the strict guideline set by Udacity. See the detailed objects below under "The Javascript Objects". I also learned how to use JQuery to select and add DOM elements to the HTML, and I got a taste of using Google Maps.

## The Online Resume

You may view my final [online resume here](https://susanschen.github.io/resume/).

### The Mockup:

![Resume Mockup](http://i.imgur.com/pWU1Xbl.png "resume mockup")

### The Javascript Objects:
The resume has four JavaScript objects, each one representing a different resume section: work, education, projects and a header with biographical information.

  * `bio` contains:

            name : string
            role : string
            contacts : an object with
                  mobile: string
                  email: string
                  github: string
                  twitter: string (optional)
                  location: string
            welcomeMessage: string
            skills: array of strings
            biopic: string url
            display: function taking no parameters

  * `education` contains:

            schools: array of objects with
                 name: string
                 location: string
                 degree: string
                 majors: array of strings
                 dates: string (works with a hyphen between them)
                 url: string
            onlineCourses: array of objects with
                 title: string
                 school: string
                 dates: string (works with a hyphen between them)
                 url: string
            display: function taking no parameters

  * `work` contains

            jobs: array of objects with
                 employer: string
                 title: string
                 location: string
                 dates: string (Can be 'in progress')
                 description: string
            display: function taking no parameters

  * `projects` contains:

            projects: array of objects with
                  title: string
                  dates: string (works with a hyphen between them)
                  description: string
                  images: array with string urls
            display: function taking no parameters

