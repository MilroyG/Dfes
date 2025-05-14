// document.addEventListener("DOMContentLoaded", () => {
//     const chartsWrapper = document.getElementById("charts-wrapper");
//     const categoryFilter = document.getElementById("category-filter");
//     let charts = {};

//     // Function to render all charts
//     function renderAllCharts() {
//         Object.keys(chartData).forEach(category => {
//             const ctx = document.getElementById(`chart-${category.replace(/ /g, '_')}`).getContext("2d");

//             // Prepare data for chart
//             const data = chartData[category];
            
//             charts[category] = new Chart(ctx, {
//                 type: "line",
//                 data: {
//                     labels: data.map(item => item.year),
//                     datasets: [{
//                         label: category,
//                         data: data.map(item => item.figure),
//                         borderColor: getRandomColor(),
//                         backgroundColor: "rgba(0, 123, 255, 0.2)",
//                         fill: true,
//                         tension: 0.1,
//                         pointRadius: 5,
//                         pointHoverRadius: 7
//                     }]
//                 },
//                 options: {
//                     responsive: true,
//                     plugins: {
//                         legend: {
//                             display: true,
//                             labels: {
//                                 color: "#333",
//                                 font: {
//                                     size: 14,
//                                     weight: "bold"
//                                 }
//                             }
//                         },
//                         tooltip: {
//                             enabled: true,
//                             mode: "index",
//                             intersect: false
//                         }
//                     },
//                     scales: {
//                         x: {
//                             title: {
//                                 display: true,
//                                 text: "Year",
//                                 color: "#555",
//                                 font: {
//                                     size: 14,
//                                     weight: "bold"
//                                 }
//                             },
//                             grid: {
//                                 color: "rgba(200, 200, 200, 0.2)"
//                             }
//                         },
//                         y: {
//                             title: {
//                                 display: true,
//                                 text: "Figure",
//                                 color: "#555",
//                                 font: {
//                                     size: 14,
//                                     weight: "bold"
//                                 }
//                             },
//                             beginAtZero: true,
//                             grid: {
//                                 color: "rgba(200, 200, 200, 0.2)"
//                             }
//                         }
//                     }
//                 }
//             });
//         });
//     }

//     // Helper function to generate random colors for multiple charts
//     function getRandomColor() {
//         const letters = "0123456789ABCDEF";
//         let color = "#";
//         for (let i = 0; i < 6; i++) {
//             color += letters[Math.floor(Math.random() * 16)];
//         }
//         return color;
//     }

//     // Filter function
//     categoryFilter.addEventListener("change", (e) => {
//         const selectedCategory = e.target.value;

//         // Hide all charts
//         const allChartBoxes = document.querySelectorAll(".chart-box");
//         allChartBoxes.forEach(box => {
//             box.style.display = "none";
//         });

//         if (selectedCategory === "all") {
//             // Show all charts
//             allChartBoxes.forEach(box => {
//                 box.style.display = "block";
//             });
//         } else {
//             // Show only the selected category
//             const selectedBox = document.querySelector(`.chart-box[data-category="${selectedCategory}"]`);
//             if (selectedBox) {
//                 selectedBox.style.display = "block";
//             }
//         }
//     });

//     // Initial render
//     renderAllCharts();
// });
