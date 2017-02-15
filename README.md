# TrainSchedule

<!-- TOC depthFrom:1 depthTo:6 withLinks:1 updateOnSave:1 orderedList:0 -->

- [TrainSchedule](#trainschedule)
	- [Setting Up the Project Environment](#setting-up-the-project-environment)
	- [Viewing the Project](#viewing-the-project)
	- [Retrospective](#retrospective)
		- [What Went Right](#what-went-right)
		- [What Went Wrong](#what-went-wrong)
		- [What I Would Do Differently](#what-i-would-do-differently)
	- [Supported Browsers](#supported-browsers)

<!-- /TOC -->


## Setting Up the Project Environment

In this project, I opted out of using Brunch in order to implement Webpack. The development environment can be set up using the following steps.  

`mix deps.get`
`npm install`
`npm run webpack`
`mix phoenix.server`

## Viewing the Project
Visit `localhost:4000` after starting the server.

## Retrospective

### What Went Right
- I learned a lot about webpack and Phoenix while integrating the two together. This included how Phoenix handles it's build structure and configs.
- Solid SCSS structure made doing any design work the easiest thing on the project.
- React and webpack work well together, I liked being able to further seperate my components.

### What Went Wrong
- Having data pulled in from a file resulted in some dirty data. This included carraige returns and extra whitespace which I did not account for and spent some time debugging why my data was not being constructed properly.
- I didn't get to try out the testing frameworks included in the project too much.
- Having trouble getting eslint to not crash on a windows machine while watching files.
- Learning how to make http calls within erlang/elixer was difficult and had to include a library.

### What I Would Do Differently
- For a project this small, sticking with Brunch may have saved me a lot of time. I was curious about how webpack works and it was my first time implementing it on a project.
- Get tests written!
- Creating a clock component would be nice.
- Having two API calls for north/south station would come in handy for different pages.
- Figure out data organization on the server side potentially. Research the impacts of this in Phoenix.
- Adding redux would have been something cool to try.


## Supported Browsers
All newer versions of major browsers should work.
