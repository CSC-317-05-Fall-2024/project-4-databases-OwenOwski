
document.addEventListener('DOMContentLoaded', function() {
    const container = document.querySelector('.container');
    const buttons = container.querySelectorAll('button');
    for (let button of buttons) (
        button.addEventListener("click",(event) => {
            //button.id: delete-0
            //split -> ("delete", "0")
            let restaurantId = button.id.split("-") [1];
            console.log(restaurantId);

            fetch(`/api/restaurants/${restaurantId}`,
                {
                    method: 'DELETE'
                }
            ).then(response => {
                return response.json();
            }).then(data => {
                console.log(data);
                window.location.reload();
            }).catch(error => {
                console.error('error:', error);
            })
        })
    )
});