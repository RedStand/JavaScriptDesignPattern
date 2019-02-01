var Book = function(id,bookname, price){
    this.id = id;
    this.bookname = bookname;
    this.price = price;
}

Book.prototype.display = function(){
    console.log(this.id + '\t' + this.bookname + '\t' + this.price);
}

var book = new Book(10,'JavaScript设计模式' , 50);
console.log(book.bookname);
book.display();