document.getElementById('copiarEmail').addEventListener('click', function() {
    event.preventDefault();
    let email = 'saezguido1@gmail.com';  
    let input = document.createElement('input');
    input.setAttribute('value', email);
    document.body.appendChild(input);
    input.select();
    document.execCommand('copy');
    document.body.removeChild(input);

    
    Swal.fire({
        icon: 'success',
        html: '<b class="swal">¡Copiado!</b>',
        showConfirmButton: false,
        timer: 1000,
        background: '#1F2233',
        width: '20rem'
    });
});