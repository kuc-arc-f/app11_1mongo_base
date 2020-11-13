
// LibTasks
//const {promisify} = require('util');
//
export default {
    get_serach_items :function(items, key){
        try{
            var data =[]
            var max = 1000
            items.forEach(function(item){
//console.log( item.title , key )
                if ( item.title.indexOf(key) != -1 ) {
                    console.log(data.length)
                    if(data.length < max){
                        data.push(item)
                   }
                }
            });        
            return data            
        } catch (e) {
            console.log(e);
            return null;
        }      
    },

}
