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

FP on the other hand uses immutable values, expressions over statements, and generally aims to reduce and contain side effects. 

## Why is Functional Programming?

Why functional? FP offers a wide array of benefits when used properly and here are some:

### Concurrency

Since we are reaching the limits of Moore's law, CPU's are beginning to be scaled horizontally rather than vertically by adding more cores to a CPU instead of more transistors on a core. Not only that, but with cloud platforms growing in usage programs are moving toward a distributed architecture. As a result, concurrency in programs is becoming a necessity to fully utilize the resources in these systems. FP tends to be very well suited to concurrent programs because it removes the need for concurrency control and other complex problems when writing concurrent programs in a mutable environment. 

In a concurrent programs it is often a need to share data between the running threads or processes of which the application comprises. This becomes problematic when all of this data is mutable since processes can be modifying the same data which others are reading. Situations such as these are a class of problems known as race conditions and they can often lead to inconsistent states in the overall application. To relieve these problems, mutations to the shared data must be regulated such that only one process can edit at a time. There are many devices that allow this regulation such as locks, semaphores and STM. The problem with using these in your code is that the overall complexity of the programs are greatly increased and due to the nature of schedulers a problem in the code can take a long time to present itself. All in all it is very difficult to write a program like this correctly.

With FP all data is immutable, so once data is created it can be shared safely amongst all of the threads since none will be able to edit the data.
