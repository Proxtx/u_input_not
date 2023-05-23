export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.arg1 = this.document.getElementById("arg1");
    this.initPromise = this.init();
  }

  async init() {
    await uiBuilder.ready(this.arg1);
    await this.arg1.component.inputDefinition({
      type: "unify",
      name: "Not",
      evaluate: true,
    });
  }

  setConfig(config) {
    this.config = config;
  }

  async setValue(value) {
    await this.initPromise;
    await this.arg1.component.setValue(value.value);
  }

  async getValue() {
    return {
      evaluate: true,
      value: await this.arg1.component.getValue(),
      type: "not",
    };
  }
}
