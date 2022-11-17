export const comments = () => {
    let comList = [];
    let idInterval;

    const renderComments = (arr) => {
        const commentsContainer = document.querySelector('.comments-container');
        commentsContainer.innerHTML = "";
        commentsContainer.insertAdjacentHTML('beforeend', `
        <div class="review-margin-bottom row comment-item">
            <div class="col-xs-3 col-sm-2">
                <div class="review-user">
                    <img src="images/users/${(arr[0].image) ? arr[0].image :
                'unnamed.png'}" alt="" class="img-responsive avatar">
                </div>
            </div>
            <div class="col-xs-9 col-sm-9">
                <div class="review-inner review-green review-arrow review-arrow-left">
                    <p class="text-normal">${arr[0].author}</p>
                    <p>${arr[0].comment}</p>
                </div>
            </div>
        </div>
        <div class="review-margin-bottom row comment-item">
            <div class="col-xs-9 col-sm-9">
                <div class="review-inner review-gray review-arrow review-arrow-right">
                    <p class="text-normal">${arr[1].author}</p>
                    <p>${arr[1].comment}</p>
                </div>
            </div>
            <div class="col-xs-3 col-sm-2">
                <div class="review-user">
                    <img src="images/users/${(arr[1].image) ? arr[1].image :
                'unnamed.png'}" alt="" class="img-responsive avatar">
                </div>
            </div>
        </div>
        <div class="row comment-item">
            <div class="col-xs-3 col-sm-2">
                <div class="review-user">
                    <img src="images/users/${(arr[2].image) ? arr[2].image :
                'unnamed.png'}" alt="" class="img-responsive avatar">
                </div>
            </div>
            <div class="col-xs-9 col-sm-9">
                <div class="review-inner review-orange review-arrow review-arrow-left">
                    <p class="text-normal">${arr[2].author}</p>
                    <p>${arr[2].comment}</p>
                </div>
            </div>
        </div>
        `);
    };

    const updComments = (arr) => {
        arr.push(arr[0]);
        arr.splice(0, 1);
        renderComments(arr);

        if (!arr) {
            console.log('not array');
            clearInterval(idInterval);
        }
    };

    fetch('./comments.json')
        .then(resp => resp.json())
        .then(data => data.comments.forEach((comment) => {
            comList.push(comment);
        }))
        .then(() => {
            renderComments(comList);
        })
        .catch(error => (console.log(error.message)));

    setInterval(() => {
        idInterval = setInterval(updComments(comList), 20000);
    }, 20000);

};
