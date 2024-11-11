//module pattern
const ItemCtrl = (function(){
    //Item construtor
    //data structure
    const data = {
        items: [
            {id:0, name: "Cloths", money:100},
            {id:1, name: "Food", money:200},
            {id:2, name: "Bike", money:300}
        ],
        totalMoney:0,
        currentItem: null
    }

    return {    //without return we can't able to console anything in this pattern return is must
        getItem: function(){
            return data.items;
        },
        getData: function(){
            return data;
        }
    }
}());

const UICtrl = (function(){
    return{
        populateitemList: function(items){
            let html = "";
            items.forEach(function(item){
                html += `
                <li class="collection-item" id="item-${item.id}">
                    <strong>${item.name}</strong> <em>${item.money}$</em>
                        <a href="#" class="secondary-content">
                        <i class="fa fa-pencil edit-item"></i>
                        </a>
                </li> 
                `
            });
            document.querySelector(".collection").innerHTML = html;
        }
    }
}());

const App = (function(ItemCtrl, UICtrl){
    return {
        init: function(){
            const items = ItemCtrl.getItem();
            UICtrl.populateitemList(items)
        }
    }
}(ItemCtrl, UICtrl))

App.init();