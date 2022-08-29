let urla = new URL(location.href);
let id =urla.searchParams.get('id');
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then (response =>response.json())
    .then (value=> {
            let dive = document.createElement('div')
            dive.innerHTML = `<h2>${value.name}</h2>
            <p>User Id -- ${value.id} and Username -- ${value.username} </p>
            <p>User Id -- ${value.email} </p>
            <ul>
            <li>${value.address.street}</li>
            <li>${value.address.suite}</li>
            <li>${value.address.city}</li>
            <li>${value.address.zipcode}</li>
            <li>${value.address.geo.lat} + ${value.address.geo.lng}</li>
            </ul>
            <p>${value.phone}</p>
            <p>${value.website}</p>
            <ul>
            <li>${value.company.name}</li>
            <li>${value.company.catchPhrase}</li>
            <li>${value.company.bs}</li>
            </ul>`

            document.body.appendChild(dive);
    });

