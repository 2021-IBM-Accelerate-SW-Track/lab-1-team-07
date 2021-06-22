// This is the class for the items of the To-Do List

class listItem {
    constructor(name){
        this.name = name; //the name that will be displayed on the screen 
        this.completed = False; //the boolean that trackets whether or not an item is complete
        this.time  = null;
        this.date = null;
    }

    getName(){
        return this.name;
    }

    setDate(new_date){
        this.date = new_date;
    }

    setTime(new_time){
        this.time = new_time;

    }

    equals(otherItem){
        return this.name.toLowerCase() == otherItem.getName().toLowerCase();
    }
}