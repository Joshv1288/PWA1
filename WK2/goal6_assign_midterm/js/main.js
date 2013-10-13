/*
 -	* Mid Terms for PWA-1
 Joshua Velez
*/
(function(){


var fsInfo1 = {
    name: 'Joshua Velez',
    address: {
        street: '94-1411 Kulewa Loop ',
        city: 'Waipahu, ',
        state: 'HI'
    },
    gpa: [3.3 , 4.0 , 2.8]

};
var fsInfo2= {
    name: 'John Doe',
    address:{
        street: '123 Some Street ',
        city: 'Wahiawa, ',
        state: 'HI'
    },
    gpa: [3.4, 3.6, 3.1]
};


var info = {};
info[0] = fsInfo1;
info[1] = fsInfo2;

var count = Object.keys(info).length;
for(var i=0; i<count;i++){
    console.log("Name: " + info[i].name);
    console.log("Address: " + info[i].address.street + info[i].address.city + info[i].address.state);
    console.log("GPA: " + info[i].gpa[0],info[i].gpa[1],info[i].gpa[2]);
    console.log("Date: " + date());
}
    window.onload = function startup() {
        document.getElementById("name").innerHTML = "Name: " + info[0].name;
        document.getElementById("address").innerHTML = "Address: " + info[0].address.street + info[0].address.city + info[0].address.state;
        document.getElementById("gpa").innerHTML = "GPA: " + info[0].gpa;
        document.getElementById("date").innerHTML = "Date: " + date();
        document.getElementById("gpaavg").innerHTML = "Average GPA: " + " " ;
        return false;

    };

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




    function addInfo(){
        var addData = [{'Jane Smith', '42 Wallaby Way', 'Aiea', 'Hawaii', [3.2, 4.0, 2.2]}];
        document.getElementById("name").innerHTML = "Name: " + info[1].name;
        document.getElementById("address").innerHTML = "Address: " + info[1].address.street + info[1].address.city + info[1].address.state;
        document.getElementById("gpa").innerHTML = "GPA: " + info[1].gpa;
        document.getElementById("date").innerHTML = "Date: " + date();
        document.getElementById("gpaavg").innerHTML = "Average GPA: " + " "
    }
    addInfo()
})();
