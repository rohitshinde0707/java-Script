var index = 0;

function changeColors() {
    var colors = ["red", "blue", "orange", "black", "purple", "green", "yellow"]

    document.getElementsByTagName("body")[0].
    style.background = colors[index++];

    if (index > colors.length - 1)

    index = 0;
}