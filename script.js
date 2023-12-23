let form = document.querySelector("#formulario");
console.log(form);
form.addEventListener("submit", e=>{
    e.preventDefault();
    console.log("enviou");
    document.querySelector("#principal").style.display = 'none';
    document.querySelector("#confirmacao").style.display = 'inline';
    document.querySelector(".attribution").style.marginRight = "100px";
});
let button = document.querySelector("#button-dismiss");
button.addEventListener("click", e=>{
    location.reload();
})