---
templateKey: BlogPost
locale: en
title: "Flow, TypeScript?"
date: 2019-05-31T09:58:23.762Z
description: Why to use types in JavaScript
image: /img/0_o7vr1hifnpsgtok1.png
---

Types are one of the main foundations of a programming language. Many execution errors in JavaScript are type errors. Have you ever called a function and received the error undefined is not a function? This happens when we try to access a property that is not defined. Since Javascript can’t locate the property, it returns it’s fallback — undefined

A good type system helps us avoid these common mistakes. By definition JavaScript is weakly typed language and it’s type system works during the code execution. The language also tries to help by silently converting value types. It works in your favor when you multiply 2 by ‘3’ and not so much when you are trying to sum a number with a string that contains a number (if we tried to sum 2 and ‘3’, the result would be “23”).

With growing complexity of modern JavaScript applications, the important question may rise. How to eliminate most of these mistakes and how to make the job for the programmer easier? Fortunately, there are compilers that can catch these error before runtime. The two most popular are TypeScript and Flow.

TypeScript

TypeScript uses the same syntax and semantics that we know and compiles to simple and clean JavaScript. Types are optional, and type inference allows a few type annotations to make a big difference to the static verification of your code. Types let you define interfaces between software components and gain insights into the behavior of existing JavaScript libraries.

The big advantage is that TypeScript offers support for the latest and evolving JavaScript features, including those from ECMAScript 2015 and future proposals, like async functions and decorators, to help build robust components.

These features are available at development time for high-confidence app development, but are compiled into simple JavaScript that targets ECMAScript 3 (or newer) environments.

Flow

Like TypeScript, Flow checks your code for errors through static type annotations. These types allow you to tell Flow how you want your code to work, and Flow will make sure it does work that way.

Flow is a library developed by Facebook, which makes it really easy to use it inside a React app. You can also adopt Flow incrementally and easily remove it at anytime, so you can try Flow out on any codebase and see how you like it.

Unlike TypeScript, Flow is NOT a programming language in itself, but rather a “Static Type Checker for JavaScript”. What this means is that Flow is a productivity tool that you can download and install into your local environment, which in return will analyser your code to generate insightful information

Why choose flow over TypeScript?

So we know that this type checking mechanic is pretty amazing, but why would you want to use Flow instead of TypeScript if TypeScript also has the same feature, plus more?

Out of the box

Flow can automatically infer type information from existing code and pick up any type errors by itself (TypeScript actually tries to do the same from version two). All you need to do to get this functionality (aside from installing and configuring Flow, of course) is add a single line of code:

// @flow

While if you want to use Typescript, you need to write the code in files with different extension (.ts, .tsx) and setup more complex initial configuration.

Better compatibility with some libraries/frameworks/compilers

AngularJS, itself built in TypeScript, will naturally have native support for programming in TypeScript. React, a very popular JavaScript library also developed by Facebook, works very well with Flow.

While it is true that it is possible to use TypeScript with React, the React ecosystem is originally not optimized to work well with TypeScript, often requiring additional adjustment to your code.

Why choose TypeScript anyway?

Above all TypeScript can work really well in Node.js environments. In back-end development, it’s even more important to keep track of what’s going on in your code. It also works really well with interfaces, and brings some features, like abstract classes, that can become handy if our goal is to develop complex scalable solution in the right “object oriented way”.

In combination of both back-end and front-end parts of our application, we can achieve lots of benefits, like the possibility of sharing interfaces, or parts of code, that are common for both parts of our application.

The choice

Both solutions have it’s benefits and can be more effective for different kinds of applications, you can learn more about both of them here https://www.typescriptlang.org/ and here https://flow.org/en/ Good luck with you code and remember. Choose wisely

![](/img/0_q1uwhpsuc9pclfwr.png)
