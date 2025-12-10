---
uid: Ans.DataProcessing.operators.info.markdown_latex_example
---

# markdown_latex_example Class

**Namespace:** [Ans.DataProcessing.operators.info](Ans_DataProcessing_operators_info.md)

## Summary

This operator showcases the use of Markdown and LaTeX in operator and pin descriptions:

# Headings

## h2

### h3

#### h4

##### h5

# Text

This should result in a paragraph

it's that simple.

*italic*, **bold**

# Lists

* an *unordered list*

  * with **some hierarchy**

    1. and an ordered

    2. mixed

    * list

    * directly

  * inside

# Code

## Code block

```c

std::string a = 'test';

```

```js

var a = 'test';

```

```python

a: str = 'test'

```

## Inline code

And well `inline code` should also work.

# Quotes

> A Quote

>

> With *some text* **blocks inside**

>

> * even a list

> * should be

> * possible

## Links

Links such as [link](https://docs.pyansys.com/).

## Images

![an image](https://docs.pyansys.com/version/dev/_static/pyansys_logo_transparent_white.png)

## Separations

---

## Checklists

- [ ] how

- [ ] about

  - [ ] a

  - [x] nice

- [x] check

- [ ] list

## Tables

| Left header | middle header | last header |

|-------------|---------------|-------------|

| cell 1      | cell **2**    | cell 3      |

| cell 4      | cell 5        | cell 6      |

## LaTeX

An inline equation $x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$ using LaTeX dollar delimiters.

An inline equation \(x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\) using LaTeX parenthesis delimiters.

An equation on its own using dollar delimiters:

$$x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.$$

An equation on its own using square bracket delimiters:

\[x = \frac{-b \pm \sqrt{b^2-4ac}}{2a}.\]

available inputs: `bogus_input` (string) (optional)

available outputs: `bogus_output` (object)

## Example

```python
op = markdown_latex_example()

op = markdown_latex_example(bogus_input=my_bogus_input)
```

## Class Information

| Property | Value |
|----------|-------|
| Namespace | `Ans.DataProcessing.operators.info` |
| Assembly | `Ans_Dpf_Documentation_dll_cs` |
| Base Class | `Ans.DataProcessing.internal_objects.BaseOperator` |

## Inputs

### bogus_input

**Type:** *LinkableInput*

## Outputs

### bogus_output

**Type:** *LinkableOutput*

## Constructors

#### Constructor

```python
markdown_latex_example()
```

#### Constructor

```python
markdown_latex_example(bogus_input, config)
```

**Parameters:**

- `bogus_input` (*object*)
- `config` (*OperatorConfig*)

#### Constructor

```python
markdown_latex_example(config)
```

**Parameters:**

- `config` (*OperatorConfig*)

## Methods

## Properties

#### inputs

**Type:** *InputSpec*

```python
# Get or set the property
value = obj.inputs
obj.inputs = new_value
```

#### outputs

**Type:** *OutputSpec*

```python
# Get or set the property
value = obj.outputs
obj.outputs = new_value
```

#### defaultConfig

**Type:** *Config*

```python
# Get the property (read-only)
value = obj.defaultConfig
```
