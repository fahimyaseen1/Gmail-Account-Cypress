describe('Gmail Signup', () => 
{
    it('Go to URL', () => 
    {
     // expect(true).to.equal(false)

     cy.visit('http://www.gmail.com'); //  Visit URL
     // cy.get('#link-signup').click(); // Signup for Electron Browser

     cy.get('.daaWTb').click(); // Click to Create account for myself
     cy.wait(2000);
     cy.get('.VfPpkd-StrnGf-rymPhb-b9t22c').eq(0).click();

    }) 

    it('Click to Create Account', () => 
    {
        cy.get("#firstName").type('fahim');
        cy.get('#lastName').type('yaseen');
        cy.get('#username').type('fahimyaseennnnnnnn0001');
        cy.get("#passwd").type('123456_Abcdef').click({force: true});
        cy.wait(2000);
        cy.get('#confirm-passwd').type('123456_Abcdef').click({force: true});
        cy.wait(2000);
        cy.get('#accountDetailsNext').click();
    })

  })