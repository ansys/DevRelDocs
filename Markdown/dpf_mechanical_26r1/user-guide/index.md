---
uid: user-guide
title: User Guide
---

# User Guide

Comprehensive guides for working with DPF IronPython.

## Core Concepts

### [Understanding DPF](core-concepts.md)
Learn the fundamental concepts and architecture of DPF.

### [Data Model](data-model.md)
Understand how DPF organizes and represents simulation data.

### [Operators and Workflows](operators-workflows.md)
Learn about DPF's operator-based processing model.

## Working with Data

### [Working with Fields](working-with-fields.md)
Fields are the primary data containers in DPF. Learn how to create, manipulate, and extract data from fields.

### [Working with Meshes](working-with-meshes.md)
Access and manipulate mesh data including nodes, elements, and connectivity.

### [Working with Results](working-with-results.md)
Extract and process simulation results such as stress, strain, displacement, and more.

### [Scoping and Support](scoping-support.md)
Learn about data scoping (entity selection) and support (spatial/temporal context).

## Advanced Topics

### [Custom Operators](custom-operators.md)
Create your own operators to extend DPF functionality.

### [Performance Optimization](performance.md)
Best practices for efficient data processing.

### [Error Handling](error-handling.md)
Proper exception handling and debugging techniques.

## Best Practices

- Always dispose of large objects when finished
- Use operators for complex data transformations
- Leverage server-side processing for large datasets
- Cache frequently accessed data
- Use appropriate data types for your use case
