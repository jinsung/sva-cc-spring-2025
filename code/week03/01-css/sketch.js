let projects;

function setup() {
  createCanvas(500, 500);

  const sideNavItems = selectAll('.side-nav-item');
  for (let i = 0; i < sideNavItems.length; i++) {
    sideNavItems[i].mouseOver((element) =>{
      changeColor(element);
    });
    sideNavItems[i].mouseOut(changeColorBack);
    sideNavItems[i].mousePressed(selectItem);
  }
}

function draw() {
  background(220);
  ellipse(width/2, height/2, random(50, 100), random(50, 100));
}

function selectItem() {
  const className = this.elt.dataset.id
  const project = select('.' + className);
  const allProjects = selectAll('.project');
  for (let i = 0; i < allProjects.length; i++) {
    allProjects[i].hide();
  }
  project.show();
  console.log('Item selected', this);
}

function changeColor(element) {
  element.style('color', 'red');
}

function changeColorBack() {
  this.style('color', 'black');
}