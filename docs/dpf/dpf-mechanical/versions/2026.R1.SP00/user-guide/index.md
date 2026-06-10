---
uid: user-guide
---

# User guide

Comprehensive guides for working with DPF IronPython.

## Core concepts

### [Understanding DPF](core-concepts.md)
Learn the fundamental concepts and architecture of DPF.

### [Data model](data-model.md)
Understand how DPF organizes and represents simulation data.

### [Operators and workflows](operators-workflows.md)
Learn about DPF's operator-based processing model.

## Working with data

### [Working with fields](working-with-fields.md)
Fields are the primary data containers in DPF. Learn how to create, manipulate, and extract data from fields.

### [Working with meshes](working-with-meshes.md)
Access and manipulate mesh data including nodes, elements, and connectivity.

### [Working with results](working-with-results.md)
Extract and process simulation results such as stress, strain, displacement, and more.

### [Scoping and support](scoping-support.md)
Learn about data scoping (entity selection) and support (spatial/temporal context).

## Best practices

- Always dispose of large objects when finished
- Use operators for complex data transformations
- Leverage server-side processing for large datasets
- Cache frequently accessed data
- Use appropriate data types for your use case
