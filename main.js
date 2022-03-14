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

function createPost(singlePost) {
    //contenitore principale per l'haeder del post
    const post = document.createElement('div');
    post.classList.add('post');

    // sottoclasse post
    const postHeader = document.createElement('div');
    postHeader.classList.add('post_header');
    post.appendChild(postHeader);

    // sootoclasse di post_header
    const postMeta = document.createElement('div');
    postMeta.classList.add('post-meta');
    postHeader.appendChild(postMeta);

    // sottoinsieme di post-meta
    const postMetaIcon = document.createElement('div');
    postMetaIcon.classList.add('post-meta_icon');
    postMeta.appendChild(postMetaIcon);

    // sottoinsieme di postmetaicon
    // ? bisogna creare una condizione per l'immagine profilo, nel caso in cui non ci sia, aggiungere le iniziali.
    if (singlePost.author.image !== null) {
        const postImageAuthor = document.createElement('img');
        postImageAuthor.classList.add('profile-pic');
        postImageAuthor.src = singlePost.image;
        postImageAuthor.alt = `image profile of ${singlePost.name}`
        postMetaIcon.appendChild(postImageAuthor);
    } else {
        const splitName = singlePost.author.name.split(' ');
        const initials = splitName[0].charAt(0).toUpperCase() + splitName[1].charAt(0).toUpperCase();
        const profilePicDefault = document.createElement('h3');
        profilePicDefault.classList.add('profile-pic-default');
        profilePicDefault.innerHTML = initials;
        postMetaIcon.appendChild(profilePicDefault);
    }
    //sottoinsieme di post-meta, fratello di post-icon
    const postMetaData = document.createElement('div');
    postMetaData.classList.add('post-meta_data');
    postMeta.appendChild(postMetaData);

    //sottoinsieme di postMetadata
    const postMetaAuthor = document.createElement('div');
    postMetaAuthor.classList.add('post-meta__author');
    postMetaAuthor.innerHTML = singlePost.author.name;
    postMetaData.appendChild(postMetaAuthor);
    //fratello di post meta author
    const postMetaTime = document.createElement('div');
    postMetaTime.classList.add('post-meta__time');
    postMetaTime.appendChild(postMetaAuthor);
}

/* <!-- post di esempio/template, da togliere/commentare e generare da JS -->
<div class="post">
    <div class="post__text">Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.</div>
    <div class="post__image">
        <img src="https://unsplash.it/600/300?image=171" alt="">
    </div>
    <div class="post__footer">
        <div class="likes js-likes">
            <div class="likes__cta">
                <a class="like-button  js-like-button" href="#" data-postid="1">
                    <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                    <span class="like-button__label">Mi Piace</span>
                </a>
            </div>
            <div class="likes__counter">
                Piace a <b id="like-counter-1" class="js-likes-counter">80</b> persone
            </div>
        </div>
    </div>
</div> */