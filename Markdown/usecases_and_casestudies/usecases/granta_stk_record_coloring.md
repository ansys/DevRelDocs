# Color records by discrete values: visually organise your records by color in your Granta Materials database

> One sentence summary: Use the Granta MI Python Scripting Toolkit to automate record color assignment based on discrete values in each record or some other variable for quick visual identification in record viewing software.

## Audience and persona

- **Primary users:** database admins (developers), application engineers (beneficiaries)
- **Industry:** Any
- **Prerequisites:** Python MI Scripting Toolkit v2.0 or later, "write" rights in the database

## Problem

**Challenge:**  

- Users waste time drilling into records to check key properties like expiry dates or compliance flags
- This key information may require calculation such as "proximity to expiry", or "number of unpopulated attributes"
- Looking for, or manually calculating, these slows workflows and increases error risk

**Why this matters now:**  

As data volumes grow, and quick decisions require immediate visibility into critical attributes, efficient analysis of this data is becoming more and more important.

## Solution

**What this delivers:**

- Visual indicators for discrete metrics (e.g., expiry status, proximity to expiry, compliance flags)
  - Updated weekly, nightly, or as often as is desired
- Configurable tagging for any property of interest
- Integration with existing UI or API for seamless adoption

**Key benefits (business & technical):**

- Reduces lookup time
- Improves accuracy in time-sensitive workflows
- Enables proactive alerts for critical states

## Features and capabilities used

- MI Database records can be colored one of several discrete colors
- Timed/scheduled script execution
- Discrete attributes
- Date attributes
