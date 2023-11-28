const loadAllData = () => {
    
    fetch("https://openapi.programming-hero.com/api/videos/category/1000")
   .then((res) => res.json())
   .then((data) => displayData(data.data));
};
loadAllData()

const loadMusicData = () => {
    
    fetch("https://openapi.programming-hero.com/api/videos/category/1001")
   .then((res) => res.json())
   .then((data) => displayData(data.data));
};
const loadComedyData = () => {
    
    fetch("https://openapi.programming-hero.com/api/videos/category/1003")
   .then((res) => res.json())
   .then((data) => displayData(data.data));
};
const loadDrawingData = () => {
    
    fetch("https://openapi.programming-hero.com/api/videos/category/1005")
   .then((res) => res.json())
   .then((data) => displayData(data.data));
};

// convert minutes
const convater = (minutes) => {
    if (minutes < 0) {
      return 'Invalid duration';
    }
  
    const minutesInHour = 60;
    const minutesInDay = 24 * minutesInHour;
    
  
   
   
    const hours = Math.floor((minutes % minutesInDay) / minutesInHour);
    const remainingMinutes = minutes % minutesInHour;
  
    const parts = [];
  

  
    if (hours > 0) {
      parts.push(`${hours} hr${hours > 1 ? 's' : ''}`);
    }
  
    if (remainingMinutes > 0) {
      parts.push(`${remainingMinutes} mi${remainingMinutes > 1 ? 'n' : ''}`);
    }
  
    if (parts.length === 0) {
      return 'Just now';
    }
  
    return parts.join(', ') + ' ago';
  };
  


const displayData = (data) => {
     
    if(data.length == 0)
    {
       const name = document.getElementById("name")
       name.innerHTML = " "
       const div = document.createElement("div")
       div.innerHTML = `
       <div class="text-center">
       <img  class =" " src="./img/Icon.png" alt="">
       <p> Sorry, There is no content.</p>
     </div>
       `
       name.appendChild(div)
        
    }
    else
    {
        const cardContainer = document.getElementById("card-container")
        cardContainer.innerHTML = ` `
        data.forEach(ele => {
          
            console.log(ele )
            let blueverify =
            ele.authors[0].verified == true
              ? '<img width="15px" height="15px" src="./img/verified.png"}>'
              : '';

       
        const div = document.createElement("div")
        div.classList.add("col")
        div.innerHTML = ` 
        
        <div class="card">
            <div class = "position-relative">
            
            <img src= ${ele.thumbnail} class="card-img-top" alt="Logo"> 
            <p class = " position-absolute bottom-0 end-1 text-white font-weight-bolder ms-3"> ${convater(ele.others.posted_date)} </p>
            
            </div>
            
             
            <div class="card-body d-flex">
                <div>
                    <img width="30px" height="30px" class = "rounded-circle " src= ${ele.authors[0].profile_picture} class="card-img-top" alt="Logo"> 
                </div>
                <div>
                    <h5 class="card-title">${ele.title}</h5>
                
                    <div class = " d-flex"> 
                    <p class="card-text">${ele.authors[0].profile_name}</p>
                    <p> ${blueverify}</p>
                    </div>
                    <p class="card-text">${ele.others.views} views</p>
                    <p
                
                </p>
                 </div>
                </div>
               
              
          </div>

        `
        cardContainer.appendChild(div)
    });

    }


  
   
};