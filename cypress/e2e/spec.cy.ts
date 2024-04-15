// describe('My First Test', () => {
//   it('Visits the initial project page', () => {
//     cy.visit('/')
//     cy.check.
//   })
// })
function loginUsingAPI(username: string, password: string) {
  // Send request to the DoltHub API login endpoint
  cy.request({
    url: "/",
    body: { username, password },
  }).then((res) => {
    expect(res.body.username).to.eq(username);
    cy.setCookie("dolthubToken", res.body.cookie_value);
  });

  cy.getCookie("dolthubToken").should("exist");
}