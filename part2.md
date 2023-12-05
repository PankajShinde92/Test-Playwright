Response on Part 2 question:

My analysis on the priority of listen components are purely based on how critical they are and also their interdependecies.

Following are the suggested proirity of the given components:

High Priority :

    1. the frontend has an authentication layer provided by Auth0 :

        Reason being authentication layer means Security and implementation of the critical componenent. Early testing on this layer will identify potential threats and avoid exposing any sensative information present on the system. Always remember Bearer token is like ATM pin. :D J

    2. basic validation is provided by the frontend and backend when designing the decision tree

        Once the security is looked after it is always better to test something which is talking to both frontend and backend. Setting us decision tree and validation rules early and effective is avoiding any large scale changes/ High level design changes on system later. This is essential for maintaining data integrity and system stability by detecting invalid inputs and behaviours. 
        To test this, SQL injections are best practise.

    3. frontend with a REST API backend

        Once securtiy frontend validations, backend input validations are done then we can start testing the interfaces. API's will also be tested as a part of point 1 but this will be indept testing of each point and their payloads.

Low Priority :

    1. the frontend has a UI for designing a decision tree

        While UI design plays a significant role in user engagement, functional elements like core logic and authentication are more imporatant. However, UI testing holds important but when it comes to priority it is always better to secure the foundation of the project which is Backend.

    2. the input goes through the various paths of the decision tree to yield a final output

        If we have done the High Priority point 2 correctly this ultimately becomes low priority. On the other hand, source of inputs makes a differnece but still less critical when you have good design for decision tree.

    3. parts of the decision tree may reach out to third-party services

        Our goal should be to focus on internal working of application. External services does introduce complexities but eventually low priority we will need to make sure the exchange of data is secure and we usually integrate thrid parties when internal software is functioning well hence low priority.