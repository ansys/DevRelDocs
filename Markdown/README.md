# Markdown metadata and table of contents

This guide explains how to structure metadata and table of contents (TOC) files for the Developer Portal. We follow the [docfx](https://dotnet.github.io/docfx/index.html) guidelines established by Microsoft, with specific restrictions.

**Supported formats:**

- GitHub-flavored Markdown
- Mathematical symbols and equations in LaTeX and MathML format
- UTF-8 encoding (required)

**Not supported:**

- Additional docfx extensions to Markdown
- Non-standard encoding formats such as Windows-1252

**Note:** All files must be encoded as [UTF-8](https://en.wikipedia.org/wiki/UTF-8).

## Table of contents

To add a TOC, create a file named `toc.yml`. Each documentation package must have exactly one `toc.yml` file in its root directory.

The following example shows the structure for a simple YAML TOC:

```yaml
Items:
- name: Tutorial
  items:
  - name: Introduction
    href: tutorial.md
  - name: Step 1
    href: step-1.md
  - name: Step 2
    href: step-2.md
  - name: Step 3
    href: step-3.md
```

The YAML document is a tree of TOC nodes. Each node supports the following properties:

- `name`: The display name for the TOC node.
- `href`: The path the TOC node leads to. This property is optional because a node can exist solely to parent other nodes.
- `items`: An array listing child nodes if the node has children.
- `uid`: The unique identifier of the article. You can use this instead of `href`.

### Nested TOCs

**Note:** Nested TOCs are not yet supported.

When nested TOCs become available, you will be able to nest a TOC within another TOC by setting the `href` property to point to the `toc.yml` file that you want to nest. This structure enables reuse of TOC structures across multiple TOC files.

For more information, see the [docfx table of contents documentation](https://dotnet.github.io/docfx/docs/table-of-contents.html).

## Metadata

### Mandatory metadata

The [`docfx.json`](https://dotnet.github.io/docfx/docs/config.html#metadata) file is required and serves as the configuration file for the entire documentation package.

#### Global metadata

For metadata attributes that are consistent across all content, use the `globalMetadata` property in `docfx.json` to apply the same metadata to all Markdown pages. See the examples below for allowed and supported key-value pairs.

**Required fields for all documentation types:**

- `title`
- `summary`
- `version`
- `physics`

**Additional requirements for REST APIs:**

- `doc_type` must be set to `"rest_api"`. If this value is not set or is missing, a Markdown migration is assumed.
- The `title` and `version` are inferred from the API specification file.
- `product` is required and specifies the product name.
- Follow the required directory structure described in the REST API content structure section.

**Additional requirements for Doxygen:**

- `doc_type` must be set to `"doxygen"`. If this value is not set or is missing, a Markdown migration is assumed.
- `product` is required and specifies the product name.

#### Markdown documentation example

The following example shows the mandatory values in the `docfx.json` file for Markdown documentation:

```json
{
  "build": {
    "globalMetadata": {
      "title": "Documentation title",
      "summary": "A brief description of this documentation package. Note that this is not a product description, but a description of the documentation.", // Required but not used by the system
      "version": "Version_string", // Required but not used by the system
      "physics": "Autonomous Vehicle Simulation"
    }
  }
}
```

**Field descriptions:**

- `title`: Title of the documentation package
- `summary`: Brief description of the documentation (not the product)
- `version`: Version of the documentation
- `physics`: Product collection category (historical naming convention)


#### REST API documentation example

The following example shows the mandatory values in the `docfx.json` file for REST API documentation:

```json
{
  "build": {
    "globalMetadata": {
      "doc_type": "rest_api",
      "product": "AVxcelerate Sensors",
      "summary": "A brief description of this documentation package. Note that this is not a product description, but a description of the documentation.",
      "physics": "Autonomous Vehicle Simulation",
    }
  }
}
```

**Field descriptions:**

- `doc_type`: Must be set to `"rest_api"` to indicate REST API documentation
- `product`: Name of the product (not the documentation)
- `summary`: Brief description of the documentation (not the product)
- `physics`: Product collection category (historical naming convention)


#### Doxygen documentation example

The following example shows the mandatory values in the `docfx.json` file for Doxygen documentation:

```json
{
  "build": {
    "globalMetadata": {
      "title": "Documentation title",
      "summary": "A brief description of this documentation package. Note that this is not a product description, but a description of the documentation.",
      "version": "Version_string",
      "doc_type": "doxygen",
      "physics": "Autonomous Vehicle Simulation",
    }
  }
}
```

**Field descriptions:**

- `title`: Title of the documentation package
- `summary`: Brief description of the documentation (not the product)
- `version`: Version of the documentation
- `doc_type`: Must be set to `"doxygen"` to indicate Doxygen documentation
- `physics`: Product collection category (historical naming convention)


### Optional metadata

Metadata for individual Markdown files follows the established YAML frontmatter format in Markdown, specifically as defined by [docfx](https://dotnet.github.io/docfx/index.html).

**Key points:**

- All metadata keys must be in lowercase.
- Metadata fields are categorized as required, recommended, or optional (see the metadata table below for details).
- When metadata is set at the file level, the value is added to the value(s) already set at the global level.
- Any frontmatter keys and values are optional for individual Markdown files because global metadata is already specified in the mandatory `docfx.json` file.

Each Markdown file can contain YAML-formatted metadata frontmatter, separated from the main content by three dashes (`---`).

#### Markdown documentation with optional metadata example

The following example shows the `docfx.json` file for Markdown documentation with optional metadata:

```json
{
  "build": {
    "globalMetadata": {
      "title": "Title of the documentation",
      "summary": "A brief description of this documentation package. Note that this is not a product description, but a description of the documentation.",
      "version": "Version_string",
      "physics": "term(s)",
      "product": "term", 
      "status": "published",
      "access control": "internal",
      "programming language": "term(s)",
      "author": "First Last",
      "author email": "me@example.com",
      "description": "A description text here",
      "date": "2023-07-19"
    }
  }
}
```

**Note:** The `description` field is typically used only at the page level.

## REST API content structure

**Note:** This structure is subject to change in future releases.

Organize REST API content as follows:

- **API specification file**: Place in the main directory
- **API description Markdown file**: Place in a `description` subdirectory
- **Changelog Markdown file**: Place in a `changelog` subdirectory

This structure ensures proper data mapping and tab order. Refer to the required metadata described in the previous sections.

### Supported metadata keys

The following table describes the metadata fields that can be defined in the global `docfx.json` file and in individual Markdown frontmatter.

**Column descriptions:**

- **Field**: The metadata field name
- **Requirement**: Whether the field is required, optional, or recommended
- **Description**: Explanation of the field's purpose and usage
- **Global**: Whether the field can be set in `docfx.json`
- **Individual**: Whether the field can be set in individual file frontmatter
- **HTML name**: The HTML meta tag name or implementation status
- **Request**: Any pending implementation requests or changes

| Field                      | Requirement                          | Description | Global | Individual | HTML name | Request |
|----------------------------|--------------------------------------|-------------|--------|------------|-----------|---------|
| **Title**                  | Required                             | Title of the documentation package.  | Yes | ? Currently, it is derived from the first H1 heading in the Markdown file. | Served as `<meta name="product">` | Remove version information from the title and serve as `<meta name="name">`|
| **Version**                | Required                             | Package version string.  | Yes | No (value from `docfx.json` is always used) | Not implemented | To be used by the backend to build the doc title as `title` + `version` (as currently done for REST APIs). Serve to SEO as `<meta name="version">` instead of including in title |
| **Summary**                | Required                             | Brief description of the documentation package displayed on landing pages.  | Yes | No | Not implemented | Currently used for internal purposes only, not served to SEO |
| **Physics**                | Required                             | Product collection category terms. Uses "Physics" for historical reasons. See `physics.yml` in the [taxonomies repository](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies) for available terms. | Yes | Yes | Served as `<meta name="physics">` | Rename to `product_collection` and serve as `<meta name="product_collection">` |
| **Product**                | Recommended (to become mandatory) | Product category terms. See `product.yml` in the [taxonomies repository](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies) for available terms. | Yes | Yes | Not implemented | Make mandatory and serve to SEO as `<meta name="product">` |
| **Status**                 | Recommended (to become mandatory) | Publication status: `published` or `unpublished`. If not provided, content is published immediately upon import. | Yes | Yes | Not implemented | Make mandatory. Enable bulk publish action for unpublished production content. |
| **Access Control**         | Optional                             | Access control term. If not provided, content is publicly accessible. May be overridden by package-level access controls. See `access.yml` in the [taxonomies repository](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies) for available terms. | Not implemented | Yes | Not implemented | Implement as global metadata (currently only works at file level) |
| **Description**            | Optional                             | Content description for SEO purposes. Can only be set at a file level and describes the file. | No | Yes | Implement it and served as `<meta name="description">` | |
| **Programming Language**   | Optional                             | Programming language terms. See `programming_language.yml` in the [taxonomies repository](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies) for available terms. | Yes | Yes | Not implemented | No request |
| **Author**                 | Optional                             | First and last name of the content author. If not provided, the Dev Portal user matching the author email is used. | Yes | Yes | Not implemented |No request |
| **Author Email**           | Optional                             | Author email address. If not provided or if no matching Dev Portal user with content editor rights is found, defaults to the Ansys developer account. | Yes | Yes | Not implemented | No request |
| **Date**                   | Optional                             | Creation date in ISO-8601 format (yyyy-mm-dd). If not provided, uses the import date. Last updated date is automatically derived from GitHub APIs. | Yes | Yes | Not implemented | No request |
| **Keywords**               | Optional                             | Keywords for the documentation package to enhance AI and SEO discoverability. | Yes | Yes | Not implemented | Implement and serve as `<meta name="keywords">` |

#### Proposed Markdown documentation example

The following example shows the expected structure of the `docfx.json` file for Markdown documentation after implementing the proposed metadata changes:

```json
{
  "build": {
    "globalMetadata": {
      "title": "Documentation title",
      "summary": "A brief description of this documentation package. Note that this is not a product description, but a description of the documentation.", // Required but not used by the system
      "version": "Version_string", 
      "product_collection": "Autonomous Vehicle Simulation",
      "product": "Product name",
      "status": "published"
    }
  }
}
```

## GitHub technical limitations

Be aware of the following GitHub API limitations when organizing your documentation:

### File and directory limits

- Maximum 1,000 files per directory
- Maximum 1 MB for text files
- Maximum 100 MB per image or asset file

### GitHub API constraints

According to the [GitHub documentation](https://docs.github.com/en/rest/repos/contents?apiVersion=2022-11-28#get-repository-content):

- To retrieve repository contents recursively, use the Git Trees API
- The directory listing API has an upper limit of 1,000 files
- Download URLs expire and are intended for single use
- To prevent expiration, use the contents API to obtain a fresh download URL for each download

### File size handling

GitHub handles different file sizes as follows:

**Files 1 MB or smaller:**

- All endpoint features are supported

**Files between 1-100 MB:**

- Only the raw or object custom media types are supported
- When using the object media type, the `content` field is an empty string and the `encoding` field is `"none"`
- Use the raw media type to retrieve the contents of these larger files

**Files greater than 100 MB:**

- The endpoint is not supported
- Consider alternative storage solutions or break content into smaller files
