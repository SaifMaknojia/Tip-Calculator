### Built with
-Flexbox
-Sass-css
-Mobile-first
-Create-React-App
-React-hooks.
-Media queries for responsive layout.


### The challenge
Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Calculate the correct tip and total cost of the bill per person


### What I learned
- its important to plan rather then just start implementing project.
- breaking down the component into small pieces is always gonna help build project faster.
- I started project in single page, later i converted the code into small components.
- Keeping code resuablity was the most important thing in mind.
- How to style radio buttons to look like normal buttons.
- Conditionally render content based on userinput.
- Basic form validation like if user input doesn't match required input.
- The biggest problem i faced was improper styling, as i didnt plan the project beforehand.

## Problems I faced
- The biggest problem i faced was how to show error when input value is invalid i.e 0 or less.
- Another problem faced was when we enter input value and tried to clear the entire input, there use to be 0 present always.
- New Input always started with zero i.e 0100.00
- it took me almost an hour to get a solution for this error, stack over flow had a good resource which helped me customise the solution for my problem. conditional rendering helped to get sort the problem
- Adding custom tip to the custom tip input and then clearing it gave input value as NaN. Problem was similar to above input value, it didnt take much time to fix it. conditional rendering helped solve the problem


## Things i will start implementing in next project
- plan the project 
  -- where will state leave
  -- break the project into components folder,utils folder(code that is gonna be resused), style folder(css), pages folder.
  -- Breakdown the file according to components eg:
  src
    -components
      --table
        --Tableheader
        --TableBody
      --Header
        --Logo
        --Navbar
        --button
      --Footer
        --Logo
        --Content
    -utils
      --logo
      --form
    -pages
      HomePage
      FormPage
      

## Best Practice Learned 
- If working in team always use PropTypes for props. 
- use comments so that team can understand where the problem is when debugging an error.
- focus on reusabilty, as its cleaner and easy to identify bugs we might encounter.
- understand the design and break in folders i.e what other components will it take eg:   
      --Header
        --Logo
        --NavbarList
        --button(sign in/sign Out)
- keep a track on time, as it will help us understand how to much time we need to finish the project. 


## Acknowledgments
- This is a solution to the [Tip calculator app challenge on Frontend Mentor].
- Design was provided by Frontend Mentor. I added total tip option to the design as user would like to know how much tip they tipping. so that they can add or less, depending on there prefrence. 
