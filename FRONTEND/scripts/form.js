$(document).ready(()=>{
    $('#zipCodeInput').keyup(function(){
        $(this).val(returnWithLength($(this).val(), 5))
    })
    $('#emailInput').change(function(){
        let alert = $("#emailAlert");
        if(checkMail($(this).val())){      
           if(!alert.hasClass('d-none')){
               alert.addClass('d-none')
           } 
        }else{
            if(alert.hasClass('d-none')){
                alert.removeClass('d-none')
            } 
        }
    })
    $('#passwordConfirmationInput').change(function(){
        let alert = $("#passwordAlert");
        if(checkPasswordConfirmation($(this).val(), $('#passwordInput').val())){
            if(!alert.hasClass('d-none')){
                alert.addClass('d-none')
            } 
        }else{
            if(alert.hasClass('d-none')){
                alert.removeClass('d-none')
            } 
        }
    })
    $('#formClient').submit(function(event){
        event.preventDefault();
        validateForm();
    })
})

const returnWithLength = (val, length) => {
    if(val.length > length){
        return val.substr(0,val.length-1)
    }
    return val;
}

const checkMail = (val) => {
    if(val.includes('@')){
        return true
    }
    return false
}

const checkPasswordConfirmation = (password, confirmation )=>{
    if(password == confirmation && password != "" && confirmation != ""){
        return true
    }
    return false
}

const validateForm = () => {
    res = true;
    if(!checkPasswordConfirmation($('#passwordInput').val(), $('#passwordConfirmationInput').val())){
        $("#passwordAlert").removeClass('d-none')
        res =false;
    }
    if(!checkMail($('#emailInput').val())){
        res = false;
        $("#emailAlert").removeClass('d-none')
    }
}