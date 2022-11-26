function submitForm(){
    let data = $('form').serializeArray()
    let obj = {}
    data.forEach(element => {
        console.log(element);
        obj[element['name']] = element['value'];
    });
    console.log(obj);
    $.ajax({
        type: "POST",
        url: "http://localhost:5000/signup",
        data: {
             json: JSON.stringify(obj)
        },
        // contentType: "application/json; charset=utf-8",
        success: function (response) {
            console.log(response);
            if(response.status === 200) {
            alert("Thank you for your interest. We received your information");
            }
            else{
            alert("Some error occurred!!! Please try again later");
            }
            window.location.reload();
        }
    });
}