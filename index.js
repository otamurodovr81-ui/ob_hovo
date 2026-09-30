
const input = document.querySelector("#input");
const btn = document.querySelector(".btn");
const main = document.querySelector(".main");

btn.addEventListener("click", () => {
    if (input.value) {
        gethovo(input.value);
    }
});

window.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        gethovo(input.value);
    }
})

async function gethovo(itom) {
    try {
        const res = await fetch(`https://api.weatherapi.com/v1/current.json?   key=0101d8e61bc04c7fb9580547251103&q=${itom}&aqi=no
     `);
    

        if (res.ok === true && res.status === 200) {
            const data = await res.json();

            main.innerHTML = `<h1 class="text_h1">kutulmoqda ... </h1>`;

            setTimeout(() => {
             
            main.innerHTML = `
            
            <div class="name_time">
              <div>
               <h2>${data.location.name}</h2>
               <p>${data.location.region}</p>
              </div>
               
                <p>${data.location.localtime}</p>
            </div>

            <div class="temp">
                <img
                    src="https:${data.current.condition.icon}"
                    alt="${data.current.condition.text}"
                >

                <h2>
                    ${data.current.temp_c}°C
                </h2>

                <p>
                    ${data.current.condition.text}
                </p>
            </div>

            <div>
                <img src="" alt="">
            </div>

            `;
                main.classList = "main2"

            }, 1000);

            console.log(data);
            
        } else {
            alert("xatolik yuz berd !")
        }

    } catch (error){
        console.log(error);
    };
}