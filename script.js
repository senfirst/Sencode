const editor = document.getElementById("codeEditor");
const preview = document.getElementById("preview");

const codes = {

html:`<!DOCTYPE html>
<html>
<head>
<title>Sencode</title>
</head>
<body>
<h1>Hello HTML</h1>
<p>Bienvenue sur Sencode.</p>
</body>
</html>`,

css:`body{
background:black;
color:white;
font-family:Arial;
text-align:center;
padding-top:50px;
}

h1{
color:#00c896;
}`,

js:`function hello(){
alert("Bienvenue sur Sencode !")
}

hello();`,

python:`print("Bienvenue sur Sencode")

nom = "Python"
print(nom)`,

xml:`<?xml version="1.0"?>
<student>
<name>Sencode</name>
<language>XML</language>
</student>`,

c:`#include <stdio.h>

int main(){
printf("Bienvenue sur Sencode");
return 0;
}`,

csharp:`using System;

class Program {
static void Main(){
Console.WriteLine("Bienvenue sur Sencode");
}
}`,

cpp:`#include <iostream>
using namespace std;

int main(){
cout << "Bienvenue sur Sencode";
return 0;
}`

};

function loadCode(lang){
editor.value = codes[lang];
}

function runCode(){
const code = editor.value;
preview.srcdoc = code;
}

loadCode('html');
runCode();
```

---

