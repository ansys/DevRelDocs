# Color records by discrete values

> Use the Granta MI Python Scripting Toolkit to automate record color assignment based on discrete values in each record or some other variable for quick visual identification in record viewing software.

## Audience and persona

- **Primary users:** Database administrators (developers) and application engineers (beneficiaries)
- **Industry:** Any
- **Prerequisites:** Granta MI Scripting Toolkit v2.0 or later and "write" permissions in the database

## Problem

**Challenge**  

Users waste time drilling into records to check key properties like expiry dates or compliance flags. This key information might require calculations such as "proximity to expiry" or "number of unpopulated attributes." Looking for or manually calculating needed information slows workflows and increases error risk

**Why this matters**  

Quick decisions require immediate visibility into critical attributes. As data volumes grow, efficient analysis of this data becomes more and more important.

## Solution

**What this delivers**

- Visual indicators for discrete metrics (such as expiry status, proximity to expiry, and compliance flags), which are updated weekly, nightly, or as often as desired
- Configurable tagging for any property of interest
- Integration with existing UI or API for seamless adoption

**Key benefits (business & technical)**

- Reduces lookup time
- Improves accuracy in time-sensitive workflows
- Enables proactive alerts for critical states

## Features and capabilities used

- Granta MI database records can be colored one of several discrete colors
- Timed/scheduled script execution
- Discrete attributes
- Date attributes
