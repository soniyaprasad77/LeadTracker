 let myLeads = []
 let oldLeads = []
// let myLeads =`["www.awesomelead.com"]` 
// myLeads =JSON.parse(myLeads)
// myLeads.push("www.epiclead.com")
// myLeads = JSON.stringify(myLeads)
// console.log( typeof myLeads)

const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("tab-btn")


const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
if(leadsFromLocalStorage){
  myLeads = leadsFromLocalStorage
  render(myLeads)
  console.log(myLeads)
}

//localStorage.setItem("Myname", "Aditya Jaiswal")
// let name = localStorage.getItem("myName")
// localStorage.log(name)


tabBtn.addEventListener("click",function(){
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
    myLeads.push(tabs[0].url)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
  })
  })
  
function render(leads){
     let listItems = ""
     for(let i=0; i<leads.length; i++){      
       //listItems += "<li><a href = '" + myLeads[i] +"' target = '_blank'>" + myLeads[i] +"</a></li>"
       listItems +=`
        <li>
         <a target='blank' href='${leads[i]}'>
         ${leads[i]}
         </a> 
        </li>
        `
       console.log(listItems)     
     }
      
     ulEl.innerHTML = listItems
}
deleteBtn.addEventListener("dblclick",function(){
  localStorage.clear()
  myLeads =[] 
  render(myLeads)
})
 inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value=""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)
 })