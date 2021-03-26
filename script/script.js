var app = new Vue(
  {
    el:"#root",
    data:{
      newElement:"",
      list: ["FARE LE VALIGIE", "PRELEVARE IN BANCA", "ADARE IN LIBRERIA"],
    },
    methods:{
      deleteElement: function(elementIndex){
        this.list.splice(elementIndex,1);
        //console.log(index);
      },
      addElement: function(){
        if (this.newElement!== "") {
          this.list.push(this.newElement.toUpperCase());
          this.newElement = "";
        }
      }
    }
  }
);
