var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators/custom-element.js';
import { property } from 'lit/decorators/property.js';
import { state } from 'lit/decorators/state.js';
import { classMap } from 'lit/directives/class-map.js';
let RhLogoLockup = class RhLogoLockup extends LitElement {
    constructor() {
        super();
        this.compact = false;
        this._ro = new ResizeObserver(entries => {
            for (const entry of entries) {
                const [contentBoxSize] = entry.contentBoxSize;
                const oldState = this.compact;
                const newState = contentBoxSize.inlineSize < 320;
                ;
                if (oldState !== newState) {
                    this.compact = newState;
                }
            }
        });
    }
    connectedCallback() {
        var _a;
        super.connectedCallback();
        (_a = this._ro) === null || _a === void 0 ? void 0 : _a.observe(this);
    }
    firstUpdated() {
        this.compact = this.offsetWidth < 320;
    }
    render() {
        const { compact, stacked } = this;
        const classes = {
            compact,
            stacked
        };
        return html `
      <div id="container" class="${classMap(classes)}">
        <a id="logo" href="https://www.redhat.com/" title="redhat.com"><slot name="logo">
          <svg preserveAspectRatio="xMinYMid slice" viewBox="0 0 613 145">
            <title>Red Hat</title>
            <path fill="var(--rh-color-brand-red, #ee0000)" d="M127.47,83.49c12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42l-7.45-32.36c-1.72-7.12-3.23-10.35-15.73-16.6C124.89,8.69,103.76.5,97.51.5,91.69.5,90,8,83.06,8c-6.68,0-11.64-5.6-17.89-5.6-6,0-9.91,4.09-12.93,12.5,0,0-8.41,23.72-9.49,27.16A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33C22.27,52,.5,55,.5,74.22c0,31.48,74.59,70.28,133.65,70.28,45.28,0,56.7-20.48,56.7-36.65,0-12.72-11-27.16-30.83-35.78"></path>

            <path d="M160,72.07c1.73,8.19,1.73,9.05,1.73,10.13,0,14-15.74,21.77-36.43,21.77C78.54,104,37.58,76.6,37.58,58.49a18.45,18.45,0,0,1,1.51-7.33l3.66-9.06A6.43,6.43,0,0,0,42.53,44c0,9.22,36.3,39.45,84.94,39.45,12.51,0,30.61-2.58,30.61-17.46a14,14,0,0,0-.31-3.42Z"></path>
            <path fill="light-dark(var(--rh-color-text-primary-on-light, #151515), var(--rh-color-text-primary-on-dark, #ffffff))" d="M579.74,92.8c0,11.89,7.15,17.67,20.19,17.67a52.11,52.11,0,0,0,11.89-1.68V95a24.84,24.84,0,0,1-7.68,1.16c-5.37,0-7.36-1.68-7.36-6.73V68.3h15.56V54.1H596.78v-18l-17,3.68V54.1H568.49V68.3h11.25Zm-53,.32c0-3.68,3.69-5.47,9.26-5.47a43.12,43.12,0,0,1,10.1,1.26v7.15a21.51,21.51,0,0,1-10.63,2.63c-5.46,0-8.73-2.1-8.73-5.57m5.2,17.56c6,0,10.84-1.26,15.36-4.31v3.37h16.82V74.08c0-13.56-9.14-21-24.39-21-8.52,0-16.94,2-26,6.1l6.1,12.52c6.52-2.74,12-4.42,16.83-4.42,7,0,10.62,2.73,10.62,8.31v2.73a49.53,49.53,0,0,0-12.62-1.58c-14.31,0-22.93,6-22.93,16.73,0,9.78,7.78,17.24,20.19,17.24m-92.44-.94h18.09V80.92h30.29v28.82H506V36.12H487.93V64.41H457.64V36.12H439.55ZM370.62,81.87c0-8,6.31-14.1,14.62-14.1A17.22,17.22,0,0,1,397,72.09V91.54A16.36,16.36,0,0,1,385.24,96c-8.2,0-14.62-6.1-14.62-14.09m26.61,27.87h16.83V32.44l-17,3.68V57.05a28.3,28.3,0,0,0-14.2-3.68c-16.19,0-28.92,12.51-28.92,28.5a28.25,28.25,0,0,0,28.4,28.6,25.12,25.12,0,0,0,14.93-4.83ZM320,67c5.36,0,9.88,3.47,11.67,8.83H308.47C310.15,70.3,314.36,67,320,67M291.33,82c0,16.2,13.25,28.82,30.28,28.82,9.36,0,16.2-2.53,23.25-8.42l-11.26-10c-2.63,2.74-6.52,4.21-11.14,4.21a14.39,14.39,0,0,1-13.68-8.83h39.65V83.55c0-17.67-11.88-30.39-28.08-30.39a28.57,28.57,0,0,0-29,28.81M262,51.58c6,0,9.36,3.78,9.36,8.31S268,68.2,262,68.2H244.11V51.58Zm-36,58.16h18.09V82.92h13.77l13.89,26.82H292l-16.2-29.45a22.27,22.27,0,0,0,13.88-20.72c0-13.25-10.41-23.45-26-23.45H226Z"></path>
          </svg>
        </slot></a>
        
        <a id="secondary" href="${this.secondaryHref}">
           <!--<span>Red Hat</span>-->
           <slot name="secondary"></slot>
        </a>
      </div>
    `;
    }
};
RhLogoLockup.styles = css `
    :host {
      display: block;
      place-content: center;
      height: 100%;
      width: 100%;
      }    
    
    #container {
      display: grid;
      grid-template-columns: 32px 1fr;
      grid-template-areas: "logo secondary";
      align-items: center;
      gap: var(--rh-space-lg, 8px);
      
      @container (min-width: 567px) {
       grid-template-columns: 42px 1fr;
        gap: var(--rh-space-lg, 16px);
      }
    }
    
    #logo {
      grid-area: logo;
      display: block;
    }
    
    svg {
      block-size: 23px;
      inline-size: 32px;
  
      @container (min-width: 567px) {
        block-size: 30px;
        inline-size: 42px;
      }
    }  
    
    #secondary {
      grid-area: secondary;
      font-family: var(--rh-font-family-heading, RedHatDisplay, Helvetica, Arial, sans-serif) !important;
      font-weight: 500 !important;
      font-size: var(--rh-font-size-body-text-md, 1rem);
      color: var(--rh-color-text-primary, light-dark(var(--rh-color-text-primary-on-light, #151515), var(--rh-color-text-primary-on-dark, #ffffff)));
      text-decoration: none;
      border-inline-start: 1px solid var(--rh-color-border-subtle, light-dark(var(--rh-color-border-subtle-on-light, #c7c7c7), var(--rh-color-border-subtle-on-dark, #707070)));
      padding-inline-start: var(--rh-space-md, 8px);
      line-height: 1.1;
     
      & > span {
          font-size: 1rem;
      }
      @container (min-width: 567px) {
        font-size: var(--rh-font-size-body-text-xl, 1.25rem);
        padding-inline-start: var(--rh-space-lg, 16px);
      }
      
      & > span { 
        display: none; 
        
        @container (min-width: 768px) {
          display: inline; 
        }
      }
    }     
  `;
__decorate([
    state(),
    __metadata("design:type", Object)
], RhLogoLockup.prototype, "compact", void 0);
__decorate([
    property({ reflect: true, attribute: 'logo-href' }),
    __metadata("design:type", String)
], RhLogoLockup.prototype, "logoHref", void 0);
__decorate([
    property({ reflect: true, attribute: 'secondary-href' }),
    __metadata("design:type", String)
], RhLogoLockup.prototype, "secondaryHref", void 0);
RhLogoLockup = __decorate([
    customElement('rh-logo-lockup'),
    __metadata("design:paramtypes", [])
], RhLogoLockup);