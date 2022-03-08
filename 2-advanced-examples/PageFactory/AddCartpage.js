/// <reference types = "cypress" />



class AddToCart
{
    visit()
    {
        cy.visit('')
    }
    clickOnCategory()
    {
        const category = cy.contains('Woman')
        category.click()
    }
    Openimage()
    {
        const image = cy.contains('Faded Short Sleeve T-shirts')
        image.click()
    }
    Secondimage()
    {
        const image1 = cy.contains('Your shopping cart is empty')
        image1.click()
    }
    AddCart()
    {
        const addcart = cy.get('[name=Submit]')
        addcart.click()
    }
    checkOut()
    {
        const check = cy.contains('Proceed to checkout')
        check.click()
    }
    Deleteproduct()
    {
        const del = cy.get('[class = icon-trash]')
        del.click()
    }
}export default AddToCart