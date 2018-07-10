import joao from './bootstrap.min.css';
import styles from './stylesheet.sass';


$(".others-form").hide();

$(".button-box").hide();

$(".register-radio").click(function(){
  var x = $(this).attr('value');
  $(".button-box").show();

  if(x == 'fisic'){
    $(".pf-form").show();
    $(".pj-form").hide();

  }else if (x == 'juridic') {
    $(".pj-form").show();
    $(".pf-form").hide();
  }
});


$(".register-input").blur(function(){
  var input = $(this)
  var value = $(input).attr('name')


  if($(input).val() === ''){
    if(!$(input).next().hasClass('error')){
      $(input).after("<span class='error'> "+ value +" obrigatório</span>")
    }
  }else{
    if($(input).next().hasClass('error')){
      $(input).next().text('')
    }
  }

  if($(input).hasClass('confirm-pass')){
    var pass = $("#pass").val();
    var passConfirm = $(input).val();

    if (pass !== passConfirm){
      if(!$(input).next().hasClass('error_pass')){
        $(input).after("<span class='error_pass'>confirmação de senha incorreta</span>")
      }
    }else {
      if ($(input).next().hasClass('error_pass')){
        $(input).next().text('')
      }
    }
  }
});

$("#register-form").submit(function(e){
  e.preventDefault();
});
