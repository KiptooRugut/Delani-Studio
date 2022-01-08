function submit() {

    let userName = document.querySelector("#name").value;
    let emailAddress = document.querySelector("#email").value;
    let message = document.querySelector("#message").value;
    if (userName != "" && emailAddress != "" && message != "") {
        if (emailAddress.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/g)) {
            $("#username").text(userName),
                $("#subscribeEmail").text(emailAddress);
            $(".bs-success").show();
            preventDefault();
        } else {
            $(".bs-warning").show();
            preventDefault(5000);
        }
    } else {
        $(".bs-null").show();
        preventDefault(5000);
    }
}

$(document).ready(function() {
    $(".whatWeDo").addClass("whatWe");
    $("p.centered1").hide()
    $("p.centered2").hide()
    $("p.centered3").hide()
    $("p.centered4").hide()
    $("p.centered5").hide()
    $("p.centered6").hide()
    $("p.centered7").hide()
    $("p.centered8").hide()



    $("div.development").click(function() {
        $("img#development").toggle();
        $("p.development-text").toggle();
    });

    $("div.design").click(function() {
        $("img#design").toggle();
        $("p.design-text").toggle();
    });

    $("div.product").click(function() {
        $("img#product").toggle();
        $("p.product-text").toggle();
    });



    $("img#project1").mouseover(function() {
        $("p.centered1").show()
    });

    $("img#project1").mouseout(function() {
        $("p.centered1").hide();
    });

    $("img#project2").mouseover(function() {
        $("p.centered2").show();
    });

    $("img#project2").mouseout(function() {
        $("p.centered2").hide();
    });

    $("img#project3").mouseover(function() {
        $("p.project3").show();
    });

    $("img#project3").mouseout(function() {
        $("p.project3").hide();
    });

    $("img#project4").mouseover(function() {
        $("p.project4").show();
    });

    $("img#project4").mouseout(function() {
        $("p.project4").hide();
    });

    $("img#project5").mouseover(function() {
        $("p.project5").show();
    });

    $("img#project5").mouseout(function() {
        $("p.project5").hide();
    });

    $("img#project6").mouseover(function() {
        $("p.project6").show();
    });

    $("img#project6").mouseout(function() {
        $("p.project6").hide();
    });

    $("img#project7").mouseover(function() {
        $("p.project7").show();
    });

    $("img#project7").mouseout(function() {
        $("p.project7").hide();
    });

    $("img#project8").mouseover(function() {
        $("p.project8").show();
    });

    $("img#project8").mouseout(function() {
        $("p.project8").hide();
    });

});

function reset() {
    location.reload();
}