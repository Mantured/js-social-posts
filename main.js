const posts = [
    {
        "id": 1,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Phil Mangione",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 80,
        "created": "2021-06-25"
    },
    {
        "id": 2,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Sofia Perlari",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 120,
        "created": "2021-09-03"
    },
    {
        "id": 3,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Chiara Passaro",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 78,
        "created": "2021-05-15"
    },
    {
        "id": 4,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Luca Formicola",
            "image": null
        },
        "likes": 56,
        "created": "2021-04-03"
    },
    {
        "id": 5,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alessandro Sainato",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 95,
        "created": "2021-03-05"
    },
    {
        "id": 6,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Patryk Avila",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 7,
        "created": "2021-06-25"
    },
    {
        "id": 7,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Marek Armstrong",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 11,
        "created": "2021-09-03"
    },
    {
        "id": 8,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Savanna Montgomery",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 77,
        "created": "2021-05-15"
    },
    {
        "id": 9,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Ellouise Potter",
            "image": null
        },
        "likes": 75,
        "created": "2021-04-03"
    },
    {
        "id": 10,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Alena Fry",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 128,
        "created": "2021-03-05"
    },
    {
        "id": 11,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Danyaal Ewing",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 30,
        "created": "2021-06-25"
    },
    {
        "id": 12,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Damian Lane",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 80,
        "created": "2021-09-03"
    },
    {
        "id": 13,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Zane O'Connor",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 50,
        "created": "2021-05-15"
    },
    {
        "id": 14,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Darrell Cox",
            "image": null
        },
        "likes": 50,
        "created": "2021-04-03"
    },
    {
        "id": 15,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Adrian Yates",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 11,
        "created": "2021-03-05"
    },
    {
        "id": 16,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/300?image=171",
        "author": {
            "name": "Izabelle Lim",
            "image": "https://unsplash.it/300/300?image=15"
        },
        "likes": 12,
        "created": "2021-06-25"
    },
    {
        "id": 17,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=112",
        "author": {
            "name": "Amiya Yates",
            "image": "https://unsplash.it/300/300?image=10"
        },
        "likes": 123,
        "created": "2021-09-03"
    },
    {
        "id": 18,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=234",
        "author": {
            "name": "Maxine Russo",
            "image": "https://unsplash.it/300/300?image=20"
        },
        "likes": 58,
        "created": "2021-05-15"
    },
    {
        "id": 19,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=24",
        "author": {
            "name": "Percy Lugo",
            "image": null
        },
        "likes": 80,
        "created": "2021-04-03"
    },
    {
        "id": 20,
        "content": "Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.",
        "media": "https://unsplash.it/600/400?image=534",
        "author": {
            "name": "Dorian Barrett",
            "image": "https://unsplash.it/300/300?image=29"
        },
        "likes": 15,
        "created": "2021-03-05"
    },
];

//|mi come su our team mi prendo il container padre che wrappa tutto
//? mi cro una funzione come su our team chemi crei il singolo post, poi conun foreach me li stampo

/* posts.forEach(element => {
    if (element.author.image == null) {
        console.log('nessuna immagine autore');
    } else {
        console.log('immagine autore presente');
    }
}); */


/*
console.log((posts[19].author.name).split(' '))
function prova(xyz) {
    const prova = xyz.author.name.split(' ');//! senza spazio mi prende il carattere alla posizione 1
    const prova1 = prova[0].charAt(0).toUpperCase() + prova[1].charAt(0).toUpperCase();
    return prova1
}
console.log(prova(posts[19]));
*/
const wrapper = document.getElementById('container');

function createPost(singlePost) {
    //contenitore principale per l'haeder del post
    const post = document.createElement('div');
    post.classList.add('post');

    // sottoclasse post
    const postHeader = document.createElement('div');
    postHeader.classList.add('post__header');
    post.appendChild(postHeader);

    // sootoclasse di post_header
    const postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.appendChild(postMeta);

    // sottoinsieme di post-meta
    const postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta__icon');
    postMeta.appendChild(postMetaIcon);

    // sottoinsieme di postmetaicon
    // ? bisogna creare una condizione per l'immagine profilo, nel caso in cui non ci sia, aggiungere le iniziali.
    if (singlePost.author.image !== null) {
        const postImageAuthor = document.createElement('img');
        postImageAuthor.classList.add('profile-pic');
        postImageAuthor.src = singlePost.author.image;
        postImageAuthor.alt = `image profile of ${singlePost.author.name}`
        postMetaIcon.appendChild(postImageAuthor);
    } else {
        const splitName = singlePost.author.name.split(' ');
        const initials = splitName[0].charAt(0).toUpperCase() + splitName[1].charAt(0).toUpperCase();
        const profilePicDefault = document.createElement('h3');
        profilePicDefault.classList.add('profile-pic-default');
        profilePicDefault.innerHTML = initials;
        postMetaIcon.appendChild(profilePicDefault);
    }

    const postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta__data');
    postMeta.appendChild(postMetaData);

    //sottoinsieme di postMetadata
    const postMetaAuthor = document.createElement('div');
    postMetaAuthor.classList.add('post-meta__author');
    postMetaAuthor.innerHTML = singlePost.author.name;
    postMetaData.appendChild(postMetaAuthor);

    //fratello di post meta author
    const postMetaTime = document.createElement('div');
    postMetaTime.classList.add('post-meta__time');
    postMetaTime.innerHTML = new Date(singlePost.created).toLocaleDateString("it-IT"); //oopure eu UE
    postMetaData.appendChild(postMetaTime);

    // sottoinsieme di post fratello di post-header
    const postTxt = document.createElement('div');
    postTxt.classList.add('post__text');
    postTxt.innerHTML = singlePost.content;
    post.appendChild(postTxt);

    // idem
    const postImage = document.createElement('div');
    postImage.classList.add('post__image');
    post.appendChild(postImage);

    //figlio di postimage
    const imageItem = document.createElement('img');
    imageItem.src = singlePost.media;
    imageItem.alt = 'randompick from unsplash.it';
    postImage.appendChild(imageItem);

    //footer_post figlio di post
    const postFooter = document.createElement('div');
    postFooter.classList.add('post__footer');
    post.appendChild(postFooter);

    //likes figlio di footer
    const likes = document.createElement('div');
    likes.classList.add('likes' , 'js-likes');
    postFooter.appendChild(likes);

    //figlio di likes
    const likesCta = document.createElement('div');
    likesCta.classList.add('likes__cta');
    likes.appendChild(likesCta);

    //a figlio di likesCta
    const likeBtn = document.createElement('a');
    likeBtn.classList.add('like-button', 'js-like-button');
    likeBtn['data-posteid'] = singlePost.id;
    likeBtn.innerHTML = `<i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                        <span class="like-button__label">Mi Piace</span>`

    likesCta.appendChild(likeBtn);

    // likes counter fratello di likesCTA
    const likesCounter = document.createElement('div');
    likesCounter.classList.add('likes__counter');
    likesCounter.innerHTML = `Piace a <b id="like-counter-${singlePost.id}" class="js-likes-counter">${singlePost.likes}</b> persone`;
    likes.appendChild(likesCounter);

    return post;
}

posts.forEach((post) => {
    wrapper.appendChild(createPost(post));
});

//array per i like
postLiked = [];
const likeCounters = document.querySelectorAll(`.js-likes-counter`);
const likeButtons = document.querySelectorAll(`.js-like-button`);

for (let i = 0 ; i < likeButtons.length ; i++){
    const element = likeButtons[i];

    console.warn(element);
    element.addEventListener('click', (event) => {
        event.preventDefault();

        if ( element.classList.contains('like-button--liked') ){
            element.classList.remove('like-button--liked');

            // mi prendo il counter attuale dei like
            likeCounters[i].innerHTML = parseInt(likeCounters[i].innerHTML) - 1;
            postLiked.splice( postLiked.indexOf(likeButtons[i].getAttribute('data-postid') ));

        } else {
            element.classList.add('like-button--liked');

            // mi prendo il counter attuale dei like
            likeCounters[i].innerHTML = parseInt(likeCounters[i].innerHTML) + 1;
            postLiked.push(likeButtons[i].getAttribute('data-postid'));
        }
    })
}

//currentTarget = The currentTarget read-only property of the Event interface identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant.

/* document.querySelectorAll('.like-button').forEach((btn, i) => {
    btn.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('like-button--liked');
        console.log(event, i);

        (event.currentTarget.classList.contains('like-button--liked')) ? postLiked.push(event.currentTarget) :
            id: ""???
            innerHTML: "<i class=\"like-button__icon fas fa-thumbs-up\" aria-hidden=\"true\"></i>\n<span class=\"like-button__label\">Mi Piace</span>"???
            innerText: " Mi Piace"???
            inputMode: ""

            console.log(postLiked);
    });
})
*/



