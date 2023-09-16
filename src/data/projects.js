const projectsArr = [
  {
    ctaId: '1',
    name: 'ConsoleHub',
    description: [
      'ConsoleHub makes it easy for users to reserve their preferred gaming console at a time slot by simplifying the process of scheduling gaming sessions. The platform has an extensive library of gaming consoles, ensuring a wide variety of choices for users with varied gaming preferences.',

      "The application's front end is developed using React, a popular JavaScript library for building user interfaces. This choice provides a responsive and user-friendly interface that enhances the overall user experience. On the back end, ConsoleHub relies on Ruby on Rails, serving as the foundation for its API. Rails efficiently handles data management, ensuring robust performance and data security.",

      'For user authentication, ConsoleHub relies on Devise, a trusted and widely used authentication solution in the Ruby on Rails ecosystem. This ensures that user accounts are secure and easily manageable. To provide an appealing and customizable design, the platform utilizes Tailwind CSS. This allows for visually appealing and responsive layouts, enhancing the user interface aesthetics.',

      'In summary, ConsoleHub is a well-crafted web application that streamlines the booking of gaming consoles. It leverages React and Ruby on Rails for its front-end and back-end respectively, with Devise for authentication and Tailwind CSS for stylish design. The combination of these technologies ensures a seamless and enjoyable user experience for users.',
    ],
    image: '../images/projects/consolehub_popup.svg',
    mockup: '../images/projects/consolehub_card.svg',
    technologies: [
      'Ruby on Rails',
      'React',
      'Tailwind CSS',
      'Redux',
      'PostgreSQL',
      'Devise',
      'Rspec-rails',
    ],
    source:
      'https://github.com/stephenkati/gaming_console_reservation_front_end',
    live: 'https://console-hub.netlify.app/',
  },
  {
    ctaId: '2',
    name: 'BudgetTrail',
    description: [
      'This handy mobile web app is carefully designed for users to track and optimize their finances. The app allows users to take control of their budget and manage their income and expenses in a comprehensive way.',

      "It is built on a robust architecture that combines the power of Ruby on Rails, PostgreSQL, and SASS to ensure a seamless and responsive user experience. This synergy not only guarantees the application's reliability, but also enables it to efficiently process and store data, safeguarding users' financial information.",

      'Navigating through this user-friendly platform, individuals can effortlessly input and monitor their day-to-day transactions, assigning them to specific categories that align with their personal financial schema. By categorizing transactions, users gain unparalleled clarity into their spending patterns, unveiling insights that are instrumental in making informed financial decisions.',

      "The backbone of this application's user experience is fortified by Devise, an authentication solution that guarantees not only the security of user data but also a streamlined and hassle-free login process. Our implementation of Rspec-rails and Capybara further ensures that the application's functionalities are rigorously tested, guaranteeing its reliability and minimizing potential disruptions.",

      "With this mobile web application, you can turn financial prudence into a reachable goal. Explore the capabilities of comprehensive financial management, organized categorization, and insights driven by data. All these are wrapped in an interface that focuses on user experience while ensuring security and functionality aren't compromised. Start stepping towards the future of budget management today.",
    ],
    image: '../images/projects/budgettrail_popup.svg',
    mockup: '../images/projects/budgettrail_card.svg',
    technologies: [
      'Ruby on Rails',
      'PostgreSQL',
      'SASS',
      'Devise',
      'Rspec-rails',
      'Capybara',
      'Rubocop',
      'Github',
      'Terminal',
    ],
    source: 'https://github.com/Timbar09/BudgetTrail',
    live: 'https://budgettrail.onrender.com/',
  },
  {
    ctaId: '3',
    name: "Space Traveler's Hub",
    description: [
      'This web application showcases a comprehensive array of commercial and scientific space travel services. Its core functionality relies on fetching real-time data from the SpaceX API, providing users with up-to-date information on space exploration opportunities.',

      'Users are not just passive observers; they can actively engage with the application by booking rockets for their space journeys and participating in selected space missions. This interactivity adds an immersive dimension to the user experience, allowing individuals to become part of the exciting world of space travel.',

      'The web application is built using a combination of advanced technologies. React.js forms the foundation, offering a dynamic and responsive user interface that ensures a smooth and enjoyable browsing experience. Redux-toolkit enhances state management, making the application more efficient and user-friendly.',

      'To enhance the visual appeal and user experience, Bootstrap is employed for crafting stylish and responsive layouts. Additionally, the application leverages REST APIs to seamlessly connect and retrieve data, ensuring that users have access to the most accurate and relevant information.',

      'In summary, this web application is a gateway to the universe of commercial and scientific space travel. Its utilization of React.js, Redux-toolkit, Bootstrap, and Rest APIs ensures a sophisticated and engaging platform where users can explore, book, and embark on space adventures.',
    ],
    image: '../images/projects/space_popup.svg',
    mockup: '../images/projects/space_card.svg',
    technologies: ['React', 'Redux', 'Bootstrap', 'REST API'],
    source:
      'https://github.com/Timbar09/React-Redux-Group-Project-Space-Travelers-Hub',
    live: 'https://spacetravelershub-react.onrender.com/',
  },
  {
    ctaId: '4',
    name: 'Blogister',
    description: [
      "This seamlessly operational web application serves as an interactive canvas, presenting a collection of posts that allows users to engage actively. Within this app, users can actively participate in conversations  by appending comments and expressing appreciation through likes. Designed to cater to bloggers' goals, this platform provides a way to share thoughts, concepts, and personal experiences with an interested audience.",

      'The foundation of this dynamic experience is built using a combination of technologies, including Ruby on Rails, PostgreSQL, and SASS. These components work together to create a seamless, responsive, and secure application environment, allowing users to explore and contribute with confidence.',

      'In this user-friendly environment, users encounter a carefully selected collection of posts, encouraging them to explore stories that align with their interests. This platform promotes active engagement, an embodiment of the contemporary digital experience where opinions and reactions play a role in shaping the narrative.',

      'Powered by the versatility of Devise, a trusted authentication solution, the application ensures user data remains shielded, while the confluence of Rspec-rails and Capybara guarantees a meticulous validation of its functionalities, minimizing any potential disruptions.',

      'In essence, what emerges is an immersive web application that not only disseminates information but also fosters a thriving community of discourse. This platform offers bloggers an avenue to broadcast their insights, opinions, and stories to an enthusiastic audience. Amidst the world of technology and communication, this application serves as a reminder of the impact of connectivity and the art of digital expression.',
    ],
    image: '../images/projects/blog_popup.svg',
    mockup: '../images/projects/blog_card.svg',
    technologies: [
      'Ruby on Rails',
      'PostgreSQL',
      'SASS',
      'Devise',
      'Rspec-rails',
      'CanCanCan',
      'Capybara',
      'Rubocop',
      'Github',
      'Terminal',
    ],
    source: 'https://github.com/Timbar09/Blogister',
    live: 'https://github.com/Timbar09/Blogister',
  },
  {
    ctaId: '5',
    name: "Africa's Leading Tech Confrence 2023",
    description: [
      'This project is a responsive website consisting of multiple pages, including a home page and an about page. The website is designed and developed to provide an optimal viewing experience on both mobile and desktop devices, ensuring seamless navigation and functionality.',

      'The home page serves as the central hub of the website, featuring a menu with a link to the about page. Users can easily navigate to the about page to access additional information about the project or organization.',

      'In the header section of the website, the logo is strategically placed and links back to the home page, allowing users to quickly return to the main page regardless of their location within the website.',

      'For mobile devices, a mobile menu is implemented. When users click or tap the hamburger button in the header, the mobile menu overlays the page, providing easy access to different sections and pages. The mobile menu is designed to be visually consistent with the overall website design, incorporating appropriate colors, typography, and spacing. To close the mobile menu, a close (X) button is provided, allowing users to seamlessly return to the main content.',

      "A dynamic page feature is implemented, specifically in the 'Featured speakers' section. The speaker data is stored in a JavaScript variable and utilized during the page load to dynamically generate the HTML content for this section. This dynamic approach allows for easy updating and modification of the featured speakers without directly modifying the HTML code.",

      'The responsive design of the website ensures that it adapts to different screen sizes and devices. Whether accessed on a mobile device with a narrow viewport or a desktop computer, the website layout and content are optimized for the respective screen size, providing users with a visually appealing and user-friendly experience.',

      "In summary, this project encompasses a responsive website with multiple pages, including a home page and an about page. It features a mobile menu for smaller screen sizes, dynamic content generation for the 'Featured speakers' section, and a cohesive navigation system that allows users to seamlessly explore the website on both mobile and desktop devices.",
    ],
    image: '../images/projects/ALT-Conference-popup.svg',
    mockup: '../images/projects/ALT-Conference-card.svg',
    technologies: ['JavaScript', 'CSS3', 'HTML5', 'GitHub', 'Terminal'],
    source: 'https://github.com/Timbar09/Africas-Leading-Tech-Conference',
    live: 'https://timbar09.github.io/Africas-Leading-Tech-Conference/',
  },
  {
    ctaId: '6',
    name: 'Todo App',
    description: [
      'This project is a to-do list web app that allows users to manage their tasks effectively. It provides a user-friendly interface to display a list of tasks and enables users to add new tasks and remove existing ones.',
      '',

      'The project was developed using Webpack, JavaScript, CSS, and HTML. Webpack is used as the module bundler to manage dependencies and optimize the build process. JavaScript is used to implement the interactive functionality of the to-do list, such as adding and removing tasks dynamically. CSS is used for styling the user interface and providing a visually appealing design. HTML is used for the structure and layout of the web app.',
      '',

      'Overall, this project showcases the utilization of essential web development technologies and techniques to create a functional and user-friendly to-do list web app.',
    ],
    image: '../images/projects/todo_app_detail.svg',
    mockup: '../images/projects/todo_app_card.svg',
    technologies: ['React', 'CSS3', 'Git', 'Github', 'HTML5', 'Terminal'],
    source: 'https://github.com/Timbar09/Todo-list-vol-2',
    live: 'https://timbar09.github.io/Todo-list-vol-2/dist/',
  },
  {
    ctaId: '7',
    name: 'Awesome books',
    description: [
      'Awesome Books is a feature-rich single-page web application designed to provide an interactive and user-friendly platform for managing a list of books. <br /> With its dynamic functionality, users can effortlessly add and remove books from the list, creating a personalized library experience.',

      'The core of Awesome Books revolves around the effective utilization of classes and helper functions. By employing object-oriented programming principles, the application leverages classes to encapsulate book-related data and behaviors. Each book is represented by an instance of a class, allowing for easy manipulation and organization of book information.',

      "The application seamlessly integrates with the browser's local storage, providing persistent data storage for the book collection. This means that users can add and remove books without worrying about losing their progress or having to recreate their library each time they visit the website. The data is securely stored within the browser, ensuring a seamless and uninterrupted experience across sessions.",

      'Through a clean and intuitive user interface, Awesome Books offers a smooth and engaging browsing experience. Users can quickly add new books to the list, specifying details such as the title and author. The application also allows for effortless removal of books, providing a streamlined way to manage the library based on individual preferences and reading habits.',
      'Whether users are avid readers, book enthusiasts, or simply looking for an organized way to keep track of their favorite titles, Awesome Books caters to their needs. With its user-centric design and efficient implementation, the application aims to enhance the book management experience, making it more enjoyable and convenient.',

      'Overall, Awesome Books represents a powerful yet user-friendly solution for book lovers, providing an efficient way to manage and organize a personalized book collection. With its dynamic features, seamless integration with local storage, and intuitive user interface, it sets out to redefine the way users interact with their books online.',
    ],
    image: '../images/projects/Awesome-books-popup.svg',
    mockup: '../images/projects/Awesome-books-card.svg',
    technologies: [
      'JavaScript',
      'CSS3',
      'HTML5',
      'Luxon',
      'Github',
      'Terminal',
    ],
    source: 'https://github.com/Timbar09/Awesome-books-vol-2',
    live: 'https://timbar09.github.io/Awesome-books-vol-2/',
  },
];

export default projectsArr;
