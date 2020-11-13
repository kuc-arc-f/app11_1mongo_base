
// LibSortedTasks

const {promisify} = require('util');
//
export default {
    add_items :function(client, items){
        const incrAsync = promisify(client.incr).bind(client);
        const zaddAsync = promisify(client.zadd).bind(client);
        const setAsync = promisify(client.set).bind(client);
        try{
            items.forEach(async function (item) {
                var reply = await incrAsync("idx-task");
                var key = "task:" + String(reply)
                await zaddAsync("sorted-task", reply, key);
                var task = {
                    title: item.title ,  
                    content: item.content ,
                    id: key,
                };         
                var json = JSON.stringify( task );    
                await setAsync(key , json)   
            });
            return 1;  
        } catch (e) {
            console.log(e);
            return 0;
        }      
    },

}
