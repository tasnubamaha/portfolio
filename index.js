function handleContact(event){
    event.preventDefault();

    const name = event.target.name.value;
    const email = event.target.email.value;
    const message = event.target.message.value;

    console.log(name);
    console.log(email);
    console.log(message);



    const successContainer = document.getElementById("success_container");
    console.log(successContainer);

    const nameParagraph = document.createElement("p");
    nameParagraph.innerText = `Your name : ${name}`;

    const emailParagraph = document.createElement("p");
    emailParagraph.innerText = `Your email : ${email}`;

    const messageParagraph = document.createElement("p");
    messageParagraph.innerText = `Your message : ${message}`;

    console.log(nameParagraph);
    console.log(emailParagraph);
    console.log(messageParagraph);

    successContainer.appendChild(nameParagraph);
    successContainer.appendChild(emailParagraph);
    successContainer.appendChild(messageParagraph);

}

const imageArray = [
    {
        url: "./images/Rectangle 4.png",
    },
    {
        url: "./images/Flower 01.png",
    },
    {
        url: "./images/Rectangle 5.png",
    },
    {
        url: "./images/Rectangle 6.png",
    },
    {
        url: "./images/Rectangle 4.png",
    },
    {
        url: "./images/Flower 01.png",
    },
    {
        url: "./images/Rectangle 5.png",
    },
    {
        url: "./images/Rectangle 6.png",
    },
]

function handleShowMoreProject(){
    const projectContainer = document.getElementById("projects");

    const projectDiv = document.createElement("div");
    console.log(projectDiv);

   for (const item of imageArray){
   console.log(item);

   const projectDivImage = document.createElement("div");
   projectDivImage.classList.add("project");
   projectDivImage.innerHTML = `
   
   <img src="${item.url}" alt="">
   `;
   projectContainer.appendChild(projectDivImage);
   console.log(projectDivImage);
   }






    console.log("click", projectContainer);
    }

