# Laboratorio-IETI

## Autor

#### Carlos Andrés Ramírez Torres



## Video

Debido a que utilizo los creditos de AZURE en otra asignatura, grabe este video con el fin de exponer el demo de la function lanzada en azure functions, en el que se muestra la URL generada, y una aplicacion frontend que corre de forma local y que realiza peticiones **GET** y **POST** a la aplicacion.

Repositorio Frontend: https://github.com/CAndresRa/FrontendAzureFunction-IETI

![](https://github.com/CAndresRa/Laboratorio-IETI/blob/master/VideoIeti.gif)

## Aspecto importante

Notese que se implemento tanto el punto numero 1 y 2 en el mismo lugar sin necesidad de crear un nuevo directorio para la lista de tareas 

```
module.exports = async function (context, req) {
    context.log('Adding a task to the planner');
    const task = req.body;

    if(req.method=='GET'){
        const responseMessage = { response: taskSystem};
        console.log(req);
        context.res = {
            status: 201,
            body: responseMessage
        };
    } else if(req.method=='POST'){
        taskSystem.push(task);
        const responseMessage = { response: taskSystem};
        console.log(req);
        context.res = {
            status: 201,
            body: responseMessage
        };
    }    
}
``` 



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


La presencia de este documento en este repositorio es un compromiso explícito de los colaboradores de seguir el siguiente código de honor:

Código de Honor
------
Debes seguir el Código de honor del ingeniero de sistemas para defender el estándar de integridad académica de la ECI:

- Tus respuestas a tareas, cuestionarios y exámenes deben ser tu propio trabajo (excepto para las tareas que permiten explícitamente la colaboración).

- No puedes compartir tus soluciones de tareas, cuestionarios o exámenes con otra persona a menos que el instructor lo permita explícitamente. Esto incluye cualquier cosa escrita por ti, como también cualquier solución oficial proporcionada por el docente o el monitor del curso.

- No puedes participar en otras actividades que mejorarán de manera deshonesta tus resultados o que mejorarán de manera deshonesta o dañarán los resultados de otras personas.
