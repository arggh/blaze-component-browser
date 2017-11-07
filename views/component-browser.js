import { ComponentBrowser } from '../component-browser';
import styles from './component-browser.m.css';

Template.componentBrowser.viewmodel({
  styles: styles,

  component: null,
  configuration: null,
  customDataContext: null,

  openComponent(component) {
    this.component(component);
    this.customDataContext.reset();
    this.configuration(component.props[0]);
  },

  openConfiguration(configuration) {
    this.customDataContext.reset();
    this.configuration(configuration);
  },

  dataContext() {
    if (this.customDataContext()) {
      return this.customDataContext();
    } else if (this.configuration()) {
      return this.configuration().dataContext;
    }
  },

  frameProps() {
    return {
      template: () => this.component().template,
      dataContext: () => this.dataContext()
    };
  },

  configurations() {
    return this.component().configurations;
  },

  components() {
    return ComponentBrowser.allEntries();
  },

  code(dataContext) {
    return JSON.stringify(dataContext, null, 4);
  }
});

Template.frame.viewmodel({
  iframeLoaded: false,

  autorun() {
    const templateToRender = this.template();
    const dataContext = this.dataContext();
    if (this.iframeLoaded() && templateToRender) {
      this.renderComponent(templateToRender, dataContext);
    }
  },

  renderComponent(template, dataContext) {
    this.templateInstance.renderFunction({ template, dataContext });
  },

  onRendered() {
    const iframe = document.getElementById('iframe');
    const innerWindow = iframe.contentWindow;
    const innerDoc = iframe.contentDocument || innerWindow.document;

    $(innerDoc).ready(() => {
      innerWindow.componentFrameReady = (renderFunction) => {
        this.templateInstance.renderFunction = renderFunction;
        this.iframeLoaded(true);
      };
    });
  }
});
