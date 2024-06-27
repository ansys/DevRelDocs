<a id="design-index"></a>

<a id="design"></a>

# Design

Design is the first phase of the solution development lifecycle. Here, you’ll cover the steps below.

### 1️⃣ Workflow

### Why?

Prior to any coding activity, it is important to think about the design of the solution:

* How many steps?
* Are Ansys flagship products involved? If so, how does the business logic connect with them?
* Are you using the APIs of the products? Can you use PyAnsys APIs instead?
* Are there in-house solvers involved?
* Do you need 3D visualization capabilities?

Objective
: Address as many of these questions as possible early in the development cycle so you can identify potential blocking points and to make the best decisions in terms of components.

### How?

For the `simple-beam-bending`, two steps are considered:

The first step, named **Context** is simple. No backend process. Only static data to display in the user interface. The second step, named **Compute**, exposes the inputs parameters and display the output in a graph.

If you try to sketch the workflow in terms of components at this time, you get a very simple process:

No flagship product is involved. You want to solve the beam bending problem with a homemade *solver* which is a simple implementation of the analytical solution according to Euler-Bernoulli Beam Theory. Therefore, **Custom solver** refers to the component containing this implementation.

### 2️⃣ UX

### Why?

As part of the design process, you need to start thinking about the user experience you want to deliver.

Objective
: Draw drafts of the user interface and iterate with the development team and the customer until you converge on a satisfying design.

### How?

Many tools can be leveraged to create the sketches. One of those is simply **PowerPoint**. It is very accessible and it can deliver very realistic drafts. After several discussions with your customer, you come up with the following design:

<!-- Definitions of interpreted text roles (classes) for S5/HTML data. -->
<!-- This data file has been placed in the public domain. -->
<!-- Colours
======= -->
<!-- Text Sizes
========== -->
<!-- Display in Slides (Presentation Mode) Only
========================================== -->
<!-- Display in Outline Mode Only
============================ -->
<!-- Display in Print Only
===================== -->
<!-- Display in Handout Mode Only
============================ -->
<!-- Incremental Display
=================== -->
