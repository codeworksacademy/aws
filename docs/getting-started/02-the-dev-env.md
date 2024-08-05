# Setting up your development environment

> **Video Resource:** You can find the video resources for this guide [here](https://training.codeworksacademy.com/course/getting-started/learn/lecture/447).

## Introduction

In this assignment, you will set up your development environment. We will install the required software and configure it to work with CodeWorks.

## Objectives

* Learn the Command Line Interface (CLI)
* Install Visual Studio Code extensions
* Use NPM to install packages
* Setup your Weekly Journals repository

## Instructions

### Command Line Interface (CLI)

The Command Line Interface (CLI) is a text-based interface used to interact with your computer. You can use the CLI to navigate your file system, run programs, and perform other tasks. The CLI is a powerful tool that can help you be more productive as a developer.

To get started with the CLI on Windows we will have you install the Windows Terminal app. This app will allow you to use the CLI in a more modern and user-friendly way. [Windows Terminal Application](https://apps.microsoft.com/detail/9n0dx20hk701?hl=en-US&gl=US). 

On macOS, open the Terminal app. 

Or in You can also use the integrated terminal in Visual Studio Code by pressing <kbd>Ctrl + `</kbd>.

### Visual Studio Code Settings and Extensions

### Intro to the Workbook

Students will be introduced to the workbook and writing their first journals, and using [Markdown](https://www.markdownguide.org/cheat-sheet/).

### VS Code extensions

vs code has a few extensions that makes developer's lives easier or more organized. Here is a list of extensions that will be required for the course. We will not use all of these right away.

**Required**
* **C#** from *Microsoft* (Base Language support)
* **ESLint** from *Microsoft*
* **MySQL** from *Weijan Chen*
* **Vue Language Feature (Volar)** from *Vue*

Below are extensions that are not required, but are highly recommended. Not all staff members use all of them, but we will use some of these during lectures from time to time.

**Recommended**

* **HTML CSS Support** from *ecmel* Gives completion suggestions for css styles that exists in your project.
* **Code Spell Checker** from *Street Side Software*. Checks the spelling in your code.
* **Comment Anchors** from *Starlane Studios*. Create special comments in your code you can easily find later
* **Peacock** from *John Papa*. Changes the color of the vscode window, helps makes projects unique.
* **Error Lens** from *Alexander*. Displays underlined errors or warnings on the same line in the editor.
* **Bootstrap 5 Quick Snippets** from *Anbuselvan Rocky*. Allows for easy inserts of Bootstrap 5 components.
* **Indent Rainbow** from *oderwat* and **Indent Rainbow Pallettes** from *evondev*. Colorizes your indents for more visibility.
* **Material Design Icons Intellisense** from *Lukas Troyer*. Shows icons used in your editor.
* **Inline HTML** from *colton*. Allows for easier writing of HTML templates in JS.
* **Format Selection As HTML** from *Adrian Wilczyński*. Helps format our JS strings in HTML format.

### VsCode Snippets

Snippets are like macros, it allows your to save chucks of code under a shorter command to access. CodeWorks has some that we use often throughout the course. 

 Head into vscode and open `file` then `preferences` from the toolbar. In `preferences` click `configure user snippets` then `new global snippets file` . You can name it what you want but `bcw snippets` is a good name too. You will be given a file with a lot of *commented* code (Green text) inside of two `{}` . Erase everything in this file, then copy the code below and paste it into it's place. Save and you are all set. We will go over using these snippets later.

```json
{
	"Bootstrap Link": {
		"prefix": "link:b5",
		"body": [
			"<link href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css' rel='stylesheet' integrity='sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD' crossorigin='anonymous'>"
		],
		"description": "Bootstrap Link"
	},
	"Font Awesome": {
		"prefix": "link:fa5",
		"body": [
			"<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css\" integrity=\"sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==\" crossorigin=\"anonymous\" />"
		],
		"description": "Font Awesome"
	},
	"Material Design Icon Link": {
		"prefix": "link:mdi",
		"body": [
			"  <link rel=\"stylesheet\" href=\"https://cdn.jsdelivr.net/npm/@mdi/font@latest/css/materialdesignicons.min.css\">"
		],
		"description": "Material Design Icon Link"
	},
	"MDI i tag": {
		"prefix": "mdi:i",
		"body": [
			"<i class=\"mdi mdi-${1:icon}\"></i>"
		],
		"description": "start of an i tag with mdi inserted",
	},
	"Style Debugger": {
		"prefix": "style:debug",
		"body": [
			"<script id=\"debug-script\" src=\"https://cdn.jsdelivr.net/gh/MickShannahan/style-debug@latest/debug.min.js\" defer></script>"
		],
		"description": "Debug Style Tag"
	},
	"Axios Link": {
		"prefix": "script:axios",
		"body": [
			"<script src=\"https://cdnjs.cloudflare.com/ajax/libs/axios/0.23.0/axios.min.js\" ></script>"
		],
		"description": "Axios Link"
	},
	"Vue Template with Imports": {
		"prefix": "vt:imports",
		"body": [
			"<script setup>\nimport { AppState } from '../AppState';\nimport { computed, ref, onMounted } from 'vue';\n${2}\n</script>\n\n",
			"<template>\n\t<div class=\"${1:component}\">\n\n\n\t</div>\n</template>\n\n",
			"<style lang=\"scss\" scoped>\n.${1:component}{\n${3}\n}\n\n</style>"
		],
		"description": "A simple vue template builder"
	},
	"Vue Template Basic": {
		"prefix": "vt:basic",
		"body": [
			"<script setup>\n${1}\n</script>\n\n",
			"<template>\n${2}\n</template>\n\n",
			"<style lang=\"scss\" scoped>\n${3}\n</style>"
		],
		"description": "A simple vue template builder"
	}
}

```
