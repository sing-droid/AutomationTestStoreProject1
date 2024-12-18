class LinkCheck {
    ClickLink1(link){
        cy.contains(link).click();
    }
}

export default LinkCheck;