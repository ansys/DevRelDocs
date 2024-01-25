# The Python Object Tree

The ACP Python interface is organized as a static python object tree.
This tree contains all loaded models, solutions, definitions, views and scenes.
Access to the actually loaded object tree is always provided through the root object [`compolyx.DB`](db_database.md#compolyx.DB) in the embedded Python shell.

![schema](acp-graph.png)
