# utility:merge materials

## Description

Assembles a set of materials into a unique one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | materials |[`vector<shared_ptr<materials>>`](../getting-started/using-data-containers.md#vector<shared-ptr<materials>>), [`materials`](../getting-started/using-data-containers.md#materials) | Yes | A vector of materials to merge or materials from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merged_materials |[`materials`](../getting-started/using-data-containers.md#materials) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_materials | utility.merge_materials | merge::materials | None |
