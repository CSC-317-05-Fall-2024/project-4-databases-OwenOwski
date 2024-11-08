document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', (event) =>{
    
        event.preventDefault();

        const name = document.getElementById('name').value;
        const add = document.getElementById('add').value;
        const add1 = document.getElementById('add1').value;
        const num = document.getElementById('num').value;
        const image = document.getElementById('image').value;

        fetch('/api/restaurants', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json',
            },
            body: JSON.stringify(
                {
                    name, add, add1, num, image
                    //Short hand for:
                        //name: name,
                        //color: color,
                        //human: human,
                        //image: image
                }
            ),
            
        }).then(response => {
            return response.json();
        }).then(data => {
            console.log(data);
            window.location.href = `/restaurants/${data.id}`;
        }).catch(error => {
            console.error('error:', error);
        })
    })
});