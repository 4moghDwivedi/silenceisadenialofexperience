// algorithmic art, p5js, creative coding, memoir, writing, blog, power, social conformity, doodles, uncomfortable emotions
// don't let this deadly get to your head.
// TO DO LIST: 

    // paper activity aligns with perceived climax/resolution of the written piece. 

let currentText = '';
let wordCount = 0;
let paraCount = 0;
let pageNumber = -4; //this + 1 is the current displayed page number
let lastMaxParaWord = [0, 0];


let radius = [150, 150, 350, 250];
let angles = [0, 90, 180, 270];

let sketchWidth = 1080/2.5;
let sketchHeight = 1920/2.5;

let click = -3;

let lastDay;
let lastDayOutline;
let lastDayHalo;
let lastDayPop;

let allText = [
[
'Roughly ','three ','quarters ','into ','my ','last ','semester ','as ','an ','undergraduate ','student, ','I ','presented ','my ','capstone ','project ','to ','a ','jury ','consisting ','of ','professors, ','most ','of ','whom ','were ','unfamiliar ','with ','me ','and ','my ','work. ','I ','had ','prepared ','a ','speech ','in ','which ','I ','mentioned ','a ','list ','of ','musicians ','whose ','work ','had ','influenced ','me, ','which ','included ','Autechre, ','Morton ','Subotnick, ','and ','Pierre ','Boulez. ','At ','the ','jury ','session, ','as ','I ','finished ','enunciating ','Pierre’s ','surname ','that ','afternoon, ','I ','was ','met ','with ','a ','few ','scoffs ','and ','sighs ','from ','the ','room. ','Indeed, ','Boulez ','is ','widely ','known ','in ','music ','academia, ','and ','he ','and ','his ','work ','divides ','opinions. '
],
[
'After ','my ','little ','speech ','and ','playing ','back ','some ','excerpts ','of ','my ','work, ','I ','told ','them ','I ','looked ','forward ','to ','receiving ','their ','feedback. ','What ','followed ','seemed ','like ','a ','bit ','of ','a ','roasting ','session, ','but ','I ','received ','plenty ','of ','meaningful ','commentary, ','all ','of ','which ','I ','noted ','on ','a ','sheet ','of ','paper ','which ','I ','have ','managed ','to ','keep ','safely ','to ','this ','day. ','However, ','one ','of ','the ','professors ','in ','the ','jury, ','during ','her ','lengthy ','and ','intelligent ','criticism ','of ','my ','work, ','confidently ','attempted ','to ','correct ','my ','pronunciation ','of ','Pierre’s ','surname, ','and ','said, ','“Boulay, ','by ','the ','way”, ','before ','continuing ','with ','her ','otherwise ','thoughtful ','feedback. '
],
[
'For ','those ','of ','you ','unfamiliar ','with ','the ','surname, ','“Boulez” ','is ','actually ','pronounced ','with ','a ','buzzy ','“z” ','sound, ','so ','her ','correction ','was ','not ','very ','helpful. ','It ','was ','understandable ','I ','suppose, ','since, ','having ','studied ','French ','myself ','for ','half ','of ','my ','school ','life, ','I ','sympathize ','with ','why ','“Bou-lay” ','sounds ','more ','French ','than ','“Bou-lezz”. ','But ','I ','heard ','the ','name ','many ','times ','during ','my ','studies, ','and ','must ','have ','registered ','the ','correct ','pronunciation ','particularly ','well ','for ','fear ','of ','embarrassing ','myself ','(as ','I ','did ','with ','the ','20th ','century ','Czech ','composer ','Dvorak’s ','name ','during ','my ','adolescence). '
],
[
'Though ','her ','valuable ','feedback ','outweighed ','her ','error ','that ','afternoon, ','I ','have ','resolved ','to ','think ','deeper ','about ','the ','professor’s ','comment. ','There ','was ','a ','clear ','power ','imbalance ','in ','the ','room, ','and ','I ','was ','perceived ','as ','a ','bit ','of ','an ','ignoramus ','in ','that ','moment, ','as ','if ','I ','had ','never ','heard ','any ','French ','before, ','and ','as ','if ','I ','had ','walked ','in ','on ','this ','crucial ','academic ','event ','with ','a ','casual ','mindset. ','Perhaps ','by ','being ','in ','a ','flow ','state ','during ','her ','feedback, ','and ','playing ','the ','role ','of ','a ','critic ','a ','little ','too ','passionately, ','she ','didn’t ','consider ','the ','possibility ','that ','I ','knew ','how ','to ','pronounce ','the ','name ','of ','the ','composer ','I ','took ','the ','trouble ','to ','cite ','as ','an ','influence. '
],
[
'I ','didn’t ','find ','the ','courage ','to ','tell ','her ','she ','was ','wrong ','either, ','likely ','because ','I ','was ','being ','simultaneously ','told ','my ','work ','wasn’t ','deep ','enough ','for ','grad ','school, ','and ','I ','lamely ','condoned ','my ','timidness ','by ','believing ','that ','correcting ','her ','would ','have ','been ','pedantic ','and ','unnecessarily ','derailed ','the ','jury ','session. ','In ','any ','case, ','I ','felt ','powerless ','and ','attacked, ','and ','the ','voice ','in ','my ','head ','that ','observed ','that ','she ','had ','just ','made ','an ','embarrassing ','mistake, ','and ','that ','I ','had ','no ','reason ','to ','be ','worried, ','was ','too ','faint ','and ','quiet, ','and ','was ','drowned ','out ','by ','my ','situational ','anxiety ','and ','my ','worries ','about ','my ','future ','in ','music. '
],
[
'During ','the ','closing ','remarks ','however, ','another ','shrewd ','jury ','member—seemingly ','her ','good ','friend— ','mispronounced ','the ','name ','again, ','insinuating ','that ','the ','infamous ','“Boulay” ','was ','perhaps ','an ','outdated ','and ','surprising ','influence… ','So, ','it ','would ','appear ','that ','the ','room ','had ','doubled ','down ','on ','the ','mispronunciation, ','and ','a ','bogus ','correction ','presented ','itself ','as ','an ','uncontested ','truth, ','which ','made ','me ','cringe ','inside. ','To ','add ','to ','my ','(and ','the ','ghost ','of ','Boulez’) ','frustration, ','if ','any ','of ','the ','other ','professors ','in ','the ','room ','knew ','that ','“Boulay” ','was ','totally ','incorrect, ','they ','too, ','like ','me, ','passively ','chose ','not ','to ','say ','something ','while ','I ','was ','there. ','Anyways, ','I ','left ','after ','thanking ','the ','jury ','when ','they ','were ','done ','and ','walked ','down ','the ','street ','feeling ','overwhelmed ','due ','to ','the ','session ','at ','large, ','but ','had ','forgotten ','about ','the ','“Boulay” ','thing ','for ','a ','while ','since ','it ','was ','the ','least ','important ','thing ','that ','had ','been ','said ','that ','day. '
],
[
'The ','principal ','antagonist ','of ','this ','story ','was ','friendly ','and ','helpful ','to ','me ','and ','had ','invited ','me ','to ','her ','office ','hours ','for ','further ','feedback. ','She ','had ','liked ','some ','of ','my ','work—ironically, ','the ','one ','piece ','inspired ','by ','Monsieur ','Boulay ','himself— ','and ','seemed ','to ','want ','the ','best ','for ','me. ','I ','went ','happily. ','But ','during ','our ','conversation ','that ','afternoon, ','I ','noticed ','that, ','after ','bringing ','him ','up ','herself, ','she ','had ','begun ','pronouncing ','Boulez’ ','name ','correctly, ','with ','the ','“z” ','sound. ','But ','neither ','she ','nor ','I ','brought ','up ','how ','she ','had ','tried ','to ','correct ','me ','a ','few ','days ','ago. ','I ','once ','again ','appreciated ','all ','her ','feedback ','but ','left ','knowing ','that ','the ','awkward ','‘Boulay’ ','moment ','was ','left ','unaddressed. ','Great. ','We ','never ','really ','spoke ','again, ','but ','I ','remember ','running ','into ','her ','at ','the ','capstone ','project ','presentations, ','calling ','my ','work ','“brilliant”, ','or ','something, ','a ','few ','days ','before ','I ','walked ','the ','streets ','of ','Boston ','with ','my ','cap ','and ','gown ','as ','a ','graduated ','student. '
],
[
'I ','consider ','the ','silly ','“Boulay” ','incident ','as ','evidence ','of ','some ','unpleasant ','social ','dynamics ','which ','I ','think ','I ','have ','experienced ','more ','than ','once ','since ','that ','day. ','Firstly, ','it ','is ','quite ','possible ','to ','find ','yourself ','cornered ','in ','a ','situation ','where ','someone, ','possibly ','in ','a ','position ','of ','power, ','undermines ','you ','or ','doesn’t ','take ','you ','seriously, ','and ','attempts ','to ','correct ','you, ','not ','knowing ','they ','are ','wrong. ','Secondly, ','others ','may ','double ','down ','on ','some ','falsehood ','due ','to ','camaraderie ','or ','conformity ','or ','ignorance, ','reinforcing ','their ','lack ','of ','trust ','in ','your ','judgement, ','even ','if ','you ','are ','quite ','correct. ','Thirdly, ','people ','may ','witness ','all ','of ','this, ','and ','not ','say ','or ','do ','anything, ','effectively ','making ','you ','feel ','even ','more ','isolated ','and ','indignant, ','and ','perhaps ','a ','little ','crazy, ','as ','the ','sole ','bearer ','of ','truth. ','And ','fourthly, ','people ','critical ','of ','you ','may ','change ','their ','tune ','and ','self-correct ','in ','due ','time, ','but ','will ','never ','explicitly ','admit ','to ','you ','that ','they ','were ','absolutely ','wrong. '
],
[
'The ','last ','point ','in ','my ','view ','feels ','the ','cheapest. ','It ','comes ','off ','as ','a ','subtle ','and ','convenient ','erasure ','of ','the ','culprit’s ','incompetence. ','Someone ','who ','chooses ','not ','to ','speak ','of ','their ','unambiguous ','mistake ','(and ','the ','complimentary ','unwarranted ','attack ','on ','you) ','denies ','you ','your ','experience ','of ','being ','talked ','down ','to ','for ','no ','good ','reason. ','Sure, ','I ','can ','tell ','I ','am ','somewhat ','emotionally ','sensitive ','and ','not ','immune ','to ','pettiness. ','But ','if ','they ','may ','comfortably ','avoid ','any ','acknowledgement ','of ','their ','obvious ','blunder, ','I ','too ','may ','reserve ','the ','right ','to ','say ','that, ','generally ','speaking, ','the ','entitlement ','to ','evading ','admitting ','one’s ','own ','faults ','is ','indicative ','of ','a ','soft— ','if ','not ','serpentine— ','spine. '
],
[
'On ','that ','day ','though, ','no ','one ','in ','that ','jury ','was ','malicious, ','and ','it ','is ','worth ','reiterating ','that ','the ','professor ','was ','enthusiastic ','about ','my ','future ','and ','wished ','me ','well. ','Being ','naïve ','and ','incognizant ','to ','those ','dull ','and ','unimpressive ','social ','truisms ','I ','had ','begun ','to ','discover— ','and, ','unfortunately, ','occasionally ','embody— ','as ','a ','young ','adult, ','I ','wasn’t ','aware ','that ','some ','people’s ','confidence ','exists ','conditionally, ','or ','that ','expecting ','nominal ','accountability ','from ','others ','is ','sometimes ','a ','hopeful ','expectation. ','I ','think ','unhappily ','of ','my ','lack ','of ','confidence ','that ','day ','too. ','Seeing ','how ','much ','the ','memory ','stuck, ','maybe ','I ','should ','have ','just ','said ','something ','and ','laid ','the ','matter ','to ','rest ','myself ','that ','day ','instead ','of ','immortalizing ','it ','in ','this ','piece. '
],
[
'Anyways, ','my ','biggest ','regret ','is ','not ','dealing ','with ','her ','incorrect ','correction ','more ','humorously. ','I ','could ','have ','pretended ','to ','take ','notes ','more ','vigorously ','as ','she ','said ','“Boulay, ','by ','the ','way”. ','But ','I ','suppose ','I ','rightfully ','focused ','on ','the ','actual ','crux ','of ','everyone’s ','feedback ','in ','that ','15-minute ','session. ','Since ','then, ','it ','has ','taken ','me ','much ','mental ','effort ','to ','realize ','ruminating ','over ','other ','people’s ','unremarkable ','mistakes ','isn’t ','good ','for ','anything, ','and ','that ','it ','is ','worth ','it ','to ','swiftly ','move ','on ','to ','more ','important, ','interesting, ','and ','honest ','things ','in ','life. '
]
];



let paraLengths = new Array(allText.length);

//preloads images
function preload() {
  lastDay = loadImage('./images/happy-days.png');
  lastDayOutline = loadImage('./images/happy-days-outline.png');
  lastDayHalo = loadImage('./images/happy-days-halo.png');
  lastDayPop = loadImage('./images/happy-days-pop.png');
}

function setup() {
  // Create a canvas that fills the entire browser window
  createCanvas(sketchWidth, sketchHeight);
  frameRate(random(8, 10));

  for (let i = 0; i < 4; i++){
    radius[i] = random(12,50);
  }

  for (let i = 0; i < paraLengths.length; i++){
    paraLengths[i] = allText[i].length;
  }

}

function draw() {
background(255, 255, 255);
if ((pageNumber > 0) && (pageNumber < 11) )paper();
wordHalo();
 
if(pageNumber < 0)
{
  preShow();
}

push();
  translate(width*0.10, height*0.08);
  fill(23);
  stroke(0);
  strokeWeight(0);

  //randomizes font for "stutter" effect
  if(random(100) < 1){
      textFont('Avenir');
      textSize(sketchWidth/25);
  }
  else{
  textFont('Work Sans');
  textSize(sketchWidth/27);
  }

  //main body
  textAlign(LEFT);
  textLeading(25);
  text(currentText, 0, 0 , width*0.8, height * 0.9);

  //halo-text
  if (random(100) < 10){
    textAlign(LEFT);
    textLeading(25);
    fill(0, 0, 0, random(0, 100));
    text(currentText, 0 + random(-1, 9), 0  + random(-1, 1), width*0.8, height * 0.9);
  }
pop();

//display page number
  if (pageNumber >= 0 && pageNumber < allText.length){
  textSize(12);
  textAlign(CENTER);
  fill(0, 0, 0);
  strokeWeight(0);
  text((pageNumber + 1), width * 0.5, height * 0.9);
  //text((wordCount), width * 0.75, height * 0.9);
  
  }

borders();
// autoPlay();

}

function wordHalo(){

  if(pageNumber == 0){
      if(wordCount >= 62){
        generateHalo(0.7, 0.35, 60, 35);
      }
    }

    if(pageNumber == 3){
      if(wordCount >= 25){
        generateHalo(0.78, 0.19, 60, 15);
      }
      if(wordCount >= 154){
        generateHalo(0.78, 0.19, 60, 15);
      } 
      //page 3, word 25
    }
}


function generateHalo(w, h, arcW, arcH){

  let arcVals = [0, random(0.25, 0.5), random(0.5, 0.75), random(0.75, 1), 1];
  stroke(random(150, 250));

  noFill();
  for(let i = 0; i < arcVals.length - 1; i++){
    push();
    translate(width * w, height * h);
    strokeWeight(random(1));
    rotate(random(-0.2,0.2));
    arc(0, 0, arcW + random(-5, 5), arcH + random(-5, 5), TWO_PI * arcVals[i], TWO_PI * arcVals[i+1], OPEN);
    pop();
  }

}

function borders(){
  stroke(0);
  strokeWeight(0.1);
  line(0, 0, width, 0);
  line(width, 0, width, height);
  line(width, height, 0, height);
  line(0, height, 0, 0);
}

function autoPlay(){
  click += 1;
  if ((click%5 ==0) && (wordCount > -1)) advanceText();
}

// background
function paper(){

  //horizontal
  for(let i = 1; i < 255; i++){
  if(random(100) < 20){
    push();
    stroke(0, 0, 0, random(pageNumber + 5));
    strokeWeight(random(pageNumber*0.1));
    angleMode(DEGREES);
    //rotate(random(360));
    line(0, height * (i/255), width, height * (i/255));
    pop();
  }

  }

  //vertical
  for(let i = 1; i < 255; i++){
    if(random(100) < 20){
      push();
      stroke(0, 0, 0, random(5));
      strokeWeight(random(1));
      //rotate(random(360));
      line(width * (i/255), 0, width * (i/255), height);
      pop();
    }

  }

}

function displayCounts(){
  print();
  print();
  print('--------');
  print('pageNumber:' + pageNumber);
  print('wordCount:' + wordCount);
  print('lastMaxPage: ' + lastMaxParaWord[0]);
  print('lastMaxWord: ' + lastMaxParaWord[1]);
}

function loadText(paraNum, wordNum){
  currentText = '';
  for (let i = 0; i <= wordNum; i++){
    currentText += allText[paraNum][i];
  }
}

function updateMax(){
  if(wordCount > lastMaxParaWord[1])
    lastMaxParaWord[1] = wordCount;

  if(pageNumber > lastMaxParaWord[0]){
  lastMaxParaWord[0] = pageNumber;
  wordCount = 0;
  lastMaxParaWord[1] = 0;
  }
}

function keyPressed(){
  if (key=== ' '){
    if(pageNumber < 0){
      pageNumber ++;
    }
        loadText(pageNumber, wordCount);
        if(wordCount < paraLengths[pageNumber] - 5){
          wordCount += floor(random(1, 5));
          // wordCount += 1;
        }
        else{
          wordCount++;
        }

        updateMax();
        displayCounts();
      
    // this is the page turn!
    if(wordCount > paraLengths[pageNumber]){
      wordCount = 0;
      currentText = '';
      pageNumber++;

      updateMax();
      displayCounts();
    }
}
  
    if (key=== ','){
        if (pageNumber > -4) pageNumber--;
        //wordCount = 0;
          let newWord = 0;

          if(pageNumber >= 0){
          newWord = paraLengths[pageNumber];
          loadText(pageNumber, newWord - 1);
          wordCount = newWord;
          }
          else{
            currentText = '';
          }
          displayCounts();
    }
    if (key=== '.'){
        if ((pageNumber < lastMaxParaWord[0]) && (pageNumber < allText.length))
          {
            pageNumber++;
            let newWord = 0;
            if(pageNumber == lastMaxParaWord[0])
              newWord = lastMaxParaWord[1];
            else if(pageNumber < lastMaxParaWord[0]){
              newWord = paraLengths[pageNumber];
            }
            else{
              newWord = 0;
            }
            loadText(pageNumber, newWord - 1);
            wordCount = newWord - 1;
            displayCounts();
          } 
    }
  }

// works with autoplay()
function advanceText(){
    currentText += allText[paraCount][wordCount];
    wordCount += 1;

    if(wordCount > paraLengths[paraCount]){
      wordCount = 0;
      currentText = '';
      paraCount ++;
    }
}

function preShow(){
  if (pageNumber == -4){
    fill(0, 150);
    textAlign(CENTER);
    textSize(19);
    textFont('Work Sans');
    stroke('black');
    strokeWeight(1);
    text('press space to continue.', width*0.5, height*0.5);
    stroke(100, 0, 0);
    strokeWeight(random(0.3, 0.5));
    textSize(13);
    text('previous page: ,', width * 0.5, height * 0.55);
    text('next page: .', width * 0.5, height * 0.575);

    text('made with p5.js', width*0.5, height*0.65);
    text('amoghdwivedi.com', width*0.5, height*0.9);
  }
    if (pageNumber == -3){
    background(255);
    // introGraphics();

    angleMode(DEGREES);

    //SILENCE
    for (let i = 1; i < 30; i++){
    push();
    
    translate(width* 0.5, height * 0.45);
    fill(0, 0, 0, (i*0.1));
    stroke(0);
    strokeWeight(0);
    textAlign(CENTER);
    textSize((sketchWidth/19) + (i));
    textFont('Work Sans');
    rotate(i);
    text('SILENCE', 0, 0);

    pop();
    }

   //IS A 
    for (let i = 1; i < 15; i++){
    push();
    
    translate(width* 0.5, height * 0.52);
    fill(0, 0, 0, 1 +(i*0.1));
    stroke(0);
    strokeWeight(0);
    textAlign(CENTER);
    textSize((sketchWidth/19) + (i*0.5) + 1);
    textFont('Work Sans');
    rotate(19 * -0.05 * i);
    text('is a', 0, 0);

    pop();
    }
    
   //DENIAL OF EXPERIENCE
    for (let i = 1; i < 30; i++){
    push();

    translate(width* 0.5, height * 0.6);
    fill(0, 0, 0, 3 + (i*0.1));
    stroke(0);
    strokeWeight(0);
    textAlign(CENTER);
    textSize((sketchWidth/19) + (i*0.5) + 1);
    textFont('Work Sans');
    rotate(19 + (i * 0.5));
    text('denial of experience', 0, 0);

    pop();
    }

    // a memoir from April 2024
    push();
      fill(25, 30);
      stroke(0);
      strokeWeight(0);
      textAlign(CENTER);
      textSize(sketchWidth * 0.0299);
      textFont('Work Sans');
      text('A     M E M O I R', width*0.5, height*0.8);

      // set in April 2024; written in January 2026
      textSize(sketchWidth * 0.02);
      // text('set in April 2024', width * 0.5, height * 0.87);
      // text('written in January 2026', width * 0.5, height * 0.9);
    pop();



  }
  if (pageNumber == -2){
    background(255);
    imageMode(CENTER);
    if (random(100) > 30){
      image(lastDay, width * 0.5, height * 0.5, 1340/3.5, 1608/3.5);
      //image(lastDayOutline, (width * 0.5) + random(-1, 1), (height * 0.5), 1340/3.5, 1608/3.5);

      if(random(100) < 60){
        image(lastDayHalo, width * 0.5, height * 0.5, 1340/3.5, 1608/3.5 );
      }
    }
    else{
      image(lastDayPop, width * 0.5, height * 0.5, 1340/3.5, 1608/3.5);
    }

    fill(25, 112);
    textAlign(CENTER);
    textSize(sketchWidth * 0.0299);
    textFont('Work Sans');
    strokeWeight(0);
    text('10 May 2024; last day of school', width*0.5, height*0.85);
    
  }
  if (pageNumber == -1){

  }
}

function introGraphics(){

  push();
  translate(width * 0.5, height * 0.2);
  angleMode(DEGREES);

  for (let i = 0; i < 4; i++){

    strokeWeight(random(10));
    stroke(random(200, 255));
    point(radius[i] * sin(angles[i]), radius[i] * cos(angles[i]));
    
    radius[i] += random(-1, 1);

    strokeWeight(random(1));
    stroke(random(150, 200));
    line(0 + random(-2, 2), 0 + random(-2, 2), radius[i] * sin(angles[i]), radius[i] * cos(angles[i]));
  }

  pop();

  for(let i = 0; i < 4; i++){
    angles[i] += random(0, 50);
  }

}