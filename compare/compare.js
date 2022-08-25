function clearContent(){
    // clears the title and content of all boxes
    countryATitle.textContent = " ";    
    countryBTitle.textContent = " ";
    countryCTitle.textContent = " ";
    countryDTitle.textContent = " ";
    countryAContent.textContent = " ";
    countryBContent.textContent = " ";
    countryCContent.textContent = " ";
    countryDContent.textContent = " ";

    //resets dropdown menus
    document.getElementById('compareSubjectTitle').innerHTML = " ";
    document.getElementById("countryA").selectedIndex = 0;
    document.getElementById("countryB").selectedIndex = 0;
    document.getElementById("countryC").selectedIndex = 0;
    document.getElementById("countryD").selectedIndex = 0;
    document.getElementById("subject").selectedIndex = 0; 
    errorAlert('Enter a subject and at least one country.');

}

function collectFilters(form) {
    //collect subject from dropdown
    let selectSubject = document.getElementById('subject');
    let valueSubject = formatFilter(selectSubject);

    //error checkig to ensure at least one country and a subject is selected
    if(valueSubject === 'subject'){

        errorAlert('Please enter a subject.');
    }
    else{
        let selectA = document.getElementById('countryA');
        let valueA = formatFilter(selectA);
        let selectB = document.getElementById('countryB');
        let valueB = formatFilter(selectB);
        let selectC = document.getElementById('countryC');
        let valueC = formatFilter(selectC);
        let selectD = document.getElementById('countryD');
        let valueD = formatFilter(selectD);

        if ((valueA && valueB && valueC && valueD) === 'country'){
            errorAlert('Please enter at least one country.');
        }

        let subjectTitle = valueSubject.toUpperCase().replaceAll('_', ' ')
        document.getElementById('compareSubjectTitle').innerHTML = subjectTitle;
        
        displayInfo(valueA, 'countryA', valueSubject); 
        displayInfo(valueB, 'countryB', valueSubject); 
        displayInfo(valueC, 'countryC', valueSubject);     
        displayInfo(valueD, 'countryD', valueSubject); 
        
    }    
}



function displayInfo(country, countryId, subject){
    console.log(country);
    console.log(subject);
    console.log(countries[country][subject]);
   
    //information for each country is found and displayed from data.js 
    countryTitle = countryId+'Title';
    countryContent = countryId+'Content';
    
    console.log(countryTitle);
    console.log(countryContent);

    if (country === 'country'){
        document.getElementById(countryContent).innerHTML = ' ';
        document.getElementById(countryTitle).innerHTML = ' ';
    }
    else{
        document.getElementById(countryContent).innerHTML = countries[country][subject];
        document.getElementById(countryTitle).innerHTML = country.toUpperCase().replaceAll('_', ' ');
    }

    
}

function formatFilter(filter){
    let filterValue = filter.options[filter.selectedIndex].value;
    filterValue = filterValue.toLowerCase().replaceAll(' ', '_');
    return filterValue;
}

function errorAlert(message) {

    document.getElementById('compare_alert').innerHTML = message;

}

