# Ansys developer documentation — agent instructions

Use this file to drive an AI assistant that helps authors meet **Ansys developer documentation** requirements for the Dev portal. **Part 2** is the full compliance rubric (style, structure, API reference, metadata, and review output format).

## Part 1 — Agent behavior

### Reviews

Apply **Part 2** in order, skipping sections that clearly do not apply to the package type. Be specific: cite paths, quote short excerpts where helpful, and recommend concrete edits.

### Compliance report

When the user asks for a compliance check, self-review, or pre-PR verification, create or update **`documentation-compliance-report.md`** in the **root of the documentation package** under review (the folder that contains `index.md` and usually `docfx.json`).

- **Do not** add that file to **`toc.yml`** or the product landing page unless the team wants it on the portal.
- **Include:** title; metadata (package path relative to the repo root, ISO date); summary (Approved / needs minor or major revisions; package type); scope; checklist results mapped to Part 2; findings with severity and file paths; numbered action items. For narrative structure, follow **section 8 — Review output format** in Part 2.

### Extra reading (optional)

- [Documentation compliance checklist](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/documentation-checklist.md) (short human-oriented list; Part 2 remains authoritative for the agent).

Section **9. Additional resources** in Part 2 links to Markdown, style, linters, Docfx, metadata, and terminology topics.

### Metadata and taxonomies

Check titles, versions, **physics**, and **programming language** against the taxonomy YAML shipped with the documentation repo (typically under **`Markdown/taxonomies`** on the branch in use).

### Linters and builds

Encourage Vale, Markdownlint, OpenAPI validation, link checks, and local Docfx where they apply. This agent **complements** those checks; it does not replace them.

### Where to store this file

Put it where your tool loads repo-wide agent rules—commonly **`.github/AGENTS.md`** next to the documentation you are editing.

---

## Part 2 — Technical review rubric

### Purpose

This agent performs systematic technical reviews of API, library, and SDK documentation packages to ensure compliance with Ansys developer documentation guidelines before publication to the Dev portal.

### Scope

This review agent evaluates:
- **HTTP APIs**: REST APIs, gRPC APIs following OpenAPI Specification or Protocol Buffers
- **Other APIs**: APIs using specific protocols and data formats
- **Libraries**: Language-specific interfaces with compiled code (functions, classes, methods)
- **SDKs**: Collections of libraries with ready-to-run code samples

### Review instructions

When reviewing documentation, systematically evaluate each section below. Provide specific feedback with:
- Clear identification of issues found
- References to specific files and line numbers where applicable
- Actionable recommendations for fixes
- Recognition of areas that meet or exceed guidelines

---

## 1. General Requirements

### 1.1 Style and Writing

**Review Criteria:**
- [ ] Documentation follows [Google developer documentation style guide](https://developers.google.com/style/)
- [ ] All headings and titles use sentence case
- [ ] Content uses active voice consistently (not passive)
- [ ] Content uses present tense (not future or past)
- [ ] Sentences are short and clear (aim for 15-20 words max)
- [ ] Technical terms are used consistently throughout all files
- [ ] Avoid using "we," "our," or "you" excessively
- [ ] Content is clear for the target audience level

**Review Actions:**
- Scan all Markdown files for passive voice constructions
- Check all headings for proper sentence case (first word capitalized, rest lowercase except proper nouns)
- Identify inconsistent terminology and suggest standardization
- Flag overly complex sentences that should be simplified

### 1.2 Quality Assurance

**Review Criteria:**
- [ ] Markdown files pass [Markdownlint](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) validation
- [ ] Documentation passes [Vale](http://vale.sh/) linting with Google style guide rules
- [ ] All hyperlinks are functional (no 404 errors or broken internal links)
- [ ] Images display correctly with lowercase file extensions (`.png`, `.jpg`, NOT `.PNG`, `.JPG`)
- [ ] All images have descriptive alt text
- [ ] Code blocks specify language for proper syntax highlighting
- [ ] Documentation has been tested locally using Docfx

**Review Actions:**
- Run Markdownlint on all `.md` files and report violations
- Run Vale linting and report style violations
- Test all external links for accessibility
- Verify all internal links point to existing files/anchors
- Check image file extensions and naming conventions
- Verify code blocks have language identifiers (```python, ```json, etc.)

### 1.3 GitHub and Version Control

**Review Criteria:**
- [ ] Documentation is hosted on GitHub
- [ ] Repository is in the appropriate organization:
  - [ansys/DevRelDocs](https://github.com/ansys/DevRelDocs) for public documentation
  - [ansys-internal/DevRelDocs_internal](https://github.com/ansys-internal/DevRelDocs_internal) for internal documentation
- [ ] Pull request follows GitHub best practices (descriptive title, detailed description)
- [ ] Branch naming follows conventions

**Review Actions:**
- Verify repository location matches documentation visibility requirements
- Review PR description for clarity and completeness
- Check for appropriate reviewers assigned

---

## 2. Metadata Configuration

### 2.1 Required Metadata

**For Markdown documentation packages** (`docfx.json`, `build.globalMetadata`):
- [ ] **Title**: Clear documentation title with version number (e.g., "DPF C++ client library 2026 R1")
- [ ] **Version**: Package version string (e.g., "2026 R1")
- [ ] **Summary**: Brief description of this **documentation package** (not the commercial product description)
- [ ] **Physics**: Product collection term from [physics.yml](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies)

**For Doxygen documentation packages** (`docfx.json`, `build.globalMetadata`):
- [ ] **Title**, **version**, **summary**, and **physics** as for Markdown packages
- [ ] **doc_type**: Must be `doxygen`

**For HTTP / REST API packages**, metadata is **split** between **`docfx.json`** and the **REST API specification file** (JSON or YAML), per [metadata configuration](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/migrate-dev-portal/migrate-package/metadata.md):

**In `docfx.json`** (under `build.globalMetadata`):
- [ ] **doc_type**: Must be `rest_api`
- [ ] **product**: Product name (e.g. the offering or API product name); use valid terms from [product.yml](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies) where applicable
- [ ] **summary**: Brief description of this **documentation package** (not the commercial product description); used on Dev portal landing pages
- [ ] **physics**: Product collection category from [physics.yml](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies)

**In the REST API specification file** (OpenAPI `info` object):
- [ ] **title**: API name (with version as appropriate). For REST packages, the **documentation package title** is taken from **`info.title`**, not from `docfx.json`
- [ ] **version**: API / package version string. For REST packages, the **documentation package version** is taken from **`info.version`**, not from `docfx.json`
- [ ] **description**: Brief API description in **`info.description`** (OpenAPI)

### 2.2 Recommended Metadata

- [ ] **Programming language**: Language term from [programming_language.yml](https://github.com/ansys/DevRelDocs/tree/main/Markdown/taxonomies)
- [ ] **Optional fields** (**status**, **access control**, **author**, **date**, and so on) when the package uses them — see [metadata configuration](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/migrate-dev-portal/migrate-package/metadata.md)

**Review Actions:**
- Verify metadata completeness in the correct files (`docfx.json` vs OpenAPI/YAML spec for REST)
- **For Markdown and Doxygen packages:** Confirm required `globalMetadata` fields in §2.1, including **`summary`** and (for Doxygen) **`doc_type`: `doxygen`**
- **For REST API packages:** Confirm `docfx.json` includes `doc_type`, `product`, `summary`, and `physics` in `build.globalMetadata`, and that `info.title`, `info.version`, and `info.description` are populated in the spec with no contradictory version or naming between files
- Check version numbering consistency across files
- Validate taxonomy terms (`physics`, `product`, `programming language`, and any optional fields in use) against the official YAML lists
- Ensure title formatting is consistent with conventions

---

## 3. API Documentation Review

### 3.1 File Structure Requirements

**Required files:**
- [ ] `index.md` exists at root level (landing page)
- [ ] `changelog.md` exists at root level

**Review Actions:**
- Verify both required files exist
- Check that `index.md` serves as effective entry point
- Verify file naming uses lowercase with hyphens

### 3.2 Index.md Content Review

#### 3.2.1 Introduction Section

**Required elements:**
- [ ] **Capabilities and features**: Clear description of what developers can do with the API
- [ ] **Protocol definition**: Explicitly states the protocol (REST, gRPC, HTTP, OSC, etc.)
- [ ] **Testing environment**: 
  - [ ] States if testable on Dev portal
  - [ ] Provides alternative testing options if not testable
  - [ ] Includes production environment information
  - [ ] Provides relevant URLs

**Review Actions:**
- Verify introduction clearly explains API purpose and value proposition
- Check that protocol is explicitly stated and accurately described
- Confirm testing information is complete and actionable

#### 3.2.2 Platform Overview Section

**Required elements:**
- [ ] **Explanatory diagram**: Visual showing API relationships with applications and services
- [ ] **Application development**: Description of applications developers can create
- [ ] **Communication flow**: Explicit explanation of communication pathways between applications and API/services

**Review Actions:**
- Verify diagram exists and clearly illustrates architecture
- Check that diagram uses consistent terminology with text
- Ensure application development section provides concrete examples
- Verify communication flow describes data exchange patterns

#### 3.2.3 Resources Section (REST APIs only)

**Required elements:**
- [ ] Definition of all resources handled by API endpoints
- [ ] Clear explanation of resource relationships

**Review Actions:**
- Verify all endpoints reference defined resources
- Check resource definitions are clear and complete

#### 3.2.4 Authenticate Section

**Required elements:**
- [ ] **Authentication methods**: Specifies if API key, token, or bearer token required
- [ ] **Key/token retrieval**: Explicit step-by-step instructions for obtaining credentials
- [ ] Security best practices mentioned

**Review Actions:**
- Verify authentication method is clearly stated
- Check retrieval instructions are actionable and complete
- Ensure security considerations are addressed

#### 3.2.5 Send API Requests Section

**Required elements:**
- [ ] **curl examples**: Working examples with explanations
- [ ] **Postman examples**: Instructions and examples for Postman usage

**Review Actions:**
- Test curl examples for syntax correctness
- Verify examples use realistic data (not placeholder values)
- Check that Postman instructions are clear and complete
- Ensure examples cover common use cases

#### 3.2.6 Responses Section

**Required elements:**
- [ ] **Response table**: Table with response types, values, strings, and descriptions
- [ ] **Response format**: Explicitly states format (JSON, XML, etc.)
- [ ] **Pagination information**: If applicable, explains offset, limit, total parameters
- [ ] Error response examples

**Review Actions:**
- Verify response table includes all possible response codes
- Check that response format examples are accurate
- Verify pagination explanation is complete (if applicable)
- Ensure error responses are documented with examples

### 3.3 Changelog.md Content Review

**Required structure:**
- [ ] Latest version listed at the top
- [ ] Release dates included for each version
- [ ] Changes properly categorized:
  - [ ] **Added**: New features or functionality
  - [ ] **Changed**: Modifications to existing features
  - [ ] **Deprecated**: Features to be removed in future releases
  - [ ] **Removed**: Features that have been removed
  - [ ] **Fixed**: Bug fixes

**Review Actions:**
- Verify chronological ordering (newest first)
- Check that all versions have dates
- Ensure changes are categorized appropriately
- Verify entries are clear and specific (not vague)

### 3.4 REST API Reference Review

**JSON/YAML file requirements:**
- [ ] File follows [OpenAPI Specification](https://www.openapis.org/)
- [ ] File validates against OpenAPI schema
- [ ] Metadata properly configured in `info` object

#### 3.4.1 API Brief Description

- [ ] One-sentence summary in `description` field of `info` object
- [ ] Description is concise and clearly explains API purpose

**Review Actions:**
- Verify description field exists and is populated
- Check that description accurately summarizes API

#### 3.4.2 Endpoint Groups (Tags)

- [ ] Endpoints grouped logically by category using `tags` object
- [ ] Each tag has `name` and `description` fields populated
- [ ] Tag descriptions are clear and helpful

**Review Actions:**
- Verify logical grouping of related endpoints
- Check tag descriptions are meaningful
- Ensure all endpoints are tagged appropriately

#### 3.4.3 Endpoint Documentation

**For each endpoint:**
- [ ] **Summary**: 
  - [ ] Short but concise name
  - [ ] Uses sentence case
  - [ ] No period at end
  - [ ] Clearly conveys endpoint purpose
- [ ] **Description**: 
  - [ ] Detailed explanation of what endpoint does
  - [ ] Mandatory field is populated
- [ ] **Parameters**:
  - [ ] All parameters defined in `parameters` object
  - [ ] Each parameter has clear `description` field
  - [ ] Required vs. optional status is correct
  - [ ] Data types are accurate
  - [ ] Constraints are documented (min/max values, allowed values, etc.)
- [ ] **Responses**:
  - [ ] All possible HTTP response codes documented
  - [ ] Each response has descriptive content
  - [ ] Response schemas are accurate
- [ ] **Examples**:
  - [ ] Authentic request examples (not generic placeholders)
  - [ ] Authentic response examples (not generic placeholders)
  - [ ] Examples use realistic data demonstrating practical scenarios

**Review Actions:**
- Check every endpoint for complete documentation
- Verify parameter descriptions are clear and accurate
- Test that response schemas match example responses
- Flag generic examples like "string", "additionalProp1", etc.
- Verify examples demonstrate realistic use cases

**Example of good vs. bad response examples:**

**NOT RECOMMENDED:**
```json
{
  "id": "string",
  "name": "string",
  "additionalProp1": "string"
}
```

**RECOMMENDED:**
```json
{
  "id": "f52b570d-be6f-4fa8-92c4-9146047904da",
  "name": "Radar Sensor Configuration",
  "frequency": 77.5
}
```

### 3.5 gRPC API Reference Review

**Proto file requirements:**
- [ ] Documentation generated from [Protocol Buffers](https://protobuf.dev/)
- [ ] [protoc-gen-doc plugin](https://github.com/pseudomuto/protoc-gen-doc) used for Markdown generation
- [ ] Comments in Proto files are comprehensive
- [ ] All message fields documented in consistent manner

#### 3.5.1 File-Level Documentation

- [ ] File-level description comment at top of each `.proto` file
- [ ] Description explains file purpose and content

**Example:**
```proto
/**
 * Defines the user API for managing accounts and profiles.
 * Includes services for CRUD operations and user-related messages.
 */
```

#### 3.5.2 General Best Practices

- [ ] Related definitions grouped together logically
- [ ] Sections separated with descriptive comments
- [ ] Comments use `//` or `/** */` syntax (compatible with protoc-gen-doc)
- [ ] Markdown syntax used in comments where appropriate (bold, italic, lists, code)
- [ ] Mathematical formulas formatted correctly if used

#### 3.5.3 Message Documentation

**For each message:**
- [ ] Leading comment describes message purpose and usage
- [ ] Each field has clear description
- [ ] Field descriptions include:
  - [ ] Purpose of the field
  - [ ] Data type constraints
  - [ ] Default values (if applicable)
  - [ ] Required format (e.g., "must be valid email address")
  - [ ] Relationships to other messages (if applicable)

**Example:**
```proto
// A message that represents a user's profile.
message UserProfile {
    // The unique identifier for the user. Must be a positive integer.
    int32 id = 1;

    // The user's full name.
    string name = 2;

    // The user's email address. Must be in valid email format.
    string email = 3;
}
```

**Review Actions:**
- Verify all messages have descriptions
- Check all fields are documented
- Ensure comments follow consistent format
- Verify field constraints are clearly stated

#### 3.5.4 Enum Documentation

**For each enum:**
- [ ] Leading comment explains enum purpose and usage
- [ ] Each value has trailing or leading comment
- [ ] Zero value has suffix `UNSPECIFIED`
- [ ] Value names prefixed with enum name (for top-level enums)
- [ ] Values use semicolons (not commas)
- [ ] Naming uses UPPER_SNAKE_CASE

**Example:**
```proto
// Represents the user's account status.
enum AccountStatus {
    // Default value, used when no specific state is set.
    ACCOUNT_STATUS_UNSPECIFIED = 0;

    // The account is active and fully functional.
    ACCOUNT_STATUS_ACTIVE = 1;

    // The account is suspended due to violations.
    ACCOUNT_STATUS_SUSPENDED = 2;
}
```

**Review Actions:**
- Verify enum values follow naming conventions
- Check that zero value has _UNSPECIFIED suffix
- Ensure all values are documented
- Verify values end with semicolons

#### 3.5.5 Service Documentation

**For each service:**
- [ ] Service-level comment explains service role and workflow
- [ ] Each RPC method has description
- [ ] Method descriptions explain:
  - [ ] Method purpose
  - [ ] Expected request message
  - [ ] Returned response message
  - [ ] Any side effects or special behavior

**Example:**
```proto
// Provides operations for managing user accounts.
service UserService {
    // Creates a new user account.
    rpc CreateUser (CreateUserRequest) returns (CreateUserResponse);

    // Retrieves user information by ID.
    rpc GetUser (GetUserRequest) returns (GetUserResponse);
}
```

**Review Actions:**
- Verify all services have purpose descriptions
- Check all RPC methods are documented
- Ensure method documentation is clear and complete

#### 3.5.6 Naming Conventions

- [ ] Messages, enums, services use PascalCase
- [ ] Field names use lower_snake_case
- [ ] Oneof field names use lower_snake_case
- [ ] Extension names use lower_snake_case
- [ ] File names are descriptive and use snake_case (e.g., `user_service.proto`)
- [ ] Package names avoid collisions and use clear hierarchy (e.g., `com.example.user`)

**Review Actions:**
- Check all naming against conventions
- Flag any inconsistencies
- Verify file and package naming

#### 3.5.7 Comment Exclusions

- [ ] Internal comments that should not appear in docs use `@exclude` prefix

**Example:**
```proto
/**
 * @exclude
 * This comment won't be rendered in documentation.
 */
```

### 3.6 Other APIs Review

**For non-HTTP, non-gRPC APIs:**
- [ ] Protocol clearly defined and explained
- [ ] Data formats explicitly stated
- [ ] Markdown files describe all messages for API communication
- [ ] Each message field documented with:
  - [ ] Description
  - [ ] Type
  - [ ] Mandatory/optional status
- [ ] Protocol-specific details explained
- [ ] Communication patterns documented

**Review Actions:**
- Verify protocol explanation is clear and complete
- Check all messages are documented
- Ensure field documentation includes type and requirement status
- Verify examples demonstrate protocol usage

---

## 4. Library and SDK Documentation Review

### 4.1 File Structure Requirements

**Required files:**
- [ ] `index.md` exists at root level (landing page with introduction)
- [ ] `changelog.md` exists at root level

**Recommended structure:**
```
Documentation-package/
â”œâ”€â”€ index.md
â”œâ”€â”€ changelog.md
â”œâ”€â”€ getting-started/
â”‚   â”œâ”€â”€ index.md
â”‚   â”œâ”€â”€ prerequisites.md
â”‚   â”œâ”€â”€ installation.md
â”‚   â””â”€â”€ licensing.md
â”œâ”€â”€ user-guide/
â”‚   â”œâ”€â”€ index.md
â”‚   â”œâ”€â”€ basic-usage.md
â”‚   â”œâ”€â”€ advanced-features.md
â”‚   â””â”€â”€ troubleshooting.md
â”œâ”€â”€ examples/
â”‚   â”œâ”€â”€ index.md
â”‚   â”œâ”€â”€ example-1.md
â”‚   â””â”€â”€ example-2.md
â”œâ”€â”€ api-reference/
â”‚   â””â”€â”€ (generated documentation)
â”œâ”€â”€ images/
â”‚   â””â”€â”€ (image files)
â”œâ”€â”€ toc.yml
â””â”€â”€ docfx.json
```

**Review Actions:**
- Verify required files exist
- Check directory structure is logical and organized
- Ensure each subdirectory has `index.md`
- Verify file names use lowercase with hyphens

### 4.2 Index.md Content Review

#### 4.2.1 Introduction Section

**Required elements:**
- [ ] High-level explanation of library or SDK purpose
- [ ] Main features described clearly
- [ ] Target audience identified
- [ ] Language and OS support clearly stated
- [ ] Library role explained (client, server, or both)

**Review Actions:**
- Verify introduction provides clear value proposition
- Check that supported languages/OS are explicitly listed
- Ensure installation requirements are mentioned

#### 4.2.2 Platform Overview

**Required elements:**
- [ ] Context and relationship with other services
- [ ] Explanatory diagram showing architecture
- [ ] Application development description (what can be built)
- [ ] Integration explanation (how library fits in ecosystem)

**Review Actions:**
- Verify diagram exists and is clear
- Check architecture explanation is complete
- Ensure integration guidance is provided

### 4.3 Getting Started Section

**Required elements:**
- [ ] **Dependencies and system requirements**:
  - [ ] Operating system requirements
  - [ ] Runtime dependencies
  - [ ] Compiler versions (if applicable)
  - [ ] Hardware requirements (if applicable)
- [ ] **Installation instructions**:
  - [ ] Step-by-step installation process
  - [ ] Installation verification steps
  - [ ] Multiple installation methods (if applicable): package manager, build from source
- [ ] **Development environment configuration**:
  - [ ] IDE setup guidance
  - [ ] Environment variables
  - [ ] Configuration file setup
- [ ] **Licensing considerations**:
  - [ ] License type
  - [ ] How to obtain license
  - [ ] License activation instructions

**Review Actions:**
- Test installation instructions for completeness
- Verify system requirements are accurate
- Check that configuration steps are clear
- Ensure licensing information is complete

### 4.4 User Guide Section

**Required elements:**
- [ ] Explains how to use the library or SDK
- [ ] Covers main concepts and workflows
- [ ] Includes best practices
- [ ] Addresses common scenarios
- [ ] Provides troubleshooting guidance

**Review Actions:**
- Verify user guide covers primary use cases
- Check that concepts are explained clearly
- Ensure workflow descriptions are step-by-step
- Verify troubleshooting section exists and is helpful

### 4.5 Usage Examples Section

**Required elements:**
- [ ] Comprehensive code examples
- [ ] Examples demonstrate various functions and classes
- [ ] Examples cover different scenarios
- [ ] Common use cases showcased
- [ ] Examples are working and tested
- [ ] Examples include expected output
- [ ] Code is well-commented

**Review Actions:**
- Verify examples are complete and runnable
- Check that examples cover diverse use cases
- Ensure code is properly formatted with syntax highlighting
- Verify examples follow coding best practices
- Test example code if possible

### 4.6 Changelog

Same requirements as API changelog (see section 3.3)

### 4.7 Reference Documentation Review

#### 4.7.1 Function Documentation

**For each function:**
- [ ] Purpose description
- [ ] Parameters documented with:
  - [ ] Name
  - [ ] Type
  - [ ] Description
  - [ ] Default value (if applicable)
  - [ ] Constraints
- [ ] Return value documented with:
  - [ ] Type
  - [ ] Description
  - [ ] Possible values
- [ ] Exceptions documented with:
  - [ ] Exception types
  - [ ] Conditions that trigger exceptions
- [ ] Usage example (if complex)

**Review Actions:**
- Check all public functions are documented
- Verify parameter documentation is complete
- Ensure return values are clearly described
- Verify exception handling is documented

#### 4.7.2 Class Documentation

**For each class:**
- [ ] Purpose description
- [ ] Inheritance relationships documented
- [ ] Constructor documented
- [ ] All public methods documented (see function documentation requirements)
- [ ] All public properties documented with:
  - [ ] Type
  - [ ] Description
  - [ ] Read/write access
- [ ] Class usage example

**Review Actions:**
- Check all public classes are documented
- Verify inheritance hierarchies are clear
- Ensure constructors are documented
- Verify all public members are documented

#### 4.7.3 Data Structures

- [ ] Each data structure documented
- [ ] All fields/members documented with:
  - [ ] Type
  - [ ] Description
  - [ ] Constraints
- [ ] Usage examples for complex structures

**Review Actions:**
- Verify all public data structures are documented
- Check field documentation is complete

#### 4.7.4 Consistency

- [ ] Naming conventions used consistently throughout
- [ ] Documentation format is consistent
- [ ] Terminology is consistent
- [ ] Code examples follow consistent style

**Review Actions:**
- Check for naming inconsistencies
- Verify consistent documentation structure
- Flag terminology variations

#### 4.7.5 Organizational Elements

- [ ] Class hierarchies documented (if applicable)
- [ ] Namespace information provided (if applicable)
- [ ] Module organization explained
- [ ] Component relationships described

**Review Actions:**
- Verify hierarchies are documented and visualized
- Check namespace documentation is complete
- Ensure module structure is clear

---

## 5. File Structure and Format Review

### 5.1 Directory Organization

**Review criteria:**
- [ ] `index.md` at root level
- [ ] `changelog.md` at root level
- [ ] Related content in logical subdirectories
- [ ] Each subdirectory has `index.md`
- [ ] Images in dedicated `images/` directory
- [ ] File names use lowercase with hyphens (e.g., `getting-started.md`)

**Review Actions:**
- Map out directory structure
- Verify logical organization
- Check file naming conventions
- Ensure images are properly organized

### 5.2 Markdown Packages

- [ ] Files in logical directory structure
- [ ] `toc.yml` exists and is correct
- [ ] `docfx.json` exists with proper metadata
- [ ] All Markdown files use proper formatting
- [ ] Code blocks specify language for syntax highlighting
- [ ] Tables are properly formatted
- [ ] Lists use consistent formatting

**Review Actions:**
- Verify `toc.yml` matches actual file structure
- Check `docfx.json` configuration
- Test Markdown rendering locally
- Verify all code blocks have language identifiers

### 5.3 Doxygen Packages

- [ ] Files in logical directory structure
- [ ] Submitted as ZIP file
- [ ] XHTML files properly formatted
- [ ] **For 2026 R1+**: XHTML converted to Markdown

**Review Actions:**
- Verify package format
- Check XHTML formatting
- Confirm Markdown conversion for 2026 R1+

### 5.4 API Packages

- [ ] JSON or YAML file properly formatted
- [ ] File validates against OpenAPI Specification
- [ ] Indentation is consistent
- [ ] No syntax errors

**Review Actions:**
- Run OpenAPI validator
- Check file formatting
- Verify syntax correctness

---

## 6. Pre-Submission Review

### 6.1 Local Testing

- [ ] Documentation reviewed locally using Docfx
- [ ] All warnings about broken links resolved
- [ ] Navigation tested (all links work)
- [ ] Images display correctly
- [ ] Code syntax highlighting works
- [ ] Search functionality tested (if applicable)

**Review Actions:**
- Run Docfx build locally
- Document any warnings or errors
- Test all navigation paths
- Verify image rendering

### 6.2 Peer Review

- [ ] Documentation peer reviewed by technical expert
- [ ] Feedback incorporated
- [ ] Technical accuracy verified
- [ ] Code examples tested by peer reviewer

**Review Actions:**
- Confirm peer review completed
- Verify feedback addressed
- Check technical accuracy validation

### 6.3 Timing and Submission

- [ ] Documentation uploaded 10 days before release date
- [ ] Pull request created in appropriate repository:
  - [ ] [ansys/DevRelDocs](https://github.com/ansys/DevRelDocs) for public
  - [ ] [ansys-internal/DevRelDocs_internal](https://github.com/ansys-internal/DevRelDocs_internal) for internal
- [ ] PR has descriptive title and detailed description
- [ ] Appropriate reviewers assigned

**Review Actions:**
- Verify submission timeline
- Check PR completeness
- Ensure correct repository

---

## 7. Post-Migration Verification

### 7.1 Sandbox Environment Testing

- [ ] Documentation displays correctly
- [ ] Navigation works as expected
- [ ] Search functionality works
- [ ] All links work correctly
- [ ] Images render properly
- [ ] Code examples display with correct syntax highlighting
- [ ] Metadata displays correctly in search result filters
- [ ] Responsive design works on different screen sizes

**Review Actions:**
- Test all functionality in sandbox
- Document any display issues
- Verify search and filter functionality
- Test on multiple devices/browsers

### 7.2 Issue Resolution

- [ ] Issues reported to Dev portal team (if any)
- [ ] Issues tracked and resolved
- [ ] Final approval given for production migration

**Review Actions:**
- Document all issues found
- Verify issue resolution
- Obtain final approval

---

## 8. Review Output Format

When completing a review, provide feedback in this format:

### Summary
- Overall assessment (Approved / Needs Minor Revisions / Needs Major Revisions)
- Key strengths
- Critical issues (if any)
- Estimated effort for fixes

### Detailed Findings

For each section reviewed, provide:

#### [Section Name] - [Status: âœ… Passed / âš ï¸ Warnings / âŒ Failed]

**Strengths:**
- List positive aspects

**Issues:**
1. **[Severity: Critical/High/Medium/Low]** - [Issue description]
   - **Location**: [File name and line number or section]
   - **Current state**: [What exists now]
   - **Required action**: [What needs to be done]
   - **Reference**: [Link to guideline]

**Recommendations:**
- Additional suggestions for improvement

### Action Items

Priority-ordered list of required actions:

1. **[Priority]** - [Action description] | [Owner] | [Estimated effort]

### Sign-off

- Reviewer: [Name]
- Review Date: [Date]
- Next Review Date: [Date] (if applicable)
- Approval Status: [Approved / Conditional Approval / Not Approved]

---

## 9. Additional Resources

Reference these resources during review:

- [Google developer documentation style guide](https://developers.google.com/style/)
- [Markdown guide](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/markdown-guide.md)
- [Style guide](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/styleguide.md)
- [Linters guide](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/linters.md)
- [Docfx guide](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/docfx-static-site-gen.md)
- [Metadata configuration](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/migrate-dev-portal/migrate-package/metadata.md)
- [API and library terminology](https://github.com/ansys-internal/developer-documentation-guidelines/blob/main/content/docs/common-practices/api-lib.md)
- [OpenAPI Specification](https://www.openapis.org/)
- [Protocol Buffers](https://protobuf.dev/)
- [Protocol Buffers Style Guide](https://protobuf.dev/programming-guides/style/)
- [protoc-gen-doc plugin](https://github.com/pseudomuto/protoc-gen-doc)

---

## 10. Review Checklist Summary

Use this quick checklist for review completion tracking:

- [ ] General requirements reviewed (style, quality, GitHub)
- [ ] Metadata configuration verified
- [ ] File structure validated
- [ ] API documentation reviewed (if applicable)
  - [ ] Descriptive content (index.md, changelog.md)
  - [ ] API reference (REST/gRPC/Other)
- [ ] Library/SDK documentation reviewed (if applicable)
  - [ ] Descriptive content (introduction, getting started, user guide, examples, changelog)
  - [ ] Reference documentation (functions, classes, data structures)
- [ ] Pre-submission checks completed
- [ ] Local testing performed
- [ ] Feedback documented and communicated
- [ ] Final approval status determined

---

*End of technical review rubric (Part 2)*
