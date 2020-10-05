let taskSystem = [{
    "id":0,
    "description": "Hacer el lab de ieti",
    "responsible": {
        "name": "Andres Ramirez",
        "email": "andres@gmail.com"
    },
    "status": "ready",
    "dueDate": new Date(2020,10,04).toString()
}];

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