# Lifestyle

Project for Personal portfolio

**What is "Lifestyle"?**

Lifestyle is a blog, made with HTML, CSS and Javascript, it's equipped with tools, apps and advices made to build good habits and an healthy lifestyle.

The tools im talking about are a **Task Manager(To-do List)** and a **Calorie calculator**.

**Task Manager**
//I had a video tutorial help me through this and i discovered many things such as local storage keys, and using id.Date to create unique Id's//

My concerns for this project were:
-How to keep the tasks and lists stored;
-How to identify if a list is active so that each list has its own tasks;
-Understanding new properties and methods.

How i approached the project:
-Having built the HTML with place holder tasks and lists i selected all the interactive parts(such as inputs to add tasks) through querySelector;

-First i tackled the lists section, each list has its own unique id based on its creation date so that when they are selected it'll be easier to know which list is active.

-After defining "lists" and creating a render function to append lists to the div, i used an event listener so that everytime the form gets sumbitted:
1. the page doesnt refresh;
2. a new list gets created based on the name written in the input;
3. the new list gets pushed in the unordered list;

-To keep lists stored i used a local storage key so that when a list gets parsed into an object.



