window.addEventListener("load", function() {
    const form = document.getElementById('SubscribeFormData');
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      let thisForm = this;
      const data = new FormData(form);
      const action = e.target.action;
      thisForm.querySelector('.loading').classList.add('d-block');
      fetch(action, {
        method: 'POST',
        body: data,
      })
      .then(() => {
      thisForm.querySelector('.loading').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.add('d-block');
      })
      .catch((error) => {
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.error-message').classList.add('d-block');
      });
    });
  });
  


  function subscribeText(){
    var x = document.getElementById("SubscribeFormData");
      x.style.border = "none";
      x.style.background = "none";
   
      var z = document.getElementById("inputData");
      if (z.value != "") {
        z.style.display = "none";
      } else {
        z.setAttribute('required', '');
      }

      var y = document.getElementById("subscriptionData");
      if (z.value != "") {
        y.style.display = "none";
      } else {
        y.setAttribute('required', '');
      }
    
  }
