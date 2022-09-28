const baseUrl = "http://localhost:3000/" ;

const getToDo = async function(){
    try{
        const res = await fetch(baseUrl, {
            method: 'GET',
            headers:{ 
            'Content-Type': 'application/json'}} );
        const conRes = await res.json();
        return conRes;
    } catch(err){
        console.log(err)};
};

const postToDo = async function(newTask){
    try{
        const data = {"description": newTask , "done": "false"};
        fetch(baseUrl, {
            method: `POST`,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'}
        });
        
    }catch(err){
        console.log(err)}
}; 

const deleteToDo = async function(id){
    try{
        fetch(baseUrl + id + "/", {
            method: 'DELETE',
            headers:{ 
            'Content-Type': 'application/json'} 
        })
    } catch(err){
        console.log(err);
    }
};

// bonus 

const putTaskDone = async function(id){
    try{
        const updatedData = {"done": "true"};
        const updatedTask = id;
        fetch(baseUrl + updatedTask + "/", {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                'Content-Type': 'application/json'}            
        })
    } catch(err){
        console.log(err);
    }
};

const putTaskNotDone = async function(id){
    try{
        const updatedData = {"done": "false"};
        const updatedTask = id;
        fetch(baseUrl + updatedTask + "/", {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                'Content-Type': 'application/json'}            
        })
    } catch(err){
        console.log(err);
    }
};

const putUpdatedTask = async function(id, newTask){
    try{
        const updatedData = {"description": newTask};
        const updatedTask = id;
        fetch(baseUrl + updatedTask + "/", {
            method: 'PUT',
            body: JSON.stringify(updatedData),
            headers: {
                'Content-Type': 'application/json'}            
        })
    } catch(err){
        console.log(err);
    }
};
