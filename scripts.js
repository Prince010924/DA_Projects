function getFormValues(){
    let firstName = document.getElementById("fname").value;
    let lastName = document.getElementById("lname").value;
    let licensePlate = document.getElementById("numberplate").value;
    let carName = document.getElementById("cars").value;
    let Shade = document.getElementById("shade").value;
   console.log(`
        first name: ${firstName}\n
        last name: ${lastName} \n
        Number Plate: ${licensePlate} \n
        Name of car: ${carName} \n
        Want Shade: ${Shade} \n



    `)


}