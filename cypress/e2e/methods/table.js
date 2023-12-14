// /// <reference types="cypress" />

// describe('practive tables', () => {

//     it('should verify the new data', () => {

//         // Verfiy if Barry is Present  

//         cy.visit('https://tablepress.org/demo/')

//         cy.get('#tablepress-demo td')
//             .contains('Barry')
//             .should('have.text', 'Barry')

//     });
// });


describe('practive tables', () => {

    it('should verify the new data', () => {

        // Verfiy if Barry is Present  

        cy.visit('https://tablepress.org/demo/')

        cy.get('#tablepress-demo td')
            .contains('Barry')
            .should('have.text', 'Barry')

        cy.get('#tablepress-demo td').first().should('have.text', 'Gloria').debug()

        cy.get('#tablepress-demo td').last().should('have.text', '$20')



    });


});
//debug()
