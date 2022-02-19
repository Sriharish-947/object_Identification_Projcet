Status = " ";
img1 = " ";

function backButton()
{
    window.location = "index.html";
}

function nextPage()
{
    window.location = "page1.html";
}

function preload()
{
    img1 = loadImage("Musturd_and_stuff.jpeg");
}



function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects...";
}

function modelLoaded()
{
    console.log("Cocossd.... ACTIVATE!");
    Status = true;
}

function gotResult(error, results)
{
    if(error)
    {
        console.error(error);    
    }
    else
    {
        console.log(results);
        object = results;
    }
}