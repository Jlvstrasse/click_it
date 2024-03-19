var index = 0;

function changeColors() {
    var colors = ["red", "orange", "yellow", "green", "blue", "purple"];

    document.getElementsByTagName("body")[0].style.background = colors[index++];
    // document.getElementsByClassName("container")[0].value = "Again";

    if (index > colors.length - 1)
        index = 0;
}


    

