// LibPagenate
import LibCommon from "../libs/LibCommon"

//
export default {
    init:function(){
        this.per_page = 20;
    },    
    set_per_page:function(num){
        this.per_page = num;
    },    
    get_page_start:function(page){
        var start_num = (page -1) * this.per_page;
        var end_num = (page * this.per_page) -1;
        var ret ={
            start: start_num, end: end_num,
        }        
//        console.log("per_page:",this.per_page)
        return ret;
    },    
    get_per_page:function(){
        console.log("per_page:",this.per_page)
        return this.per_page;
    },
    is_paging_display(count){
        var ret = 0;
        var num = count / this.per_page;
        if(num >= 1){
            ret = 1
        }
        //ret = parseInt( num );
        return ret;
    },
    get_page_items(data, reply_books){
        var paginate_disp = this.is_paging_display(data.length)
        const task_items = LibCommon.string_to_obj(reply_books)
// console.log(task_items)
        var page_item = {
            "item_count":data.length ,"paginate_disp": paginate_disp
        }
        var param = {
             "docs": task_items ,
             "page_item": page_item,            
        };
        return  param;       
    }    
}