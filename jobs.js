function submitApplication(e) {
    e.preventDefault(); // You can ignore this; prevents the default form submission!
    /* Got the following snippet from HW Instructions */
    const jobs = document.getElementsByName('job');
    
    let job = null;
    let selected = false;
    for (let i = 0; i < jobs.length; i++) {
        /* Used checked and value elements as directed on HW Instructions */
        /* Also used these resources: https://www.geeksforgeeks.org/html-dom-input-checkbox-checked-property/ and https://www.geeksforgeeks.org/how-to-get-value-of-selected-radio-button-using-javascript/ */
        if (jobs[i].checked == true) {
            job = jobs[i].value;
            selected = true;
            break;
        }
    }
    if (selected == true) {
        alert("Thank you for applying to be a " + job + "!");
    }
    else {
        alert("Please select a job!");
    }
    // TODO: Alert the user of the job that they applied for!
}