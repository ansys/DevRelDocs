# Metadata and SearchStax

## Common remarks

Version can be as follows:
 "2025 R1", "2025 R1 SP01", "4.1" and "1.0.0.0"


## MD Documentation

### Current behavior

| Config file: docfx.json | Admin UI: Migration Process | Admin UI: File Edited |
|-------------------------|-----------------------------|-----------------------|
| `title:` read. Example: "System Coupling Participant Library 2025 R1"  | Not visible | **Product:** set. Example: "System Coupling Participant Library 2025 R1"  |
| `version:` Not read | Not visible | Not visible |
| `physics:` Not read | Not visible | **Physics** field is visible but not set as it is not read from the config file |

### Expected for Q1

| Config file: docfx.json | Admin UI: Migration Process | Admin UI: File Edited |  Action |  Available to SearchStax
|-------------------------|-----------------------------|-----------------------|------| ------|
| `title:` read. Example: "System Coupling Participant Library" | Not visible | **Product:** set. Example: "System Coupling Participant Library" | Manage as metadata and rename to **documentation title**.  | No
| `version:` read. Example: "2025 R1" | Not visible | Not visible | Manage as metadata | Yes
| `physics:` read. Example: "Multiphysics" | Not visible | **Physics:** set. Example: "Multiphysics"| Manage as metadata | Yes

### To be planned

| Config file: docfx.json               | Admin UI: Migration Process     | Admin UI: File Edited | Available to SearchStax
|------------------------|------------------------------------------------|----------------------| --------|
| `product:` read.  Example: "System Coupling"      | Not visible |  Not visible | Yes
| `status:` read.   Example: "Published"   | Not visible |  Not visible | No
| `access control:` read.  Example: "Public"  | Not visible |  Not visible | No
| `programming language:` read. Example: "C, C++, Fortran, Python"  | Not visible |  Not visible | Yes
| `description:` read.  Example: "Ansys System Coupling integrates multiple individual analyses, enabling you to leverage different physics solvers and/or static external data sources in a single simulation. Verify if this description is used in the HTML metadata description tag." | Not visible |  Not visible | ?
| `date:`  read.  Example: "2025-01-22"     | Not visible |  Not visible | ?

## Doxygen Documentation

### Current behavior

| Config file | Admin UI: Migration Process | Admin UI: File Edited |
|-------------|-----------------------------|-----------------------|
| No file | **Product Name:** to be set. Example: "System Coupling Participant Library 2025 R1" | **Product:** set. Example: "System Coupling Participant Library 2025 R1"|
| No file | **Physics:** to be set. Example: "Multiphysics" | **Physics:** set. Example: "Multiphysics" |
| No file | **Access Control:** to be set. Example: "Public" | **Published:** flagged or not |

### Expected for Q1

| Config file | Admin UI: Migration Process | Admin UI: File Edited | Action | Available to SearchStax
|-------------|-----------------------------|-----------------------|--------|--------|
| No file | **Product Name:** to be set. Example: "System Coupling Participant Library" | **Product:** set. Example: "System Coupling Participant Library" | Manage as metadata and rename to **documentation title**.  | No
| No file | **Version:** to be set. Example: "2025 R1" | **Version:** set. Example: "2025 R1" | Manage as metadata| Yes
| No file | **Physics:** to be set. Example: "Multiphysics" | **Physics:** set. Example: "Multiphysics" | Manage as metadata and rename to **Product families** | Yes
| No file | **Access Control:** to be set. Example: "Public" | **Published:** flagged or not |No change | No


**Required for Next Steps:**

### To be planned

| Config file              | Admin UI: Migration Process     | Admin UI: File Edited | Available to SearchStax
|------------------------|------------------------------|----------------------|------|
| No file | **status:** to be set.  Example: "Published"      | Not visible |  No
| No file | **product:** to be set.  Example: "System Coupling"      | Not visible |  Yes
| No file | **programming language:** to be set. Example: "C, C++, Fortran, Python"  | Not visible |  Yes
| No file | **description:** to be set.  Example: "Ansys System Coupling integrates multiple individual analyses, enabling you to leverage different physics solvers and/or static external data sources in a single simulation. Verify if this description is used in the HTML metadata description tag." | Not visible | ?
| No file | **date:**  to be set.  Example: "2025-01-22"     | Not visible |  ?

## REST API Documentation

Remove **API category** that we are not using or at least do not provide to SearchStax.

### Current behavior

| Config file: JSON/YAML | Admin UI: Migration Process | Admin UI: File Edited | 
|------------------------|-----------------------------|-----------------------|
| `title:` | Not visible | Not visible |
| `version:` | Not visible |Not visible |
| Not defined or read | **Physics:** to be set. Example: "Multiphysics"  | **Physics:** set. Example: "Multiphysics"|
| Not defined or read | **Access Control:** to be set. Example: "Public" | **Published:** flagged or not |
| Not defined or read | **Status:** to be set. Example: "Published" | **Published:** flagged or not |

### Expected for Q1

| Config file: JSON/YAML | Admin UI: Migration Process | Admin UI: File Edited | Action | Available to SearchStax
|------------------------|-----------------------------|-----------------------|--------|----------|
| `title:` | Not visible | Not visible | Manage as metadata | No
| `version:` | Not visible | Not visible | Manage as metadata and provided to SearchStax| Yes
| Not defined | **Physics:** to be set. Example: "Multiphysics"  | **Physics:** set. Example: "Multiphysics"| Manage as metadata and rename to **Product families** | Yes
| Not defined  | **Access Control:** to be set. Example: "Public" | **Published:** flagged or not | No change | No
| Not defined  | **Status:** to be set. Example: "Published" | **Published:** flagged or not | No change | No

### To be planned

| Config file              | Admin UI: Migration Process     | Admin UI: File Edited | Available to SearchStax
|------------------------|------------------------------|----------------------|----------|
| No file | **product:** to be set.  Example: "System Coupling"      | Not visible |  Yes
| No file | **programming language:** to be set. Example: "C, C++, Fortran, Python"  | Not visible |  Yes
| No file | **description:** to be set.  Example: "Ansys System Coupling integrates multiple individual analyses, enabling you to leverage different physics solvers and/or static external data sources in a single simulation. Verify if this description is used in the HTML metadata description tag." | Not visible | ?
| No file | **date:**  to be set.  Example: "2025-01-22"     | Not visible | ?
