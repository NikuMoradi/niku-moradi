<template>
  <div class="container">
    <!-- Sidebar -->
    <div class="sidebar">
      <a href="#home">Home</a>
      <a href="#tutorials">Tutorials</a>
      <a href="#courses">Courses</a>
      <a href="#jobs">Jobs</a>
      <a href="#about">About</a>
      <a href="#contact">Contact</a>
    </div>

    <!-- Main Content -->
    <div class="content">
      <div id="home">
        <h1>GeeksforGeeks</h1>
        <p>
          GeeksforGeeks is a widely acclaimed online platform that serves as a
          learning resource for computer science and programming enthusiasts.
          Established in 2009 by Sandeep Jain, the platform has become a go-to
          destination for students, professionals, and educators seeking quality
          content related to computer science and programming.
        </p>
      </div>

      <div id="tutorials">
        <h1>HTML</h1>
        <p>
          HTML stands for HyperText Markup Language. It is used to design the
          web pages. With the help of HTML, you can create a complete website
          structure. HTML is the combination of Hypertext and Markup language.
          Hypertext defines the link between the web pages and markup language
          defines the text document within the tag that define the structure of
          web pages.
        </p>
      </div>
    </div>
  </div>
</template>
<style>
.container {
  display: flex;
}

.sidebar {
  width: 200px;
  height: 100vh;
  background-color: #136a13;
  color: #fff;
  box-sizing: border-box;
  position: fixed;
}

.content {
  flex: 1;
  padding: 20px;
  box-sizing: border-box;
  margin-left: 200px;
  text-align: justify;
}

.sidebar a {
  display: block;
  color: #fff;
  text-decoration: none;
  padding: 10px;
  margin-bottom: 10px;
  transition: background-color 0.3s;
}

/* Change background color on hover */
.sidebar a:hover {
  background-color: #2980b9;
}
</style>
