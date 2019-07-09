let userEmail = prompt('Please enter your email', '');
let sixSymbols = 6;
let fiveSymbols = 5;


if (userEmail === '' || userEmail === null) {
    alert('Canceled');
} else if (userEmail.length < sixSymbols) {
    alert('I don’t know any emails having name length less than 6 symbols');
} else if (userEmail === 'user@gmail.com' || userEmail === 'admin@gmail.com') {
    let userPassword = prompt('Please enter your password', '');
    if (userPassword === '' || userPassword === null) {
        alert('Canceled');
    } else if (userEmail === 'user@gmail.com' && userPassword === 'UserPass' ||
        userEmail === 'admin@gmail.com' && userPassword === 'AdminPass') {
        prompt('Do you want to change your password?');
        if (userPassword) {
            prompt('Please write the old password ?');
        } else if (userPassword === null) {
            alert('You have failed the change.');
        }
        if (userPassword === 'UserPass' || userPassword === 'AdminPass') {
            let newUserPassword = prompt('Please write the new password ?');
            if (newUserPassword < fiveSymbols) {
                alert('It’s too short password. Sorry.');
            } else if (newUserPassword > fiveSymbols) {
                prompt('Please enter your new password again?');
                if (newUserPassword) {
                    alert('You have successfully changed your password.');
                } else {
                    alert('You wrote the wrong password.')
                }
            }
        }

    } else {
        alert('Wrong password');
    }
} else {
    alert('I don’t know you')
}