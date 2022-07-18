$(document).ready(function() {
    function createEl(htmlString, attrs, ...children) {
      if (typeof htmlString !== "string") {
        throw Error("Argument 'htmlString' is required and must be a string");
      }
    
      const el = document.createElement(htmlString);
    
      if (typeof attrs === "object") {
        for (let key in attrs) {
          if (key.substring(0, 2) === "on") {
            el.addEventListener(key.substring(2).toLowerCase(), attrs[key]);
          } else {
            el.setAttribute(key, attrs[key]);
          }
        }
      }
    
      children.forEach(function(child) {
        let node;
    
        if (child.constructor.name.includes("Element")) {
          node = child;
        } else {
          node = document.createTextNode(child);
        }
    
        el.appendChild(node);
      });
    
      return el;
    };
  
     
  
      const pageEl = document.querySelector("#page");
      
      const containerEl = createEl("div", {class: "container"},
        createEl("div", {class: "card mb-3"}, 
          createEl("img", {class: "card-img-top", style: "width: 5px", src: currentEvent.image || "https://via.placeholder.com/350x150"}),
          createEl("div", {class: "card-body"}, 
            createEl("h1", {class: "card-title"}, currentEvent.title || ""),
            createEl("h2", {class: "text-muted"}, currentEvent.subtitle || ""),
            createEl("p", {class: "card-text mt-3"}, currentEvent.description || createLoremIpsum(100)),
            createEl("a", {class: "btn btn-primary", href: "tickets.html"}, "Buy Tickets")
          )
        ),
        
      )
      pageEl.appendChild(containerEl)
    }

    module.exports = createEl;