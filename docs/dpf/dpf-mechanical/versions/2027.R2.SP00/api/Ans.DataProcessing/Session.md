---
uid: Ans.DataProcessing.Session
---

# *class* Session()

Session()


## Methods

#### AddBreakpoint(workflow: Workflow, op: BaseOperator, isAfterExecution: bool) -> int

**Parameters:**

* **workflow**
* **op**
* **isAfterExecution**

#### AddWorkflow(workflow_id: str, workflow: Workflow) -> None

**Parameters:**

* **workflow_id**
* **workflow**

#### GetNumWorkflow() -> int

#### GetSessionId() -> str

#### GetWorkflow(workflow_id: str) -> Workflow

**Parameters:**

* **workflow_id**

#### GetWorkflowByIndex(index: int) -> Workflow

**Parameters:**

* **index**

#### RemoveBreakpoint(workflow: Workflow, id: int) -> None

**Parameters:**

* **workflow**
* **id**

#### SetLogger(logger: EventLogger) -> None

**Parameters:**

* **logger**

#### SetProgressSystem(notifier: ProgressInformationNotifier) -> None

**Parameters:**

* **notifier**
