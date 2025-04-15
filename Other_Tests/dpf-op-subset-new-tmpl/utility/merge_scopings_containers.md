# utility:merge scopings containers

## Description

Assembles a set of scopings containers into a unique one.

## Inputs


| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | scopings_containers |[`vector<shared_ptr<scopings_container>>`](../getting-started/using-data-containers.md#vector<shared-ptr<scopings-container>>), [`scopings_container`](../getting-started/using-data-containers.md#scopings-container) | Yes | A vector of scopings containers to merge or scopings containers from pin 0 to ... |

## Outputs

| Input | Name| Expected type(s) | Required | Description |
|-------|-----|------|----------|-------------|
| **Pin 0** | merged_scopings_container |[`scopings_container`](../getting-started/using-data-containers.md#scopings-container) | Yes |  |

## Configurations

| Name| Expected type(s) | Default value | Description |
|-----|------|----------|-------------|
| **Pin mutex** |[`bool`](../getting-started/using-data-containers.md#bool) | false | If this option is set to true, the shared memory is prevented from being simultaneously accessed by multiple threads. |

## Scripting

| Category| Plugin | Scripting name | Full name | Internal name | License |
|---------|--------|----------------|-----------|---------------|---------|
| **utility** | core | merge_scopings_containers | utility.merge_scopings_containers | merge::scopings_container | None |
