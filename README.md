# Laboratorio-IETI

## Video

Debido a que utilizo los creditos de AZURE en otra asignatura, grabe este video con el fin de exponer el demo de la function lanzada en azure functions, en el que se muestra la URL generada, y una aplicacion frontend que corre de forma local y que realiza peticiones **GET** y **POST** a la aplicacion.

![](https://github.com/CAndresRa/Laboratorio-IETI/blob/master/VideoIeti.gif)


## Peticiones desde el Frontend

* Link Repositorio Frontend

https://github.com/CAndresRa/FrontendAzureFunction-IETI

* POST

``` axios.post('https://ietiapp.azurewebsites.net/api/add-task?code=COrAAMHZlkU6QVE6XQRGXSzZ5/4v86FEwFpqYCL7/KMlBAcuhASiog==', task); ```

* GET

``` 
      const task = axios.get('https://ietiapp.azurewebsites.net/api/add-task?code=COrAAMHZlkU6QVE6XQRGXSzZ5/4v86FEwFpqYCL7/KMlBAcuhASiog==')
        .then(task => {
            let solution = "";
            for(let x = 0; x < task.data.response.length; x++){
                solution = solution + task.data.response[x].id + "<br/>";
                solution = solution + task.data.response[x].description + "<br/>";
                solution = solution + task.data.response[x].responsible.name + "<br/>";
                solution = solution + task.data.response[x].responsible.email + "<br/>";
                solution = solution + task.data.response[x].status + "<br/>";
                solution = solution + task.data.response[x].dueDate + "<br/>";
                solution = solution + "<br/>";
                solution = solution + "<br/>";
                solution = solution + "<br/>";
            }
            document.getElementById("list").innerHTML = solution;
    });
 ```
