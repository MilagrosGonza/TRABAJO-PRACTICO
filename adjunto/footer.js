
console.dir(document)

const footerHTML = document.getElementById("footer")


footerHTML.innerHTML += `
            
    <div>
        <nav>
            <div>
                <h3>Desarrollado por:</h3>
                <p>----</p>
                <p>----</p>
            </div>
            <div>
                <h3>Contacto</h3>
                <a href="https://chat.whatsapp.com/" class="what"><i class="bi bi-whatsapp"></i> Whatsapp</a>
                <a href="https://www.youtube.com/" class="youtube"><i class="bi bi-youtube"></i> Youtube</a>
                <a href="https://discord.gg/" class="discord"><i class="bi bi-discord"></i> Discord</a>
            </div>
        </nav>
        <br>
        <p>®Todos los derechos reservados</p>
    </div>
       
`
