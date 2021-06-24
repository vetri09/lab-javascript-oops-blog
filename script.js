/* Fill your code*/
class Blog{
    constructor(title,detail){
        this.title=title;
        this.detail=detail;
    }
    addTitle(){
        var title_card = document.createElement('h1');
        title_card.setAttribute("id","blog-title");
        console.log(title_card);
        document.getElementById('card-text').appendChild(title_card);
        title_card.innerHTML += this.title;
    }
    addDescription(){
        var desc_card = document.createElement('p');
        desc_card.setAttribute("id","blog-description");
        console.log(desc_card);
        document.getElementById('card-text').appendChild(desc_card);
        desc_card.innerHTML += this.detail;
    }
}

//event listener
//diplay pop up
//show pop up btn
let add_blog_btn = document.getElementById("addBlog");
//pop up document
let popup = document.getElementById("popupContact");
add_blog_btn.addEventListener("click", function (){
    popup.style.display="block";
});
//post btn
let post_btn = document.getElementById("post");
post_btn.addEventListener("click", function (){
    let head = document.getElementById("title").value;
    let para = document.getElementById("detail").value;
    let content = new Blog(head, para);
    content.addTitle();
    content.addDescription();
    popup.style.display="none";
});