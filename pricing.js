// function submitForm(){
$('#sign-up__form').on('submit', function(e){
    e.preventDefault(); 
    let data = $('form').serializeArray()
    let obj = {}
    data.forEach(element => {
        obj[element['name']] = element['value'];
    });
    $.ajax({
        type: "POST",
        // url: "http://127.0.0.1:5000/signup",
        url: "https://innvodesk.com/vsmhomeapi/signup",
        data: {
             json: JSON.stringify(obj)
        },
        // contentType: "application/json; charset=utf-8",
        success: function (response) {
            
            if(response.status === 200) {
            alert("Thank you for your interest. We received your information");
            }
            else{
            alert("Something went wrong!!! Please try again later");
            }
            window.location.reload();
        },
        error: function (response) {
            alert("Something went wrong!!! Please try again later");
        }
    });
});