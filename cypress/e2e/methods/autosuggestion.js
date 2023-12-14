//<reference types="cypress" />

// describe('practicing auto suggestion', () => {
//     it('should pick Apple', () => {

//         cy.visit('https://www.google.com/')

//         cy.get('#APjFqb').type('A')

//         cy.contains('.G43f7e li', 'Apple').click()



//     });
// });

/////// cy.visit() -> opens the url 

// cy.get() - > getting the element by css

// contains() -> getting the element if its unique on the page by the text

// invoke('text') -> gets the text of the element 
 
// as() -> alias, (abbreviation) , references/saves the piece of code which you will later use it by using cy.get('@....')

// should() -> implicit assertion for verifcation of your actual result vs expected

// expect() -> explicit assertion, but you have to use promies then() in order to make your code in the order and make the assertion with expect() to equal() mehtod

// then() -> it is a promies , which makes javascript code in order by taking arrow function and inside arrow function you will write your logic


// eq() -> isolates the array of element and it starts from 0, usage is
// cy.get(elements).eq(index).click()

// cy.contains('list of elements', 'desired element').click() -> for autosuggestions while doing automation so it can pick the desired element/product


