//main JS
$('document').ready(function(){
    $('.calculator').hide()
    $('.password-generator').hide()
    $('.tictactoe').hide()
    $('.rockpaperscissors').hide()
    
    $('#calculator').click(function(){
        $('.main').slideUp(1000)
        $('.calculator').slideDown(1000)
    })

    $('#pass-gen').click(function(){
        $('.main').slideUp(1000)
        $('.password-generator').slideDown(1000)
    })
    $('#tic-tac-toe').click(function(){
        $('.main').slideUp(1000)
        $('.tictactoe').slideDown(1000)
    })
    $('#Rock-Paper-Scissors').click(function(){
        $('.main').slideUp(1000)
        $('.rockpaperscissors').slideDown(1000)
    })
    $('.back').click(function(){
        $('.main').show(1000)
        $('.calculator').hide()
        $('.password-generator').hide()
        $('.tictactoe').hide()
        $('.rockpaperscissors').hide()
    })
// calcultaor JS
function Sin(){
    document.getElementById('screen').value=Math.sin($('.screen').val()*Math.PI/180)
}

function Cos(){
    document.getElementById('screen').value=Math.cos($('.screen').val()*Math.PI/180)
}

function Tan(){
    document.getElementById('screen').value=Math.tan($('.screen').val()*Math.PI/180)
}

function Log(){
    document.getElementById('screen').value=Math.log($('.screen').val())
}

function Power(){
    var integer=prompt('Value Of Integer :')
    var power=prompt('Raise To Power :')
    document.getElementById('screen').value=Math.pow(integer,power)

}

function fact_out(){
    let n=document.getElementById('screen').value
    document.getElementById('screen').value=Factorial(n)
}
function pi(){
    var pi = document.getElementById('screen').value+=Math.PI
}
function sqroot(){
    var sqr = document.getElementById('screen').value=Math.sqrt($('.screen').val())

}

function eular(){
    if($('.screen').val()==''){
    document.getElementById('screen').value=Math.E
    }
    else{
    document.getElementById('screen').value=$('.screen').val()*Math.E}
}

// Password Generator 

const PwEl = document.getElementById("pw");  
 const copyEl = document.getElementById("copy");  
 const lenEl = document.getElementById("length");  
 const upperEl = document.getElementById("upper");  
 const lowerEl = document.getElementById("lower");  
 const symbolEl = document.getElementById("symbol");  
 const generateEl = document.getElementById("generate");  
 const numberEl = document.getElementById("number");  
 const upperLetters = "ABCDEFGHIJKLMNOPQSRTUVWXYZ";  
 const lowerLetters = "abcdefghijklmnopqrstuvwxyz";  
 const numbers = "0123456789";  
 const symbol = "~!@#$%^&*()_+=|";  
 function getLowercase() {  
  return lowerLetters[Math.floor(Math.random() * lowerLetters.length)];  
 }  
 function getUppercase() {  
  return upperLetters[Math.floor(Math.random() * upperLetters.length)];  
 }  
 function getNumber() {  
  return numbers[Math.floor(Math.random() * numbers.length)];  
 }  
 function getSymbol() {  
  return symbol[Math.floor(Math.random() * symbol.length)];  
 }  
 function generatePassword() {  
  const len = lenEl.value;  
  let password = "";  
  for (let i = 0; i < len; i++) {  
   const x = generateX();  
   password += x;  
  }  
  PwEl.innerText = password;  
 }  
 function generateX() {  
  const xs = [];  
  if (upperEl.checked) {  
   xs.push(getUppercase());  
  }  
  if (lowerEl.checked) {  
   xs.push(getLowercase());  
  }  
  if (numberEl.checked) {  
   xs.push(getNumber());  
  }  
  if (symbolEl.checked) {  
   xs.push(getSymbol());  
  }  
  if (xs.length === 0) return "";  
  return xs[Math.floor(Math.random() * xs.length)];  
 }  
 generateEl.addEventListener("click", generatePassword);  
 copyEl.addEventListener("click", () => {  
  const textarea = document.createElement("textarea");  
  const password = PwEl.innerText;  
  if (!password) {  
   return;  
  }  
  textarea.value = password;  
  document.body.appendChild(textarea);  
  textarea.select();  
  document.execCommand("copy");  
  textarea.remove();  
  alert("password copied to clipboard");  
 });  

// tic-tac-toe js


player_choice=['X','O']

var a=1;
var cur='./x.svg'


$('.main-board').css('cursor',`url('${cur}'),auto`)

// console.log(a)

function swapchoice(){
    
    if(a==1){console.log('First player'); a=0; cur='./images/o.svg';}
    else{console.log('second player');a=1; cur='./images/x.svg';} 
    changecursor()
}

function changecursor(){
    $('.main-board').css('cursor',`url('${cur}'),auto`);
}

function results(){

    // for X 

    if     (($('.box1').html() == 'X') && ($('.box2').html() == 'X') && ($('.box3').html() == 'X') ) {   alert('Player X won'); reset() }
    else if(($('.box4').html() == 'X') && ($('.box5').html() == 'X') && ($('.box6').html() == 'X') ) {   alert('Player X won'); reset() }
    else if(($('.box7').html() == 'X') && ($('.box8').html() == 'X') && ($('.box9').html() == 'X') ) {   alert('Player X won'); reset() }
    else if(($('.box1').html() == 'X') && ($('.box4').html() == 'X') && ($('.box7').html() == 'X') ) {   alert('Player X won'); reset() }
    else if(($('.box2').html() == 'X') && ($('.box5').html() == 'X') && ($('.box8').html() == 'X') ) {   alert('Player X won'); reset() }
    else if(($('.box3').html() == 'X') && ($('.box6').html() == 'X') && ($('.box9').html() == 'X') ) {   alert('Player X won'); reset() }
    else if(($('.box1').html() == 'X') && ($('.box5').html() == 'X') && ($('.box9').html() == 'X') ) {   alert('Player X won'); reset() }
    else if(($('.box3').html() == 'X') && ($('.box5').html() == 'X') && ($('.box7').html() == 'X') ) {   alert('Player X won'); reset() }

    // for O

    if     (($('.box1').html() == 'O') && ($('.box2').html() == 'O') && ($('.box3').html() == 'O') ) {   alert('Player O won'); reset() }
    else if(($('.box4').html() == 'O') && ($('.box5').html() == 'O') && ($('.box6').html() == 'O') ) {   alert('Player O won'); reset() }
    else if(($('.box7').html() == 'O') && ($('.box8').html() == 'O') && ($('.box9').html() == 'O') ) {   alert('Player O won'); reset() }
    else if(($('.box1').html() == 'O') && ($('.box4').html() == 'O') && ($('.box7').html() == 'O') ) {   alert('Player O won'); reset() }
    else if(($('.box2').html() == 'O') && ($('.box5').html() == 'O') && ($('.box8').html() == 'O') ) {   alert('Player O won'); reset() }
    else if(($('.box3').html() == 'O') && ($('.box6').html() == 'O') && ($('.box9').html() == 'O') ) {   alert('Player O won'); reset() }
    else if(($('.box1').html() == 'O') && ($('.box5').html() == 'O') && ($('.box9').html() == 'O') ) {   alert('Player O won'); reset() }
    else if(($('.box3').html() == 'O') && ($('.box5').html() == 'O') && ($('.box7').html() == 'O') ) {   alert('Player O won'); reset() }

    // for Tie
    else if (
        ($('.box1').html() == 'X' || $('.box1').html() == 'O') &&
        ($('.box2').html() == 'X' || $('.box2').html() == 'O') &&
        ($('.box3').html() == 'X' || $('.box3').html() == 'O') &&
        ($('.box4').html() == 'X' || $('.box4').html() == 'O') && 
        ($('.box5').html() == 'X' || $('.box5').html() == 'O') && 
        ($('.box6').html() == 'X' || $('.box6').html() == 'O') &&
        ($('.box7').html() == 'X' || $('.box7').html() == 'O') && 
        ($('.box8').html() == 'X' || $('.box8').html() == 'O') && 
        ($('.box9').html() == 'X' || $('.box9').html() == 'O')  )    
    {
        window.alert('Match Tie'); reset()
    }
}

function reset(){ 
 location.reload()  
}

    $('.box1').click(function(){
            swapchoice()
            $('.box1').html(player_choice[a])
            results()
            $(this).unbind()
    })
    
    $('.box2').click(function(){
        swapchoice()
        $('.box2').html(player_choice[a])
        results()
        $(this).unbind()
    })

    $('.box3').click(function(){
    swapchoice()
    $('.box3').html(player_choice[a])
    results()
    $(this).unbind()
    })

    $('.box4').click(function(){
    swapchoice()
    $('.box4').html(player_choice[a])
    results()
    $(this).unbind()
    })

    $('.box5').click(function(){
    swapchoice()
    $('.box5').html(player_choice[a])
    results()
    $(this).unbind()
    })

    $('.box6').click(function(){
    swapchoice()
    $('.box6').html(player_choice[a])
    results()
    $(this).unbind()
    })

    $('.box7').click(function(){
    swapchoice()
    $('.box7').html(player_choice[a])
    results()
    $(this).unbind()
    })

    $('.box8').click(function(){
    swapchoice()
    $('.box8').html(player_choice[a])
    results()
    $(this).unbind()
    })

    $('.box9').click(function(){
    swapchoice()
    $('.box9').html(player_choice[a])
    results()
    $(this).unbind()
    })


});


// Rock-Paper-Scissors Js

Cpu_choices={0:"Rock",1:"Paper",2:"Scissors"}

    console.log(Cpu_choices);
    $('.rock').click(function(){
        playRock()
    })
    $('.paper').click(function(){
        playPaper() 
    })
    $('.scissors').click(function(){
        playScissors() 
    })
    function playRock(){
        player_choice="Rock"
        value=Cpu_choices[Math.floor(Math.random()+0.5+Math.random())]
        $('#img1').attr('src','./images/rock.png')

        if(value=='Rock'){
            document.getElementById('display').innerHTML='Match Draw'
            $('#img2').attr('src','./images/rock.png')
        }
        else if(value=='Paper'){
            document.getElementById('display').innerHTML='Computer Wins'
            $('#img2').attr('src','./images/paper.png')
        }
        else{
            document.getElementById('display').innerHTML='You Won'
            $('#img2').attr('src','./images/scissors.png')
        }
        
    }

    function playPaper(){
        player_choice="Paper"
        value=Cpu_choices[Math.floor(Math.random()+0.5+Math.random())]
        $('#img1').attr('src','./images/paper.png')

        if(value=='Paper'){
            document.getElementById('display').innerHTML='Match Draw'
            $('#img2').attr('src','./images/paper.png')
        }
        else if(value=='Scissors'){
            document.getElementById('display').innerHTML='Computer Wins'
            $('#img2').attr('src','./images/scissors.png')
        }
        else{
            document.getElementById('display').innerHTML='You Won'
            $('#img2').attr('src','./images/rock.png')
        }
        
    }

    function playScissors(){
        player_choice="Scissors"
        value=Cpu_choices[Math.floor(Math.random()+0.5+Math.random())]
        $('#img1').attr('src','./images/scissors.png')

        if(value=='Scissors'){
            document.getElementById('display').innerHTML='Match Draw'
            $('#img2').attr('src','./images/scissors.png')
        }
        else if(value=='Rock'){
            document.getElementById('display').innerHTML='Computer Wins'
            $('#img2').attr('src','./images/rock.png')
        }
        else{
            document.getElementById('display').innerHTML='You Won'
            $('#img2').attr('src','./images/paper.png')
        }
        
    }