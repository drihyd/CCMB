// EMI = [P x R x (1+R)^N]/[(1+R)^N-1]

$('.submit-cal').on('click', function(e) {
    e.preventDefault();
var amount = $('#loanamount').val(),
    interest = $('#interest').val(),
    years = $('#years').val(),
    monthlyemi = $('#monthlyemi').val(),
    totalpayment = $('#totalpayment').val(),
    totalinterest = $('#totalinterest').val(),

    principal = parseFloat(amount),
    calculatedInterest = parseFloat(interest) / 100 / 12,
    calculatedPayment =  parseFloat(years) * 12,

    x = Math.pow(1 + calculatedInterest, calculatedPayment),
    monthly = (principal * x * calculatedInterest)/(x-1);

    // Check
    monthlyemi = monthly.toFixed(0);
    totalPayment = (monthly * calculatedPayment).toFixed(0);
    totalInterest = ((monthly * calculatedPayment) - principal).toFixed(0);


    if ($("#emical").valid()) {
      $('.output').show();
      $('#monthlyemi').val(monthlyemi);
      $('#totalpayment').val(totalPayment);
      $('#totalinterest').val(totalInterest);
    } else {
      $('.output').hide();
    }
});

// form reset
$('.reset').on('click', function(e) {
    $('.output').hide();
});

$("#emical").validate({
    rules: {
      loanamount: {
        required: true,
        minlength: 5
      },
      interest: {
        required: true,
        max: 15,
      },
      years: "required",
    },
    messages: {
      loanamount: "Please enter a valid loan amount",
      interest: "Please enter interest rate",
      years: "Please enter term year",
    }
});


$('input.restricted').on('keypress paste', function (event) {
    var regex = new RegExp("^[0-9.]*$");
    var key = String.fromCharCode(!event.charCode ? event.which : event.charCode);
    if (!regex.test(key)) {
       event.preventDefault();
       return false;
    }
});

$('#loanamount, #interest, #years').keyup(function(){
  var elem = $(this);
  $("#gen-error").remove();
  if (elem.val() < 1){
    elem.addClass('error');
    elem.after("<label id='gen-error' class='cust-error' for='phone'>Please enter the value greater than 1</label>");
    $("#gen-error").css('display', 'block');
    elem.val('');
		return false;
  }
});
