// try inputting this: <script>alert('hi')</script>
// Now, try inputting this: <img src="/" onerror = "alert(1);">
// Scripts injected into the DOM via script tags in innerHTML
// are not run at the time they are injected (inline scripts
// are run at the time the original page is parsed). On the
// other hand, images injected into the DOM are loaded at that
// time, and if the loading fails, then the onerror event
//handler is called.

const API_URL = 'http://localhost:3000';
const submitBtn = document.getElementById('submitHandler');

const userInputInHTML = input => {
  const p = document.getElementById('pleaseNo');
  // Bad
  p.innerHTML = input;

  // Better
  // var textnode = document.createTextNode(input);
  // p.appendChild(textnode);
};

const sendToServer = async () => {
  const input = document.querySelector('#userinput').value;
  userInputInHTML(input);

  try {
    return await fetch(`${API_URL}/secret`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInput: input }),
    });
  } catch (error) {
    return { ok: false };
  }
};

submitBtn.addEventListener('click', sendToServer);
