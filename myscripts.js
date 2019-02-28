var firstName = document.getElementById('firstname')
var lastName = document.getElementById('lastname')
var desText = document.getElementById('description')
var emailInput = document.getElementById('email')
var phoneInput = document.getElementById('phone')
var preParagraph = document.getElementById('preview')
var rawParagraph = document.getElementById('rawhtml')

var updateProfile = function () {
  var firstname = firstName.value
  var lastname = lastName.value
  var description = desText.value
  var email = emailInput.value
  var phone = phoneInput.value

  var profile = '<h1>Hi, my name is ' + firstname + ' ' + lastname + '!</h1>' +
  '<p>' + description + '</p>' +
  '<p>If you\'re interested in a date, you can email me at ' +
    '<a href="mailto:' + email + '" target="_blank">' + email + '</a>' +
    ' or give me a call at ' +
    '<a href="tel:' + phone + '" target="_blank">' + phone + '</a>.</p>'

  preParagraph.innerHTML = profile

  rawParagraph.textContent = profile
}

firstName.addEventListener('input', updateProfile)
lastName.addEventListener('input', updateProfile)
desText.addEventListener('input', updateProfile)
emailInput.addEventListener('input', updateProfile)
phoneInput.addEventListener('input', updateProfile)
