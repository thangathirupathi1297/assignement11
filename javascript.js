/*-----------------inheritance-------------------------------*/

class patient
{
    constructor(name,age,gender)
    {
        this.name=name;
        this.age=age;
        this.gender= gender;
    }
    details()
    {
        document.write("<h1>Inheritance </h1> </br>")
document.write("Patient Details</br>")
document.write( "patient name:"+patientdetails.name);
document.write("</br>Age:" + patientdetails.age);
document.write("</br>Gender:" + patientdetails.gender  + "</br><hr/>" );

    }

}
var patientdetails= new patient("thangathirupathi",23,"male")
patientdetails.details()


class inpatient extends patient
{
    constructor(name,age,gender,ipNumber,numberofdays)
    {
        super(name,age,gender);
        this.ipNumber=ipNumber;
       this.numberofdays=numberofdays;
    }
    inpatient()
    {
        document.write("</br> In Patients <hr/>")

document.write( "patient name:"+ patientin.name)
document.write("</br>Age:" +  patientin.age);
document.write("</br>Gender" +  patientin.gender);
document.write("</br>Ipnumber"+  patientin.ipNumber)
document.write("</br>Number Of days"+  patientin.numberofdays  + "</br><hr/>");
    }

}
var patientin= new inpatient("thirupathi",23,"male",1554,8)

patientin.inpatient();



class outpatient  extends patient

{
    constructor(name,age,gender,opNumber,doctorid,fees){
    super(name,age,gender);
    this.opNumber=opNumber;
    this.doctorid=doctorid;
    this.fees=fees;
}
 outpatient()
 {
    document.write("</br> Outpatients <hr/>")

    document.write("patient name:"+patientout.name);
    document.write("</br>Age:" + patientout.age);
    document.write("</br>Gender:" + patientout.gender);
    document.write("</br>Opnumber:"+ patientout.opNumber);
    document.write("</br>DoctorId:"+ patientout.doctorid);
    document.write("</br>Fees:" + patientout.fees+"</br><hr/>");
 }
 
}
var patientout= new outpatient("thirupathi",23,"male",1888,541,"6666/-")

patientout.outpatient()



class patientingenaral extends inpatient
{
    constructor(name,age,gender,ipNumber,numberofdays,rent,fees)
    {
        super(name,age,gender,ipNumber,numberofdays);
        this.rent=rent;
        this.fees=fees;

    }
    general()
    {
document.write("In Patients Genaral Ward <hr/>")

document.write(  "patient name:"+ patientingenara.name);
document.write("</br>Age:" +  patientingenara.age);
document.write("</br>Gender:" +  patientingenara.gender);
document.write("</br>Ip number:" +  patientingenara.ipNumber);
document.write("</br>Number Of days:"+  patientingenara.numberofdays);
document.write("</br>Rent per days:" + patientingenara.rent)
document.write("</br>Fees"  +patientingenara.fees +"</br> <hr/>");

    }
}
 var patientingenara=new patientingenaral("rakesh",23,"male",5002,6,"500/-",2500) 
patientingenara.general(); 

class patientinspl extends patientingenaral
{
    constructor(name,age,gender,ipNumber,numberofdays,roomnumber,Eb,rent,fees)
    {
        super(name,age,gender,ipNumber,numberofdays,rent,fees);
        this.roomnumber=roomnumber;
        this.Eb=Eb;
         }
         spcial()
         {
            document.write("</br> In Patients special Ward </br> <hr/>")
            document.write( "patient name:"+ patientinsp.name) 
            document.write("</br>age:" +  patientinsp.age);
            document.write("</br>Gender:" +  patientinsp.gender);
            document.write("</br>Ip number:" +  patientinsp.ipNumber);
            document.write("</br>Number of days:"+  patientinsp.numberofdays);
            document.write("</br>Rent per day" + patientinsp.rent)
            document.write("</br>Room number:" + patientinsp.roomnumber );
            document.write("</br>EB-Bill:"+patientinsp.Eb);
            document.write("</br>Fees:"  +patientinsp.fees);

         }
}
var patientinsp=new patientinspl("rakesh",23,"male",5006,5,7,250,"3500/-",5000) 

patientinsp.spcial()





/*--------------end of inheritance------------------------------------------------------------------*/


class student
{
    constructor(sub1,sub2,sub3,sub4,sub5,cp1,cp2,cp3,cp4,cp5)  //cp-creditpoints
    {
        this.sub1=sub1;
        this.sub2=sub2;
        this.sub3=sub3;
        this.sub4=sub4;
        this.sub5=sub5;
        this.cp1=cp1;
        this.cp2=cp2;
        this.cp3=cp3;
        this.cp4=cp4;
        this.cp5=cp5;
    }
    calcgpa()
    {
        this.totalofsubject=   cgpa.sub1+cgpa.sub2+cgpa.sub4+cgpa.sub3+cgpa.sub5;
        this.totalofcredits=  cgpa.cp1 +  cgpa.cp2  +  cgpa.cp3 +  cgpa.cp4 +   cgpa.cp5;
        this.cgpa= (this.totalofsubject* this.totalofcredits)/(this.totalofcredits)/10;

         document.write("</br> </br><h1> CGPA CalCulation</h1>")

        document.write("</br>CGPA is :"+this.cgpa)
    }
}
var cgpa=new student(8,9,7,8,7,3,4,3,2,1)
cgpa.calcgpa()
var cgpa=new student(7,7,7,7,7,3,4,3,2,1)
cgpa.calcgpa()








