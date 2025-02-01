class Trip {
  constructor(trip) {
    this.isValid = true;
    this.startStation = stations.find( s => 
      s.id === trip.start_station_id 
    );
    this.endStation = stations.find( s => 
      s.id === trip.end_station_id 
    );
    
    if (!this.startStation || !this.endStation || this.startStation.id === this.endStation.id) {
      this.isValid = false;
      console.log('trip is not valid', this);
      return;
    }

    //this.angle = this.startStation.getPos().angleBetween(this.endStation.getPos());
    this.angle = atan2(this.endStation.getPos().y - this.startStation.getPos().y, this.endStation.getPos().x - this.startStation.getPos().x);
    this.hue = map(this.angle, 0, PI, 0, 360);
    this.startedTime = parseInt(trip.st);
    this.endedTime = parseInt(trip.et);
  }

  display(currentTime) {
    if (currentTime > this.startedTime && currentTime < this.endedTime) {
      const tripProgress = map(currentTime, this.startedTime, this.endedTime, 0, 1);
      const pos = this.startStation.getPos().lerp(this.endStation.getPos(), tripProgress);
      const sineTripProgress = sqrt(sin(tripProgress * PI), 3);
      const alpha = map(sineTripProgress, 0, 1, 0, 100);
      noStroke();
      
      push();
      fill(this.hue, 80, 70, alpha);
      translate(pos.x, pos.y);
      rotate(this.angle + HALF_PI);
      const tSize = 3;
      const tSharpness = 4;
      triangle(0, 0, tSize, tSize * tSharpness, -tSize, tSize * tSharpness);
      //rect (0, 0, 10, 20);
      pop();
    }
  }
}