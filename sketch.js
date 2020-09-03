
var button;
var morningwakeup ;
var classs ;
var dinner;
var homework;
var lunch;
var sleep;
var school;
var gamestate = 'morningwakeup'
 








function preload() {
 //classs= loadSound('class.m4a');
 //morningwakeup = loadSound('eight.m4a');
//dinner = loadSound('dinner.m4a')
//homework = loadSound('homework.m4a')
//lunch = loadSound('lunch.m4a')
//sleep = loadSound('sleep.m4a')
 //school = loadSound('school.m4a')
}
 var wakeup,wakeuptime
 var hour, minute
function setup() {
  createCanvas(800,400);
  button = createButton('stop-sound' );
button.position(800,400)
  wakeup  = createInput('wakeuptime'  );
  wakeup.position(900,100);







// button.mousePressed(stopSound)
 //dinner.play();
}
//function stopSound(){
  //if(morningwakeup.isPlaying){morningwakeup.stop();}
  //if(classs.isPlaying){classs.stop();}
 // if(dinner.isPlaying){dinner.stop();}
  //if(homework.isPlaying){homework.stop();}
  //if(lunch.isPlaying){lunch.stop();}
  //if(sleep.isPlaying){sleep.stop();}
  //if(school.isPlaying){school. stop();}
//}
function draw() {
  background('lightblue');  
 textSize(40);
text(hour+' : '+minute,600,70)
 wakeuptime  = wakeup.value();

   getTime();
 if(hour==wakeuptime&&gamestate=='morningwakeup'){
   text('its 8 am, please wake up ',200,140)
 //morningwakeup.play();
 //morningwakeup.setVolume(0.4);

 if(hour==8&&minute==10  ){gamestate='school'}
 } 
 if(hour==8&&minute==50&&gamestate==' school '){
   text('its time for school, get ready',200,140)
   if(hour==9 ){gamestate='lunch' }
   //school.play();
   //school.setVolume(0.4);
 }
 if(hour==13&&gamestate =='lunch'){
   text('its 1 pm, please eat lunch ',200,140)
   if(hour==13 && minute==10 ){gamestate= ' homework' }
   //lunch.play();
   //lunch.setVolume(0.4);
 } 
 if(hour==16&&gamestate=='homework'){
   text('its 4 pm, time to do your homework! ',200,140)
   if(hour==16&&minute==10){gamestate= ' classs' }
//homework.play();
//homework.setVolume(0.4);
 } 
if(hour==18&&gamestate=='classs'){
  text('its 6 pm, time for class ',200,140)
  if(hour==18&&minute==10 ){gamestate='dinner' }
//classs.play();
//classs.setVolume(0.4);

} 
if(hour==19&&minute>30&& gamestate=='dinner ' ){
  text('its 7:30 pm,  time for dinner ',200,140)
  if(hour==19&&minute==40 ){gamestate='sleep '}

//dinner.play();
//dinner.setVolume(0.1);
//inner.jump(1);

} 
 
 if(hour==22&&gamestate=='sleep'){
    text('its 10 pm, time to go to bed ',200,140)
    if(hour==22&&minute==10 ){gamestate='morningwakeup '}
//sleep.play();
//sleep.setVolume();
 } 
}
async function getTime(){
var api = await fetch('http://worldtimeapi.org/api/timezone/Asia/kolkata')
 var apijson = await api.json()
 var datetime  = apijson.datetime   
  hour = datetime.slice(11,13)
  minute = datetime.slice(14,16)
console.log (hour );
 
 
}
 





