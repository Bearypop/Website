
$(".app-link").click((event) => {
    if ($(event.target).hasClass("one")) {
        window.location.href = "Dice Game/index.html";
    } else if ($(event.target).hasClass("two")) {
        window.location.href = "Simon Game/index.html";
    } else if ($(event.target).hasClass("three")) {
        window.location.href = "Drum Kit/index.html";
    }
});