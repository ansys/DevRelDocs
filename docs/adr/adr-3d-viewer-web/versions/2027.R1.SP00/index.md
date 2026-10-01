# Introduction

The Ansys ADR 3D Viewer Web Component is a web component capable of rendering 3D geometry in a web page using different rendering configurations. The component can render in the browser using WebGL or ThreeJS. The hosting ADR installation serves the component under `/ansys###/nexus`. This component can be embedded into any web framework. It is meant to be used by applications that are interested only in the 3D rendering capabilities of ADR and not its entire report component. No physics-specific requirement is implemented. The ADR 3D Viewer Web Component supports all browser and OSes that are officially supported by Ansys in the 27R1 version.

For detailed usage and integration information, please refer to the following sections:

- [Getting started](./getting-started.md): Basic setup, instantiation, and running examples.
- [Properties and renderer options](./properties.md): Supported HTML attributes and renderer customization options.
- [Methods](./methods.md): JavaScript API methods for interacting with the component.
- [Events](./events.md): Custom events and event handling.
