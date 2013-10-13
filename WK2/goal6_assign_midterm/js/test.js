(function () {

    var students = [{
        name: 'Joshua Velez',
        address: {
            street: '123 Some Street ',
            city: 'NoWhere, ',
            state: 'Texas'},
        gpa: [2.5, 3.2, 2.8]
    },
    {
        name: 'John Doe',
        address: {
            street: '456 Any Street ',
            city: 'AnyWhere, ',
            state: 'Florida'},
        gpa: [2.8, 3.5, 3.3]
    }];
/*Displays first two student info in console.*****/
    for(var x=0; x<students.length; x++){
        console.log("Name: " + students[x].name);
        console.log("Address: "+students[x].address.street + students[x].address.city + students[x].address.state);
        console.log("GPA: "+students[x].gpa.join(","));
        console.log("Date: "+date());
    }
//Displays first students name and information in HTML onload.
        function disFsInfo(){
            document.getElementById('name').innerHTML = "Name: " + students[0].name;
            document.getElementById('address').innerHTML ="Address: " +students[0].address.street + students[0].address.city + students[0].address.state;
            document.getElementById('gpa').innerHTML="GPA: " + students[0].gpa.join(", ");
            document.getElementById('date').innerHTML = "Date: " + date();
            document.getElementById('gpaavg').innerHTML="Average GPA: " + " "
        }

    function date(){
        var d = new Date();
        var month=[];
        month[0]="January";
        month[1]="February";
        month[2]="March";
        month[3]="April";
        month[4]="May";
        month[5]="June";
        month[6]="July";
        month[7]="August";
        month[8]="September";
        month[9]="October";
        month[10]="November";
        month[11]="December";
        return month[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear()
    }



    window.onload = disFsInfo;

    var ids = document.querySelectorAll('id');
        for(var i = 0, max = ids.length; i<max; i++){
            console.log(ids[i]);


    ids.onclick = function(e){
        document.getElementById('name').innerHTML = "Name: " + students[1].name;
        document.getElementById('address').innerHTML ="Address: " +students[1].address.street + students[1].address.city + students[1].address.state;
        document.getElementById('gpa').innerHTML="GPA: " + students[1].gpa.join(", ");
        document.getElementById('date').innerHTML = "Date: " + date();
        document.getElementById('gpaavg').innerHTML = "Average GPA: " + " ";
        e.preventDefault();
        return false;
    };
        }
    //function newStudent('Jane Doe','789 NoWhere Drive','Lostville','California',[3.2, 4.0, 2.2]){  };



})();