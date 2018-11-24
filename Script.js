var div = document.getElementById('container')
for(var i=0;i<5;i++){
	div=document.createElement('div')
	div.onClick = function(){
		alert('This is box #'+i)
	}
	container.appendChild(div)
}
document.write("gkjgnn")
/*var A=[[1,2,3],[4,5,6],[7,8,9]]
document.write("массив а: <br>")
document.write(A)

var i,j,m=3,n=4
var B=new Array(m)
for(i=0;i<B.length;i++){
	B[i] = new Array(n)
	for(j=0;j<B[i].length;j++){
		B[i][j] = (i+1)+(j+1)
	}
}
document.write("<br> массив B <br>")
document.write(B)


function assert(){
	var li = document.createElement("li")
	li.className = value ? "pass" : "fail"
	li.appendChild(docuent.createTextNode( desc ) )
	document.getElementById("results").appendChild( li )
}


	var A=[5,3,2]
	write("Результат A.reduce(Math.pow)")
	write(A.reduce(Math.pow))
	write("Результат A.reduceRight(Math.pow)")
	write(A.reduceRight(Math.pow))
	var b=[1,2,3,,5,6,7,,9]
	write("b = ["+b+"]")
	b.forEach(fillIt)
	write("b = ["+b+"]")
	b.splice(2,1)
	write("b = ["+b+"]")
	b.some(isIt)
	write("b = ["+b+"]")
	b.every(isInRange)
	write("b = ["+b+"]")
	write(A.every(isInRange))
}	

function fillIt(value,index,array){
	array[index]*=10
	document.write(index+":"+value+"<br>")
}

function isIt(value,index,array){
	return(index<=array.length/2)&&(value<30)
}
function isInRange(value,index,array){
	return(value>0)&&(value<50)
}
var a=[1,2,3]
document.write("массив <code>a</code><br>")
show(a)
document.write("Массив <code>b</code><br>")
var b=["x","y","z"]
show(b)
document.write("Массив после a.concat(b) <code>a</code><br>")
var A=a.concat(b)
show(A)
document.write("Массив после A.reverse() <code>a</code><br>")
A.reverse()
show(A)
document.write("Массив после A.shift() <code>a</code><br>")
A.shift()
show(A)
document.write("Массив после A.pop() <code>a</code><br>")
A.pop()
show(A)
document.write("Массив после A.unshift(10,20,30) <code>a</code><br>")
A.unshift(10,20,30)
show(A)
document.write("Массив после A.push(1,0) <code>a</code><br>")
A.push(1,0)
show(A)
document.write("Массив после A.slice(2,6) <code>a</code><br>")
show(A.slice(2,6))
show(A)
document.write("Массив после A.map(function(x){return 2*x+1}) <code>a</code><br>")
show(A.map(function(x){return 2*x+1}))
show(A)
document.write("Массив после A.filter(myTest) <code>a</code><br>")
show(A.filter(myTest))
show(A)
document.write("Массив после A.sort() <code>a</code><br>")
A.sort()
show(A)
document.write("Массив после A.sort(mySort) <code>a</code><br>")
A.sort(mySort)
show(A)
function show(array){
	document.write(array.join("|")+"<br>")
}
function myTest(x){
	return(x>-3)&&(x<10)
}
function mySort(a,b){
	if(a<b) return -1
	if(a>b) return 1
	return 0
}
var arr = []
for(var i=0;i<39;i++){
	arr[i] = i
}
for(var k in arr){
	document.write(k+"|")
}
document.write("<br>")
for(var p=0;p<=arr.length-1;p++){
	document.write(arr[p]+"|")
}

document.write("<b>Создание массива</b><br>")
var array1=[1678,"Hello",true,345.4]
document.write(array1+"<br>")
for(var k in array1){
	document.write(array1[k]+"|")
}

var a={
	name:"объект а",
	n:0,
	get number(){
		return this.n % 10
	},
	set number(x){
		this.n = (x % 10)
	}
}
a.number = 123
document.write(a.name+"<br>"+a.number+"<hr>")
a.number = 5
document.write(a.name+"<br>"+a.number+"<hr>")
a.n = 12
document.write(a.name+"<br>"+a.number+"<hr>")

var a={}
Object.defineProperty(a,"number",{value:8009,enumerable:true,writable:true,configurable:true})
var descriptor={value:"Объект а",enumerable:true,writable:true,configurable:true}
Object.defineProperty(a,"name", descriptor)
show(a)

Object.defineProperty(a,"number",{value:200,enumerable:false})

show(a)

document.write("a.number="+a.number)

function show(obj){
	document.write("{|")
	for(var s in a){
		document.write("<b>"+s+"</b>:"+obj[s]+"|")
	}
	document.write("}<br>")
}

var a = {number:800}

var descriptor = Object.getOwnPropertyDescriptor(a, "number")

show(a)

show(descriptor)

function show(obj){
	document.write("{|")
	for(var s in obj){
		document.write("<b>"+s+"</b>:"+obj[s]+"|")
	}
	document.write("}<br>")
}

var a = {number:100}
Object.prototype.name="Объект А"
for(var s in a){
	document.write(s+"|")
}

test("'toString'in a")
test("'valueOf'in a")
test("'constructor'in a")



function test(text){
	document.write("<br>"+text+" -> "+eval(text))
}
function MyObj(name,age){
	this.name = name
	this.age = age
	this.show = function(){
		for(var s in this){
			if(s!="show"){
				document.write(s+this[s]+"|")
		}
		document.write("<br>")
	}
}
}
var a = new MyObj("Ivan",300)

var b = new MyObj("Sach",23)

document.write("Свойства объектов")

a.show()

b.show()

MyObj.prototype.color="Прозрачный"

a.show()

b.show()
var a = Object.create(Math)
var b = Object.create(a)
var c = Object.create(b)
var d = Object.create(c)

Object.getPrototypeOf(a).f=function(x){
	return 2*x+1
}
var t=2

document.write(Math.f(t)+"<br>")

t=3

document.write(d.f(t)+"<br>")

var obj = Object.getPrototypeOf(Object.getPrototypeOf(d))

document.write((obj==b))
document.write("<h4>Цвета:</h4>")

var colors={red:"красный",green:"зеленый",yellow:"желтый",black:"черный",brown:"коричневый"}

for(var s in colors){
	document.write(s+" - "+colors[s]+"<br>")
}
with(document){
	write("<h4>Какой то текст</h4>")
	var dog={name:"Песка 1",age:5}
	with(dog){
		write("<b>Имя пса: </b>"+name+"<br>")
		write("<b>Возраст пса: </b>"+age+"<br>")
	}
}

function fellow(name,age){
	this.name=name
	this.age=age
	this.show=function(){
		document.write("<b>Имя: </b>"+this.name+"<br>")
		document.write("<b>Возраст: </b>"+this.age+"<br>")
	}
}

var obj1 = new fellow("Иван Иванович",36)
var obj2 = new fellow("Кирилл Александрович",23)
var obj3 = new fellow("Александр Михайлович",25)

obj1.show()
obj2.show()
obj3.show()*/