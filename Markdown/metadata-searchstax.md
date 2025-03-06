# Metadata and SearchStax

Actually, this isn't an issue. We will continue using "Physics" as the product collection, as we have been doing so far.

I've noted that the "Product collection" metadata is defined, but there's currently no way to associate a documentation package with a Product collection via the Drupal Admin UI during the migration process. The only content type where the Product collection can be configured is the "Book" type. However, upon review, I couldn’t find any books assigned with this metadata, suggesting it hasn't been utilized. This needs verification.

If it turns out we are not using this metadata, my suggestion would be to remove the existing "Product collection" metadata and rename the current "Physics" metadata to "Product families" (consistent with the taxonomy used by PyAnsys). This adjustment would ensure every documentation package includes "Version," "Product," and "Product families."

Another issue is that what is called Product in many doc package is the title of the doc package which is a metadata I'm not sure we would be interested to provide as a filter to Search Stax. My idea here is to avoid providing this metadata to SearchSatx. We would only have two metadata available to SearchStax for Q1:
Version and Product families.

Another concern is that the term **Product/Product Name** in many documentation packages refers to the title of the documentation package itself, which might not be relevant as a filter for SearchStax. My suggestion is to refrain from including this metadata for SearchStax. We would only have two metadata available to SearchStax for Q1: Version and Product families.

Regarding your email, I noticed that the bullet point about the REST APIs does not mention the "Version" metadata. Was this an oversight?

## Common remarks

Version can be as follows:
 "2025 R1", "2025 R1 SP01", "4.1" and "1.0.0.0"

I mention below renaming **Product** to **title** but I guess it would be an issue for Doxygen and MD documentation. **document title** could be a good name.

## MD Documentation

### Current behavior

| Config file: docfx.json | Admin UI: Migration Process | Admin UI: File Edited |
|-------------------------|-----------------------------|-----------------------|
| `title:` read. Example: "System Coupling Participant Library 2025 R1"  | Not visible | **Product** |
| `version:` Not read | Not visible | Not visible |
| `physics:` Not read | Not visible | **Physics**: visible but not set as it is not read from the config file |

### Expected for Q1

| Config file: docfx.json | Admin UI: Migration Process | Admin UI: File Edited |
|-------------------------|-----------------------------|-----------------------|
| `title:` read. Example: "System Coupling Participant Library" | Not visible | "Product" : Rename to "documentation title" |
| `version:` read. Example: "2025 R1" | Not visible | Not visible |
| `physics:` read. Example: "Multiphysics" | Not visible | "Physics": visible but not set as it is not read from the config file. Not needed |

### To be planned

| Config file: docfx.json               | Admin UI: Migration Process     | Admin UI: File Edited |
|------------------------|------------------------------------------------|----------------------|
| `product:` read.  Example: "System Coupling"      | Not visible |  Not visible |
| `status:` read.   Example: "Published"   | Not visible |  Not visible |
| `access control:` read.  Example: "Public"  | Not visible |  Not visible |
| `programming language:` read. Example: "C, C++, Fortran, Python"  | Not visible |  Not visible |
| `description:` read.  Example: "Ansys System Coupling integrates multiple individual analyses, enabling you to leverage different physics solvers and/or static external data sources in a single simulation. Verify if this description is used in the HTML metadata description tag." | Not visible |  Not visible |
| `date:`  read.  Example: "2025-01-22"     | Not visible |  Not visible |

## Doxygen Documentation

### Current behavior

| Config file | Admin UI: Migration Process | Admin UI: File Edited |
|-------------|-----------------------------|-----------------------|
| No file | **Product Name:** to be set. Example: "System Coupling Participant Library 2025 R1" | **Product:** set. Example: "System Coupling Participant Library 2025 R1"|
| No file | **Physics:** to be set. Example: "Multiphysics" | **Physics:** set. Example: "Multiphysics" |
| No file | **Access Control:** to be set. Example: "Public" | **Published:** flagged or not |

### Expected for Q1

| Config file | Admin UI: Migration Process | Admin UI: File Edited | Action |
|-------------|-----------------------------|-----------------------|--------|
| No file | **Product Name:** to be set. Example: "System Coupling Participant Library" | **Product:** set. Example: "System Coupling Participant Library" | Manage as metadata and rename to **documentation title**. Do not provide to SearchStax |
| No file | **Version:** to be set. Example: "2025 R1" | **Version:** set. Example: "2025 R1" | Manage as metadata and available for SearchStax|
| No file | **Physics:** to be set. Example: "Multiphysics" | **Physics:** set. Example: "Multiphysics" | Manage as metadata, available for SearchStax, and rename to **Product families** |
| No file | **Access Control:** to be set. Example: "Public" | **Published:** flagged or not |No change |

This is already defined and correctly managed in the UI (migration and file edited).

- **Access Control:** Public

**Required for Next Steps:**

### To be planned

| Config file              | Admin UI: Migration Process     | Admin UI: File Edited |
|------------------------|------------------------------|----------------------|
| No file | **status:** to be set.  Example: "Published"      | Not visible |  
| No file | **product:** to be set.  Example: "System Coupling"      | Not visible |  
| No file | **programming language:** to be set. Example: "C, C++, Fortran, Python"  | Not visible |  
| No file | **description:** to be set.  Example: "Ansys System Coupling integrates multiple individual analyses, enabling you to leverage different physics solvers and/or static external data sources in a single simulation. Verify if this description is used in the HTML metadata description tag." | Not visible |
| No file | **date:**  to be set.  Example: "2025-01-22"     | Not visible |  

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

| Config file: JSON/YAML | Admin UI: Migration Process | Admin UI: File Edited | Action |
|------------------------|-----------------------------|-----------------------|--------|
| `title:` | Not visible | Not visible | Manage as metadata |
| `version:` | Not visible | Not visible | Manage as metadata and provided to SearchStax|
| Not defined | **Physics:** to be set. Example: "Multiphysics"  | **Physics:** set. Example: "Multiphysics"| Manage as metadata, and provided to SearchStax, and rename to **Product families** |
| Not defined  | **Access Control:** to be set. Example: "Public" | **Published:** flagged or not | No change
| Not defined  | **Status:** to be set. Example: "Published" | **Published:** flagged or not | No change

### To be planned

| Config file              | Admin UI: Migration Process     | Admin UI: File Edited |
|------------------------|------------------------------|----------------------|
| No file | **product:** to be set.  Example: "System Coupling"      | Not visible |  
| No file | **programming language:** to be set. Example: "C, C++, Fortran, Python"  | Not visible |  
| No file | **description:** to be set.  Example: "Ansys System Coupling integrates multiple individual analyses, enabling you to leverage different physics solvers and/or static external data sources in a single simulation. Verify if this description is used in the HTML metadata description tag." | Not visible |
| No file | **date:**  to be set.  Example: "2025-01-22"     | Not visible |  
