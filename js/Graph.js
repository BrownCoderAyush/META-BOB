// Grabing elements from html 
let ctx = document.getElementById("myChart").getContext("2d");
// Making a bar chart using Chart.Js
let myChart = new Chart(ctx, {
    type: "bar",
    data: {
        plugins: {
            title: {
                display: true,
                text: 'Custom Chart Title'
            }
        },
        labels: [],
        datasets: [
            {
                label: "Repository Information",
                data: [],
                backgroundColor: ["red", "yellow", "blue", "black", "pink", "green"],
                borderColor: [],
                borderWidth: 3
            }

        ]
    },
    options: {
        responsive: false,
    },
});

// function for adding data to the graph
function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}


async function dataProblems (index){
    let response = await fetch(`https://dev-api.metabob.com/repository/${index}/analysis?include=problems`);
    let data = await response.json();
    return data;
}
function dataFetch() {
    for (let index = 69; index < 80; index++) {
        dataProblems(index).then((data)=>{
           addData(myChart,index, data.total_problems);

        });
        
    }
}
dataFetch();
let id =[69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101];
let ref_id = [905,908,911,916,918,920,922,926];
// let element = document.getElementsByClassName("collapse")[0];
// let string =``;
// let des = ``;
// for(let count = 0;count<6;count++){
    // fetch(`https://dev-api.metabob.com/analysis/${ref_id[count]}/problems/`).then(response=>response.json()).then((data)=>{
            // console.log(data);

    //     des=``;
        // data.problems.forEach((element)=>{
            // console.log(element.location);
            // console.log(element);
            
    //         des+=`<h6>Location</h6>-<p>${element.location}</p>\n<h6>Path</h6>-<p>${element.path}</p>\n<h6>Category</h6>-<p>${element.category.name}</p>\n<h6>Category Description</h6>-<p>${element.category.description}</p>\n`
        // })
    //    string =+` <button class="collapsible">ID=${id[count]}/Reference_id=${ref_id[count]}</button>
    //    <div class="content">
    //       ${des};   
    //    </div>`;

    //     console.log(count);
    // })
// }
// element.innerHTML=string;

