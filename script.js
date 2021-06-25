/* Fill your code*/
class Blog{
    constructor(title,detail){
        this.title=title;
        this.detail=detail;
    }
    addImage(){
        var image = document.createElement("img");
        image.src="./assets/java card image.svg";
        document.getElementById("flashcard").appendChild(image);
    }
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
    addDescription(){
        var desc_card = document.createElement('p');
        desc_card.setAttribute("id","blog-description");
        document.getElementById('card-text').appendChild(desc_card);
        desc_card.innerHTML += this.detail;
    }
}

//event listeners

//diplay pop up

//show pop up btn
let add_blog_btn = document.getElementById("addBlog");
//open pop up document
let popup = document.getElementById("popupContact");
add_blog_btn.addEventListener("click", function (){
    popup.style.display="block";
});
// close pop up document
let cancelBtn = document.getElementById("close");
cancelBtn.addEventListener("click", function (){
    popup.style.display="none";
})
//post btn
let post_btn = document.getElementById("post");
post_btn.addEventListener("click", function (){
    let head = document.getElementById("title").value;
    let para = document.getElementById("detail").value;
    let content = new Blog(head, para);
    content.addTitle();
    content.addDescription();
    content.addImage();
    popup.style.display="none";
});