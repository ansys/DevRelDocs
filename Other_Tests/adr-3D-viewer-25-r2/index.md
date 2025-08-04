# Introduction

The Ansys ADR 3D Viewer Web Component is a web component capable of rendering 3D geometry in a web page using different rendering configurations. The component can render in the browser using WebGL or remote over VNC (e.g. accessing EnSight or EnVision remote instances). This component is automatically made available using the \ref websocketserver_cli (the component is served under /ansys###/nexus in that configuration).

For detailed usage and integration information, please refer to the following sections:

- [Getting started](./getting-started.md#instantiation): Basic setup, instantiation, and running examples.
- [Properties and renderer options](./properties.md#renderer-options): Supported HTML attributes and renderer customization options.
- [Methods](./methods.md#methods): JavaScript API methods for interacting with the component.
- [Events](./events.md#event-details): Custom events and event handling.
- [Events test](./test/events-test.md#event-details) events and event handling.
