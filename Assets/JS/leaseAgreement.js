$(document).ready(function() {
    $("#requireDeposit").change(function () {
        $(this).find("option:selected").each(function () {
            if ($(this).attr("value") == "Yes") {
                $("#yes").fadeIn('slow');
            }
            else if ($(this).attr("value") != "Yes") {
                $("#yes").fadeOut('slow');
            }
            else {
                $("#yes").fadeOut('slow');
            }
        });
    }).change();

});

$(document).ready(function() {
    $("#rentRemained").change(function () {
        $(this).find("option:selected").each(function () {
            if ($(this).attr("value") == "No") {
                $("#notRemained").fadeIn('slow');
            }
            else if ($(this).attr("value") != "No") {
                $("#notRemained").fadeOut('slow');
            }
            else {
                $("#notRemained").fadeOut('slow');
            }
        });
    }).change();

});


$(document).ready(function() {
    $("#demandVacation").change(function () {
        $(this).find("option:selected").each(function () {
            if ($(this).attr("value") == "Yes") {
                $("#demandYes").fadeIn('slow');
            }
            else if ($(this).attr("value") != "Yes") {
                $("#demandYes").fadeOut('slow');
            }
            else {
                $("#demandYes").fadeOut('slow');
            }
        });
    }).change();

});

$(document).ready(function() {
    $("#vacate").change(function () {
        $(this).find("option:selected").each(function () {
            if ($(this).attr("value") == "Yes") {
                $("#vacateYes").fadeIn('slow');
            }
            else if ($(this).attr("value") != "Yes") {
                $("#vacateYes").fadeOut('slow');
            }
            else {
                $("#vacateYes").fadeOut('slow');
            }
        });
    }).change();

});


