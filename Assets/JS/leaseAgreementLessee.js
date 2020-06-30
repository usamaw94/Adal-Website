$(document).ready(function(){
    $("#lessees").change(function(){
        $(this).find("option:selected").each(function(){
            if($(this).attr("value")=="more than 5"){
                $("#noOfLessees").fadeIn('slow');
            }
            else if($(this).attr("value")!="more than 5"){
                $("#noOfLessees").hide();
                addLesseesFields();
            }
            else{
                $("#noOfLessees").hide();
            }
        });
    }).change();
});


function addLesseesFields(){
    // Number of inputs to create
    var number = document.getElementById("lessees").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("lesseesContainer");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Is the Lessee " + (i+1)+" an individual or an organisation (e.g. company, partnership, NGO etc)? ");
        label.appendChild(node);
        container.appendChild(label);

        var lesseeTypesValue = ["","Individual","Organisation"];
        var lesseeTypesText = ["Select Option","Individual","Organisation"];

        var lesseeTypes = document.createElement("select");
        lesseeTypes.id = "typeLessee" + i;
        lesseeTypes.name = "typeLessee" + i;
        lesseeTypes.setAttribute('data-index', i);
        lesseeTypes.addEventListener('change',showLesseeType, false);
        lesseeTypes.classList = "custom-select form-control";
        container.appendChild(lesseeTypes);

        for (var lt = 0; lt < lesseeTypesValue.length; lt++) {
            var option = document.createElement("option");
            option.value = lesseeTypesValue[lt];
            option.text = lesseeTypesText[lt];
            lesseeTypes.appendChild(option);
        }


        //////////////////////////////////////////////////////////

        var individualContent = document.createElement("div");
        individualContent.classList = "individual-lessee";
        individualContent.id = "lesseeIndividual" + i;
        container.appendChild(individualContent);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Title");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilesseeTitleValues = ["Mr","Ms","Mrs"];
        var ilesseeTitleText = ["Mr.","Ms.","Mrs."];

        var ilesseeTitle = document.createElement("select");
        ilesseeTitle.classList = "custom-select form-control";
        ilesseeTitle.name = "ilesseeTitle" + i;
        individualContent.appendChild(ilesseeTitle);

        for (var tl = 0; tl < ilesseeTitleValues.length; tl++) {
            var option = document.createElement("option");
            option.value = ilesseeTitleValues[tl];
            option.text = ilesseeTitleText[tl];
            ilesseeTitle.appendChild(option);
        }

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Full Name");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilesseeName = document.createElement("input");
        ilesseeName.classList = "form-control";
        ilesseeName.type = "text";
        ilesseeName.name = "ilesseeName" + i;
        individualContent.appendChild(ilesseeName);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Home Address");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilesseeAddress = document.createElement("textarea");
        ilesseeAddress.type = "text";
        ilesseeAddress.classList = "form-control";
        ilesseeAddress.name = "ilesseeAddress" + i;
        ilesseeAddress.rows = "4";
        individualContent.appendChild(ilesseeAddress);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("CNIC No. :");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilesseeCNIC = document.createElement("input");
        ilesseeCNIC.type = "text";
        ilesseeCNIC.classList = "form-control";
        ilesseeCNIC.name = "ilesseeCNIC" + i;
        individualContent.appendChild(ilesseeCNIC);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("lessee "+(i+1)+" father or Husband");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilesseeFHText = ["Select Option","If title of the Lessee "+(i+1)+" is 'Mr.' then please insert title and full name of father below"
            ,"If title of the Lessee "+(i+1)+" is 'Ms.' then please insert name of the father below",
            "If title of the Lessee "+(i+1)+" is 'Mrs.' then please insert name of the husband below"];
        var ilesseeFHValues = ["","Mr","Ms","Mrs"];

        var ilesseeFH = document.createElement("select");
        ilesseeFH.id = "ilesseeFH" + i;
        ilesseeFH.name = "ilesseeFH" + i;
        ilesseeFH.classList = "custom-select form-control";
        ilesseeFH.setAttribute('data-index', i);
        ilesseeFH.addEventListener('change',ishowLesseeFH, false);
        individualContent.appendChild(ilesseeFH);

        for (var fh = 0; fh < ilesseeFHValues.length; fh++) {
            var option = document.createElement("option");
            option.value = ilesseeFHValues[fh];
            option.text = ilesseeFHText[fh];
            ilesseeFH.appendChild(option);
        }


        var ilesseeFHSOContainer = document.createElement("div");
        ilesseeFHSOContainer.classList = "hidden-span input-group";
        ilesseeFHSOContainer.style.display = "none";
        ilesseeFHSOContainer.id = "ilsso" + i;
        individualContent.appendChild(ilesseeFHSOContainer);

        var ilesseeFHSOSpan = document.createElement("span");
        ilesseeFHSOSpan.classList = "input-group-addon";
        var node = document.createTextNode("s/o ");
        ilesseeFHSOSpan.appendChild(node);
        ilesseeFHSOContainer.appendChild(ilesseeFHSOSpan);


        var ilesseeFHSO = document.createElement("input");
        ilesseeFHSO.type = "text";
        ilesseeFHSO.name = "ilsso" + i;
        ilesseeFHSO.classList = "form-control";
        ilesseeFHSOContainer.appendChild(ilesseeFHSO);


        var ilesseeFHDOContainer = document.createElement("div");
        ilesseeFHDOContainer.classList = "hidden-span input-group";
        ilesseeFHDOContainer.style.display = "none";
        ilesseeFHDOContainer.id = "ilsdo" + i;
        individualContent.appendChild(ilesseeFHDOContainer);

        var ilesseeFHDOSpan = document.createElement("span");
        ilesseeFHDOSpan.classList = "input-group-addon";
        var node = document.createTextNode("d/o ");
        ilesseeFHDOSpan.appendChild(node);
        ilesseeFHDOContainer.appendChild(ilesseeFHDOSpan);

        var ilesseeFHDO = document.createElement("input");
        ilesseeFHDO.type = "text";
        ilesseeFHDO.name = "ilsdo" + i;
        ilesseeFHDO.classList = "form-control";
        ilesseeFHDOContainer.appendChild(ilesseeFHDO);


        var ilesseeFHWOContainer = document.createElement("div");
        ilesseeFHWOContainer.classList = "hidden-span input-group";
        ilesseeFHWOContainer.style.display = "none";
        ilesseeFHWOContainer.id = "ilswo" + i;
        individualContent.appendChild(ilesseeFHWOContainer);

        var ilesseeFHWOSpan = document.createElement("span");
        ilesseeFHWOSpan.classList = "input-group-addon";
        var node = document.createTextNode("w/o ");
        ilesseeFHWOSpan.appendChild(node);
        ilesseeFHWOContainer.appendChild(ilesseeFHWOSpan);

        var ilesseeFHWO = document.createElement("input");
        ilesseeFHWO.type = "text";
        ilesseeFHWO.name = "ilswo" + i;
        ilesseeFHWO.classList = "form-control";
        ilesseeFHWOContainer.appendChild(ilesseeFHWO);

        //////////////////////////////////////////////////////////





        var organisationalContent = document.createElement("div");
        organisationalContent.classList = "organisation-lessee";
        organisationalContent.id = "lesseeOrganisation" + i;
        container.appendChild(organisationalContent);


        var olesseelegalStructure = document.createElement("input");
        olesseelegalStructure.classList = "form-control spacing";
        olesseelegalStructure.type = "text";
        olesseelegalStructure.name = "oLesseeLegalStructure" + i;
        olesseelegalStructure.placeholder = "Legal Structure and its name- e.g. for a private limited company xyz (Pvt) Ltd.; for a partnership M/s xyz";
        organisationalContent.appendChild(olesseelegalStructure);

        var olesseeauthorisedPerson = document.createElement("input");
        olesseeauthorisedPerson.classList = "form-control spacing";
        olesseeauthorisedPerson.type = "text";
        olesseeauthorisedPerson.name = "oLesseeAuthorisedPerson" + i;
        olesseeauthorisedPerson.placeholder = "Title and name of the person authorised to execute this lease agreement";
        organisationalContent.appendChild(olesseeauthorisedPerson);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Title");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olesseeTitleValues = ["Mr","Ms","Mrs"];
        var olesseeTitleText = ["Mr.","Ms.","Mrs."];

        var olesseeTitle = document.createElement("select");
        olesseeTitle.classList = "custom-select form-control";
        olesseeTitle.name = "olesseeTitle" + i;
        organisationalContent.appendChild(olesseeTitle);

        for (var tl = 0; tl < olesseeTitleValues.length; tl++) {
            var option = document.createElement("option");
            option.value = olesseeTitleValues[tl];
            option.text = olesseeTitleText[tl];
            olesseeTitle.appendChild(option);
        }

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Full Name");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olesseeName = document.createElement("input");
        olesseeName.classList = "form-control";
        olesseeName.type = "text";
        olesseeName.name = "olesseeName" + i;
        organisationalContent.appendChild(olesseeName);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Home Address");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olesseeAddress = document.createElement("textarea");
        olesseeAddress.type = "text";
        olesseeAddress.classList = "form-control";
        olesseeAddress.name = "olesseeAddress" + i;
        olesseeAddress.rows = "4";
        organisationalContent.appendChild(olesseeAddress);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("CNIC No. :");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olesseeCNIC = document.createElement("input");
        olesseeCNIC.type = "text";
        olesseeCNIC.classList = "form-control";
        olesseeCNIC.name = "olesseeCNIC" + i;
        organisationalContent.appendChild(olesseeCNIC);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Lessee "+(i+1)+" father or Husband");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olesseeFHText = ["Select Option","If title of the Lessee "+(i+1)+" is 'Mr.' then please insert title and full name of father below"
            ,"If title of the Lessee "+(i+1)+" is 'Ms.' then please insert name of the father below",
            "If title of the Lessee "+(i+1)+" is 'Mrs.' then please insert name of the husband below"];
        var olesseeFHValues = ["","Mr","Ms","Mrs"];

        var olesseeFH = document.createElement("select");
        olesseeFH.id = "olesseeFH" + i;
        olesseeFH.name = "olesseeFH" + i;
        olesseeFH.classList = "custom-select form-control";
        olesseeFH.setAttribute('data-index', i);
        olesseeFH.addEventListener('change',oshowLesseeFH, false);
        organisationalContent.appendChild(olesseeFH);

        for (var fh = 0; fh < olesseeFHValues.length; fh++) {
            var option = document.createElement("option");
            option.value = olesseeFHValues[fh];
            option.text = olesseeFHText[fh];
            olesseeFH.appendChild(option);
        }

        var olesseeFHSOContainer = document.createElement("div");
        olesseeFHSOContainer.classList = "hidden-span input-group";
        olesseeFHSOContainer.style.display = "none";
        olesseeFHSOContainer.id = "olsso" + i;
        organisationalContent.appendChild(olesseeFHSOContainer);

        var olesseeFHSOSpan = document.createElement("span");
        olesseeFHSOSpan.classList = "input-group-addon";
        var node = document.createTextNode("s/o ");
        olesseeFHSOSpan.appendChild(node);
        olesseeFHSOContainer.appendChild(olesseeFHSOSpan);

        var olesseeFHSO = document.createElement("input");
        olesseeFHSO.type = "text";
        olesseeFHSO.name = "olsso" + i;
        olesseeFHSO.classList = "form-control";
        olesseeFHSOContainer.appendChild(olesseeFHSO);


        var olesseeFHDOContainer = document.createElement("div");
        olesseeFHDOContainer.classList = "hidden-span input-group";
        olesseeFHDOContainer.style.display = "none";
        olesseeFHDOContainer.id = "olsdo" + i;
        organisationalContent.appendChild(olesseeFHDOContainer);

        var olesseeFHDOSpan = document.createElement("span");
        olesseeFHDOSpan.classList = "input-group-addon";
        var node = document.createTextNode("d/o ");
        olesseeFHDOSpan.appendChild(node);
        olesseeFHDOContainer.appendChild(olesseeFHDOSpan);

        var olesseeFHDO = document.createElement("input");
        olesseeFHDO.type = "text";
        olesseeFHDO.name = "olsdo" + i;
        olesseeFHDO.classList = "form-control";
        olesseeFHDOContainer.appendChild(olesseeFHDO);


        var olesseeFHWOContainer = document.createElement("div");
        olesseeFHWOContainer.classList = "hidden-span input-group";
        olesseeFHWOContainer.style.display = "none";
        olesseeFHWOContainer.id = "olswo" + i;
        organisationalContent.appendChild(olesseeFHWOContainer);

        var olesseeFHWOSpan = document.createElement("span");
        olesseeFHWOSpan.classList = "input-group-addon";
        var node = document.createTextNode("w/o ");
        olesseeFHWOSpan.appendChild(node);
        olesseeFHWOContainer.appendChild(olesseeFHWOSpan);

        var olesseeFHWO = document.createElement("input");
        olesseeFHWO.type = "text";
        olesseeFHWO.name = "olswo" + i;
        olesseeFHWO.classList = "form-control";
        olesseeFHWOContainer.appendChild(olesseeFHWO);

    }
}

function showLesseeType(e) {
    var val = e.target;
    elementId = val.id;
    elementIndex = val.getAttribute('data-index');

    $.showHideLesseeType(elementId,elementIndex);
}

$(document).ready(function() {
    $.showHideLesseeType = function(id,index) {

        var finalID = "#"+id;

        $(finalID).find("option:selected").each(function(){
            var value = $(this).attr("value");
            var div1Id = "#lesseeIndividual"+index;
            var div2Id = "#lesseeOrganisation"+index;


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

function ishowLesseeFH(e) {
    var val = e.target;
    elementId = val.id;
    elementIndex = val.getAttribute('data-index');

    $.ishowHidelesseeFHFeilds(elementId,elementIndex);
}

$(document).ready(function() {
    $.ishowHidelesseeFHFeilds = function(id,index) {

        var finalID = "#"+id;

        $(finalID).find("option:selected").each(function(){
            var value = $(this).attr("value");
            var feild1Id = "#ilsso"+index;
            var feild2Id = "#ilsdo"+index;
            var feild3Id = "#ilswo"+index;


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


function oshowLesseeFH(e) {
    var val = e.target;
    elementId = val.id;
    elementIndex = val.getAttribute('data-index');

    $.oshowHidelesseeFHFeilds(elementId,elementIndex);
}

$(document).ready(function() {
    $.oshowHidelesseeFHFeilds = function(id,index) {

        var finalID = "#"+id;

        $(finalID).find("option:selected").each(function(){
            var value = $(this).attr("value");
            var feild1Id = "#olsso"+index;
            var feild2Id = "#olsdo"+index;
            var feild3Id = "#olswo"+index;


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


function addLesseesFieldsMoreThan5(){
    // Number of inputs to create
    var number = document.getElementById("noOfLessees").value;
    // Container <div> where dynamic content will be placed
    var container = document.getElementById("lesseesContainer");
    // Clear previous contents of the container
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild);
    }
    for (i=0;i<number;i++){

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Is the Lessee " + (i+1)+" an individual or an organisation (e.g. company, partnership, NGO etc)? ");
        label.appendChild(node);
        container.appendChild(label);

        var lesseeTypesValue = ["","Individual","Organisation"];
        var lesseeTypesText = ["Select Option","Individual","Organisation"];

        var lesseeTypes = document.createElement("select");
        lesseeTypes.id = "typeLessee" + i;
        lesseeTypes.name = "typeLessee" + i;
        lesseeTypes.setAttribute('data-index', i);
        lesseeTypes.addEventListener('change',showLesseeType, false);
        lesseeTypes.classList = "custom-select form-control";
        container.appendChild(lesseeTypes);

        for (var lt = 0; lt < lesseeTypesValue.length; lt++) {
            var option = document.createElement("option");
            option.value = lesseeTypesValue[lt];
            option.text = lesseeTypesText[lt];
            lesseeTypes.appendChild(option);
        }


        //////////////////////////////////////////////////////////

        var individualContent = document.createElement("div");
        individualContent.classList = "individual-lessee";
        individualContent.id = "lesseeIndividual" + i;
        container.appendChild(individualContent);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Title");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilesseeTitleValues = ["Mr","Ms","Mrs"];
        var ilesseeTitleText = ["Mr.","Ms.","Mrs."];

        var ilesseeTitle = document.createElement("select");
        ilesseeTitle.classList = "custom-select form-control";
        ilesseeTitle.name = "ilesseeTitle" + i;
        individualContent.appendChild(ilesseeTitle);

        for (var tl = 0; tl < ilesseeTitleValues.length; tl++) {
            var option = document.createElement("option");
            option.value = ilesseeTitleValues[tl];
            option.text = ilesseeTitleText[tl];
            ilesseeTitle.appendChild(option);
        }

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Full Name");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilesseeName = document.createElement("input");
        ilesseeName.classList = "form-control";
        ilesseeName.type = "text";
        ilesseeName.name = "ilesseeName" + i;
        individualContent.appendChild(ilesseeName);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Home Address");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilesseeAddress = document.createElement("textarea");
        ilesseeAddress.type = "text";
        ilesseeAddress.classList = "form-control";
        ilesseeAddress.name = "ilesseeAddress" + i;
        ilesseeAddress.rows = "4";
        individualContent.appendChild(ilesseeAddress);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("CNIC No. :");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilesseeCNIC = document.createElement("input");
        ilesseeCNIC.type = "text";
        ilesseeCNIC.classList = "form-control";
        ilesseeCNIC.name = "ilesseeCNIC" + i;
        individualContent.appendChild(ilesseeCNIC);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("lessor "+(i+1)+" father or Husband");
        label.appendChild(node);
        individualContent.appendChild(label);

        var ilesseeFHText = ["Select Option","If title of the Lessor is 'Mr.' then please insert title and full name of father below"
            ,"If title of the Lessor is 'Ms.' then please insert name of the father below",
            "If title of the Lessor is 'Mrs.' then please insert name of the husband below"];
        var ilesseeFHValues = ["","Mr","Ms","Mrs"];

        var ilesseeFH = document.createElement("select");
        ilesseeFH.id = "ilesseeFH" + i;
        ilesseeFH.name = "ilesseeFH" + i;
        ilesseeFH.classList = "custom-select form-control";
        ilesseeFH.setAttribute('data-index', i);
        ilesseeFH.addEventListener('change',ishowLesseeFH, false);
        individualContent.appendChild(ilesseeFH);

        for (var fh = 0; fh < ilesseeFHValues.length; fh++) {
            var option = document.createElement("option");
            option.value = ilesseeFHValues[fh];
            option.text = ilesseeFHText[fh];
            ilesseeFH.appendChild(option);
        }

        var ilesseeFHSO = document.createElement("input");
        ilesseeFHSO.type = "text";
        ilesseeFHSO.id = "ilsso" + i;
        ilesseeFHSO.name = "ilsso" + i;
        ilesseeFHSO.value = "S/o ";
        ilesseeFHSO.classList = "form-control hidden-feilds";
        individualContent.appendChild(ilesseeFHSO);

        var ilesseeFHDO = document.createElement("input");
        ilesseeFHDO.type = "text";
        ilesseeFHDO.id = "ilsdo" + i;
        ilesseeFHDO.name = "ilsdo" + i;
        ilesseeFHDO.value = "D/o ";
        ilesseeFHDO.classList = "form-control hidden-feilds";
        individualContent.appendChild(ilesseeFHDO);

        var ilesseeFHWO = document.createElement("input");
        ilesseeFHWO.type = "text";
        ilesseeFHWO.id = "ilswo" + i;
        ilesseeFHWO.name = "ilswo" + i;
        ilesseeFHWO.value = "W/o ";
        ilesseeFHWO.classList = "form-control hidden-feilds";
        individualContent.appendChild(ilesseeFHWO);




        //////////////////////////////////////////////////////////





        var organisationalContent = document.createElement("div");
        organisationalContent.classList = "organisation-lessee";
        organisationalContent.id = "lesseeOrganisation" + i;
        container.appendChild(organisationalContent);


        var olesseelegalStructure = document.createElement("input");
        olesseelegalStructure.classList = "form-control spacing";
        olesseelegalStructure.type = "text";
        olesseelegalStructure.name = "oLesseeLegalStructure" + i;
        olesseelegalStructure.placeholder = "Legal Structure and its name- e.g. for a private limited company xyz (Pvt) Ltd.; for a partnership M/s xyz";
        organisationalContent.appendChild(olesseelegalStructure);

        var olesseeauthorisedPerson = document.createElement("input");
        olesseeauthorisedPerson.classList = "form-control spacing";
        olesseeauthorisedPerson.type = "text";
        olesseeauthorisedPerson.name = "oLesseeAuthorisedPerson" + i;
        olesseeauthorisedPerson.placeholder = "Title and name of the person authorised to execute this lease agreement";
        organisationalContent.appendChild(olesseeauthorisedPerson);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Title");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olesseeTitleValues = ["Mr","Ms","Mrs"];
        var olesseeTitleText = ["Mr.","Ms.","Mrs."];

        var olesseeTitle = document.createElement("select");
        olesseeTitle.classList = "custom-select form-control";
        olesseeTitle.name = "olesseeTitle" + i;
        organisationalContent.appendChild(olesseeTitle);

        for (var tl = 0; tl < olesseeTitleValues.length; tl++) {
            var option = document.createElement("option");
            option.value = olesseeTitleValues[tl];
            option.text = olesseeTitleText[tl];
            olesseeTitle.appendChild(option);
        }

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Full Name");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olesseeName = document.createElement("input");
        olesseeName.classList = "form-control";
        olesseeName.type = "text";
        olesseeName.name = "olesseeName" + i;
        organisationalContent.appendChild(olesseeName);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Home Address");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olesseeAddress = document.createElement("textarea");
        olesseeAddress.type = "text";
        olesseeAddress.classList = "form-control";
        olesseeAddress.name = "olesseeAddress" + i;
        olesseeAddress.rows = "4";
        organisationalContent.appendChild(olesseeAddress);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("CNIC No. :");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olesseeCNIC = document.createElement("input");
        olesseeCNIC.type = "text";
        olesseeCNIC.classList = "form-control";
        olesseeCNIC.name = "olesseeCNIC" + i;
        organisationalContent.appendChild(olesseeCNIC);

        var label = document.createElement("h5");
        label.classList = "text-bold pd-form-label";
        var node = document.createTextNode("Lessee "+(i+1)+" father or Husband");
        label.appendChild(node);
        organisationalContent.appendChild(label);

        var olesseeFHText = ["Select Option","If title of the Lessee is 'Mr.' then please insert title and full name of father below"
            ,"If title of the Lessee is 'Ms.' then please insert name of the father below",
            "If title of the Lessee is 'Mrs.' then please insert name of the husband below"];
        var olesseeFHValues = ["","Mr","Ms","Mrs"];

        var olesseeFH = document.createElement("select");
        olesseeFH.id = "olesseeFH" + i;
        olesseeFH.name = "olesseeFH" + i;
        olesseeFH.classList = "custom-select form-control";
        olesseeFH.setAttribute('data-index', i);
        olesseeFH.addEventListener('change',oshowLesseeFH, false);
        organisationalContent.appendChild(olesseeFH);

        for (var fh = 0; fh < olesseeFHValues.length; fh++) {
            var option = document.createElement("option");
            option.value = olesseeFHValues[fh];
            option.text = olesseeFHText[fh];
            olesseeFH.appendChild(option);
        }

        var olesseeFHSO = document.createElement("input");
        olesseeFHSO.type = "text";
        olesseeFHSO.id = "olsso" + i;
        olesseeFHSO.name = "olsso" + i;
        olesseeFHSO.value = "S/o ";
        olesseeFHSO.classList = "form-control hidden-feilds";
        organisationalContent.appendChild(olesseeFHSO);

        var olesseeFHDO = document.createElement("input");
        olesseeFHDO.type = "text";
        olesseeFHDO.id = "olsdo" + i;
        olesseeFHDO.name = "olsdo" + i;
        olesseeFHDO.value = "D/o ";
        olesseeFHDO.classList = "form-control hidden-feilds";
        organisationalContent.appendChild(olesseeFHDO);

        var olesseeFHWO = document.createElement("input");
        olesseeFHWO.type = "text";
        olesseeFHWO.id = "olswo" + i;
        olesseeFHWO.name = "olswo" + i;
        olesseeFHWO.value = "W/o ";
        olesseeFHWO.classList = "form-control hidden-feilds";
        organisationalContent.appendChild(olesseeFHWO);

    }
}