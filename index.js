const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8","9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];

function passwordGen() {
    const generatePasswordWithLength = (length) => {
        let password = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            password += characters[randomIndex];
        }
        return password;
    };

    const plainPassword = generatePasswordWithLength(15); // Generate shorter password
    const complexPassword = generatePasswordWithLength(30); // Generate longer password

    document.getElementById('plainPassword').textContent = plainPassword;
    document.getElementById('complexPassword').textContent = complexPassword;
}

function copyPassword(passwordType) {
    const passwordElement = document.getElementById(passwordType === 'plain' ? 'plainPassword' : 'complexPassword');
    const password = passwordElement.textContent;

    const tempTextArea = document.createElement('textarea');
    tempTextArea.value = password;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand('copy');
    document.body.removeChild(tempTextArea);

    const copyButton = document.getElementById(`copyText${passwordType === 'plain' ? '1' : '2'}`);
    copyButton.innerText = 'Copied!';
    setTimeout(() => {
        copyButton.innerText = 'Copy';
    }, 2000); // Reset button text after 2 seconds
}
