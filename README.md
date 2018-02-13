# Strive App

This a a basic single page application built with a postgreSQL database, Ruby on Rails and React

# Features
  * User data entry form 
  * Data validations
  * Form Errors
  * 5 unique questions
  * Timer for each question with auto-submit when time runs out

# Decisions
* Rails was used because because of its powerful ability to quickly build out an API. 
* React was used to create a performant, dynamic single page application. It's modular design would have allowed for easy scalability as more features were added. 

* If I were to do this again given the time constraints I would definitely consider just using Rails to serve and generate html via .erb templates. The amount of boilerplate required to setup and use react required a significant amount of time. I could have accomplished more if I had taken this route. That being said, I think the app I created is much more scalable and adding more features would be faster in the future.
* Furthermore, given the time considerations I might have considered using more prebuilt modules such as for the timer. 

## Future Improvements
  * Dynamically pull questions from backend for more modular, design and easy updating
  * Allow review and scoring of applications
  * Use session to store current user 
    * currently storing the user_id in the url is not secure
  * Use redux or similar to preserve state if page is refreshed 
  * Add styling 