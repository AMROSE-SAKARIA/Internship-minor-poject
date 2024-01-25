var screen = document.getElementById('screen')

function btclick(value)
{
     screen.value+=value;
   
}


function allclear()
{
    screen.value ="";
}
function equals()
{
    var result=eval(screen.value)
    screen.value=result;
}
function sqr()
{
    
    square =Math.pow(screen.value,2)
    screen.value=square;
}