 const input = document.getElementById("input");
    const heading = document.getElementById("heading");
    const button = document.getElementById("btn");

    const myFunc = ()=>{
      let now = new Date();
      let year = now.getFullYear();
      let birthYear = parseInt(input.value);
      let age = year - birthYear;
      // heading.textContent = `Your Birth Year is ${age}`;

      if(!birthYear){
        heading.textContent = "Please enter your birth year";
      }else if(year < birthYear){
        heading.textContent = "Your birth Year is Invalid";
      }else{
        if(age < 18){
          heading.textContent = `You are a minor ${age}`;
        }else{
          heading.textContent = `You are an adult ${age}`
        }
      }
    };
button.addEventListener("click",()=>{
   myFunc()
});
input.addEventListener("keydown",(event)=>{
  if(event.key === "Enter"){
    myFunc();
  }
});
