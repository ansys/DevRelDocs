# Local documentation

This section details how to:

- Generate the DPF Framework documentation including operator specifications, as Markdown files using command-line tools.
- Build and serve a local HTML website to view the generated documentation using a static site generator such as DocFX.

## Generating documentation



## Viewing documentation locally

This guide explains how to install **DocFX** and use it to generate and serve a local HTML documentation site from your Markdown files.

### Install DocFX

#### Prerequisites

Before installing DocFX, make sure you have the following installed:

- [.NET SDK (6.0 or later)](https://dotnet.microsoft.com/download)

#### Installation steps

You can install DocFX as a global .NET tool:

```bash
dotnet tool install -g docfx
```

> ✅ This makes the `docfx` command available globally from the terminal.

To verify the installation:

```bash
docfx --version
```

### Set Up the documentation site

#### Initialize a DocFX Project

Navigate to the root folder of your documentation and run:

```bash
docfx init -q
```

This creates a basic DocFX project structure with a `docfx.json` configuration file.

#### Customize the Configuration

Edit the `docfx.json` file to point to your Markdown documentation files. For example:

```json
{
  "metadata": [],
  "build": {
    "content": [
      {
        "files": ["**/*.md"],
        "exclude": ["obj/**", "_site/**"]
      }
    ],
    "destination": "_site"
  }
}
```

Make sure your Markdown files are located in the correct folders relative to the configuration.

### Build the documentation

To generate the static HTML site:

```bash
docfx build
```

The site will be generated in the `_site` directory (or the path specified in `docfx.json`).

### Serve the documentation locally

To view the documentation in your browser:

```bash
docfx serve _site
```

Then open your browser and go to:
`http://localhost:8080`


**Notes**

- You can add a custom theme or use templates to improve the design of the documentation.
- Consider placing your `docfx.json` in the root of your documentation project for easier builds.
- For more advanced configuration, see the official [DocFX documentation](https://dotnet.github.io/docfx/).

