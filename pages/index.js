function Home ()   {
    return <h1> 
         const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
    const mensagem = document.getElementById("mensagem");

    if (usuario === "admin" && senha === "1234") {
        localStorage.setItem("logado", "true");
        window.location.href = "home.html";
    </h1>
}
export default Home;
