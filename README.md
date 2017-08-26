# Front-End Nanodegree Resume

## Project Details

This is a project for the Udacity's Front-end Nanodegree course. It is forked from [Udacity Github](https://github.com/udacity/frontend-nanodegree-resume).

The final [online resume](https://susanschen.github.io/frontend-nanodegree-resume/) will be similiar to the mockup image below. The CSS has been customized to show my artistic creativity.

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

