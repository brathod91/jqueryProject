function loadData() {
    $.ajax({
        type: 'GET',
        contentType: JSON,
        url:'data.json',
        success: function (data) {
            if(data){
                var len=data.length;
                var txt="";
                if(len>0){
                    for(var i=len-1;i>=0;i--){
                        txt+="<tr><td>" + data[i].name + "</td><td>" + data[i].date + "</td><td>" + data[i].assigned +"</td></tr>"
                    }
                }
                if(txt != ""){
                    $("#taskTable").append(txt);
                }
            }
        },
        error: function (error) {
            console.log(error);
        }
    });
}

$(document).ready(function () {
       loadData();

       $("#btnAddTask").click(function () {
           var task =$("#tname").val();
           var tdate = $("#tdate").val();
           var assign = $("#tassign").val();

           var row=$("<tr><td>Test Task #"+ task + "</td><td>"+ tdate +"</td><td>"+ assign +"</td></tr>");

           $("#taskTable tr:first").after(row);
           // row.prependTo("#taskTable");
           $("#taskTable tr:last").remove();
           $("#tname").val("");
           $("#tdate").val("");
           $("#tassign").val("");

           // $.getJSON("data.json", function (data) {
           //     var newObject={name: "Test Task # " + task, date: tdate, assigned: assign};
           //     data.push(newObject);
           // });
       });
});