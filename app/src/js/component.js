class MyComponent extends HTMLElement {
    constructor() {
        super();

        // Attachement du shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });

        // Création du template
        const template = document.createElement('template');
        const title = this.getAttribute('title');
        console.log("title : ", title);
        template.innerHTML = `
            <style>
                .container {
                    font-family: Arial, sans-serif;
                    padding: 20px;
                    background-color: #f4f4f4;
                    border: 1px solid #ddd;
                    border-radius: 4px;
                    box-shadow: 0 2px 5px rgba(0,0,0,0.1);
                }
                h2 {
                    color: #333;
                }
                p {
                    color: #666;
                }
            </style>
            <div class="container">
                <h2> ${title} </h2>
                <p>This is a simple web component.</p>
            </div>
        `;

        // Clonage et attachement du template au shadow DOM
        shadow.appendChild(template.content.cloneNode(true));
    }
}

// Déclaration du custom element
customElements.define('my-component', MyComponent);
