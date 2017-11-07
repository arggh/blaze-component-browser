import setupRoutes from './route';

export const ComponentBrowser = {
  addComponent({ name, template, props }) {
    const entry = new ComponentBrowser.Entry({
      name: name,
      template: template,
      props: props
    });
    this._components[entry.name] = entry;
    this._componentsDict.set(entry.name, true);
  },

  configure(path) {
    setupRoutes(path);
  },

  Entry({ name, template, props }) {
    this.name = name;
    this.template = template;
    this.props = props;
    this.function = null;
  },

  allEntries() {
    this._componentsDict.allDeps.depend();
    const entries = Object.values(this._components);
    return entries;
  },
  
  _components: {},
  _componentsDict: new ReactiveDict()
}
