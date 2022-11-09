const htmlGen = (arr) =>
  `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400&display=swap"
        rel="stylesheet"
      />
      <link rel="stylesheet" href="./css/style.css" />
      <title>My Team</title>
    </head>
    <body>
      <header>
        <nav>
          <h1>My Team</h1>
        </nav>
      </header>
  
      <main>
        <section class="team__container">
        ${
          arr
            ? arr.map(
                (
                  { name, id, email, gitHub, officeNum, school, role },
                  index
                ) => `
        <div class="details__block">
            <div class="block__header">
              <h3>${name}</h3>
              <div>
                <img src="./img/${
                  role === "Manager"
                    ? "tea-cup-svgrepo-com.svg"
                    : role === "Engineer"
                    ? "sunglasses-svgrepo-com.svg"
                    : role === "Intern"
                    ? "graduate-boy-svgrepo-com.svg"
                    : "tea-cup-svgrepo-com.svg"
                }" alt="${role + index}" />
                <p>${role}</p>
              </div>
            </div>
            <div class="block__body">
              <p><span>id : </span>${id}</p>
              <p><span>email : </span>${email}</p>
              ${
                role === "Manager"
                  ? `
              <p><span>office Number : </span>${officeNum}</p>
              `
                  : role === "Engineer"
                  ? `
              <p><span>Git Hub : </span><a href="${gitHub}">Git Hub</a></p>
              `
                  : role === "Intern"
                  ? `
              <p><span>School : </span>${school}</p>
              `
                  : ""
              }
            </div>
          </div>
        `
              )
            : ""
        }
          
        </section>
      </main>
    </body>
  </html>
  `;

module.exports = htmlGen;
