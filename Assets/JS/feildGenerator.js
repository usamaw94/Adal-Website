$(document).ready(function(){
    $("#member").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("value")=="more than 5"){
                $("#noOfMembers").fadeIn('slow');
            }
            else if($(this).attr("value")!="more than 5"){
                $("#noOfMembers").hide();
                addFields();
            }
            else{
                $("#noOfMembers").hide();
            }
        });
    }).change();
});

function addFields(){
    // Number of inputs to create
    var number = document.getElementById("member").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("container");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){

        var partnerFormContainer = document.createElement("div");
        partnerFormContainer.classList = "partner-form-container";
        container.appendChild(partnerFormContainer);

        // Append a node with a random text
        // Create an <input> element, set its type and name attributes
        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What is the title of the Partner " + (i+1));
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var titleOptions = ["Mr.","Ms.","Mrs."];

        var partnerTitleList = document.createElement("select");
        partnerTitleList.id = "titlePartner" + i;
        partnerTitleList.name = "titlePartner" + i;
        partnerTitleList.classList = "form-input";

        partnerFormContainer.appendChild(partnerTitleList);

        for (var t = 0; t < titleOptions.length; t++) {
            var option = document.createElement("option");
            option.value = titleOptions[t];
            option.text = titleOptions[t];
            partnerTitleList.appendChild(option);
        }

        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What is the full name of Partner " + (i+1));
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerFullName = document.createElement("input");
        partnerFullName.type = "text";
        partnerFullName.id = "fullNamePartner" + i;
        partnerFullName.name = "fullNamePartner" + i;
        partnerFullName.classList = "form-input form-input2 form-input3";
        partnerFormContainer.appendChild(partnerFullName);
        // Append a line break

        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What is the title and full name of the Partner " + (i+1) + "'s father or husband? ");
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerFHValue = ["","SO","DO","WO"];
        var partnerFHText = ["Select Option" ,"If title of the Partner "+(i+1)+" is 'Mr.' then please insert title and full name of father below",
            "If title of the Partner "+(i+1)+" is 'Ms.' then please insert name of the father below",
            "If title of the Partner "+(i+1)+" is 'Mrs.' then please insert name of the husband below"];




        var partnerFHList = document.createElement("select");
        partnerFHList.id = "partnerFH" + i;
        partnerFHList.name = "partnerFH" + i;
        partnerFHList.setAttribute('data-index', i);
        partnerFHList.addEventListener('change',showFHFeilds, false);
        partnerFHList.classList = "form-input";
        partnerFormContainer.appendChild(partnerFHList);

        for (var fh = 0; fh < partnerFHValue.length; fh++) {
            var option = document.createElement("option");
            option.value = partnerFHValue[fh];
            option.text = partnerFHText[fh];
            partnerFHList.appendChild(option);
        }

        var partnerFHSO = document.createElement("input");
        partnerFHSO.type = "text";
        partnerFHSO.id = "SO" + i;
        partnerFHSO.name = "SOPartner" + i;
        partnerFHSO.value = "s/o ";
        partnerFHSO.classList = "form-input hidden-form-input";
        partnerFormContainer.appendChild(partnerFHSO);

        var partnerFHDO = document.createElement("input");
        partnerFHDO.type = "text";
        partnerFHDO.id = "DO" + i;
        partnerFHDO.name = "DOPartner" + i;
        partnerFHDO.value = "d/o ";
        partnerFHDO.classList = "form-input hidden-form-input";
        partnerFormContainer.appendChild(partnerFHDO);

        var partnerFHWO = document.createElement("input");
        partnerFHWO.type = "text";
        partnerFHWO.id = "WO" + i;
        partnerFHWO.name = "WOPartner" + i;
        partnerFHWO.value = "w/o ";
        partnerFHWO.classList = "form-input hidden-form-input";
        partnerFormContainer.appendChild(partnerFHWO);


        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What is the compelete home address of the Partner " + (i+1) + "?");
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerHomeAddress = document.createElement("input");
        partnerHomeAddress.type = "text";
        partnerHomeAddress.id = "addressPartner" + i;
        partnerHomeAddress.name = "addressPartner" + i;
        partnerHomeAddress.classList = "form-input form-input2 form-input3";
        partnerFormContainer.appendChild(partnerHomeAddress);



        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What is the National Identity Card Number or International Passport Number of the Partner "+(i+1)+"?");
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerCPValue = ["","cnic","passport"];
        var partnerCPText = ["Select Option" ,"If the Partner "+(i+1)+" is a Pakistani National then please insert the full CNIC No. below",
            "If the Partner "+(i+1)+" is a Foreign National then please insert the full International Passport No. below",];




        var partnerCPList = document.createElement("select");
        partnerCPList.id = "partnerCP" + i;
        partnerCPList.name = "partnerCP" + i;
        partnerCPList.setAttribute('data-index', i);
        partnerCPList.addEventListener('change',showCPFeilds, false);
        partnerCPList.classList = "form-input";
        partnerFormContainer.appendChild(partnerCPList);

        for (var cp = 0; cp < partnerCPValue.length; cp++) {
            var option = document.createElement("option");
            option.value = partnerCPValue[cp];
            option.text = partnerCPText[cp];
            partnerCPList.appendChild(option);
        }

        var partnerCPCNIC = document.createElement("input");
        partnerCPCNIC.type = "text";
        partnerCPCNIC.id = "cnic" + i;
        partnerCPCNIC.name = "CNIC" + i;
        partnerCPCNIC.value = "CNIC No. ";
        partnerCPCNIC.classList = "form-input hidden-form-input";
        partnerFormContainer.appendChild(partnerCPCNIC);

        var partnerCPPassport = document.createElement("input");
        partnerCPPassport.type = "text";
        partnerCPPassport.id = "passport" + i;
        partnerCPPassport.name = "Passport" + i;
        partnerCPPassport.value = "Passport No. ";
        partnerCPPassport.classList = "form-input hidden-form-input";
        partnerFormContainer.appendChild(partnerCPPassport);


        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("How much capital will the Partner "+(i+1)+" invest in the partnership firm");
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerInvest = document.createElement("input");
        partnerInvest.type = "text";
        partnerInvest.id = "investPartner" + i;
        partnerInvest.name = "investPartner" + i;
        partnerInvest.classList = "form-input form-input2 form-input3";
        partnerFormContainer.appendChild(partnerInvest);


        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What percentage of profit or loss would the Partner "+(i+1)+" receive or incur?");
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerReceive = document.createElement("input");
        partnerReceive.type = "text";
        partnerReceive.id = "investPartner" + i;
        partnerReceive.name = "investPartner" + i;
        partnerReceive.classList = "form-input form-input2 form-input3";
        partnerFormContainer.appendChild(partnerReceive);


        partnerFormContainer.appendChild(document.createElement("br"));
        partnerFormContainer.appendChild(document.createElement("br"));
        partnerFormContainer.appendChild(document.createElement("hr"));

    }
}


function showFHFeilds(e) {
    var val = e.target;
    elementId = val.id;
    elementIndex = val.getAttribute('data-index');
    $.showHideFHFeilds(elementId,elementIndex);
}

$(document).ready(function() {
    $.showHideFHFeilds = function(id,index) {

        var finalID = "#"+id;

        $(finalID).find("option:selected").each(function(){
            var value = $(this).attr("value");
            var feild1Id = "#SO"+index;
            var feild2Id = "#DO"+index;
            var feild3Id = "#WO"+index;


            if(value == "SO") {
                $(feild2Id).hide();
                $(feild3Id).hide();
                $(feild1Id).fadeIn('slow');
            }
            else if (value == "DO") {
                $(feild1Id).hide();
                $(feild3Id).hide();
                $(feild2Id).fadeIn('slow');
            }
            else if (value == "WO") {
                $(feild1Id).hide();
                $(feild2Id).hide();
                $(feild3Id).fadeIn('slow');
            }
            else {
                $(feild1Id).fadeOut('slow');
                $(feild2Id).fadeOut('slow');
                $(feild3Id).fadeOut('slow');
            }
        });

    };
});


function showCPFeilds(e) {
    var val = e.target;
    elementId = val.id;
    elementIndex = val.getAttribute('data-index');
    $.showHideCPFeilds(elementId,elementIndex);
}

$(document).ready(function() {
    $.showHideCPFeilds = function(id,index) {

        var finalID = "#"+id;

        $(finalID).find("option:selected").each(function(){
            var value = $(this).attr("value");
            var feild1Id = "#cnic"+index;
            var feild2Id = "#passport"+index;


            if(value == "cnic") {
                $(feild2Id).hide();
                $(feild1Id).fadeIn('slow');
            }
            else if (value == "passport") {
                $(feild1Id).hide();
                $(feild2Id).fadeIn('slow');
            }
            else {
                $(feild1Id).fadeOut('slow');
                $(feild2Id).fadeOut('slow');
            }
        });

    };
});




function addFieldsMoreThan5(){
    // Number of inputs to create
    var number = document.getElementById("noOfMembers").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("container");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }

    for (i=0;i<number;i++){

        var partnerFormContainer = document.createElement("div");
        partnerFormContainer.classList = "partner-form-container";
        container.appendChild(partnerFormContainer);

        // Append a node with a random text
        // Create an <input> element, set its type and name attributes
        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What is the title of the Partner " + (i+1));
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var titleOptions = ["Mr.","Ms.","Mrs."];

        var partnerTitleList = document.createElement("select");
        partnerTitleList.id = "titlePartner" + i;
        partnerTitleList.name = "titlePartner" + i;
        partnerTitleList.classList = "form-input";

        partnerFormContainer.appendChild(partnerTitleList);

        for (var t = 0; t < titleOptions.length; t++) {
            var option = document.createElement("option");
            option.value = titleOptions[t];
            option.text = titleOptions[t];
            partnerTitleList.appendChild(option);
        }

        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What is the full name of Partner " + (i+1));
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerFullName = document.createElement("input");
        partnerFullName.type = "text";
        partnerFullName.id = "fullNamePartner" + i;
        partnerFullName.name = "fullNamePartner" + i;
        partnerFullName.classList = "form-input form-input2 form-input3";
        partnerFormContainer.appendChild(partnerFullName);
        // Append a line break

        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What is the title and full name of the Partner " + (i+1) + "'s father or husband? ");
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerFHValue = ["","SO","DO","WO"];
        var partnerFHText = ["Select Option" ,"If title of the First Partner is ‘Mr.’ then please insert title and full name of father below",
            "If title of the First Partner is ‘Ms.’ then please insert name of the father below",
            "If title of the First Partner is ‘Mrs.’ then please insert name of the husband below"];




        var partnerFHList = document.createElement("select");
        partnerFHList.id = "partnerFH" + i;
        partnerFHList.name = "partnerFH" + i;
        partnerFHList.setAttribute('data-index', i);
        partnerFHList.addEventListener('change',showFHFeilds, false);
        partnerFHList.classList = "form-input";
        partnerFormContainer.appendChild(partnerFHList);

        for (var fh = 0; fh < partnerFHValue.length; fh++) {
            var option = document.createElement("option");
            option.value = partnerFHValue[fh];
            option.text = partnerFHText[fh];
            partnerFHList.appendChild(option);
        }

        var partnerFHSO = document.createElement("input");
        partnerFHSO.type = "text";
        partnerFHSO.id = "SO" + i;
        partnerFHSO.name = "SOPartner" + i;
        partnerFHSO.value = "s/o ";
        partnerFHSO.classList = "form-input hidden-form-input";
        partnerFormContainer.appendChild(partnerFHSO);

        var partnerFHDO = document.createElement("input");
        partnerFHDO.type = "text";
        partnerFHDO.id = "DO" + i;
        partnerFHDO.name = "DOPartner" + i;
        partnerFHDO.value = "d/o ";
        partnerFHDO.classList = "form-input hidden-form-input";
        partnerFormContainer.appendChild(partnerFHDO);

        var partnerFHWO = document.createElement("input");
        partnerFHWO.type = "text";
        partnerFHWO.id = "WO" + i;
        partnerFHWO.name = "WOPartner" + i;
        partnerFHWO.value = "w/o ";
        partnerFHWO.classList = "form-input hidden-form-input";
        partnerFormContainer.appendChild(partnerFHWO);


        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What is the compelete home address of the Partner " + (i+1) + "?");
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerHomeAddress = document.createElement("input");
        partnerHomeAddress.type = "text";
        partnerHomeAddress.id = "addressPartner" + i;
        partnerHomeAddress.name = "addressPartner" + i;
        partnerHomeAddress.classList = "form-input form-input2 form-input3";
        partnerFormContainer.appendChild(partnerHomeAddress);



        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What is the National Identity Card Number or International Passport Number of the Partner "+(i+1)+"?");
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerCPValue = ["","cnic","passport"];
        var partnerCPText = ["Select Option" ,"If the Partner "+(i+1)+" is a Pakistani National then please insert the full CNIC No. below",
            "If the Partner "+(i+1)+" is a Foreign National then please insert the full International Passport No. below",];




        var partnerCPList = document.createElement("select");
        partnerCPList.id = "partnerCP" + i;
        partnerCPList.name = "partnerCP" + i;
        partnerCPList.setAttribute('data-index', i);
        partnerCPList.addEventListener('change',showCPFeilds, false);
        partnerCPList.classList = "form-input";
        partnerFormContainer.appendChild(partnerCPList);

        for (var cp = 0; cp < partnerCPValue.length; cp++) {
            var option = document.createElement("option");
            option.value = partnerCPValue[cp];
            option.text = partnerCPText[cp];
            partnerCPList.appendChild(option);
        }

        var partnerCPCNIC = document.createElement("input");
        partnerCPCNIC.type = "text";
        partnerCPCNIC.id = "cnic" + i;
        partnerCPCNIC.name = "CNIC" + i;
        partnerCPCNIC.value = "CNIC No. ";
        partnerCPCNIC.classList = "form-input hidden-form-input";
        partnerFormContainer.appendChild(partnerCPCNIC);

        var partnerCPPassport = document.createElement("input");
        partnerCPPassport.type = "text";
        partnerCPPassport.id = "passport" + i;
        partnerCPPassport.name = "Passport" + i;
        partnerCPPassport.value = "Passport No. ";
        partnerCPPassport.classList = "form-input hidden-form-input";
        partnerFormContainer.appendChild(partnerCPPassport);


        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("How much capital will the Partner "+(i+1)+" invest in the partnership firm");
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerInvest = document.createElement("input");
        partnerInvest.type = "text";
        partnerInvest.id = "investPartner" + i;
        partnerInvest.name = "investPartner" + i;
        partnerInvest.classList = "form-input form-input2 form-input3";
        partnerFormContainer.appendChild(partnerInvest);


        var label = document.createElement("h3");
        label.classList = "label1";
        var node = document.createTextNode("What percentage of profit or loss would the Partner "+(i+1)+" receive or incur?");
        label.appendChild(node);
        partnerFormContainer.appendChild(label);

        var partnerReceive = document.createElement("input");
        partnerReceive.type = "text";
        partnerReceive.id = "investPartner" + i;
        partnerReceive.name = "investPartner" + i;
        partnerReceive.classList = "form-input form-input2 form-input3";
        partnerFormContainer.appendChild(partnerReceive);


        partnerFormContainer.appendChild(document.createElement("br"));
        partnerFormContainer.appendChild(document.createElement("br"));
        partnerFormContainer.appendChild(document.createElement("hr"));

    }
}
