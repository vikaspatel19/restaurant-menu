let checkbox ;
let checkboxesChecked=[];
let total;
let totalAmount = 0;
let sgst;
let cgst;
function getCheckBoxes(checkBoxName){
    checkbox = document.getElementsByName(checkBoxName);
    total = document.getElementById('total');
    
    sgst = document.getElementById('tax_sgst');
    cgst = document.getElementById('tax_cgst');
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

function unSelectAll(checkBoxName){
    checkbox = document.getElementsByName(checkBoxName);
    checkbox.forEach(function(checkbox_item){
        checkbox_item.checked = false;
        checkboxesChecked=[];
        total.value = 0;
        sgst.value = 0;
        cgst.value = 0;

        total.innerHTML = total.value;
        sgst.innerHTML = sgst.value;
        cgst.innerHTML = cgst.value;


        document.getElementById('grand_total').innerHTML = 0

    } );
    // checkbox.checked = false;
    // alert ('Hello');
}