# Creative Computing

- Spring, 2025
- Instructor: Jin Sung Yoo - <ujinsung@gmail.com>
- Time: Thursday, 6:30 PM - 9:20 PM
- Location: 209 E 23 St, 508 Studio

## DESCRIPTION

Building on the foundational knowledge gained in the first course, this second course will focus on programming techniques for generative design and digital interactions. The class will introduce mathematical principles that underlie our physical world to create natural simulation in the digital world. Additionally, we will examine various emerging techniques to understand how technologies create innovation in computer and human interactions.

## RESOURCES

- [P5.JS Reference](https://p5js.org/reference/)
- [Nature of Code](https://natureofcode.com/)
- [CSS Reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [JS: The Definitive Guide](https://www.amazon.com/JavaScript-Definitive-Most-Used-Programming-Language/dp/1491952024)
- [Working with Data and APIs from Dan Shiffman](https://www.youtube.com/watch?v=DbcLg8nRWEg&list=PLRqwX-V7Uu6YxDKpFzf_2D84p0cyk4T7X)
- [ES6 & Beyond](https://github.com/getify/You-Dont-Know-JS/tree/1st-ed/es6%20%26%20beyond)

## COURSE REQUIREMENTS

- Attendance and class participation - 30%
- Assignments - 40%
- Final - 30%

## TOOLS

- [Visual Studio Code](https://code.visualstudio.com/)
- Terminal
- [Github](https://github.com/)
- [P5JS Editor](https://editor.p5js.org/)
- [Node.js](https://nodejs.org/en)

## SYLLABUS

### Week 1 -- New Tools

- Inspiration Sharing
- Terminal
  - /Applications/Utilities/Terminal
  - cd, ls, mv, mkdir, pwd, clear, cp, and open
  - tab for auto-complete
  - up down arrow keys for your command history
- Version control
  - What is version control?
    - Tracking changes
    - Making collaborations
    - Restoring previous version
  - Git
    - [Setup](https://docs.github.com/en/get-started/quickstart/set-up-git)
      - [Download](https://git-scm.com/downloads)
      - git config --global user.email "YOUR_EMAIL"
      - git config --global user.name "YOUR NAME"
      - git config http.postBuffer 524288000
      - git init, git add, git commit, git status, git log, git remote, git pull, and git push
  - Github
    - Signup on github.com
    - Create a new repository
  - Git workflow
    - Clon, Commit, Push, Pull, and Pull Request
    - History of changes
- Code editor
  - VS Code
  - Extensions: live preview, p5.vscode
  - Settings
    - disable : Editor:Accept suggestion on commit character

### Week 2 -- HTML/CSS basic

- Setup your workspace with the git repository
- HTML Basic
  - Document Object Model
  - script tag
  - HTML canvas & p5.js
- Basic CSS and style tag
  - tag, id, and class selector
  - CSS [reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
  - style override
- P5.js DOM
  - createElement, select, selectAll
  - Events - changed, input, mouse*
  - manipulating HTML elements
  - main and parant
  - Assignment: Create an interactive p5.js background for your webpage

### Week 3 -- CSS & JSON & Javascript general features

- Inspiration Share: Soo Park
  - https://www.instagram.com/codeartgallery/
  - https://www.instagram.com/code_rgb/
  - https://www.instagram.com/creativecodeart/
  - https://www.instagram.com/space.filler.art/
  - https://whitney.org/exhibitions/harold-cohen-aaron?section=2&subsection=3
- Webpage navigation
  - <main> tag
  - Selector
    - tag, class, id
    - select(), selectAll()
  - create{Tag}() & style()
    - chage stye events
  - css
    - display: flex
    - JS events

### Week 4 -- Physics - Vector / Force

- Inspiration Share: Jing
- [Robert Hodgin](http://roberthodgin.com/)
- [Robert Hodgin - Vimeo](https://vimeo.com/flight404/)
- Vector
  - Vector vs Point
  - [Magnitude, Direction, Add, Subtract, Multiply and Divide](https://editor.p5js.org/jinsung/sketches/BJDUbJpa7)
- [Force = Acceleration x Mass](https://editor.p5js.org/jinsung/sketches/K_1gJXsf_)
- [Gravity](https://editor.p5js.org/jinsung/sketches/L7CliUcrQ)
- [Multiple Forces](https://editor.p5js.org/jinsung/sketches/KM9Ksfhn1)
- [Friction](https://editor.p5js.org/jinsung/sketches/9-jH3bINn)

### Week 5 -- Particle System

- [Angry Particle?](https://editor.p5js.org/jinsung/sketches/B1d8CSJyE)
- [Particle System](https://editor.p5js.org/jinsung/sketches/Gn1YNnTkn)
- [Particle System / Noise](https://editor.p5js.org/jinsung/sketches/4wONJkuBy)
- [Particle System / Repulse](https://editor.p5js.org/jinsung/sketches/VX43gPQuD)
- [Particle System / Pixel Data](https://editor.p5js.org/jinsung/sketches/h-D0R-3-H)

### Week 6 -- Phsics Engine

- [Matter.js](https://brm.io/matter-js/)
- Matter.js basics
  - World, Engine, dynamic and staic Bodies
- OOP - Inheritance
- Physic homework

### Week 7 -- Phsics Engine 2

- Pinball game
- Matter.js Constraint
- Matter.js Mouse Constraint

### Week 8 -- JSON & Javascript general features

- JSON?
- Arrow function expression
- Promise, then, async, and await
- More of Array
  - forEach(), sort(), filter(), map() etc.
- [Try/Catch block](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)
- [Spread operator](https://fjolt.com/article/javascript-three-dots-spread-operator)

### Week 9 -- Node & Server side programming

- [Free APIs](https://free-apis.github.io/#/categories)
- Node and NPM
  - Install node
  - [What is Node.js](https://nodejs.org/en/about)
    - Javascript [run time environment](https://stackoverflow.com/questions/3710130/what-is-run-time-environment)
  - Server side programming
  - [WebSocket](https://en.wikipedia.org/wiki/WebSocket)

### Week 10 -- Data Visualization 1

- [Aaron Koblin](https://www.aaronkoblin.com/)
- Data file format (JSON, CSV)
- [football data api](https://rapidapi.com/api-sports/api/api-football)

### Week 11 -- Data Visualization 2

- Citibike Data converter process (optional)
  - citibike [data](https://s3.amazonaws.com/tripdata/index.html)
  - Instruction
    - clone this repository.
    - download a [cvs](https://s3.amazonaws.com/tripdata/index.html) (I downloaded 202311-citibike-tripdata.csv.zip), unzip and add the csv file to ./examples/05/00-data-converter/data
    - open a terminal
    - cd examples/05/00-data-converter
    - npm install
    - node citibike.js
    - (optional) node addBorough.js
- citibike
  - Get a json file (2023-11-06.json or 2023-11-06-borough.json) from ./example/05/data/ to visualize
 
### Week 12 -- AI/ML Basic

- [AI, ML, Deep Learning](https://docs.google.com/document/d/1hew_j0rq9oWt6ockDzEDyGaRIz-pHS7HFHZyvnZqiKE/)
- Leaning
- Deep Learning
- [Neural network](https://www.3blue1brown.com/lessons/neural-networks)
- [Teachable Machine](https://teachablemachine.withgoogle.com/)

### Week 13 -- 1:1

- Schedule Sheet
- Zoom Meeting

### Week 14 -- 1:1

- Schedule Sheet
- Zoom Meeting

### Week 15 -- Final Presentation

- Create a screen recording of your work, save it in Google Drive, and send the link to the recording.
