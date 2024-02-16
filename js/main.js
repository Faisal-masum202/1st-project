const milestonesData = JSON.parse(data).data
function loadMilestones(){
    const milestones = document.querySelector(".milestones")
    milestones.innerHTML = `${milestonesData.map(function(milestone){
        return `<div class="milestone border-b">
        <div class="flex">
           <div class="checkbox"><input type="checkbox" onclick = "markMiestone(this, ${milestone._id})" /></div>
           <div onclick = "openMilestone(this, ${milestone._id})">
                <p>
                   ${milestone.name}
                <span><i class="fas fa-chevron-down"></i></span>
                </p>
           </div>
        </div>
         <div class="hidden_penel">
           ${milestone.modules.map(function(module){
            return `<div class="module border-b" id = "${milestone._id}">
            <p>${module.name}</p>
        
      </div>`
           }).join("")}
           </div>
   </div>`
    }).join("")}`
}
function openMilestone(milestoneElement, id){
    const currentPenel = milestoneElement.parentNode.nextElementSibling
    const shownPenel = document.querySelector(".show")
    const active = document.querySelector(".active")
    if(active && !milestoneElement.classList.contains("active")){
       active.classList.remove("active")
    }
    milestoneElement.classList.toggle("active")
     if(!currentPenel.classList.contains("show") && shownPenel)
    shownPenel.classList.remove("show")
    currentPenel.classList.toggle("show")

    showMilestone(id)
}

function showMilestone(id){
  const milestoneImage = document.querySelector(".milestoneImage");
  const name = document.querySelector(".title");
  const description = document.querySelector(".details");
   milestoneImage.style.opacity = "0"
  milestoneImage.src = milestonesData[id].image
  name.innerText = milestonesData[id].name;
  description.innerText = milestonesData[id].description;
}

const milestoneImage = document.querySelector(".milestoneImage");
 milestoneImage.onload = function(){
   this.style.opacity = "1"
 }
   function markMilestone(checkbox, id){
     const doneList = document.querySelector(".doneList");
     const milestoneList = document.querySelector(".milestones")
     const item = document.getElementById(id)

      if(checkbox.checked){
         milestoneList.removeChild(item);
          doneList.appendChild(item)
      } else{
         milestoneList.appendChild(item)
          doneList.removeChild(item)
      }
   }



loadMilestones()