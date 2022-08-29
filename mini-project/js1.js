fetch('https://jsonplaceholder.typicode.com/users')
.then(response=>response.json())
.then(json=>{
    for (const jsonElement of json) {
        let div=document.createElement('div');
        let div1=document.createElement('div');
        div.classList.add('card')
        div1.classList.add('card1')
        let a =document.createElement('a')
        div1.innerHTML=`${jsonElement.id}<a href=user-details.html?id=${jsonElement.id}> ${jsonElement.name}</a>`
        let btn = document.createElement('button');
        btn.classList.add('post')
        btn.innerHTML=`<a href=https://jsonplaceholder.typicode.com/comments?postId=${jsonElement.id}>post of current user</a>`;
        div.append(div1,a,btn);
        document.body.appendChild(div);
      }
    });
