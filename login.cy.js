class LoginPage {

    //this method will visit the website
    EnterUrl () {
        cy.visit("https://automationteststore.com/");
    }


//this line with validate the user.
loginWithValidId(){

        cy.get('[name="loginname"]').type = ("sonu12345");
        cy.get('[name="password"]').type = ("Hero@12345");
        cy.get('.btn btn-orange pull-right').eq(2).click();
    }

    
}


export default LoginPage;
