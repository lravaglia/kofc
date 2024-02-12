/**
 * @type {string}
 */
const template = `
        <style>
            .card-root {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
            }

            .card {
                border-radius: 8px;
                display: flex;
                flex-direction: column;
                align-items: center;
                aspect-ratio: 1 / 1.5;
                width: 256px;
                background-color: var(--primary);
                color: var(--background)
            }

            .text-container {
                width: 256px;
            }

            .hero-container {
                width: 256px;
                height: 256px;
            }

            .text {
                margin: 0.5rem;
                text-align: justify;
                text-justify: inter-cluster;
            }
        </style>
        <div class="card-root">
            <div class="card">
                <div class="hero-container">
                    <slot name="hero" />
                </div>
                <div class="text-container">
                    <div class="text">
                        <div>
                            <slot name="text" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
`;

class Card extends HTMLElement {
    constructor() {
        super();
        const shadow = this.attachShadow({mode: "open"});
        shadow.innerHTML = template;
    }
}

export default Card;