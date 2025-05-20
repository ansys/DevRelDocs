# Metadata and SearchStax

## Common remarks

Version can be as follows:
 "2025 R1", "2025 R1 SP01", "4.1", and "1.0.0.0"

The following sections detail the current metadata management across different content types and outline the required changes. In summary, we require all content types to include "Product collection" metadata that can be configured either through a configuration file (for MD doc) or the Admin UI (for the other content types), ensuring it is accessible to SearchStax.

In addition to managing this metadata, there is a need for a bulk action to update existing content in the Prod env concerning:

- Product collection
- Version
- Physics (less urgent)

Another less urgent request, but one that would facilitate working in a more consistent environment, is to standardize the document title across all content types. Currently, as described in the tables below, this is not the case. The term "Product/Product name" is not used correctly. It actually represents the document title (e.g., "AVxcelerate Simulation Framework 2025 R1"). Renaming this metadata to "Doc title" or "Documentation title" universally would be more logical. Subsequently, we could potentially create a "Product" metadata that accurately represents the product (e.g., "Ansys AVxcelerate").


## MD Documentation

### Current behavior

| Config file: docfx.json | Admin UI: Migration process | Admin UI: File edited |  Metadata name | Available to SearchStax
|-------------------------|-----------------------------|-----------------------|------|------|
| `title`: read. Example: "System Coupling Participant Library" | Not visible | **Product:** set. Example: "System Coupling Participant Library". | **Product** | No
| `version:` read. Example: "2025 R1" | Not visible | visible |**Version** | Yes
| `physics`: read. Example: "Multiphysics" | Not visible | **Physics:** set. Example: "Multiphysics"| **Physics** | Yes

### Expected for Q2

| Config file: docfx.json | Admin UI: Migration process | Admin UI: File edited |  Action |  Metadata name | Available to SearchStax
|-------------------------|-----------------------------|-----------------------|------| ------|------|
| `title`: read. Example: "System Coupling Participant Library" | Not visible | **Product:** set. Example: "System Coupling Participant Library" | Manage as metadata and rename to **Documentation title**. | **Documentation title** | No
| `version`: read. Example: "2025 R1" | Not visible | visible | Work as expected | **Version** | Yes
| `physics`: read. Example: "Multiphysics" | Not visible | **Physics:** set. Example: "Multiphysics"| Work as expected  |**Physics** | Yes
| `product collection`: read. Example: "Shared Technology" | Not visible | **Product collection:** set. Example: "Shared Technology"| Manage as metadata and make it available for SearchStax |**Product collection** | Yes


## Doxygen Documentation

### Current behavior

| Config file | Admin UI: Migration process | Admin UI: File edited |Available to SearchStax
|-------------|-----------------------------|-----------------------|----|
| No file | **Product Name:** to be set. Example: "System Coupling Participant Library 2025 R1" | **Product:** set. Example: "System Coupling Participant Library 2025 R1"| No
| No file | **Physics:** to be set. Example: "Multiphysics" | **Physics:** set. Example: "Multiphysics" | Yes
| No file | **Version:** to be set. Example: "2025 R1" | **Version:** set. Example: "2025 R1" | Yes
| No file | **Access Control:** to be set. Example: "Public" | **Published:** flagged or not | No

### Expected for Q2

| Config file | Admin UI: Migration process | Admin UI: File edited | Action |Metadata name| Available to SearchStax
|-------------|-----------------------------|-----------------------|--------|--------|--------|
| No file | **Product Name:** to be set. Example: "System Coupling Participant Library" | **Product:** set. Example: "System Coupling Participant Library" | Manage as metadata and rename to **Documentation title**.  | **Documentation title**| No
| No file | **Version:** to be set. Example: "2025 R1" | **Version:** set. Example: "2025 R1" | Work as expected| **Version** |Yes
| No file | **Physics:** to be set. Example: "Multiphysics" | **Physics:** set. Example: "Multiphysics" | Work as expected | **Physics** | Yes
| No file | **Access Control:** to be set. Example: "Public" | **Published:** flagged or not |No change | | No
| No file | **Product collection:** to be set. Example: "Shared Technology" | **Product collection:** flagged or not | Manage as metadata and make it available for SearchStax| **Product collection:** | Yes


## REST API Documentation

Remove **API category** that we are not using or at least do not provide to SearchStax.

### Current behavior

| Config file: JSON/YAML | Admin UI: Migration process | Admin UI: File edited | 
|------------------------|-----------------------------|-----------------------|
| `title`: | Not visible | Not visible |
| `version`: | Not visible |Not visible |
| Not defined or read | **Physics:** to be set. Example: "Multiphysics"  | **Physics:** set. Example: "Multiphysics"|
| Not defined or read | **Access Control:** to be set. Example: "Public" | **Published:** flagged or not |
| Not defined or read | **Status:** to be set. Example: "Published" | **Published:** flagged or not |

### Expected for Q2

| Config file: JSON/YAML | Admin UI: Migration process | Admin UI: File edited | Action |  Metadata name| Available to SearchStax
|------------------------|-----------------------------|-----------------------|--------|----------|----------|
| `title`: | Not visible | Not visible | Manage as metadata | | No
| `version`: | Not visible | Not visible | Manage as metadata | **Version** | Yes
| Not defined | **Physics:** to be set. Example: "Multiphysics"  | **Physics:** set. Example: "Multiphysics"| Work as expected| **Physics**| Yes
| Not defined  | **Access Control:** to be set. Example: "Public" | **Published:** flagged or not | No change | No
| Not defined  | **Status:** to be set. Example: "Published" | **Published:** flagged or not | No change | No
| Not defined  | **Product collection:** to be set. Example: "Optics" | **Product collection:** set. Example: "Optics" | Manage as metadata and make it available for SearchStax | Yes

