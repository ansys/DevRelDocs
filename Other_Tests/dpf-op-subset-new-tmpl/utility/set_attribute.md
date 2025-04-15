# utility:set attribute

## Description

Uses the FieldsContainer APIs to modify it.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes |  |
| **Pin 1** | property_name |[`string`](../getting-started/using-data-containers.md#string) | Yes | Supported property names are: "labels". |
| **Pin 2** | property_identifier |[`vector<string>`](../getting-started/using-data-containers.md#vector<string>), [`label_space`](../getting-started/using-data-containers.md#label-space) | No | Value of the property to be set : vector of string or LabelSpace for "labels". |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | fields_container |[`fields_container`](../getting-started/using-data-containers.md#fields-container) | Yes | Returns the modified FieldsContainer. |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | set_attribute | utility.set_attribute | fieldscontainer::set_attribute | None |
