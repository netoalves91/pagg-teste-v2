import joao from './bootstrap.min.css';
import styles from './stylesheet.sass';

console.log('webpack funcionando')

$(".others-form").hide();


$(".register-radio").click(function(){
  var x = $(this).attr('value');

  if(x == 'fisic'){
    $(".pf-form").show();
    $(".pj-form").hide();

  }else if (x == 'juridic') {
    $(".pj-form").show();
    $(".pf-form").hide();
  }
});


$(".register-input").blur(function(){
  var value = $(this).attr('name')

  if($(this).val() === ''){
    if(!$(this).next().hasClass('error')){
      $(this).after("<span class='error'> "+ value +" obrigatório</span>")
    }
  }else{
    if($(this).next().hasClass('error')){
      $(this).next().text('')
    }
  }

  if($(this).hasClass('confirm-pass')){
    var pass = $("#pass").val();
    var passConfirm = $(this).val();

    if (pass !== passConfirm){
      if(!$(this).next().hasClass('error_pass')){
        $(this).after("<span class='error_pass'>confirmação de senha diferente</span>")
      }
    }else {
      $(this).next().text('')
    }
  }


});




// $("#xxx").inputmask("(99)[9]9999-9999", { placeholder: '' });
