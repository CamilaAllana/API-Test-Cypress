describe('Restful API dev', () => {
  const projectURL = 'https://api.restful-api.dev/objects/'

  it('GET - List of all objects', () => {
   
    cy.request({
      method: 'GET',
      url: projectURL
    }).then((response =>  {
      expect(response.status).to.equal(200)
    }))
  })

  it('GET - List of objects by ID', () => {
   
    cy.request({
      method: 'GET',
      url: projectURL,
      qs: { id: 3, id: 5, id: 10}
    }).then((response =>  {
      expect(response.status).to.equal(200)
    }))


  })

  it('GET - Single object', () => {
   
    cy.request({
      method: 'GET',
      url: projectURL,
      qs: {id: 7}
    }).then((response =>  {
      expect(response.status).to.equal(200)
    }))


  })

  it('POST - Add object', () => {
   
    cy.request({
      method: 'POST',
      url: projectURL,
      body:
      {
        "name": "Apple MacBook Pro 16",
        "data": {
           "year": 2019,
           "price": 1849.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB"
        }
      }
    }).then((response => {
      expect(response.status).to.equal(200)
    }))


  })

  it('PUT - Update object', () => {
   
    cy.request({
      method: 'PUT',
      url: projectURL,
      qs: { id: 15},
      body:
      {
        "name": "Apple MacBook Pro 16",
        "data": {
           "year": 2019,
           "price": 2049.99,
           "CPU model": "Intel Core i9",
           "Hard disk size": "1 TB",
           "color": "silver"
        }
      }
    }).then((response => {
      expect(response.status).to.equal(200)
    }))


  })

  it('PATCH - Partially update object', () => {
   
    cy.request({
      method: 'PATCH',
      url: projectURL,
      qs: { id: 15},
      body:
      {
        "name": "Apple MacBook Pro 16 (Updated Name)"
     }
    }).then((response => {
      expect(response.status).to.equal(200)
    }))


  })

  it('DELETE - Delete object', () => {
   
    cy.request({
      method: 'DELETE',
      url: projectURL,
      qs: { id: 15},
    }).then((response => {
      expect(response.status).to.equal(200)
    }))


  })






})