$(document).ready(function(){
    $("#lessors").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("value")=="more than 5"){
                $("#noOfLessors").fadeIn('slow');
            }
            else if($(this).attr("value")!="more than 5"){
                $("#noOfLessors").hide();
                addLessorsFields();
            }
            else{
                $("#noOfLessors").hide();
            }
        });
    }).change();
});


function addLessorsFields(){
    // Number of inputs to create
    var number = document.getElementById("lessors").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("lessorContainer");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Is the Lessor " + (i+1)+" an individual or an organisation (e.g. company, partnership, NGO etc)? ");
        label.appendChild(node);
        container.appendChild(label);

        var lessorTypesValue = ["","Individual","Organisation"];
        var lessorTypesText = ["Select Option","Individual","Organisation"];

        var lessorTypes = document.createElement("select");
        lessorTypes.id = "typeLessor" + i;
        lessorTypes.name = "typeLessor" + i;
        lessorTypes.setAttribute('data-index', i);
        lessorTypes.addEventListener('change',showlessorType, false);
        lessorTypes.classList = "custom-select form-control";
        container.appendChild(lessorTypes);

        for (var lt = 0; lt < lessorTypesValue.length; lt++) {
            var option = document.createElement("option");
            option.value = lessorTypesValue[lt];
            option.text = lessorTypesText[lt];
            lessorTypes.appendChild(option);
        }


        //////////////////////////////////////////////////////////

        var individualContent = document.createElement("div");
        individualContent.classList = "individual-lessor";
        individualContent.id = "lessorIndividual" + i;
        container.appendChild(individualContent);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Title");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilessorTitleValues = ["Mr","Ms","Mrs"];
        var ilessorTitleText = ["Mr.","Ms.","Mrs."];

        var ilessorTitle = document.createElement("select");
        ilessorTitle.classList = "custom-select form-control";
        ilessorTitle.name = "ilessorTitle" + i;
        individualContent.appendChild(ilessorTitle);

        for (var tl = 0; tl < ilessorTitleValues.length; tl++) {
            var option = document.createElement("option");
            option.value = ilessorTitleValues[tl];
            option.text = ilessorTitleText[tl];
            ilessorTitle.appendChild(option);
        }

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Full Name");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilessorName = document.createElement("input");
        ilessorName.classList = "form-control";
        ilessorName.type = "text";
        ilessorName.name = "ilessorName" + i;
        individualContent.appendChild(ilessorName);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Home Address");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilessorAddress = document.createElement("textarea");
        ilessorAddress.type = "text";
        ilessorAddress.classList = "form-control";
        ilessorAddress.name = "ilessorAddress" + i;
        ilessorAddress.rows = "4";
        individualContent.appendChild(ilessorAddress);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("CNIC No. :");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilessorCNIC = document.createElement("input");
        ilessorCNIC.type = "text";
        ilessorCNIC.classList = "form-control";
        ilessorCNIC.name = "ilessorCNIC" + i;
        individualContent.appendChild(ilessorCNIC);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("lessor "+(i+1)+" father or Husband");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilessorFHText = ["Select Option","If title of the Lessor "+(i+1)+" is Mr. then please insert title and full name of father below"
            ,"If title of the Lessor "+(i+1)+" is Ms. then please insert name of the father below",
            "If title of the Lessor "+(i+1)+" is Mrs. then please insert name of the husband below"];
        var ilessorFHValues = ["","Mr","Ms","Mrs"];

        var ilessorFH = document.createElement("select");
        ilessorFH.id = "ilessorFH" + i;
        ilessorFH.name = "ilessorFH" + i;
        ilessorFH.classList = "custom-select form-control";
        ilessorFH.setAttribute('data-index', i);
        ilessorFH.addEventListener('change',ishowlessorFH, false);
        individualContent.appendChild(ilessorFH);

        for (var fh = 0; fh < ilessorFHValues.length; fh++) {
            var option = document.createElement("option");
            option.value = ilessorFHValues[fh];
            option.text = ilessorFHText[fh];
            ilessorFH.appendChild(option);
        }

        var ilessorFHSOContainer = document.createElement("div");
        ilessorFHSOContainer.classList = "hidden-span input-group";
        ilessorFHSOContainer.style.display = "none";
        ilessorFHSOContainer.id = "so" + i;
        individualContent.appendChild(ilessorFHSOContainer);

        var ilessorFHSOSpan = document.createElement("span");
        ilessorFHSOSpan.classList = "input-group-addon";
        var node = document.createTextNode("s/o ");
        ilessorFHSOSpan.appendChild(node);
        ilessorFHSOContainer.appendChild(ilessorFHSOSpan);

        var ilessorFHSO = document.createElement("input");
        ilessorFHSO.type = "text";
        ilessorFHSO.name = "iso" + i;
        ilessorFHSO.classList = "form-control";
        ilessorFHSOContainer.appendChild(ilessorFHSO);



        var ilessorFHDOContainer = document.createElement("div");
        ilessorFHDOContainer.classList = "hidden-span input-group";
        ilessorFHDOContainer.style.display = "none";
        ilessorFHDOContainer.id = "do" + i;
        individualContent.appendChild(ilessorFHDOContainer);

        var ilessorFHDOSpan = document.createElement("span");
        ilessorFHDOSpan.classList = "input-group-addon";
        var node = document.createTextNode("d/o ");
        ilessorFHDOSpan.appendChild(node);
        ilessorFHDOContainer.appendChild(ilessorFHDOSpan);

        var ilessorFHDO = document.createElement("input");
        ilessorFHDO.type = "text";
        ilessorFHDO.name = "ido" + i;
        ilessorFHDO.classList = "form-control";
        ilessorFHDOContainer.appendChild(ilessorFHDO);




        var ilessorFHWOContainer = document.createElement("div");
        ilessorFHWOContainer.classList = "hidden-span input-group";
        ilessorFHWOContainer.style.display = "none";
        ilessorFHWOContainer.id = "wo" + i;
        individualContent.appendChild(ilessorFHWOContainer);

        var ilessorFHWOSpan = document.createElement("span");
        ilessorFHWOSpan.classList = "input-group-addon";
        var node = document.createTextNode("w/o ");
        ilessorFHWOSpan.appendChild(node);
        ilessorFHWOContainer.appendChild(ilessorFHWOSpan);

        var ilessorFHWO = document.createElement("input");
        ilessorFHWO.type = "text";
        ilessorFHWO.name = "iwo" + i;
        ilessorFHWO.classList = "form-control";
        ilessorFHWOContainer.appendChild(ilessorFHWO);

        //////////////////////////////////////////////////////////





        var organisationalContent = document.createElement("div");
        organisationalContent.classList = "organisation-lessor";
        organisationalContent.id = "lessorOrganisation" + i;
        container.appendChild(organisationalContent);


        var olegalStructure = document.createElement("input");
        olegalStructure.classList = "form-control spacing";
        olegalStructure.type = "text";
        olegalStructure.name = "olegalStructure" + i;
        olegalStructure.placeholder = "Legal Structure and its name- e.g. for a private limited company xyz (Pvt) Ltd.; for a partnership M/s xyz";
        organisationalContent.appendChild(olegalStructure);

        var oauthorisedPerson = document.createElement("input");
        oauthorisedPerson.classList = "form-control spacing";
        oauthorisedPerson.type = "text";
        oauthorisedPerson.name = "oauthorisedPerson" + i;
        oauthorisedPerson.placeholder = "Title and name of the person authorised to execute this lease agreement";
        organisationalContent.appendChild(oauthorisedPerson);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Title");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olessorTitleValues = ["Mr","Ms","Mrs"];
        var olessorTitleText = ["Mr.","Ms.","Mrs."];

        var olessorTitle = document.createElement("select");
        olessorTitle.classList = "custom-select form-control";
        olessorTitle.name = "olessorTitle" + i;
        organisationalContent.appendChild(olessorTitle);

        for (var tl = 0; tl < olessorTitleValues.length; tl++) {
            var option = document.createElement("option");
            option.value = olessorTitleValues[tl];
            option.text = olessorTitleText[tl];
            olessorTitle.appendChild(option);
        }

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Full Name");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olessorName = document.createElement("input");
        olessorName.classList = "form-control";
        olessorName.type = "text";
        olessorName.name = "olessorName" + i;
        organisationalContent.appendChild(olessorName);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Home Address");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olessorAddress = document.createElement("textarea");
        olessorAddress.type = "text";
        olessorAddress.classList = "form-control";
        olessorAddress.name = "olessorAddress" + i;
        olessorAddress.rows = "4";
        organisationalContent.appendChild(olessorAddress);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("CNIC No. :");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olessorCNIC = document.createElement("input");
        olessorCNIC.type = "text";
        olessorCNIC.classList = "form-control";
        olessorCNIC.name = "olessorCNIC" + i;
        organisationalContent.appendChild(olessorCNIC);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("lessor "+(i+1)+" father or Husband");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olessorFHText = ["Select Option","If title of the Lessor "+(i+1)+" is 'Mr.' then please insert title and full name of father below"
            ,"If title of the Lessor "+(i+1)+" is 'Ms.' then please insert name of the father below",
            "If title of the Lessor "+(i+1)+" is 'Mrs.' then please insert name of the husband below"];
        var olessorFHValues = ["","Mr","Ms","Mrs"];

        var olessorFH = document.createElement("select");
        olessorFH.id = "olessorFH" + i;
        olessorFH.name = "olessorFH" + i;
        olessorFH.classList = "custom-select form-control";
        olessorFH.setAttribute('data-index', i);
        olessorFH.addEventListener('change',oshowlessorFH, false);
        organisationalContent.appendChild(olessorFH);

        for (var fh = 0; fh < olessorFHValues.length; fh++) {
            var option = document.createElement("option");
            option.value = olessorFHValues[fh];
            option.text = olessorFHText[fh];
            olessorFH.appendChild(option);
        }


        var olessorFHSOContainer = document.createElement("div");
        olessorFHSOContainer.classList = "hidden-span input-group";
        olessorFHSOContainer.style.display = "none";
        olessorFHSOContainer.id = "oso" + i;
        organisationalContent.appendChild(olessorFHSOContainer);

        var olessorFHSOSpan = document.createElement("span");
        olessorFHSOSpan.classList = "input-group-addon";
        var node = document.createTextNode("s/o ");
        olessorFHSOSpan.appendChild(node);
        olessorFHSOContainer.appendChild(olessorFHSOSpan);

        var olessorFHSO = document.createElement("input");
        olessorFHSO.type = "text";
        olessorFHSO.name = "oso" + i;
        olessorFHSO.classList = "form-control";
        olessorFHSOContainer.appendChild(olessorFHSO);



        var olessorFHDOContainer = document.createElement("div");
        olessorFHDOContainer.classList = "hidden-span input-group";
        olessorFHDOContainer.style.display = "none";
        olessorFHDOContainer.id = "odo" + i;
        organisationalContent.appendChild(olessorFHDOContainer);

        var olessorFHDOSpan = document.createElement("span");
        olessorFHDOSpan.classList = "input-group-addon";
        var node = document.createTextNode("d/o ");
        olessorFHDOSpan.appendChild(node);
        olessorFHDOContainer.appendChild(olessorFHDOSpan);

        var olessorFHDO = document.createElement("input");
        olessorFHDO.type = "text";
        olessorFHDO.name = "odo" + i;
        olessorFHDO.classList = "form-control";
        olessorFHDOContainer.appendChild(olessorFHDO);




        var olessorFHWOContainer = document.createElement("div");
        olessorFHWOContainer.classList = "hidden-span input-group";
        olessorFHWOContainer.style.display = "none";
        olessorFHWOContainer.id = "owo" + i;
        organisationalContent.appendChild(olessorFHWOContainer);

        var olessorFHWOSpan = document.createElement("span");
        olessorFHWOSpan.classList = "input-group-addon";
        var node = document.createTextNode("w/o ");
        olessorFHWOSpan.appendChild(node);
        olessorFHWOContainer.appendChild(olessorFHWOSpan);

        var olessorFHWO = document.createElement("input");
        olessorFHWO.type = "text";
        olessorFHWO.name = "owo" + i;
        olessorFHWO.classList = "form-control";
        olessorFHWOContainer.appendChild(olessorFHWO);


    }
}

function showlessorType(e) {
    var val = e.target;
    elementId = val.id;
    elementIndex = val.getAttribute('data-index');

    $.showHidelessorType(elementId,elementIndex);
}

$(document).ready(function() {
    $.showHidelessorType = function(id,index) {

        var finalID = "#"+id;

        $(finalID).find("option:selected").each(function(){
            var value = $(this).attr("value");
            var div1Id = "#lessorIndividual"+index;
            var div2Id = "#lessorOrganisation"+index;


            if(value == "Individual") {
                $(div2Id).hide();
                $(div1Id).slideDown('slow');
            }
            else if (value == "Organisation") {
                $(div1Id).hide();
                $(div2Id).slideDown('slow');
            }
            else {
                $(div1Id).slideUp('slow');
                $(div2Id).slideUp('slow');
            }
        });

    };
});


function ishowlessorFH(e) {
    var val = e.target;
    elementId = val.id;
    elementIndex = val.getAttribute('data-index');

    $.ishowHidelessorFHFeilds(elementId,elementIndex);
}

$(document).ready(function() {
    $.ishowHidelessorFHFeilds = function(id,index) {

        var finalID = "#"+id;

        $(finalID).find("option:selected").each(function(){
            var value = $(this).attr("value");
            var feild1Id = "#so"+index;
            var feild2Id = "#do"+index;
            var feild3Id = "#wo"+index;


            if(value == "Mr") {
                $(feild2Id).hide();
                $(feild3Id).hide();
                $(feild1Id).fadeIn('slow');
            }
            else if (value == "Ms") {
                $(feild1Id).hide();
                $(feild3Id).hide();
                $(feild2Id).fadeIn('slow');
            }
            else if (value == "Mrs") {
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


function oshowlessorFH(e) {
    var val = e.target;
    elementId = val.id;
    elementIndex = val.getAttribute('data-index');

    $.oshowHidelessorFHFeilds(elementId,elementIndex);
}

$(document).ready(function() {
    $.oshowHidelessorFHFeilds = function(id,index) {

        var finalID = "#"+id;

        $(finalID).find("option:selected").each(function(){
            var value = $(this).attr("value");
            var feild1Id = "#oso"+index;
            var feild2Id = "#odo"+index;
            var feild3Id = "#owo"+index;


            if(value == "Mr") {
                $(feild2Id).hide();
                $(feild3Id).hide();
                $(feild1Id).fadeIn('slow');
            }
            else if (value == "Ms") {
                $(feild1Id).hide();
                $(feild3Id).hide();
                $(feild2Id).fadeIn('slow');
            }
            else if (value == "Mrs") {
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



function addLessorFieldsMoreThan5(){
    // Number of inputs to create
    var number = document.getElementById("noOfLessors").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("lessorContainer");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Is the Lessor " + (i+1)+" an individual or an organisation (e.g. company, partnership, NGO etc)? ");
        label.appendChild(node);
        container.appendChild(label);

        var lessorTypesValue = ["","Individual","Organisation"];
        var lessorTypesText = ["Select Option","Individual","Organisation"];

        var lessorTypes = document.createElement("select");
        lessorTypes.id = "typeLessor" + i;
        lessorTypes.name = "typeLessor" + i;
        lessorTypes.setAttribute('data-index', i);
        lessorTypes.addEventListener('change',showlessorType, false);
        lessorTypes.classList = "custom-select form-control";
        container.appendChild(lessorTypes);

        for (var lt = 0; lt < lessorTypesValue.length; lt++) {
            var option = document.createElement("option");
            option.value = lessorTypesValue[lt];
            option.text = lessorTypesText[lt];
            lessorTypes.appendChild(option);
        }


        //////////////////////////////////////////////////////////

        var individualContent = document.createElement("div");
        individualContent.classList = "individual-lessor";
        individualContent.id = "lessorIndividual" + i;
        container.appendChild(individualContent);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Title");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilessorTitleValues = ["Mr","Ms","Mrs"];
        var ilessorTitleText = ["Mr.","Ms.","Mrs."];

        var ilessorTitle = document.createElement("select");
        ilessorTitle.classList = "custom-select form-control";
        ilessorTitle.name = "ilessorTitle" + i;
        individualContent.appendChild(ilessorTitle);

        for (var tl = 0; tl < ilessorTitleValues.length; tl++) {
            var option = document.createElement("option");
            option.value = ilessorTitleValues[tl];
            option.text = ilessorTitleText[tl];
            ilessorTitle.appendChild(option);
        }

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Full Name");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilessorName = document.createElement("input");
        ilessorName.classList = "form-control";
        ilessorName.type = "text";
        ilessorName.name = "ilessorName" + i;
        individualContent.appendChild(ilessorName);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Home Address");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilessorAddress = document.createElement("textarea");
        ilessorAddress.type = "text";
        ilessorAddress.classList = "form-control";
        ilessorAddress.name = "ilessorAddress" + i;
        ilessorAddress.rows = "4";
        individualContent.appendChild(ilessorAddress);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("CNIC No. :");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilessorCNIC = document.createElement("input");
        ilessorCNIC.type = "text";
        ilessorCNIC.classList = "form-control";
        ilessorCNIC.name = "ilessorCNIC" + i;
        individualContent.appendChild(ilessorCNIC);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("lessor "+(i+1)+" father or Husband");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilessorFHText = ["Select Option","If title of the Lessor is ‘Mr.’ then please insert title and full name of father below"
            ,"If title of the Lessor is ‘Ms.’ then please insert name of the father below",
            "If title of the Lessor is ‘Mrs.’ then please insert name of the husband below"];
        var ilessorFHValues = ["","Mr","Ms","Mrs"];

        var ilessorFH = document.createElement("select");
        ilessorFH.id = "ilessorFH" + i;
        ilessorFH.name = "ilessorFH" + i;
        ilessorFH.classList = "custom-select form-control";
        ilessorFH.setAttribute('data-index', i);
        ilessorFH.addEventListener('change',ishowlessorFH, false);
        individualContent.appendChild(ilessorFH);

        for (var fh = 0; fh < ilessorFHValues.length; fh++) {
            var option = document.createElement("option");
            option.value = ilessorFHValues[fh];
            option.text = ilessorFHText[fh];
            ilessorFH.appendChild(option);
        }

        var ilessorFHSO = document.createElement("input");
        ilessorFHSO.type = "text";
        ilessorFHSO.id = "so" + i;
        ilessorFHSO.name = "iso" + i;
        ilessorFHSO.value = "S/o ";
        ilessorFHSO.classList = "form-control hidden-feilds";
        individualContent.appendChild(ilessorFHSO);

        var ilessorFHDO = document.createElement("input");
        ilessorFHDO.type = "text";
        ilessorFHDO.id = "do" + i;
        ilessorFHDO.name = "ido" + i;
        ilessorFHDO.value = "D/o ";
        ilessorFHDO.classList = "form-control hidden-feilds";
        individualContent.appendChild(ilessorFHDO);

        var ilessorFHWO = document.createElement("input");
        ilessorFHWO.type = "text";
        ilessorFHWO.id = "wo" + i;
        ilessorFHWO.name = "iwo" + i;
        ilessorFHWO.value = "W/o ";
        ilessorFHWO.classList = "form-control hidden-feilds";
        individualContent.appendChild(ilessorFHWO);




        //////////////////////////////////////////////////////////





        var organisationalContent = document.createElement("div");
        organisationalContent.classList = "organisation-lessor";
        organisationalContent.id = "lessorOrganisation" + i;
        container.appendChild(organisationalContent);


        var olegalStructure = document.createElement("input");
        olegalStructure.classList = "form-control spacing";
        olegalStructure.type = "text";
        olegalStructure.name = "olegalStructure" + i;
        olegalStructure.placeholder = "Legal Structure and its name- e.g. for a private limited company xyz (Pvt) Ltd.; for a partnership M/s xyz";
        organisationalContent.appendChild(olegalStructure);

        var oauthorisedPerson = document.createElement("input");
        oauthorisedPerson.classList = "form-control spacing";
        oauthorisedPerson.type = "text";
        oauthorisedPerson.name = "oauthorisedPerson" + i;
        oauthorisedPerson.placeholder = "Title and name of the person authorised to execute this lease agreement";
        organisationalContent.appendChild(oauthorisedPerson);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Title");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olessorTitleValues = ["Mr","Ms","Mrs"];
        var olessorTitleText = ["Mr.","Ms.","Mrs."];

        var olessorTitle = document.createElement("select");
        olessorTitle.classList = "custom-select form-control";
        olessorTitle.name = "olessorTitle" + i;
        organisationalContent.appendChild(olessorTitle);

        for (var tl = 0; tl < olessorTitleValues.length; tl++) {
            var option = document.createElement("option");
            option.value = olessorTitleValues[tl];
            option.text = olessorTitleText[tl];
            olessorTitle.appendChild(option);
        }

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Full Name");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olessorName = document.createElement("input");
        olessorName.classList = "form-control";
        olessorName.type = "text";
        olessorName.name = "olessorName" + i;
        organisationalContent.appendChild(olessorName);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Home Address");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olessorAddress = document.createElement("textarea");
        olessorAddress.type = "text";
        olessorAddress.classList = "form-control";
        olessorAddress.name = "olessorAddress" + i;
        olessorAddress.rows = "4";
        organisationalContent.appendChild(olessorAddress);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("CNIC No. :");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olessorCNIC = document.createElement("input");
        olessorCNIC.type = "text";
        olessorCNIC.classList = "form-control";
        olessorCNIC.name = "olessorCNIC" + i;
        organisationalContent.appendChild(olessorCNIC);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("lessor "+(i+1)+" father or Husband");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olessorFHText = ["Select Option","If title of the Lessor is ‘Mr.’ then please insert title and full name of father below"
            ,"If title of the Lessor is ‘Ms.’ then please insert name of the father below",
            "If title of the Lessor is ‘Mrs.’ then please insert name of the husband below"];
        var olessorFHValues = ["","Mr","Ms","Mrs"];

        var olessorFH = document.createElement("select");
        olessorFH.id = "olessorFH" + i;
        olessorFH.name = "olessorFH" + i;
        olessorFH.classList = "custom-select form-control";
        olessorFH.setAttribute('data-index', i);
        olessorFH.addEventListener('change',oshowlessorFH, false);
        organisationalContent.appendChild(olessorFH);

        for (var fh = 0; fh < olessorFHValues.length; fh++) {
            var option = document.createElement("option");
            option.value = olessorFHValues[fh];
            option.text = olessorFHText[fh];
            olessorFH.appendChild(option);
        }

        var olessorFHSO = document.createElement("input");
        olessorFHSO.type = "text";
        olessorFHSO.id = "oso" + i;
        olessorFHSO.name = "oso" + i;
        olessorFHSO.value = "S/o ";
        olessorFHSO.classList = "form-control hidden-feilds";
        organisationalContent.appendChild(olessorFHSO);

        var olessorFHDO = document.createElement("input");
        olessorFHDO.type = "text";
        olessorFHDO.id = "odo" + i;
        olessorFHDO.name = "odo" + i;
        olessorFHDO.value = "D/o ";
        olessorFHDO.classList = "form-control hidden-feilds";
        organisationalContent.appendChild(olessorFHDO);

        var olessorFHWO = document.createElement("input");
        olessorFHWO.type = "text";
        olessorFHWO.id = "owo" + i;
        olessorFHWO.name = "owo" + i;
        olessorFHWO.value = "W/o ";
        olessorFHWO.classList = "form-control hidden-feilds";
        organisationalContent.appendChild(olessorFHWO);

    }
}

