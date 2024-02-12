/**
 * Displays a card with image/video and text.
 * @class HeroCard
 */
export default class HeroCard extends HTMLElement {
  static template = /* HTML */ `
    <link rel="stylesheet" href="/hero-card/styles.css" />
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

  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.innerHTML = HeroCard.template;
  }
}
