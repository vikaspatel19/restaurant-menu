function getCheckBoxes(checkBoxName){
    let checkbox = document.getElementsByName(checkBoxName);
    let checkboxesChecked=[];
    let total = document.getElementById('total');
    let totalAmount = 0;
    let sgst = document.getElementById('tax_sgst');
    let cgst = document.getElementById('tax_cgst');
    for(i = 0; i<checkbox.length; i++){
        if(checkbox[i].checked){
            checkboxesChecked.push(checkbox[i].value);                    
        }
    }

    for(i=0; i<checkboxesChecked.length; i++){
        totalAmount +=  Number(checkboxesChecked[i]);
    }
    console.log(checkboxesChecked);
    total.innerHTML = totalAmount;
    sgst.innerHTML = (totalAmount*9)/100;
    cgst.innerHTML = (totalAmount*9)/100;
    
    document.getElementById('grand_total').innerHTML = totalAmount + ((totalAmount*9)/100) + (totalAmount*9)/100
}