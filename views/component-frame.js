Template.componentFrame.viewmodel({
  template: null,
  dataContext: null,

  containerStyles: {
    padding: '2rem',
    // background: 'white',
    height: '100%'
  },

  onCreated() {
    window.componentFrameReady(({ template, dataContext }) => {
      console.log('Render request received');
      this.template(template);
      this.dataContext(dataContext);
    });
  }
});