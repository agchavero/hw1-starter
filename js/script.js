// 1. create an array of 3 images

let cereals = [
"../media/images/applejacks.jpg",
'../media/images/cocoakrispies.jpg',
'../media/images/frootloops.jpg',
'../media/images/cheerios.jpg',
'../media/images/frostedflakes.JPG',
'../media/images/honeybunches.JPG',
'../media/images/raisinbran.JPG',
'../media/images/specialk.JPG'
];

console.log(cereals);

// 2. create an event listener for the button
document.getElementById("cerealGenerator").addEventListener("click", displayImage);


// 3. create a function that will display a random image

// function functionName() {
    //HINT: You will be using the randomly generated number to plug into the array index


//}

function displayImage(){
    //retrieve element by ID
    // let displayCereal = document.getElementById('breakfastImg');

    //generate random index
    let randomIndex = Math.floor(Math.random() * cereals.length);
    console.log(randomIndex);
   
    //display randomly selected image from array 
    // displayCereal.src = cereals[randomIndex];

   
document.getElementById('breakfastImg').src = cereals[randomIndex];

}

