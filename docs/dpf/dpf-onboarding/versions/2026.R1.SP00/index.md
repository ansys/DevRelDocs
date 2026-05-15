# Introduction

This document is a working draft of the DPF Learning Path. It outlines the initial structure, scope, and planned content.

The Learning Path is designed for individuals who are completely new to DPF, providing the foundational knowledge needed to get started. It serves as the "basic of the basics," ensuring that even those with no prior exposure to DPF can follow along and build their understanding step by step.

## Total Time Commitment
**Approximately 1.5 to 2 hours** to complete all three chapters of the learning path.

These files do not contain exhaustive content; much of the text is still under development.

## Learning path structure

The Learning Path is organized into three main chapters, each designed to be learned in the given order and guide the learner through a logical progression of understanding and using DPF.

## 0- Introduction to DPF (15-20 minutes)
In this chapter, the learner first understands what the software is, what problems it solves, and why it exists.

**Why do we start with this section**

To understand how something is structured and how it works, we must first know what it is. A beginner who has no prior exposure to DPF needs this context to understand the following steps. Without first defining what DPF actually is, any attempt to analyze its structure or perform hands-on tasks would lack direction and meaning, leaving the learner disconnected and overwhelmed.

## 1- Setup DPF (30-45 minutes)
Once the learner knows what the software is, the next step is to make sure they can actually use it. To do so, they need to set up DPF.

The setup chapter provides all the prerequisites: installation, licensing, and configuration. Placing this step early avoids frustration later, as the user can smoothly follow the examples and exercises in the next chapter without technical blockers.

## 2- Using DPF (45-60 minutes)
After understanding the tool and having a working environment, the learner is ready to interact with DPF itself.

This chapter introduces the core features along with the essential concepts and vocabulary.

<div btn-footer markdown>
[Get started](./introduction/index.md){.link-btn .next}
</div>

## How to contribute

Contributing to the DPF Learning Path is a great way to share your knowledge and improve the documentation for everyone. Here are some guidelines to help you get started:

### Adding images

**1- Create or edit images**

To create and modify SVG images, use the tool `Draw.io` by integrating it directly into VSCode by installing the `Draw.io Integration` extension:

![Draw.io Integration](./images/drawio-extension-print.png)

If the images are not in SVG format, follow the next step.

**2- Save images**

Place your image files in the `docs/internal/content/learning-path/images` folder.

Name the file `image-name.drawio.svg` if it is an SVG image.

**3- Reference images in Markdown**

Use the following syntax to include images in your Markdown files:

   ```markdown
   ![Alt text](./images/your-image-file.svg)
   ```
   Replace `Alt text` with a brief description of the image and `your-image-file.svg` with the actual file name.

### Styling your text

To style your text or add elements like admonitions, follow the instructions in the documentation: [MkDocs Markdown Documentation](https://squidfunk.github.io/mkdocs-material/reference/).

### General guidelines

- **Follow the existing structure**: Ensure your contributions align with the current organization of the learning path.
- **Write clear and concise content**: Use simple language and avoid jargon where possible.
- **Preview your changes**: Use MkDocs to preview your changes locally before submitting them by building the website.

By following these steps, you can help maintain the quality and consistency of the DPF Learning Path documentation. Thank you for contributing!