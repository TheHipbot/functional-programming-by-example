# Functional Programming by Example

The functional programming paradigm is one which offers many benefits over that of imperative implementations. There are always trade-offs, but when used in the proper cases functional methods can solve issues in concurrent programs with immutable data, reduce load on the CPU with lazy computations and memoization, and can even allow for proof of correctness in implementations. That being said, it is an often misunderstood and misused technique in programming. By learning the core concepts in FP one can then understand when best to use it and how it can be implemented.

Now the best way to fully grasp new concepts like the ones that will be introduced as part of this content is to put them to practice, but before you can do that you must be somewhat familiar with them. Gaining that familiarity is the purpose of this article and I aim to provide that via a collection of code examples to display the concept itself, its benefits, and anti-patterns alongside explanations. Code examples will be in one or many of the following languages: JavaScript, Scala, and Haskell. I chose to use multiple languages in part selfishly because some have better support for certain concepts making it easier to put together examples, but also because I believe it will benefit you, the reader to see how the various langauges support the features as well. As I flesh out the walkthroughs, I will also attempt to have each example in at least 2 of the three languages to display the differences. 

Before getting started:

Legend / Lingo:
* Functional Programming = FP
* Higher order functions = functions as first class citizens = HOF

So without further adieu:

## What is Functional Programming?

To understand what FP is, we must understand first what it is not or how it is different. FP is diametrically opposed to imperative programming and imperative programming is what most programmers would be accustomed to. Imperative style uses mutable data and statements to modify the running state of the program. This includes controls statements like conditionals and loops as well as void functions which take no parameters and return no useful values. There is also, in most cases, the implication that each statement in the program will run synchronously and consecutively. 

FP on the other hand, uses immutable values and expressions. 

## Why is Functional Programming?
