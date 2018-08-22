/*
 * 模拟队列
 * var queue = new Qu.Queue(10);
 * queue.enqueue(1);
 * queue.enqueue(2);
 */
var Qu ={};

//构造函数
Qu.Queue = function (len) {
    this.capacity = len;        //队列最大容量
    this.list = new Array();    //队列数据
};

//入队
Qu.Queue.prototype.enqueue = function (data) {
    if (data == null) return;
    if(this.list.length>=this.capacity) {
        this.list.remove(0);
    }
    this.list.push(data);
};

//出队
Qu.Queue.prototype.dequeue = function () {
    if (this.list == null) return null;
	var obj = this.list[0];
    this.list.remove(0);
	return obj;
};

//队列长度
Qu.Queue.prototype.size = function () {
    if (this == null) return;
    return this.list.length;
};

//队列最大容量长度
Qu.Queue.prototype.getCapacity = function () {
    if (this == null) return;
    return this.capacity;
};

//队列是否空
Qu.Queue.prototype.isEmpty = function () {
    if (this == null|this.list==null) return false;
    return this.list.length>0;
};

//清空队列
Qu.Queue.prototype.clear = function (){
    this.list = new Array();    //队列数据
}

Qu.Queue.prototype.get = function(index){
	if(index == null || index == undefined || this == null || isNaN(index) || index > this.length ||
		this.list == null || this.list.length == 0 || index > this.list.length)return null;
	return this.list[index];
}

//判断Queue中是否含有指定VALUE的元素 
Qu.Queue.prototype.containsValue = function(_value) { 
        var bln = false; 
         try{ 
            for(i = 0; i < this.list.length; i++) { 
                 if(this.list[i] == _value) { 
                    bln = true; 
                    break;
                } 
             } 
         } catch(e) { 
            bln = false; 
        } 
       return bln; 
 }
 
//查询Queue中指定VALUE的index
Qu.Queue.prototype.containsValueIndex = function(_value) { 
        var idx = -1; 
         try{ 
            for(i = 0; i < this.list.length;i++) { 
                 if(this.list[i] == _value) { 
                    idx = i;
                    break;
                }
             } 
         } catch(e) { 
            idx = -1; 
        } 
       return idx; 
 }
 //对换两个位置的值
 Qu.Queue.prototype.exchangeValue = function(formIndex,toIndex){
	var formValue = this.list[formIndex];
	var toValue   = this.list[toIndex];
	this.list[formIndex] = toValue;
	this.list[toIndex] 	 = formValue;
}
//从某个位置插入一个元素
Qu.Queue.prototype.splice = function(fromIndex,data){
	if (data == null) return;
    if(this.list.length>=this.capacity) {
        this.list.pop();
    }
	this.list.splice(fromIndex,0,data);
}

//获取下一个空闲窗口
Qu.Queue.prototype.nextFreeIndex = function(){
    return this.list.length - 1;;
}

Qu.Queue.prototype.remove = function(index){
	if(index == null || index == undefined || this == null || isNaN(index) || index > this.length ||
		this.list == null || this.list.length == 0 || index > this.list.length)return null;
	this.list.remove(index);
}

//对象数组扩展remove
Array.prototype.remove = function(dx) {
    if (isNaN(dx) || dx > this.length) {
        return false;
    }
    for (var i = 0, n = 0; i < this.length;i++) {
        if (this[i] != this[dx]) {
            this[n++] = this[i]
        }
    }
    this.length -= 1
}