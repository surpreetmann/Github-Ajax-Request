var input=document.getElementById("take-input");
var btn=document.getElementById("btn-input-btn");
var table=document.getElementById("display-table");

  btn.addEventListener('click',sendAjaxRequest);

var data_item=[];

function sendAjaxRequest(event)
{
  var xhr=new XMLHttpRequest();

  var i=input.value;
  if(i=='')
  {
    alert('enter the value');
  }
  url="https://api.github.com/users?since="+input.value;

  xhr.open("Get",url);
  xhr.send();
  xhr.onload=function(){
    console.log(xhr.responseText);
    data_item=JSON.parse(xhr.responseText);
    display_data(data_item);

  }

}

function display_data(data_item)
{
  for (i in data_item)
  {

    var image=data_item[i].avatar_url;
    var user_name=data_item[i].login;
    var user_id=data_item[i].id;
    var table_row=document.createElement("tr");
    var table_data1=document.createElement("td");

    var img_src=document.createElement("img");
    img_src.setAttribute("src",image);
    img_src.setAttribute("height","70px");
    img_src.setAttribute("width","100px");
    table_data1.appendChild(img_src);
    table_row.appendChild(table_data1);

    var table_data2=document.createElement("td");
    table_data2.innerHTML=user_name;
    table_row.appendChild(table_data2);

    var table_data3=document.createElement("td");
    table_data3.innerHTML=user_id;
    table_row.appendChild(table_data3);
    table.appendChild(table_row);

  }
}
