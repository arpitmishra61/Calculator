
 resultd="0";
 PN='0';
 S=0;
 
let resultMD=1;
let resultAS=0;
 RPN='0';
let operator='0';
check1=0;
check2=0;
FAS=0
FMD=1
PR=0
PP=1
count=0;
operatorChange=0
start=0
buttons=document.getElementsByTagName('BUTTON')
no=0

	
//assigning EventListners:-
for(var i=0;i<buttons.length;i++)
 { var getElement=buttons[i]
	if(getElement.innerHTML =='=')
    getElement.addEventListener('click',result)
else
  if(getElement.innerHTML=='C')
   getElement.addEventListener('click',erase)
else
   getElement.addEventListener('click',display)
 }

function add(num1) 

{
		S=S+(num1)
		resultAS++
		resultMD=-1
}
	
function sub(num) 
{

if(resultAS==0)
{S=Number(num)
	resultAS=S
resultMD=-1}

else
	S=S-Number(num)}


function mult(num)
 {if(resultMD==1 && operator=='X')
 	{S=Number(num)
 	resultMD=0}
 	else
 		S=S*Number(num)
   
}

	

function div(num) 
{
if(resultMD==1 && operator=='/')
{S=Number(num)
	resultMD=0}

else
S=S/Number(num)}

function displaySubSCreen()
{
	if(PP==0)
		{PN=String(PN);
			PP=Number(PN.charAt(0))*Math.pow(10,count+1)
			count=count+1
			PN=Number(PN);}


	FMD=Number(PN)/Number(PP);
	FAS=Number(PN)-Number(PR);
	
	if(FAS<0)
   FAS=-1*FAS

calc(operator)
		


document.getElementById('sd').value=S;
PN=String(PN)
PR=PR+PN.charAt(PN.length-1)

PP=PN.charAt(PN.length-1)
}

 function calc(operator)
	{
		if( (start==1 && typeof(operator)=='string') || typeof(no)=='number') 
      { 
		  if(operator=='+')
		  add(FAS);
	else

      if(operator=='-')
          
		   sub(FAS)
		   else                          

      if(operator=='/')
          div(FMD)
	 else
	 
      if(operator=='X')
         mult(FMD)
          	
      }  start=2 }
     
function display( e )
{ no=e.target.innerHTML;
	
	if(no=='+' || no=='-'|| no=='X'|| no=='/')
	 no=String(no)
	
	 else
	 no=Number(no)
		

	
	 if(start==0)
	  start=1
	 

	if(resultd=="0")
	{document.getElementById('md').value=no;
      resultd=String(no);
      PN=String(no);
      
     }

	else

		if('string'==typeof(no))
		 {resultd=resultd+no
			
		 	operatorChange=1;
		 	operator=no
			 check2=1;
			 
		}
		
		else

		{if(check2==1)
			  check1=1;
            PN=String(PN)
			PN=PN+no
			PN=Number(PN)
			resultd=resultd+no
			}
			if(check2==1&&check1==1)
			{PN=0;
			PN=no
			PR=0
				PP=1
			count=0;

			check2=0;
		check1=0;}
				

		document.getElementById('md').value=resultd;
		
	if(operatorChange==1)
		
	 displaySubSCreen(operator)
	
}
    function result()

  {
	 
	  document.getElementById('md').value=S
       document.getElementById('sd').value=' ';


 resultAS=0;
 resultMD=1;
 resultd='0';
 PN='0';
 operator='0'
 check2=0
 check1=0
 PR=0
 PP=1
 operatorChange=0
      
}
function erase()   {
      document.getElementById('md').value='0';
      document.getElementById('sd').value='';
      resultAS=0;
 resultMD=1;
 resultd='0';
 PN='0';
 operator='0'
 S=0
 check2=0
 check1=0
 PR=0
 PP=1
 operatorChange=0
}
