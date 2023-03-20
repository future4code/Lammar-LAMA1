<h2 align="center"> 🎶 Labenu Music Awards </h2>

<h2 align="center">🔗 Endpoints: </h2>

<h3> User: </h3>
<ol>
    <li>
        <p><strong>Create new user</p></strong>
    </li>
    <p><strong>Método:</strong> POST </p>
    <p> <strong>URL: </strong> /user </p>
    <strong> body: </strong>
    <p></p>
    <img src="https://user-images.githubusercontent.com/102433664/226187295-cbe6c767-c3de-4374-8b3d-03845de00fad.png" />
    <h1></h1>
    <li>
        <p><strong>Login</p></strong>
    </li>
    <p><strong>Método:</strong> POST </p>
    <p> <strong>URL: </strong> /user/login </p>
    <strong> body: </strong>
    <p></p>
    <img src="https://user-images.githubusercontent.com/102433664/226187468-48f735b1-02ba-41c5-b910-c6b572fa1119.png" />
    <h1></h1>
    <li>
        <p><strong>Create new band</p></strong>
    </li>
    <p><strong>Método:</strong> POST </p>
    <p> <strong>URL: </strong> /band </p>
    <p> <strong>Headers: </strong> Authorization (token gerado no login) </p>
    <p>Apenas usuários com role tipo <strong>ADMIN</strong> conseguem cadastrar uma nova banda.</p>
    <strong> body: </strong>
    <p></p>
    <img src="https://user-images.githubusercontent.com/102433664/226187820-5acb6e55-dd78-4ea0-a91e-479dd11b9dc3.png" />
    <h1></h1>
     <li>
        <p><strong>Get band</p></strong>
    </li>
    <p><strong>Método:</strong> GET </p>
    <p> <strong>URL: </strong> /band/:name </p>
    <p> <strong>Headers: </strong> Authorization (token gerado no login) </p>
    <h1></h1>
     <li>
        <p><strong>Create new Show</p></strong>
    </li>
    <p><strong>Método:</strong> POST </p>
    <p> <strong>URL: </strong> /show </p>
    <p> <strong>Headers: </strong> Authorization (token gerado no login) </p>
    <p>Apenas usuários com role tipo <strong>ADMIN</strong> conseguem cadastrar uma nova banda.</p>
    <strong> body: </strong>
    <p></p>
    <img src="https://user-images.githubusercontent.com/102433664/226370996-db1d3e6f-fad8-4a61-a35f-7b2af8010737.png" />
    <h1></h1>
    <li>
        <p><strong>Get Schedule Per Day</p></strong>
    </li>
    <p><strong>Método:</strong> GET </p>
    <p> <strong>URL: </strong> /show/:week_day </p>
    <p> <strong>Headers: </strong> Authorization (token gerado no login) </p>
    <h1></h1>
    <li>
        <p><strong>Create new Ticket</p></strong>
    </li>
    <p><strong>Método:</strong> POST </p>
    <p> <strong>URL: </strong> /ticket </p>
    <p> <strong>Headers: </strong> Authorization (token gerado no login) </p>
    <p>Apenas usuários com role tipo <strong>ADMIN</strong> conseguem cadastrar uma nova banda.</p>
    <strong> body: </strong>
    <p></p>
    <img src="https://user-images.githubusercontent.com/102433664/226371781-8f3c8017-628a-41cd-9a0c-06e041de9b47.png" />
    <h1></h1>
</ol>


### Workspace no postman: [Desafio](https://documenter.getpostman.com/view/22350736/2s93JzMMCP)
<h3> Tecnologias utilizadas: </h3>
<img src="https://skillicons.dev/icons?i=ts,nodejs,mysql&perline=10" />
