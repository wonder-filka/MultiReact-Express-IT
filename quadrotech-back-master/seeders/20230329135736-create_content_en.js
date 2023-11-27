"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("content_en", [
      {
        keyi18n: "About p1",
        value_en:
          "At Quadrotech, we are a team of technology professionals dedicated to solving complex problems for our clients. We specialize in creating highly distributed systems that work around the clock, as well as developing server and mobile solutions that span from electronics to operating systems and applications.",
      },
      {
        keyi18n: "About p2",
        value_en:
          "We provide a wide range of services, including IoT, Smart home, BigData, AI, security, cryptocurrency, blockchain, and FinTech. Our expertise in these areas allows us to take on even the most challenging projects and deliver innovative solutions that meet the unique needs of each client.",
      },
      {
        keyi18n: "About p3",
        value_en:
          "Our team is committed to providing exceptional service to every client we work with. We understand that each project is different, and we take the time to understand our clients' goals and objectives before proposing a solution. This client-centered approach has earned us a reputation as a trusted partner in the technology industry.",
      },
      { keyi18n: "About us", value_en: "About us" },
      {
        keyi18n: "Artificial intelligence",
        value_en: "Artificial intelligence",
      },
      { keyi18n: "BUSINESS NEED", value_en: "BUSINESS NEED:" },
      {
        keyi18n: "BUSINESS NEED 1",
        value_en:
          "In today's world, security and surveillance are becoming increasingly important for businesses and individuals alike. The Video Service platform meets this need by providing a reliable and easy-to-use system for monitoring and recording video footage in real-time, with access from anywhere in the world. This is essential for ensuring safety, preventing theft and fraud, and improving overall efficiency and productivity.",
      },
      {
        keyi18n: "BUSINESS NEED 2",
        value_en:
          "In today's fast-paced digital world, businesses require a payment platform that offers a range of payment instruments to manage transactions effectively. They need a solution that can simplify the payment process, reduce the risk of fraud, and provide an efficient way to manage payments across different channels.",
      },
      {
        keyi18n: "BUSINESS NEED 3",
        value_en:
          "Smart Home Systems are essential for modern-day living. It allows users to remotely manage their home's systems and devices with ease, saving time and energy.",
      },
      {
        keyi18n: "BUSINESS NEED 4",
        value_en:
          "In industries such as healthcare, legal, and finance, maintaining confidentiality and protecting client information is crucial. The Security Box provides a secure communication solution for professionals in these fields, enabling them to communicate sensitive information with clients and colleagues without the risk of interception or eavesdropping. The device ensures compliance with privacy regulations and protects against data breaches, helping professionals maintain the trust and confidence of their clients.",
      },
      {
        keyi18n: "BUSINESS NEED 5",
        value_en:
          "In a world where health and fitness are a top priority for many people, owning a smartwatch has become essential. However, managing multiple smartwatches with different features can be challenging for users. Our SMART WATCH MANAGEMENT APP addresses this need by providing a single platform to connect and manage multiple smartwatches.",
      },
      {
        keyi18n: "BUSINESS NEED 6",
        value_en:
          "The taxi service industry is highly competitive and customers demand a convenient, efficient, and safe ride experience. Traditional methods of dispatching and payment processing are inefficient and slow, resulting in poor customer satisfaction. Our taxi service aims to address these pain points by automating all processes, improving accuracy, and enhancing customer experience.",
      },
      { keyi18n: "Blockchain", value_en: "Blockchain" },
      { keyi18n: "Consulting", value_en: "Consulting" },
      { keyi18n: "DE", value_en: "DE" },
      { keyi18n: "Data science", value_en: "Data science" },
      { keyi18n: "EN", value_en: "EN" },
      { keyi18n: "ES", value_en: "ES" },
      { keyi18n: "FinTech", value_en: "FinTech" },
      { keyi18n: "FinTech li 1", value_en: "Financial services/Banking" },
      { keyi18n: "FinTech li 2", value_en: "Electronic tax stamps" },
      { keyi18n: "FinTech li 3", value_en: "Payment gateway" },
      { keyi18n: "KEY FACTS", value_en: "KEY FACTS:" },
      {
        keyi18n: "KEY FACTS 1",
        value_en:
          "Video Service is a comprehensive video surveillance platform that offers a range of features and benefits, including:",
      },
      {
        keyi18n: "KEY FACTS 1 1",
        value_en:
          "Real-time monitoring and recording of video footage from an unlimited number of cameras",
      },
      {
        keyi18n: "KEY FACTS 1 2",
        value_en:
          "Remote access from anywhere in the world, using a web browser or mobile app",
      },
      {
        keyi18n: "KEY FACTS 1 3",
        value_en:
          "Easy-to-use interface with customizable settings for camera control and view conditions",
      },
      {
        keyi18n: "KEY FACTS 1 4",
        value_en:
          "Audio and video recording to a file or archive, with the ability to view and download footage at any time",
      },
      {
        keyi18n: "KEY FACTS 1 5",
        value_en:
          "Alarm notifications for instant alerts of potential security breaches",
      },
      {
        keyi18n: "KEY FACTS 1 6",
        value_en:
          "Transcoding of video to popular formats for easy sharing and playback",
      },
      {
        keyi18n: "KEY FACTS 1 7",
        value_en:
          "Secure data storage and management, with options for quota management and payment",
      },
      {
        keyi18n: "KEY FACTS 1 8",
        value_en:
          "User management system with customizable access and permissions for different levels of users.",
      },
      {
        keyi18n: "KEY FACTS 1 9",
        value_en:
          "Whether used for personal or professional purposes, Video Service is a powerful tool for enhancing security, improving efficiency, and ensuring peace of mind. With its advanced features and user-friendly interface, it offers a comprehensive solution for all your video surveillance needs.",
      },
      {
        keyi18n: "KEY FACTS 2",
        value_en:
          "Payment Gateway is a versatile platform that offers a range of payment instruments, including internet acquiring, P2P payments, B2B cross-border payments, and a merchant system. The platform provides an efficient way to manage payments across different channels and simplifies the payment process for businesses. It includes modules for anti-fraud, archive, identification, cryptography, optimization of commissions and services, service aggregation, statistics and analytics, bonuses and discounts, electronic wallets, module of guarantees, and compliance and storage of cards/tokens/keys. The Payment Gateway Interface offers web interfaces for different user roles, including the administrator's office and user cabinet. Overall, Payment Gateway is a robust payment platform that offers a comprehensive solution for businesses looking to manage their payments effectively.",
      },
      {
        keyi18n: "KEY FACTS 3",
        value_en:
          "Smart home systems allow users to remotely control and automate various aspects of their homes, including lighting, heating, appliances, multimedia devices, blinds, and security features.",
      },
      {
        keyi18n: "KEY FACTS 3 1",
        value_en:
          "These systems are typically composed of both hardware devices and software applications that communicate with one another through the internet or other networks.",
      },
      {
        keyi18n: "KEY FACTS 3 2",
        value_en:
          "The management of lighting and household appliances can help users save money on energy bills by ensuring that devices are only in use when needed.",
      },
      {
        keyi18n: "KEY FACTS 3 3",
        value_en:
          "Smart home systems can also optimize heating and water usage to reduce waste and improve energy efficiency.",
      },
      {
        keyi18n: "KEY FACTS 3 4",
        value_en:
          "By monitoring energy usage and optimizing utility payments, these systems can also help users save money on their monthly bills.",
      },
      {
        keyi18n: "KEY FACTS 3 5",
        value_en:
          "One of the key benefits of smart home systems is increased security, with features such as intrusion detection, water leakage prevention, and fire and gas leak detection.",
      },
      {
        keyi18n: "KEY FACTS 3 6",
        value_en:
          "Smart home technology continues to evolve, with new features and integrations being added regularly to provide even more convenience and automation for users.",
      },
      {
        keyi18n: "KEY FACTS 4",
        value_en:
          "The Security Box is a compact device that provides encrypted voice traffic to ensure secure communication.",
      },
      {
        keyi18n: "KEY FACTS 4 1",
        value_en:
          "Each participant in a secure conversation uses their copy of the device.",
      },
      {
        keyi18n: "KEY FACTS 4 2",
        value_en:
          "The device works as a Bluetooth headset, and wired headphones with a microphone are connected to it.",
      },
      {
        keyi18n: "KEY FACTS 4 3",
        value_en:
          "The Security Box communicates via a Bluetooth interface with a mobile phone or laptop/tablet.",
      },
      {
        keyi18n: "KEY FACTS 4 4",
        value_en:
          "The audio stream at the input and output goes through several stages of processing to ensure high-quality transmission of encrypted information.",
      },
      {
        keyi18n: "KEY FACTS 4 5",
        value_en:
          "The encryption techniques used in the Security Box prevent third parties from decrypting data when intercepting a conversation.",
      },
      {
        keyi18n: "KEY FACTS 4 6",
        value_en:
          "If the audio stream is intercepted by third parties, it will sound like a continuous stream of crackling and squeaking 'noise'.",
      },
      {
        keyi18n: "KEY FACTS 4 7",
        value_en:
          "The Security Box provides a unique solution for businesses to protect their sensitive information from competitors and cybercriminals.",
      },
      {
        keyi18n: "KEY FACTS 5",
        value_en:
          "Our SMART WATCH MANAGEMENT APP provides a seamless experience for users to manage multiple smartwatches in one platform.",
      },
      {
        keyi18n: "KEY FACTS 5 1",
        value_en:
          "Users can connect and manage over 20 watch models with different functionalities, including heart rate measurement, stress indices, temperature measurement, sports activities, and sleep data.",
      },
      {
        keyi18n: "KEY FACTS 5 2",
        value_en:
          "The app is connected to Strava, allowing users to track workouts and calories easily.",
      },
      {
        keyi18n: "KEY FACTS 5 3",
        value_en:
          "Our app caters to a diverse range of users, including the elderly, fitness enthusiasts, children, and women, with women's calendar and personal settings.",
      },
      {
        keyi18n: "KEY FACTS 5 4",
        value_en:
          "The app's intuitive design and user-friendly interface provide users with a hassle-free experience to manage their smartwatches.",
      },
      {
        keyi18n: "KEY FACTS 6",
        value_en:
          "Our taxi service is powered by a suite of software applications, including client and driver apps, admin panels, and a call center. We use personal settings and two-factor authentication to ensure security. Our navigation and payment systems are integrated to make the process of hailing a taxi simple and fast. With features like chat support, news and notifications, SMS service, and analytics, we are constantly working to improve our service. Our taxi service stands out from the competition with its advanced features, secure payment options, and superior customer support.",
      },
      { keyi18n: "Life science ", value_en: "Life science " },
      {
        keyi18n: "Life science li 1",
        value_en: "Multifunctional smart devices (wristwatch, smart bracelets)",
      },
      { keyi18n: "Life science li 2", value_en: "Smart home system" },
      {
        keyi18n: "Life science li 3",
        value_en: "Software for computer accessories ",
      },
      { keyi18n: "Life science li 4", value_en: "Video service" },
      { keyi18n: "Multimedia", value_en: "Multimedia" },
      { keyi18n: "Our team", value_en: "Our team" },
      {
        keyi18n: "Quality Assurance (QA)",
        value_en: "Quality Assurance (QA)",
      },
      { keyi18n: "RESULT", value_en: "RESULT:" },
      {
        keyi18n: "RESULT 1",
        value_en:
          "With Video Service, users can enjoy peace of mind knowing that they can keep a watchful eye on their properties or businesses at all times. The platform's advanced features, such as remote access, real-time monitoring, and archive playback, make it a valuable tool for enhancing security and improving overall performance. Whether used for personal or professional purposes, Video Service delivers reliable results and a user-friendly experience.",
      },
      {
        keyi18n: "RESULT 2",
        value_en:
          "In today's fast-paced digital world, businesses require a payment platform that offers a range of payment instruments to manage transactions effectively. They need a solution that can simplify the payment process, reduce the risk of fraud, and provide an efficient way to manage payments across different channels.",
      },
      {
        keyi18n: "RESULT 3",
        value_en:
          "The integration of Smart Home Systems leads to increased comfort, convenience, and security, while also providing users with valuable insights into their energy consumption, optimizing utility bills, and reducing the carbon footprint.",
      },
      {
        keyi18n: "RESULT 4",
        value_en:
          "With the Security Box, businesses can have complete peace of mind knowing that their conversations are entirely confidential and cannot be monitored or intercepted. This device ensures that sensitive information stays secure and confidential, helping companies protect their intellectual property and confidential data from prying eyes.",
      },
      {
        keyi18n: "RESULT 5",
        value_en:
          "Our app allows users to connect and manage more than 20 different watch models with various functionalities. Users can access comprehensive health and fitness metrics, including heart rate measurement, stress indices, temperature measurement, sports activities, and sleep data. The app is also connected to Strava, enabling users to track their workouts and calories easily. With women's calendar and personal settings, our app caters to a diverse range of users, including the elderly, fitness enthusiasts, children, and women.",
      },
      {
        keyi18n: "RESULT 6",
        value_en:
          "Our automated taxi service allows customers to request and pay for rides seamlessly through a mobile app, while drivers receive real-time ride requests and directions, leading to efficient pickups and drop-offs. Accurate determination of coordinates and smart order distribution result in reduced waiting times and improved passenger safety. Advanced features like rating systems, bonus and referral programs, and 24/7 support help us to exceed customer expectations.",
      },
      { keyi18n: "Security", value_en: "Security" },
      {
        keyi18n: "Security li 1",
        value_en: "PKI infrastructure, certification authority",
      },
      {
        keyi18n: "Security li 2",
        value_en: "AFIS, Automated Fingerprint Identification System",
      },
      {
        keyi18n: "Service1 p",
        value_en:
          "Our Software and Maintenance service encompasses the full software development lifecycle, from requirements gathering to deployment and ongoing maintenance. Our team of experts can design and develop custom software solutions to meet your unique business needs, as well as provide ongoing support and maintenance to ensure optimal performance and reliability.",
      },
      {
        keyi18n: "Service2 p",
        value_en:
          "Our Consulting service offers strategic guidance and expertise to help businesses optimize their technology solutions and maximize their return on investment. Our team of consultants can provide guidance on a range of topics, from technology strategy and architecture to software development best practices and project management.",
      },
      {
        keyi18n: "Service3 p",
        value_en:
          "Our Quality Assurance (QA) service ensures that your software solution meets the highest standards of quality and performance. Our team of QA experts will rigorously test your software solution to identify any bugs or issues, and provide detailed reports and recommendations to help ensure that your software solution meets or exceeds expectations.",
      },
      { keyi18n: "Services We offer", value_en: "Services We offer" },
      {
        keyi18n: "Software and maintenance",
        value_en: "Software and maintenance",
      },
      { keyi18n: "Transport", value_en: "Transport" },
      { keyi18n: "Transport li 1", value_en: "Taxi" },
      { keyi18n: "Transport li 2", value_en: "E-tickets" },
      {
        keyi18n: "address",
        value_en:
          "registered office at 165 Spyrou Araouzou, LORDOS WATERFRONT COURT, Office 201A, 2nd floor, 3036 Limassol, Cyprus",
      },
      { keyi18n: "by", value_en: "by Emma Roberts" },
      {
        keyi18n: "case 1 description",
        value_en:
          "Video Service is a video surveillance platform that offers real-time monitoring, recording, and archive playback of footage from an unlimited number of cameras, with remote access from anywhere in the world.",
      },
      { keyi18n: "case 1 title", value_en: "VIDEO SERVICE" },
      {
        keyi18n: "case 2 description",
        value_en:
          "Is a platform with a set of payment instruments that allows users to create wallets, make transfers and manage them, pay bills and services, act as merchants (offer goods and services) and agents.",
      },
      { keyi18n: "case 2 title", value_en: "PAYMENT GATEWAY" },
      {
        keyi18n: "case 3 description",
        value_en:
          "Smart Home Systems offer convenient remote control of home systems and devices, increasing comfort, security, and energy efficiency. These systems help users save money on utility bills, optimize energy usage, and reduce their carbon footprint.",
      },
      { keyi18n: "case 3 title", value_en: "SMART HOME SYSTEM" },
      {
        keyi18n: "case 4 description",
        value_en:
          "Security Box is a compact and secure communication device that provides encrypted voice traffic to ensure confidential communication, protecting businesses and professionals from interception or eavesdropping.",
      },
      { keyi18n: "case 4 title", value_en: "SECURITY BOX" },
      {
        keyi18n: "case 5 description",
        value_en:
          "The application allows you to connect and manage a set of watch models (currently more than 20) with different characteristics and functionality of smart, fitness, children, for the elderly, bracelets with heart rate measurement through one application.",
      },
      { keyi18n: "case 5 title", value_en: "SMART WATCH MANAGEMENT APP" },
      {
        keyi18n: "case 6 description",
        value_en:
          "Our automated taxi service provides a convenient and safe ride experience for customers, with real-time ride requests and directions for drivers, resulting in reduced waiting times and improved accuracy. With advanced features like rating systems, referral programs, and 24/7 support, our taxi service exceeds customer expectations and stands out from the competition.",
      },
      { keyi18n: "case 6 title", value_en: "TAXI SERVICE" },
      {
        keyi18n: "case key 1",
        value_en:
          "Video Service is a comprehensive video surveillance platform that offers a range of features and benefits, including:\n<ul>\n<li> Real-time monitoring and recording of video footage from an unlimited number of cameras</li>\n<li> Remote access from anywhere in the world, using a web browser or mobile app</li>\n<li> Easy-to-use interface with customizable settings for camera control and view conditions</li>\n<li>Audio and video recording to a file or archive, with the ability to view and download footage at any time</li>\n<li>Alarm notifications for instant alerts of potential security breaches</li>\n<li>Transcoding of video to popular formats for easy sharing and playback</li>\n<li>Secure data storage and management, with options for quota management and payment</li>\n<li>User management system with customizable access and permissions for different levels of users.</li>\n</ul>\nWhether used for personal or professional purposes, Video Service is a powerful tool for enhancing security, improving efficiency, and ensuring peace of mind. With its advanced features and user-friendly interface, it offers a comprehensive solution for all your video surveillance needs.\n",
      },
      {
        keyi18n: "case key 2",
        value_en:
          "Payment Gateway is a versatile platform that offers a range of payment instruments, including internet acquiring, P2P payments, B2B cross-border payments, and a merchant system. The platform provides an efficient way to manage payments across different channels and simplifies the payment process for businesses. It includes modules for anti-fraud, archive, identification, cryptography, optimization of commissions and services, service aggregation, statistics and analytics, bonuses and discounts, electronic wallets, module of guarantees, and compliance and storage of cards/tokens/keys. The Payment Gateway Interface offers web interfaces for different user roles, including the administrator's office and user cabinet. Overall, Payment Gateway is a robust payment platform that offers a comprehensive solution for businesses looking to manage their payments effectively.",
      },
      {
        keyi18n: "case key 3",
        value_en:
          "<ul>\n<li>Smart home systems allow users to remotely control and automate various aspects of their homes, including lighting, heating, appliances, multimedia devices, blinds, and security features.</li>\n<li>These systems are typically composed of both hardware devices and software applications that communicate with one another through the internet or other networks.</li>\n<li>The management of lighting and household appliances can help users save money on energy bills by ensuring that devices are only in use when needed.</li>\n<li>Smart home systems can also optimize heating and water usage to reduce waste and improve energy efficiency.</li>\n<li>By monitoring energy usage and optimizing utility payments, these systems can also help users save money on their monthly bills.</li>\n<li>One of the key benefits of smart home systems is increased security, with features such as intrusion detection, water leakage prevention, and fire and gas leak detection.</li>\n<li>Smart home technology continues to evolve, with new features and integrations being added regularly to provide even more convenience and automation for users.</li>\n<ul>",
      },
      {
        keyi18n: "case key 4",
        value_en:
          "<ul>\n<li>The Security Box is a compact device that provides encrypted voice traffic to ensure secure communication.</li>\n<li>Each participant in a secure conversation uses their copy of the device.</li>\n<li>The device works as a Bluetooth headset, and wired headphones with a microphone are connected to it.</li>\n<li>The Security Box communicates via a Bluetooth interface with a mobile phone or laptop/tablet.</li>\n<li>The audio stream at the input and output goes through several stages of processing to ensure high-quality transmission of encrypted information.</li>\n<li>The encryption techniques used in the Security Box prevent third parties from decrypting data when intercepting a conversation.</li>\n<li>If the audio stream is intercepted by third parties, it will sound like a continuous stream of crackling and squeaking 'noise'.</li>\n<li>The Security Box provides a unique solution for businesses to protect their sensitive information from competitors and cybercriminals.</li>\n</ul>",
      },
      {
        keyi18n: "case key 5",
        value_en:
          "<ul>\n<li>Our SMART WATCH MANAGEMENT APP provides a seamless experience for users to manage multiple smartwatches in one platform.</li>\n<li>Users can connect and manage over 20 watch models with different functionalities, including heart rate measurement, stress indices, temperature measurement, sports activities, and sleep data.</li>\n<li>The app is connected to Strava, allowing users to track workouts and calories easily.</li>\n<li>Our app caters to a diverse range of users, including the elderly, fitness enthusiasts, children, and women, with women's calendar and personal settings.</li>\n<li>The app's intuitive design and user-friendly interface provide users with a hassle-free experience to manage their smartwatches.</li>\n</ul>",
      },
      {
        keyi18n: "case key 6",
        value_en:
          "Our taxi service is powered by a suite of software applications, including client and driver apps, admin panels, and a call center. We use personal settings and two-factor authentication to ensure security. Our navigation and payment systems are integrated to make the process of hailing a taxi simple and fast. With features like chat support, news and notifications, SMS service, and analytics, we are constantly working to improve our service. Our taxi service stands out from the competition with its advanced features, secure payment options, and superior customer support.",
      },
      { keyi18n: "case1", value_en: "VIDEO SERVICE" },
      {
        keyi18n: "case1 p",
        value_en:
          "It is a video surveillance platform that offers real-time monitoring, recording, and...",
      },
      { keyi18n: "case2", value_en: "PAYMENT GATEWAY" },
      {
        keyi18n: "case2 p",
        value_en:
          "Is a platform with a set of payment instruments that allows users to create wallets, make...",
      },
      { keyi18n: "case3", value_en: "SMART HOME SYSTEM" },
      {
        keyi18n: "case3 p",
        value_en:
          "'Smart home' is an ecosystem of your home of your safety and comfort...",
      },
      { keyi18n: "case4", value_en: "SECURITY BOX" },
      {
        keyi18n: "case4 p",
        value_en:
          "It is a compact and secure communication device that provides encrypted voice...",
      },
      { keyi18n: "case5", value_en: "SMART WATCH APP" },
      {
        keyi18n: "case5 p",
        value_en:
          "The app allows you to connect and manage a set of watch models (currently...",
      },
      { keyi18n: "case6", value_en: "TAXI SERVICE" },
      {
        keyi18n: "case6 p",
        value_en:
          "Our taxi service is powered by a suite of software applications, including ...",
      },
      {
        keyi18n: "cases page p",
        value_en:
          "In this section, you can familiarize yourself with our company's work in the field of software development. This will help you learn more about our experience and successes.",
      },
      { keyi18n: "contact btn", value_en: "Contact us" },
      { keyi18n: "contact form", value_en: "Contact form" },
      { keyi18n: "contacts", value_en: "contacts" },
      {
        keyi18n: "discuss",
        value_en: "Ready to discuss your project with us?",
      },
      { keyi18n: "form company placeholder", value_en: "Company *" },
      { keyi18n: "form email placeholder", value_en: "E-mail *" },
      { keyi18n: "form last name placeholder", value_en: "Last Name *" },
      { keyi18n: "form message title", value_en: "Message" },
      { keyi18n: "form name placeholder", value_en: "First Name *" },
      { keyi18n: "form phone placeholder", value_en: "Phone *" },
      { keyi18n: "get more", value_en: "Get more" },
      {
        keyi18n: "home description",
        value_en:
          "We develop and implement innovative solutions for help clients to be the leaders of their industry.",
      },
      {
        keyi18n: "industries page p",
        value_en:
          "At Quadrotech, we understand that every industry has unique challenges and requirements. Explore the diverse sectors we serve  and discover how Quadrotech can help your business thrive.",
      },
      { keyi18n: "nav cases", value_en: "Cases" },
      { keyi18n: "nav contacts", value_en: "Contacts" },
      { keyi18n: "nav home", value_en: "Home" },
      { keyi18n: "nav industries", value_en: "Industries" },
      { keyi18n: "nav reviews", value_en: "Reviews" },
      { keyi18n: "nav services", value_en: "Services" },
      { keyi18n: "navigation", value_en: "Navigation" },
      {
        keyi18n: "p footer",
        value_en:
          "We develop and implement innovative solutions for help clients to be the leaders of their industry.",
      },
      {
        keyi18n: "review item",
        value_en:
          "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.",
      },
      {
        keyi18n: "reviews page p",
        value_en:
          "In this section, you can review the feedback from our clients. Satisfied customers are our top priority, and we work every day to ensure you achieve the desired results.",
      },
      { keyi18n: "send", value_en: "Send" },
      { keyi18n: "sent", value_en: "Message sent!" },
      {
        keyi18n: "services page p",
        value_en:
          "We offer end-to-end software development services that encompass the entire project lifecycle, from conceptualization to deployment and beyond. Our team is capable of creating custom software solutions from scratch, or we can provide support at any stage of your project. ",
      },
      { keyi18n: "slide description 1", value_en: "" },
      { keyi18n: "slide description 2", value_en: "" },
      { keyi18n: "slide description 3", value_en: "" },
      { keyi18n: "slide title 1", value_en: "" },
      { keyi18n: "slide title 2", value_en: "" },
      { keyi18n: "slide title 3", value_en: "" },
      {
        keyi18n: "team p",
        value_en:
          "At Quadrotech, we believe that our success is directly linked to the talent, dedication, and expertise of our team. With a passion for technology and a commitment to innovation, our diverse team of experts brings a wealth of experience to every project. Get to know the talented individuals behind our company and discover how our team can help your business thrive.",
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("content_en", null, {});
  },
};
