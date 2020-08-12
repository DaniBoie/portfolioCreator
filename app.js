const inquirer = require('inquirer')
const fs = require('fs')

const question = () => {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
      },
      {
        type: 'input',
        name: 'job',
        message: 'What is your job title?'
      },
      {
        type: 'input',
        name: 'location',
        message: 'Enter your location:',
      },
      {
        type: 'input',
        name: 'bio',
        message: 'Write your bio here:'
      },
      {
        type: 'input',
        name: 'linkedIn',
        message: 'Enter your LinkedIn URL:'
      },
      {
        type: 'input',
        name: 'gitHub',
        message: 'Enter your GitHub URL:'
      },
    ])
    .then(res => {
      console.log(res.name, res.location, res.linkedIn, res.gitHub)

      let htmlPage = `
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Personalized Portfolio</title>
  <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
    integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous">
  <link rel="stylesheet" href="./style.css">
</head>

<body>

  <nav class="navbar navbar-light bg-light" id="headerName">
    <h1>${res.name}</h1>
    <!-- <a class="navbar-brand" href="#">
      Bootstrap
    </a> -->
  </nav>

  <div class="containter">
    <div class="row-8">
      <div class="card" style="width: 18rem;" id="bioCard">
        <div class="card-body">
          <h5 class="card-title">${res.name}'s Bio</h5>
          <h6 class="card-subtitle mb-2 text-muted">${res.job}</h6>
          <p class="card-text">${res.bio}</p>
          <a href="${res.gitHub}" class="card-link">gitHib Profile</a>
          <a href="${res.linkedIn}" class="card-link">LinkedIn Profile</a>
        </div>
      </div>
    </div>
  </div>

  <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
    integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js"
    integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN"
    crossorigin="anonymous"></script>
  <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"
    integrity="sha384-B4gt1jrGC7Jh4AgTPSdUtOBvfO8shuf57BaghqFfPlYxofvL8/KUEfYiJOMMV+rV"
    crossorigin="anonymous"></script>
</body>

</html>`

fs.writeFile('portfolioPage.html', htmlPage, (err) => {console.log(err)})
    })
    .catch(err => console.log(err))
}

question()
