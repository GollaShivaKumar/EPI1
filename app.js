

let maindiv= React.createElement("div",{id:"parent"},

React.createElement("div",{id:"chai"},

[React.createElement("h1",{},"hello react world"),
React.createElement("h2",{},"by React.javaScript"),
React.createElement("img",{src:"./plant.jpg"})]
),
React.createElement("div",{id:"chai1"},

[React.createElement("h1",{},"hello react world"),
React.createElement("h2",{},"by React.javaScript"),
React.createElement("img",{src:"./plant.jpg"})]
)

)

let root=ReactDOM.createRoot(document.getElementById('root'));

root.render(maindiv)



